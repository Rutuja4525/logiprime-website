import React, { useState } from 'react';
import { 
  Shield, 
  ArrowRight, 
  Lock, 
  Settings, 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Building, 
  Check, 
  CheckCircle2, 
  Menu, 
  X,
  CreditCard,
  Briefcase,
  BarChart3,
  FileCode2,
  Users
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  BRAND_TAG, 
  CONTACT_INFO, 
  HOME_CONTENT, 
  PRODUCTS, 
  SERVICES, 
  ABOUT_CONTENT, 
  HOW_WE_WORK_CONTENT 
} from '../data/content';

export default function CorporateLayout({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', product: '', message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' });
  };

  const renderHome = () => {
    return (
      <>
        {/* Wealth Management / Emerald & Gold Hero */}
        <section className="bg-blue-950 text-white py-24 border-b-4 border-amber-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block border border-amber-500/40 text-amber-400 text-xs font-semibold px-4 py-1.5 rounded uppercase tracking-widest font-mono">
                {HOME_CONTENT.hero.tag}
              </span>
              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight">
                Automate Payments. <span className="text-amber-400 font-light italic">Eliminate AP Fraud.</span>
              </h1>
              <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed font-light font-sans max-w-2xl">
                {HOME_CONTENT.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#services-preview" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services-preview')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold px-8 py-4 rounded transition-all shadow-md text-center text-sm uppercase tracking-wider font-sans"
                >
                  View Consulting Scope
                </a>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="border-2 border-blue-700 hover:border-amber-400 text-white font-bold px-8 py-4 rounded transition-all text-center text-sm uppercase tracking-wider font-sans"
                >
                  Consultation Request
                </button>
              </div>
            </div>

            {/* Framed Portrait Mockup on Right */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="border border-amber-500/30 p-6 rounded bg-blue-900/50 shadow-2xl relative max-w-sm">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500"></div>
                <h4 className="font-serif text-amber-400 font-bold text-xl mb-4 border-b border-blue-800 pb-2">AVS Verification Certificate</h4>
                <p className="text-xs text-blue-100/70 leading-relaxed mb-4">
                  We implement automated validation directly connected to J.P. Morgan APIs, ensuring full liability coverage against Business Email Compromise (BEC).
                </p>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-xs border-b border-blue-800/40 pb-1">
                    <span className="text-blue-200">Owner Verification</span>
                    <span className="font-bold text-amber-400">100% Secure</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-blue-800/40 pb-1">
                    <span className="text-blue-200">Processing Route</span>
                    <span className="font-bold text-amber-400">Direct H2H</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-blue-200">Middleware Cost</span>
                    <span className="font-bold text-amber-400">Zero Fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: Professional Services (Shifted to first position to build corporate credibility) */}
        <section id="services-preview" className="py-24 bg-stone-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest font-mono">
                Professional Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-blue-950">Expert Yardi Consulting &amp; Custom Programming</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Comprehensive configuration, custom programming, external API integrations, and dedicated support for your property management workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((srv) => {
                const icons = {
                  'yardi-consulting': <Users className="w-5 h-5 text-blue-950" />,
                  'yardi-reporting': <BarChart3 className="w-5 h-5 text-blue-950" />,
                  'yardi-interfaces': <FileCode2 className="w-5 h-5 text-blue-950" />,
                  'yardi-support': <Briefcase className="w-5 h-5 text-blue-950" />
                };
                return (
                  <div key={srv.id} className="bg-white border-t-4 border-blue-800 p-6 rounded shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                        {icons[srv.id]}
                      </div>
                      <h3 className="text-base font-serif font-bold text-blue-950 mb-3">{srv.title}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed mb-6 font-sans">{srv.description}</p>
                    </div>
                    <button 
                      onClick={() => setCurrentPage('services')}
                      className="text-blue-800 hover:text-amber-600 font-semibold text-xs flex items-center gap-1 group/btn self-start transition-colors uppercase font-mono tracking-wider"
                    >
                      Scope Details 
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 2: Trust Banner (Stats) */}
        <section className="py-12 bg-blue-900 border-b border-blue-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-blue-950 border border-amber-500/20 p-8 rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HOME_CONTENT.stats.map((stat) => (
                <div key={stat.id} className="text-center md:text-left space-y-1 border-r border-blue-900/40 last:border-0">
                  <div className="text-3xl font-serif font-bold text-amber-400">{stat.value}</div>
                  <p className="text-[10px] font-mono text-blue-200 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Core Products (Alternated Row layout instead of grid) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-20">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest font-mono">
                System Integrations
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-blue-950">Enterprise Banking Payment Hubs</h2>
              <p className="text-slate-600 text-sm">
                Secure, direct conduits connecting your core Yardi database to J.P. Morgan APIs and payments engines.
              </p>
            </div>

            {PRODUCTS.map((prod, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={prod.id} 
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Text on one side */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:order-2'}`}>
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest font-mono bg-amber-50 px-2.5 py-1 rounded">
                      {prod.tag}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-blue-950">{prod.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-sans">{prod.description}</p>
                    
                    <ul className="space-y-3">
                      {prod.features.map((feat, fidx) => (
                        <li key={fidx} className="flex gap-2.5 items-start text-xs text-slate-700">
                          <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>
                            <strong className="text-blue-950">{feat.bold} </strong>
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setCurrentPage('contact')}
                      className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-wider font-mono border border-blue-950 inline-block"
                    >
                      Book Technical Demo
                    </button>
                  </div>

                  {/* Flow Diagram on other side */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="border border-slate-200 bg-stone-50 p-6 rounded-lg shadow-inner space-y-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono border-b pb-2">Execution Flow</h4>
                      <div className="flex flex-col gap-3">
                        {prod.diagram.map((step, sidx) => (
                          <div key={sidx} className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${
                              step.success 
                                ? 'bg-blue-800 text-white' 
                                : step.highlight 
                                ? 'bg-amber-500 text-blue-950' 
                                : 'bg-slate-200 text-slate-700'
                            }`}>
                              {step.step === '✓' ? <Check className="w-3 h-3" /> : step.step}
                            </div>
                            <span className="text-xs text-slate-700 font-medium">{step.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  };

  const renderServices = () => {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded inline-block font-mono">
              Enterprise Capabilities
            </span>
            <h1 className="text-4xl font-serif font-bold text-blue-950">Comprehensive Yardi Solutions</h1>
            <p className="text-slate-600 leading-relaxed text-sm">
              From flat-fee banking integrations to custom scripting, reporting, and hands-on system administration, we optimize your property management ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {[
              { id: '1', tag: 'Fraud Prevention', title: 'AVS Wire Validation', desc: 'Direct account ownership validation queried in real time via J.P. Morgan Chase\'s Account Validation Service (AVS) to prevent AP fraud.', points: ['Natively integrates inside Yardi vendor workflows', 'Automated validation under 15 minutes', 'Reduces compliance and treasury risk profiles'] },
              { id: '2', tag: 'Treasury Automation', title: 'Host-to-Host Payments', desc: 'Direct ISO 20022 payments (pain.001/pain.002 status files) connecting Yardi Core directly to J.P. Morgan Chase pay source.', points: ['No middleware, transaction, or portal fees', 'PGP-encrypted, direct SFTP connection', 'Automates ACH, domestic wires, and checks'] },
              { id: '3', tag: 'System Consulting', title: 'Yardi Consulting', desc: 'Full-scale consulting for module deployment, custom configurations, workflow optimization, and Yardi database health audits.', points: ['Voyager module setups (Job Cost, Asset Mgmt)', 'Chart of accounts and workflow restructuring', 'Platform health audits and process reviews'] },
              { id: '4', tag: 'Custom Development', title: 'Yardi Custom Reporting', desc: 'Custom financial, operational, and billing reports engineered using Yardi\'s native data structures and reporting protocols.', points: ['YSR (Yardi Spreadsheet Reporting) setups', 'SSRS (SQL Server Reporting Services) layout designs', 'High-performance stored procedures (SQL/SPs)'] },
              { id: '5', tag: 'System Interfaces', title: 'Building Custom Interfaces with external systems like Concur', desc: 'Integrations and interfaces linking Yardi Voyager with external corporate applications to remove manual data duplication.', points: ['Bi-directional SAP Concur Expense/Invoice sync', 'External CRM platforms and billing links', 'Custom secure REST APIs and file imports'] },
              { id: '6', tag: 'Managed Support', title: 'Regular Support Work', desc: 'Ongoing helpdesk assistance, troubleshooting configuration errors, user provisioning, database tune-ups, and minor setups.', points: ['Reliable technical support desk assistance', 'Routine database optimization and cleanups', 'User access management and role security settings'] }
            ].map((item) => (
              <div key={item.id} className="bg-white border-t-2 border-blue-800 p-8 rounded shadow-sm flex flex-col justify-between border border-slate-200">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 font-mono inline-block mb-4">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-serif font-bold text-blue-950 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">{item.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-slate-700 items-start">
                        <Check className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold py-2 rounded text-center transition-colors text-xs uppercase font-mono tracking-widest border border-blue-950"
                >
                  Initiate Setup
                </button>
              </div>
            ))}
          </div>

          {/* Stepper block */}
          <div className="bg-stone-100 border border-slate-200 rounded p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest font-mono">{HOW_WE_WORK_CONTENT.tag}</span>
              <h2 className="text-2xl font-serif font-bold text-blue-950 mt-2">{HOW_WE_WORK_CONTENT.title}</h2>
              <p className="text-xs text-slate-500 mt-2 font-sans">{HOW_WE_WORK_CONTENT.description}</p>
            </div>

            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
              {HOW_WE_WORK_CONTENT.steps.map((step) => (
                <div key={step.num} className="bg-white border border-slate-200 rounded p-6 flex flex-col sm:flex-row gap-4 items-start shadow-sm">
                  <div className="w-10 h-10 rounded bg-amber-500 text-blue-950 flex items-center justify-center font-bold text-sm shrink-0 font-mono">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-blue-950 text-base mb-1">{step.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAbout = () => {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded inline-block font-mono">
              {ABOUT_CONTENT.hero.tag}
            </span>
            <h1 className="text-4xl font-serif font-bold text-blue-950">{ABOUT_CONTENT.hero.title}</h1>
            <p className="text-slate-600 leading-relaxed text-sm">
              {ABOUT_CONTENT.hero.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-blue-950">{ABOUT_CONTENT.mission.title}</h2>
              {ABOUT_CONTENT.mission.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed text-xs sm:text-sm font-sans">
                  {p}
                </p>
              ))}
            </div>

            <div className="bg-stone-50 border border-slate-200 rounded p-8 shadow-sm">
              <h3 className="font-serif font-bold text-blue-950 text-lg mb-6">{ABOUT_CONTENT.standout.title}</h3>
              <ul className="space-y-6">
                {ABOUT_CONTENT.standout.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-blue-950 text-sm font-bold block mb-1 font-serif">{item.bold}</strong>
                      <span className="text-slate-600 text-xs leading-relaxed">{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pillars */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest font-mono">{ABOUT_CONTENT.pillars.tag}</span>
              <h2 className="text-2xl font-serif font-bold text-blue-950 mt-2">{ABOUT_CONTENT.pillars.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ABOUT_CONTENT.pillars.items.map((pillar, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded">
                  <h4 className="font-serif font-bold text-blue-950 mb-2 text-base">{pillar.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* timeline */}
          <div className="bg-stone-100 border border-slate-200 rounded p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest font-mono">{ABOUT_CONTENT.timeline.tag}</span>
              <h3 className="text-2xl font-serif font-bold text-blue-950 mt-2">{ABOUT_CONTENT.timeline.title}</h3>
              <p className="text-slate-600 text-xs mt-1">{ABOUT_CONTENT.timeline.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ABOUT_CONTENT.timeline.steps.map((step, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded shadow-sm">
                  <span className="text-[10px] font-bold text-amber-600 font-mono uppercase block mb-1">{step.week}</span>
                  <h4 className="font-serif font-bold text-blue-950 text-sm mb-2">{step.phase}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  };

  const renderContact = () => {
    return (
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded inline-block font-mono">
              Let's Connect
            </span>
            <h2 className="text-3xl font-serif font-bold text-blue-950">Connect With Our Integration Experts</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              {CONTACT_INFO.tagline}
            </p>

            <div className="space-y-6 pt-6 border-t border-slate-100 font-sans">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-blue-800" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Contact Person</h4>
                  <p className="text-sm font-semibold text-blue-950 font-serif">{CONTACT_INFO.person}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-800" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Direct Line</h4>
                  <p className="text-sm font-semibold text-blue-950">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-800" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Email Inquiries</h4>
                  <p className="text-sm font-semibold text-blue-950">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-800" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Headquarters</h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-stone-50 border border-slate-200 rounded p-8">
            {formSubmitted ? (
              <div className="bg-blue-50 text-blue-800 p-6 rounded border border-blue-200 text-center">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold mb-1 font-serif">Request Submitted Successfully</h4>
                <p className="text-xs">Thank you, Avinash Shivani or another LogiPrime representative will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block font-mono uppercase">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Jane Doe" 
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-800" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block font-mono uppercase">Corporate Email *</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jane@company.com" 
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-800" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block font-mono uppercase">Company Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Enterprise Realty" 
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-800" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block font-mono uppercase">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(555) 000-0000" 
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-800" 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block font-mono uppercase">Product / Service Interest *</label>
                  <select 
                    required 
                    value={formData.product}
                    onChange={(e) => setFormData({...formData, product: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-800"
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="wire-validation">Automated Vendor Wire Validation (J.P. Morgan AVS)</option>
                    <option value="h2h-payments">Yardi to J.P. Morgan Host-to-Host Payments</option>
                    <option value="yardi-consulting">Yardi Consulting &amp; Custom Reporting</option>
                    <option value="yardi-interfaces">Custom Interfaces (e.g., Concur integration)</option>
                    <option value="yardi-support">Regular Yardi Support &amp; Maintenance</option>
                    <option value="both">Multiple Solutions</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block font-mono uppercase">Message / Consultation Details *</label>
                  <textarea 
                    required 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Please outline your current Yardi configuration and banking requirements..." 
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-800"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-3.5 rounded text-center transition-colors text-xs uppercase font-mono tracking-widest shadow"
                >
                  Submit Brief
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="bg-blue-950 text-white border-b border-blue-900 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="h-10 w-10 object-contain group-hover:scale-105 transition-transform" 
            />
            <span className="font-medium text-lg tracking-wide text-amber-400">{COMPANY_NAME}</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-blue-200">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`hover:text-amber-400 transition-colors py-1 ${currentPage === 'home' ? 'text-amber-400 border-b border-amber-400' : ''}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setCurrentPage('services')}
              className={`hover:text-amber-400 transition-colors py-1 ${currentPage === 'services' ? 'text-amber-400 border-b border-amber-400' : ''}`}
            >
              Capabilities
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`hover:text-amber-400 transition-colors py-1 ${currentPage === 'about' ? 'text-amber-400 border-b border-amber-400' : ''}`}
            >
              Pillars
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`hover:text-amber-400 transition-colors py-1 ${currentPage === 'contact' ? 'text-amber-400 border-b border-amber-400' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-amber-500 hover:bg-amber-600 text-blue-950 text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded transition-all shadow"
            >
              Initiate Discovery
            </button>
          </div>

          {/* Mobile toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-amber-400 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-950 border-b border-blue-900 px-6 py-6 flex flex-col gap-4 font-mono text-xs uppercase tracking-wider text-blue-200">
            <button 
              onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
              className={`text-left py-2 ${currentPage === 'home' ? 'text-amber-400' : ''}`}
            >
              Overview
            </button>
            <button 
              onClick={() => { setCurrentPage('services'); setMobileMenuOpen(false); }}
              className={`text-left py-2 ${currentPage === 'services' ? 'text-amber-400' : ''}`}
            >
              Capabilities
            </button>
            <button 
              onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}
              className={`text-left py-2 ${currentPage === 'about' ? 'text-amber-400' : ''}`}
            >
              Pillars
            </button>
            <button 
              onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
              className={`text-left py-2 ${currentPage === 'contact' ? 'text-amber-400' : ''}`}
            >
              Contact
            </button>
            <button 
              onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
              className="bg-amber-500 hover:bg-amber-600 text-blue-950 py-3 rounded text-center block w-full mt-2 font-bold font-sans"
            >
              Initiate Discovery
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {currentPage === 'services' && renderServices()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'contact' && renderContact()}
        {currentPage === 'home' && renderHome()}

        {/* Emerald Gold CTA Banner */}
        {currentPage !== 'contact' && (
          <section className="bg-blue-950 text-white py-20 border-t-4 border-amber-500">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">Ready to Secure &amp; Automate Your Payments?</h2>
              <p className="text-blue-100/70 text-sm max-w-2xl mx-auto font-sans leading-relaxed">
                Talk to our integration experts. Schedule a live product demo in our Yardi sandbox environment to see our automated validation in action.
              </p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold px-8 py-4 rounded transition-colors text-xs uppercase tracking-widest font-mono shadow-md inline-block"
              >
                Schedule Consultation
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200/60 py-16 border-t border-blue-900 font-sans text-xs">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-6 space-y-4">
            <span className="font-serif font-bold text-white text-lg tracking-wide block">{COMPANY_NAME}</span>
            <p className="leading-relaxed max-w-xs text-blue-100/70">
              Enterprise payment automation and fraud prevention solutions for Yardi and J.P. Morgan customers.
            </p>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-amber-400 font-mono uppercase tracking-wider text-[10px]">Solutions &amp; Services</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Wire Validation</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Host-to-Host Payments</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition-colors">Yardi Consulting &amp; Support</button></li>
            </ul>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-amber-400 font-mono uppercase tracking-wider text-[10px]">Company</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px]">
          <p>&copy; 2026 LogiPrime Solutions. All rights reserved. Confidential.</p>
          <span className="font-bold text-amber-500 uppercase tracking-widest">Yardi Consultancy</span>
        </div>
      </footer>
    </div>
  );
}
