document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initContactForm();
});

/**
 * Initializes and manages Theme Toggle (Light / Dark Mode)
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  // Retrieve theme preference from localStorage, default to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = 'light';
  if (savedTheme) {
    currentTheme = savedTheme;
  } else if (systemPrefersDark) {
    currentTheme = 'dark';
  }

  // Set initial attribute on <html>
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Toggle Theme on Click
  themeToggleBtn.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}

/**
 * Handles Mobile Menu responsive layouts and triggers
 */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('open');
    
    // Toggle icon stroke style or simple rotation
    if (navMenu.classList.contains('open')) {
      mobileToggle.style.transform = 'rotate(90deg)';
    } else {
      mobileToggle.style.transform = 'rotate(0deg)';
    }
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && e.target !== mobileToggle) {
      navMenu.classList.remove('open');
      mobileToggle.style.transform = 'rotate(0deg)';
    }
  });
}

/**
 * Handles Contact Form pre-fill logic and async Cloudflare Worker submission
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // 1. Pre-fill product selection dropdown from URL search parameters
  const urlParams = new URLSearchParams(window.location.search);
  const selectedProduct = urlParams.get('product');
  if (selectedProduct) {
    const productDropdown = document.getElementById('select-product');
    if (productDropdown) {
      // Find matching option
      for (let option of productDropdown.options) {
        if (option.value === selectedProduct) {
          productDropdown.value = selectedProduct;
          break;
        }
      }
    }
  }

  // 2. Manage Submit Operations
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const feedbackEl = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('btn-submit-form');
    
    if (!feedbackEl || !submitBtn) return;

    // Reset status element states
    feedbackEl.className = 'form-status';
    feedbackEl.textContent = '';
    feedbackEl.style.display = 'none';

    // Basic Client Validation Check
    const name = document.getElementById('input-name').value.trim();
    const email = document.getElementById('input-email').value.trim();
    const company = document.getElementById('input-company').value.trim();
    const phone = document.getElementById('input-phone').value.trim();
    const product = document.getElementById('select-product').value;
    const message = document.getElementById('input-message').value.trim();

    if (!name || !email || !company || !product || !message) {
      showFeedback('Please fill out all required fields marked with an asterisk (*).', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showFeedback('Please enter a valid corporate email address.', 'error');
      return;
    }

    // Set Loading State UI
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting Request...';
    
    const payload = {
      name,
      email,
      company,
      phone: phone || 'N/A',
      product,
      message,
      timestamp: new Date().toISOString()
    };

    try {
      // POST payload to Cloudflare Pages Function endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        showFeedback(responseData.message || 'Thank you! Your inquiry has been submitted. Our integration team will contact you shortly.', 'success');
        form.reset();
      } else {
        throw new Error(responseData.message || 'Server rejected the request.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      showFeedback('Unable to send request. Please check your network connection or contact us directly at integrations@logiprime.com.', 'error');
    } finally {
      // Clear Loading State UI
      submitBtn.disabled = false;
      submitBtn.textContent = 'Request Consultation';
    }
  });

  function showFeedback(text, statusClass) {
    const feedbackEl = document.getElementById('form-feedback');
    if (!feedbackEl) return;
    feedbackEl.textContent = text;
    feedbackEl.className = `form-status ${statusClass}`;
    feedbackEl.style.display = 'block';
    // Scroll feedback into view
    feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
}
