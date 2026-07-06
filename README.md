# Logiprime Website & Treasury Integrations

A high-performance, modern, and secure static website for Logiprime. This site showcases the company's enterprise integrations:
1. **Automated Vendor Wire Validation via JPMorgan AVS**
2. **Yardi to J.P. Morgan Host-to-Host Payments**

The site is built with semantic HTML5, responsive Vanilla CSS, clean JavaScript, and is designed to run natively on **Cloudflare Pages**, featuring serverless **Pages Functions** for contact form submissions.

---

## Features

- **High-Aesthetic UI**: Smooth gradients, modern card designs, responsive grids, custom typography (`Outfit` and `Inter`), and interactive hover micro-animations.
- **Dark/Light Mode**: Automatic theme settings based on system preferences, with manual overrides that persist in `localStorage`.
- **Responsive Mobile Layout**: Fully optimized navigation menu and layouts for mobile, tablet, and desktop viewports.
- **Workflow Interactivity**: Auto-populates contact interest based on CTA selections.
- **Cloudflare Pages Backend**: Built-in backend `/api/contact` handler (using serverless Pages Functions).
- **Compliance Aware**: Content structured around SOC 2 audit procedures and AP risk control.

---

## File Structure

```text
d:/logiprime-website/
├── index.html                  # Landing page showcasing the two core integrations
├── about.html                  # Profile of Logiprime's mission, values, and timeline
├── contact.html                # Booking form with fields for product interest and message
├── wrangler.toml               # Wrangler dev & deployment config for Cloudflare Pages
├── css/
│   └── styles.css              # central stylesheet & HSL variables for dark/light themes
├── js/
│   └── main.js                 # Frontend interactivity, mobile layout toggle, AJAX submit
└── functions/
    └── api/
        └── contact.js          # Cloudflare Pages serverless function handling /api/contact POSTs
```

---

## Local Development

You can run the entire static application (including the serverless backend function) locally using Cloudflare's **Wrangler CLI**.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### 2. Run the Development Server
Execute the following command in the workspace directory to start a local server at `http://localhost:8788`:

```bash
npx wrangler pages dev .
```

*Note: The Wrangler tool will automatically mount the static files from the root and serve `/functions` as local serverless endpoints.*

### 3. Test form submission
1. Open the website at `http://localhost:8788`.
2. Go to the **Contact Us** page.
3. Fill out the fields and click **Request Consultation**.
4. Check the dev terminal. You will see server-side console logs printing your contact request payload.

---

## Cloudflare Deployment

### Option A: Direct Deployment via Wrangler CLI

If you want to push files directly from your workspace CLI to Cloudflare:

1. Log in to your Cloudflare account from the command line:
   ```bash
   npx wrangler login
   ```
2. Deploy the project directory:
   ```bash
   npx wrangler pages deploy .
   ```
3. Follow the CLI prompt to select/create your project name (e.g. `logiprime-website`).

### Option B: Automatic Deployment via Git (Recommended)

1. Push this folder to a GitHub, GitLab, or Bitbucket repository.
2. Log in to your **Cloudflare Dashboard** -> **Workers & Pages** -> **Create an Application** -> **Pages** tab.
3. Connect your Git account and select the repository.
4. Set the build configurations:
   - **Framework Preset**: None (or HTML)
   - **Build Command**: Leave blank (no build step is needed as the project consists of pure static files)
   - **Build Output Directory**: `.` (root directory)
5. Save and deploy. Cloudflare will build the site and deploy the serverless function under `/functions` automatically on every commit.

---

## (Optional) Storing Contact Inquiries in Cloudflare KV

To write contact form logs into a secure KV (Key-Value) store in Cloudflare:

1. Create a KV namespace on Cloudflare:
   ```bash
   npx wrangler kv:namespace create CONTACTS
   ```
2. Copy the resulting KV Namespace ID (e.g. `4b09c6...`).
3. Open `wrangler.toml` and bind it:
   ```toml
   [[kv_namespaces]]
   binding = "CONTACTS"
   id = "your_kv_namespace_id"
   ```
4. In the Cloudflare Pages web console, navigate to **Settings** -> **Functions** -> **KV Namespace Bindings** and add a binding named `CONTACTS` pointing to your KV store.
"# logiprime-website" 
