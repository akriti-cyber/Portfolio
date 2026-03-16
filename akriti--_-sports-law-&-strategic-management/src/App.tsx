/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  Activity, 
  TrendingUp, 
  Mic2, 
  Award, 
  Mail, 
  Linkedin, 
  ChevronRight, 
  ChevronDown,
  Menu, 
  X, 
  ExternalLink,
  ArrowUpRight,
  Globe,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Practice Areas', href: '#services' },
    { name: 'The Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif tracking-tighter"
        >
          AKRITI <span className="italic opacity-50 font-light">SINGH</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
          >
            Consultation
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif italic"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for Strategic Consultancy
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
            Akriti <br />
            <span className="italic font-light opacity-80">Singh</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-serif italic text-stone-400 max-w-xl mb-12 leading-relaxed">
            "From Representing India on the Court to Regulating the Future of Global Sports."
          </p>

          <div className="flex flex-wrap gap-6">
            <a href="#contact" className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium transition-transform hover:scale-105">
              Start Consultation
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="#journey" className="flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors">
              View Journey
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 border border-white/10 translate-x-6 translate-y-6 -z-10" />
          <img 
            src="/Profile.jpeg" 
            alt="Akriti Singh Professional" 
            className="w-full h-full object-cover transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 -left-6 glass p-6 max-w-[200px]">
            <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Expertise</p>
            <p className="text-sm font-serif italic">I.P. & Sports Law, Business & Operations</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LogoTicker = () => {
  const logos = [
    { name: "PCI", url: "/PCI.png" },
    { name: "WAKO India", url: "/Wako.jpeg" },
    { name: "NADA", url: "/NADA.png" },
    { name: "UCC India", url: "/UCC.png" }, 
    { name: "Kickboxing Super League", url: "/KSL.png" }, 
    { name: "Pride Hotels", url: "/Pride Hotel.png" },
    { name: "TMA", url: "/TMA.jpeg" },
  ];

  return (
    <section className="py-24 border-y border-white/5 overflow-hidden bg-black/50">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-5xl md:text-7xl font-serif leading-tight text-center">
          Past <span className="italic opacity-60">Associations</span>
        </h2>
        <p className="text-[10px] uppercase tracking-[0.4em] text-center text-stone-500 mt-6">
          Delivering Excellence for Global Organizations
        </p>
      </div>
      
      <div className="flex gap-20 items-center whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center"
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group flex-shrink-0">
              <div className="w-48 h-48 flex items-center justify-center">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[8px] uppercase tracking-widest text-white opacity-100">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const pillars = [
    {
      title: "Legal Advisory & Sports Integrity",
      icon: <Scale className="text-stone-400" />,
      items: [
        "Athlete-Centric Agreements, NDA, Service and Supply Agreements.",
        "Regulatory Compliance - Labour Code/ NADA/ WADA/ SEBI",
        "Banking Law, SARFAESI Compliance, Debt Recovery Strategy",
        "Intellectual Property: WIPO 2024 Treaty Focus",
        "League/Federation Bylaws & Framework Drafting"
      ]
    },
    {
      title: "Sports Operations & Event Management",
      icon: <Activity className="text-stone-400" />,
      items: [
        "High-Stakes Logistics & Venue Operations",
        "Broadcasting & Accreditation Management",
        "Anti-Doping Workflow Coordination",
        "Growth Strategy & Marketing Drives"
      ]
    },
    {
      title: "Business Strategy & Financial Modelling",
      icon: <TrendingUp className="text-stone-400" />,
      items: [
        "Data-Driven Financial Architecting",
        "ROI Analysis for Infrastructure & Talent",
        "Feasibility Studies for Emerging Franchises",
        "Stakeholder-Centric Analytical Presentations"
      ]
    },
    {
      title: "Voice Over & Master of Ceremonies",
      icon: <Mic2 className="text-stone-400" />,
      items: [
        "Professional Anchoring for International Meets",
        "Sports Law Conference Moderation",
        "Brand Voice & Event Narratives",
        "High-Impact Public Speaking"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4">Expertise</p>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Areas of <span className="italic opacity-60">Practice</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className="p-12 transition-colors"
            >
              <div className="mb-8">{pillar.icon}</div>
              <h3 className="text-2xl font-serif mb-8">{pillar.title}</h3>
              <ul className="space-y-4">
                {pillar.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-stone-500 group">
                    <ChevronRight size={14} className="mt-1 text-stone-700 group-hover:text-white transition-colors" />
                    <span className="group-hover:text-stone-300 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Journey = () => {
  return (
    <section id="journey" className="py-32 bg-stone-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[3/4] bg-stone-900 overflow-hidden">
              <img 
                src="/Journey.jpeg" 
                alt="Athlete Journey" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 aspect-square bg-white p-8 text-black hidden md:block">
              <Award size={32} className="mb-4" />
              <p className="text-sm font-serif italic leading-relaxed">
                "The journey of an athlete is not just about winning medals, but about the values and principles that guide them through every challenge."
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4">The Narrative</p>
            <h2 className="text-5xl md:text-7xl font-serif mb-12">The <span className="italic opacity-60">Evolution</span></h2>
            
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="text-stone-700 font-serif italic text-4xl">01</div>
                <div>
                  <h4 className="text-xl font-serif mb-2">The Athlete</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Former International Tennis and Soft Tennis Player. Multiple Times All India Universities Games participant and position holder. Collegiate Champion of GGSIPU.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="text-stone-700 font-serif italic text-4xl">02</div>
                <div>
                  <h4 className="text-xl font-serif mb-2">The Analyst</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Transitioned into sports law and strategic management, focusing on the regulatory frameworks that govern global competition.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="text-stone-700 font-serif italic text-4xl">03</div>
                <div>
                  <h4 className="text-xl font-serif mb-2">The Specialist</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Now advising international federations and brands on integrity, operations, and financial modelling in the sports ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "UNESCO Chair on Legal Dimensions of Clean Sports - National Law University, Delhi",
      category: "Legal & IP",
      desc: "Authored the formal Recommendation on National Tribunal Rules 2025 for submission to the Ministry of Youth Affairs and Sports. Applied principles of statutory interpretation to refine the language of the rules, mitigating potential legal loopholes in tribunal jurisdiction. Focused on Conditions of Services.",
      image: "/UNESCO.png",
      icon: <Globe size={18} />,
      meta: "• Legal Research • Legislative Drafting • National Sports Governance Act "
    },
    {
      title: "World Para-Athletics 2025",
      category: "Operations & MC",
      desc: "During the World Para Athletics, 27th September to 5th October 2025 at JLN Stadium, New Delhi, developed streamlined workflows for sample collection and chain-of-custody that minimised athlete downtime while maximising procedural accuracy.\n\nRisk Mitigation: Conducted proactive gap analysis of existing anti-doping infrastructures to preemptively address logistical bottlenecks in a para-sport context.\n\nStakeholder Management: Acted as the primary liaison between NADA, international technical officials, and elite athletic support personnel to maintain a transparent, clean-sport ecosystem.",
      image: "/World Para-Athletics.jpeg",
      colorImage: true,
      icon: <Briefcase size={18} />,
      meta: "Anti-Doping Service Compliance & Coordination • Operational Resilience"
    },
    {
      title: "Decathlon India - “SMART - Sales Management & Retail Transformation” Project",
      category: "Integrity",
      desc: "I challenged the industry-standard Economic Order Quantity (EOQ) model, proving its inadequacy in handling the rapid product lifecycles of seasonal sports apparel.Exogenous Data Ingestion: The analysis integrated non-traditional variables—such as localized weather patterns, gender peercentage and footfall, major league tournament schedules, and athlete-driven social media sentiment—to identify latent demand drivers.",
      image: "/Decathlon.png",
      colorImage: true,
      icon: <ShieldCheck size={18} />,
      meta: "ABC Analysis  • Economic Order Quantity • SKU Rationalization "
    }
  ];

  const liveProjects = [
    {
      title: "Kickboxing Super League (KSL)",
      category: "Live Project",
      desc: "Member of Governing Council. Role to oversee operations and compliance of the league including Franchises and Sponsors Strategy.",
      image: "/KSL.png"
    },
    {
      title: "Ministry of Food Processing Industries (MOFPI)",
      category: "Live Project",
      desc: "Member of Special Task Force of Ministry.Empirical Research on delegation to Self Help Groups/Anganwadi Workers of Community Enterprises to distribure processed food.",
      image: "/MOFPI.png"
    }
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4">Portfolio</p>
          <h2 className="text-5xl md:text-7xl font-serif">Featured <span className="italic opacity-60">Projects</span></h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch border-b border-white/5 pb-16 last:border-b-0 last:pb-0">
                <div className={`relative overflow-hidden bg-stone-100 min-h-[220px] md:min-h-[280px] lg:min-h-0 lg:h-[360px] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={project.image ?? `https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200&sig=${i}`}
                    alt={project.title} 
                    className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ${project.colorImage ? '' : ''}`}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className={`space-y-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 text-stone-500">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                      {project.icon}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.35em]">Project {String(i + 1).padStart(2, '0')}</span>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-serif mb-4">{project.title}</h3>
                    <p className="text-sm uppercase tracking-[0.25em] text-stone-600 mb-6">{project.meta}</p>
                    <p className="text-stone-400 text-base leading-relaxed max-w-xl whitespace-pre-line">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-28">
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4">Ongoing Work</p>
            <h3 className="text-4xl md:text-5xl font-serif">Live <span className="italic opacity-60">Projects</span></h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {liveProjects.map((project, i) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8 }}
                className="group border border-white/10 bg-white/[0.02] overflow-hidden"
              >
                <div className="relative h-56 bg-stone-900 overflow-hidden">
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-8">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500 mb-3">
                    {project.category} • {String(i + 1).padStart(2, '0')}
                  </p>
                  <h4 className="text-2xl font-serif mb-4">{project.title}</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    organization: '',
    inquiry_type: 'Legal Advisory',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      await emailjs.sendForm(
        'service_6b7e0dh',    
        'template_3rk55s5',   
        formRef.current,
        { publicKey: 'hPl-fqbWba0AXuw9M' } 
      );
      setStatus('success');
      setFormData({ from_name: '', from_email: '', organization: '', inquiry_type: 'Legal Advisory', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-4">Inquiry</p>
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Let’s Build the <span className="italic opacity-60">Future</span> of Sport</h2>
            <p className="text-stone-600 text-lg mb-12 max-w-md">
              Seeking strategic advisory for your federation, brand, or startup? Let's discuss how we can elevate your operations.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:akritisinghkakan@gmail.com" className="flex items-center gap-4 text-xl font-serif italic hover:translate-x-2 transition-transform">
                <Mail size={24} className="text-stone-300" />
                akritisinghkakan@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/akriti-singh-927b781a9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl font-serif italic hover:translate-x-2 transition-transform">
                <Linkedin size={24} className="text-stone-300" />
                Akriti_Singh
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400">Full Name *</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full border-b border-stone-200 py-4 focus:outline-none focus:border-black transition-colors bg-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-400">Email Address *</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full border-b border-stone-200 py-4 focus:outline-none focus:border-black transition-colors bg-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400">Organization</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full border-b border-stone-200 py-4 focus:outline-none focus:border-black transition-colors bg-transparent"
                placeholder="Global Sports Fed"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400">Nature of Inquiry</label>
              <select
                name="inquiry_type"
                value={formData.inquiry_type}
                onChange={handleChange}
                className="w-full border-b border-stone-200 py-4 focus:outline-none focus:border-black transition-colors bg-transparent"
              >
                <option>Legal Advisory</option>
                <option>Event Operations</option>
                <option>Financial Modelling</option>
                <option>Full Strategic Consultation</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400">Message *</label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b border-stone-200 py-4 focus:outline-none focus:border-black transition-colors resize-none bg-transparent"
                placeholder="Tell me about your project..."
              />
            </div>
            {status === 'success' && (
              <p className="text-green-600 text-sm font-medium">Your inquiry has been sent successfully! Akriti will get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again or email directly at akritisinghkakan@gmail.com</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-6 bg-black text-white rounded-full font-medium hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Insights = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const articles = [
       {
      title: "Beyond Compliance: Post Inquiry Retaliation under the PoSH Act",
      date: "2025",
      category: "Law",
      detail: "In Redefining Gender Realities in Institutions and Society, Writersgram Law House."
    },

    {
      title: "Bridging gaps in assistive technology for Paralympic sports",
      date: "2024",
      category: "Legal Research",
      detail: "In S. Garg (Ed.), Disability Inclusion Resource Kit (pp. 148–156). Bloomsbury Prime.",
      link: "https://drive.google.com/file/d/1IiIiTfjMfHLnf32eebXRO_FE29CLtO8-/view?usp=sharing"
    },

    {
      title: "From Arthashastra to the Boardroom: A study of Timeless Management Practices",
      date: "2023",
      category: "Management",
      detail: "In Saini A.K., Ancient Indian Wisdom for Business Transformation (pp. 44–60). Eureka Publication.",
      link: "https://drive.google.com/file/d/164kQ5NME6_uMkkaCvD1TewTfClxO7HIm/view?usp=sharing"
    }
 
  ];

  return (
    <section className="py-32 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500 mb-4">Thought Leadership</p>
            <h2 className="text-5xl md:text-7xl font-serif">Resources & <span className="italic opacity-60">Insights</span></h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-stone-400 hover:text-white transition-colors">
            View All <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="space-y-px bg-white/5 border border-white/5">
          {articles.map((article, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="p-8 md:p-12 transition-colors group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">{article.category} &bull; {article.date}</p>
                  <h4 className="text-2xl md:text-3xl font-serif group-hover:italic transition-all">{article.title}</h4>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ChevronDown size={20} className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-400 ${openIndex === i ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-stone-400 text-base leading-relaxed mb-3">{article.detail}</p>
                {article.link && (
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline break-all"
                  >
                    {article.link}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <Services />
        <Journey />
        <Projects />
        <Insights />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.5em] text-stone-600">
        &copy; {new Date().getFullYear()} Akriti Singh &mdash; Elite Specialist
      </footer>
    </div>
  );
}
