import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Settings,
  Zap,
  Factory,
  Ship,
  CheckCircle2,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Hammer
} from "lucide-react";
import heroImage from "@assets/generated_images/dark_industrial_factory_background_with_amber_sparks.png";
import logoImage from "@assets/generated_images/al_nouran_logo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="Al-Nouran International Company"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About Us", "Industries", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-slate-200 hover:text-accent transition-colors uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
            <button className="bg-accent text-primary px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-primary transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/20">
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-primary border-t border-slate-800"
          >
            <div className="flex flex-col p-6 gap-4">
              {["Home", "About Us", "Industries", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-slate-300 hover:text-accent font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-accent text-primary py-3 rounded-sm font-bold w-full">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />
          <img
            src={heroImage}
            alt="Industrial Factory"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-accent" />
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
                Industrial Solutions Partner
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[1.1] mb-8"
            >
              EMPOWERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                INDUSTRY
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 border-l-4 border-accent pl-6"
            >
              Your premier partner for high-grade electrical hardware, CNC machinery,
              and industrial solutions. Precision engineering for a powerful future.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent text-primary px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-wider hover:bg-white transition-all flex items-center gap-2 group">
                Explore Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-slate-500 text-white px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-all backdrop-blur-sm">
                Our Capabilities
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section id="about-us" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Who We Are</span>
                <div className="h-[2px] w-full bg-slate-200" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight">
                Bridging Global Innovation & <br />Local Industry
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                At Al-Nouran International Company, we specialize in importing and supplying top-tier electrical hardware, electromechanical systems, and heavy machinery.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our mission is to equip factories and industrial sectors with the reliable technology they need to operate efficiently. We don't just supply parts; we power progress.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
                <div>
                  <h4 className="text-4xl font-bold text-primary mb-1">25+</h4>
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-primary mb-1">500+</h4>
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Industrial Clients</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border-2 border-accent/20 z-0 rounded-sm translate-x-4 translate-y-4" />
              <div className="bg-slate-100 aspect-[4/5] relative z-10 rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Industrial Engineer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary/90 p-8 backdrop-blur-sm">
                  <p className="text-white font-medium italic border-l-2 border-accent pl-4">
                    "Precision is not just a requirement; it's our promise."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Sectors We Serve</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Powering Key Industries
            </h2>
            <p className="text-slate-600 text-lg">
              We provide specialized hardware and machinery solutions tailored to the unique demands of heavy industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Oil & Gas",
                desc: "Trusted supplier for Private & Government sectors. Providing high-performance welding equipment for infrastructure.",
                img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
              },
              {
                icon: <Hammer className="w-8 h-8" />,
                title: "Furniture Mfg",
                desc: "Supplying state-of-the-art CNC woodworking machinery and spare parts for precision furniture production.",
                img: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80"
              },
              {
                icon: <Factory className="w-8 h-8" />,
                title: "Heavy Industry",
                desc: "Electromechanical hardware and heavy-duty processing machinery for large-scale metal fabrication.",
                img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80"
              },
              {
                icon: <Ship className="w-8 h-8" />,
                title: "Free Zones",
                desc: "Industrial hardware and logistical equipment solutions supporting rapid manufacturing growth.",
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
              }
            ].map((card, idx) => (
              <div key={idx} className="group relative bg-white rounded-sm shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-sm z-20 shadow-sm text-primary">
                    {card.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                  <a href="#" className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-wide hover:text-accent transition-colors">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-300 absolute bottom-0 left-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/20 skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Advantage</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                Why Industry Leaders <br /><span className="text-accent">Trust Us</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-md">
                We combine technical expertise with robust supply chains to deliver exactly what you need, when you need it.
              </p>

              <div className="space-y-6">
                {[
                  "Global Sourcing Capabilities from Tier-1 Manufacturers",
                  "Comprehensive After-Sales Support & Spare Parts",
                  "Specialized Expertise in CNC & Welding Technology",
                  "Rapid Logistics for Free Zones & Industrial Parks"
                ].map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm hover:border-accent/50 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                <div className="bg-accent h-40 rounded-sm w-full" />
                <div className="bg-slate-700 h-40 rounded-sm w-full translate-y-8" />
                <div className="bg-slate-600 h-40 rounded-sm w-full -translate-y-8" />
                <div className="bg-white h-40 rounded-sm w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <img
                  src={logoImage}
                  alt="Al-Nouran International Company"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Your premier partner for high-grade electrical hardware, CNC machinery, and industrial solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About Us", "Industries", "Catalog", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-accent transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Industries</h4>
              <ul className="space-y-3">
                {["Oil & Gas", "Furniture Manufacturing", "Steel Processing", "Heavy Machinery"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-accent transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Industrial Zone 4, Cairo, Egypt</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>+20 123 456 7890</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>info@al-nouran.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Al-Nouran International Company. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
