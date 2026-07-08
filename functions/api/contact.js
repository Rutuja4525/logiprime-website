/**
 * POST handler for /api/contact endpoint in Cloudflare Pages.
 * Receives the contact form JSON payload, validates it, and returns a response.
 */
export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    
    // Parse and read the incoming JSON payload
    const data = await request.json();
    
    const { name, email, company, phone, product, message, timestamp } = data;

    // Validate presence of required inputs
    if (!name || !email || !company || !product || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: "Validation failed. Name, email, company, product interest, and message are required." 
        }),
        { 
          status: 400, 
          headers: { "Content-Type": "application/json" } 
        }
      );
    }

    // Basic email validation check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.toLowerCase())) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: "Validation failed. Please provide a valid corporate email address." 
        }),
        { 
          status: 400, 
          headers: { "Content-Type": "application/json" } 
        }
      );
    }

    // Server-side Log
    console.log(`[Contact Form Submission] [${timestamp}]`);
    console.log(`Name: ${name} (${email})`);
    console.log(`Company: ${company} | Phone: ${phone}`);
    console.log(`Product Interest: ${product}`);
    console.log(`Message: ${message}`);

    // OPTIONAL: Persist to Cloudflare KV Store if bound (e.g. named env.CONTACTS)
    if (env && env.CONTACTS) {
      const entryKey = `contact_${timestamp}_${email}`;
      await env.CONTACTS.put(entryKey, JSON.stringify(data));
      console.log(`Stored submission in KV with key: ${entryKey}`);
    }

    // Return success response to the client
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for reaching out! A LogiPrime integration architect will contact you within 24 hours to review your requirements and schedule a live demo."
      }),
      { 
        status: 200, 
        headers: { "Content-Type": "application/json" } 
      }
    );

  } catch (err) {
    console.error("Backend error processing contact request:", err);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "An internal server error occurred while processing your request. Please try again later." 
      }),
      { 
        status: 500, 
        headers: { "Content-Type": "application/json" } 
      }
    );
  }
}
