// Centered content data file for LogiPrime Solutions to ensure identical content across all 3 UI variations.

export const COMPANY_NAME = "LogiPrime Solutions";
export const BRAND_TAG = "Yardi + J.P. Morgan Integration Specialists";

export const CONTACT_INFO = {
  person: "Avinash Shivani",
  role: "Integration Expert",
  phone: "+971 502079768",
  email: "avinash@logiprime.net",
  address: "63351-001, IFZA property FZCO, Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates",
  tagline: "Ready to secure your Yardi AP workflow or eliminate treasury middleware fees? Let's discuss your requirements. We can schedule a live demonstration in our sandbox environment."
};

export const HOME_CONTENT = {
  hero: {
    tag: BRAND_TAG,
    title: "Automate Payments. Eliminate AP Fraud.",
    description: "Secure, native integrations connecting Yardi Voyager directly to J.P. Morgan Chase. Automate wire validation and streamline host-to-host payments without middleware or transaction fees.",
    cards: [
      {
        id: "avs",
        title: "JPMorgan AVS Validation",
        description: "Real-time account ownership checks embedded within the Yardi vendor onboarding workflow.",
        status: "Secure",
        time: "< 15 min",
        color: "primary"
      },
      {
        id: "h2h",
        title: "Host-to-Host Payments",
        description: "Direct ISO 20022 payments (pain.001/pain.002) run directly from Yardi Core.",
        status: "Direct XML H2H",
        time: "No Middleware",
        color: "secondary"
      },
      {
        id: "audit",
        title: "Audit & Security",
        description: "Monitors all transaction modifications and restricts AP risk exposure.",
        status: "Audit Ready",
        time: "100% Automated",
        color: "success"
      }
    ]
  },
  stats: [
    {
      id: "stat-fraud",
      value: "100%",
      label: "Wire Fraud Attempts Blocked"
    },
    {
      id: "stat-calls",
      value: "Zero",
      label: "Manual Verification Calls Required"
    },
    {
      id: "stat-time",
      value: "<15 min",
      label: "Average Validation Turnaround"
    },
    {
      id: "stat-savings",
      value: "$50k+",
      label: "Saved Annually in Middleware Fees"
    }
  ]
};

export const PRODUCTS = [
  {
    id: "wire-validation",
    tag: "Fraud Prevention",
    title: "Automated Vendor Wire Validation via JPMorgan AVS",
    description: "Protect your treasury from Business Email Compromise (BEC) and vendor spoofing. Check account and routing authenticity inside the native vendor onboarding workflow before payments are released.",
    features: [
      {
        bold: "JPMorgan AVS Integration:",
        text: "Directly queries JPMorgan Chase's Account Validation Service database."
      },
      {
        bold: "Workflow-Native:",
        text: "Runs inline during Yardi onboarding, automatically routing data for approval or re-entry."
      },
      {
        bold: "Compliance & Insurance:",
        text: "Supports security compliance and reduces E&O and cyber liability risk."
      }
    ],
    diagram: [
      { step: "1", name: "Vendor Data Entry" },
      { step: "2", name: "J.P. Morgan AVS Query", highlight: true },
      { step: "3", name: "Automated Approval", success: true }
    ],
    ctaLink: "wire-validation"
  },
  {
    id: "h2h-payments",
    tag: "Payments Automation",
    title: "Yardi to J.P. Morgan Host-to-Host Payments",
    description: "Automate outbound ACH, domestic/international wires, and check disbursements directly from your Yardi environment without intermediate servers or transaction fees.",
    features: [
      {
        bold: "ISO 20022 Standardized:",
        text: "Automatically generates pain.001 files and ingests pain.002 status files."
      },
      {
        bold: "No Middleware:",
        text: "Connects the Yardi file server directly to J.P. Morgan Pay Source over PGP-encrypted SFTP."
      },
      {
        bold: "Cost Savings:",
        text: "Replaces Treasury Management System (TMS) subscriptions, saving $50k+ annually."
      }
    ],
    diagram: [
      { step: "1", name: "Yardi Voyager" },
      { step: "2", name: "Secure File Transfer (SFTP)", highlight: true },
      { step: "3", name: "J.P. Morgan", highlight2: true }
    ],
    ctaLink: "h2h-payments"
  }
];

export const SERVICES = [
  {
    id: "yardi-consulting",
    tag: "System Consulting",
    title: "Yardi Consulting",
    description: "Strategic advice, system configuration, module setup, and deployment (Voyager, Job Cost, Fixed Assets, and more). We align your platform configurations with best practice workflows.",
    features: [
      "Voyager module setups (Job Cost, Asset Mgmt)",
      "Chart of accounts and workflow restructuring",
      "Platform health audits and process reviews"
    ]
  },
  {
    id: "yardi-reporting",
    tag: "Custom Development",
    title: "Yardi Custom Reporting",
    description: "Tailor-made financial and operational reporting. We build advanced custom reports using Yardi Spreadsheet Reporting (YSR), SQL Server Reporting Services (SSRS), and high-performance stored procedures.",
    features: [
      "YSR (Yardi Spreadsheet Reporting) setups",
      "SSRS (SQL Server Reporting Services) layout designs",
      "High-performance stored procedures (SQL/SPs)"
    ]
  },
  {
    id: "yardi-interfaces",
    tag: "System Interfaces",
    title: "Building Custom Interfaces with external systems like Concur",
    description: "Seamless integration between Yardi Voyager and third-party systems like SAP Concur. We eliminate duplicate entries by automating corporate expense reconciliations, CRM syncing, and utility billing.",
    features: [
      "Bi-directional SAP Concur Expense/Invoice sync",
      "External CRM platforms and billing links",
      "Custom secure REST APIs and file imports"
    ]
  },
  {
    id: "yardi-support",
    tag: "Managed Support",
    title: "Regular Yardi Support Work",
    description: "Continuous helpdesk support, environment administration, user access management, troubleshooting validation issues, database health reviews, and custom settings adjustment.",
    features: [
      "Reliable technical support desk assistance",
      "Routine database optimization and cleanups",
      "User access management and role security settings"
    ]
  }
];

export const ABOUT_CONTENT = {
  hero: {
    tag: "Who We Are",
    title: "Bridging Yardi and Enterprise Banking",
    description: "LogiPrime Solutions is a dedicated integration partner helping real estate firms automate treasury operations, reduce payment overheads, and completely eliminate vendor wire fraud."
  },
  mission: {
    title: "Our Core Mission",
    paragraphs: [
      "For real estate finance and accounts payable (AP) teams, managing enterprise property management workflows and processing payments securely has become increasingly complex. Cyber threats like Business Email Compromise (BEC) target vendor onboarding, while organizations struggle to configure Yardi Voyager, build custom interfaces like Concur, or generate critical financial reports without relying on expensive, slow-moving external vendors.",
      "LogiPrime Solutions was founded to challenge this. We believe enterprise solutions should be direct, highly secure, and tailored to your specific operations. In addition to building direct payment pipelines from Yardi Voyager to J.P. Morgan Chase's API and SFTP gateways, we provide complete, full-lifecycle Yardi consulting. From setting up custom modules and interfaces to designing advanced reporting structures and offering regular daily support, we keep your systems running at peak performance."
    ]
  },
  standout: {
    title: "Why LogiPrime Solutions Stands Out",
    items: [
      {
        bold: "No Subscription Fees",
        text: "We operate on a flat, one-time implementation model, keeping your budget predictable."
      },
      {
        bold: "Infrastructure-Light",
        text: "Runs natively inside Yardi using standard Python tasks. Nothing new to procure or host."
      },
      {
        bold: "Direct Banking Relations",
        text: "Directly harness J.P. Morgan's native infrastructure (AVS, Chase Pay Source, and ISO 20022 XML pain message formats)."
      }
    ]
  },
  pillars: {
    tag: "Value System",
    title: "Our Core Pillars",
    items: [
      {
        title: "Uncompromising Security",
        description: "Our solutions utilize PGP encryption and direct secure file transfer (SFTP) pathways, supporting security compliance and minimizing insurance risk profiles."
      },
      {
        title: "Transparent Pricing",
        description: "Flat implementation fees with unlimited bank support at no additional charge. Optional Chase Positive Pay automation additions on demand."
      },
      {
        title: "Deep Domain Expertise",
        description: "Our consultants specialize in Yardi Voyager custom configurations, custom stored procedures (SPs), PowerShell automation, custom reporting (YSR/SSRS), Concur integrations, and ongoing helpdesk support."
      }
    ]
  },
  timeline: {
    tag: "Engagement Lifecycle",
    title: "Standard 4-Week Integration Path",
    description: "Our deployment process is rapid, reliable, and causes zero disruption to your daily operations.",
    steps: [
      {
        week: "Week 1",
        phase: "Phase 1: Pre-CAT",
        description: "We gather environment details, configure J.P. Morgan onboarding documents, verify client EFT data hygiene, and configure alert parameters."
      },
      {
        week: "Weeks 2–3",
        phase: "Phase 2: CAT (Customer Acceptance Testing)",
        description: "We deliver Yardi configuration packages, custom reports, and PowerShell connectors, and conduct intensive end-to-end file testing with J.P. Morgan."
      },
      {
        week: "Week 4",
        phase: "Phase 3: Production Go-Live",
        description: "We finalize the transition to production, sign off on the implementation, and move the solution to support status, running smoothly."
      }
    ]
  }
};

export const HOW_WE_WORK_CONTENT = {
  tag: "How We Work",
  title: "Straightforward Implementation",
  description: "We build custom interfaces and integrations with transparent pricing and direct collaboration. No long-term support lock-ins, no markup fees—just reliable expert engineering.",
  steps: [
    {
      num: 1,
      title: "Discovery & Scope Definition",
      description: "We evaluate your current Yardi Voyager setup, custom database schemas, and banking or external software endpoints to draw up a clear statement of work."
    },
    {
      num: 2,
      title: "Flat-Fee Custom Development",
      description: "Our architects write clean stored procedures, configure Voyager interfaces, build API connections, and run files through rigorous quality checks."
    },
    {
      num: 3,
      title: "Client Review & Launch",
      description: "We conduct detailed end-to-end sandbox tests, move configurations to production environments, and transition control directly to your finance/operations teams."
    }
  ]
};
