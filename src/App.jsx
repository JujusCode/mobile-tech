import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Wrench,
  Cpu,
  Zap,
  AlertTriangle,
  Car,
  Clock,
  CheckCircle2,
  Send,
  ExternalLink,
  Award,
  UserCheck,
} from "lucide-react";

/* Thin row of punched holes for the work-order style panel */
function Perforation({ hole }) {
  return (
    <div
      aria-hidden="true"
      className="h-3 w-full"
      style={{
        backgroundImage: `radial-gradient(circle at center, ${hole} 3px, transparent 3.5px)`,
        backgroundSize: "18px 100%",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "9px center",
      }}
    />
  );
}

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    issue: "",
  });

  const [emailModalOpen, setEmailModalOpen] = useState(false);

  const phoneNumber = "0431340980";
  const emailAddress = "jeroldinaus@gmail.com";
  const facebookUrl = "https://www.facebook.com/jerold.escabusa";
  const whatsappUrl = "https://wa.me/61431340980";
  const logoPath = "/logo.jpg";

  const emailSubject = encodeURIComponent(
    "Inquiry - Automotive Repairs & Servicing",
  );
  const emailBody = encodeURIComponent(
    "Hi Jerold,\n\nI would like to inquire about servicing/repairs for my vehicle.\n\nLocation:\nVehicle Model:\nIssue:",
  );

  const emailPlatforms = [
    {
      name: "Gmail",
      icon: (
        <svg
          className="w-4 h-4 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${emailSubject}&body=${emailBody}`,
    },
    {
      name: "Outlook / Hotmail",
      icon: (
        <svg
          className="w-4 h-4 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.5 2.25v8.5H1v-7a1.5 1.5 0 0 1 1.5-1.5h9zm1 0h9a1.5 1.5 0 0 1 1.5 1.5v7h-10.5v-8.5zm-11.5 9.5h10.5v10H2.5A1.5 1.5 0 0 1 1 20.25v-8.5zm11.5 0H23v8.5a1.5 1.5 0 0 1-1.5 1.5h-9v-10z" />
        </svg>
      ),
      url: `https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}&subject=${emailSubject}&body=${emailBody}`,
    },
    {
      name: "Yahoo Mail",
      icon: (
        <svg
          className="w-4 h-4 shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5l-3-5h2.3l1.7 3.3L13.7 6.5H16l-3 5v5z" />
        </svg>
      ),
      url: `https://compose.mail.yahoo.com/?to=${emailAddress}&subject=${emailSubject}&body=${emailBody}`,
    },
    {
      name: "Default Mail App (Apple Mail / Windows)",
      icon: <Mail className="w-4 h-4 shrink-0 text-[#D89B3C]" />,
      url: `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`,
    },
  ];

  useEffect(() => {
    const id = "ks-mobile-tech-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;1,600&display=swap";
    document.head.appendChild(link);
  }, []);

  const services = [
    {
      number: "01",
      icon: <Cpu className="w-5 h-5" />,
      title: "Computerised OBD scanner diagnostics",
      desc: "Advanced electronic scan tools identifying check-engine lights, sensor failures, ECU fault codes, live data stream issues, and engine glitches.",
      badge: "Diagnostic",
      image: "/service-scanner.jpg",
      isVideo: false,
    },
    {
      number: "02",
      icon: <Wrench className="w-5 h-5" />,
      title: "Engine & general mechanical repairs",
      desc: "Timing belts, head gaskets, alternators, fuel pumps, radiator overhauls, cooling systems, oil changes, leaks, and scheduled preventative maintenance.",
      badge: "Major & minor",
      image: "/service-engine.jpg",
      isVideo: false,
    },
    {
      number: "03",
      icon: <Zap className="w-5 h-5" />,
      title: "Auto electrical & wiring systems",
      desc: "Complex electrical wiring diagnosis, battery drainage faults, fuse box repairs, starter motor re-wires, and faulty wiring harness restoration.",
      badge: "Precision work",
      image: "/service-wiring.jpg",
      isVideo: false,
    },
    {
      number: "04",
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Emergency roadside assistance",
      desc: "Dead on the road or broken down at an intersection? We come straight to your car equipped with tools and emergency parts to get you rolling again.",
      badge: "On call",
      image: "/detailing.mp4",
      isVideo: true,
    },
    {
      number: "05",
      icon: <Car className="w-5 h-5" />,
      title: "Brakes, rotors & suspension",
      desc: "Brake pad replacements, caliper servicing, disc rotor changes, shock absorber fixes, ball joints, and suspension bushing inspection on-site.",
      badge: "Safety first",
      image: "/brakes.mp4",
      isVideo: true,
    },
  ];

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 110;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const smsBody = `Hi Jerold! Name: ${formData.name}%0APhone: ${formData.phone}%0ALocation: ${formData.location}%0AIssue: ${formData.issue}`;
    window.location.href = `sms:${phoneNumber}?body=${smsBody}`;
  };

  const INK = "#17181B";

  return (
    <div
      className="min-h-screen bg-[#17181B] text-[#D8D4C8] selection:bg-[#D89B3C] selection:text-[#17181B]"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      {/* Top 4 Ways Contact Bar */}
      <div className="bg-[#111214] border-b border-[#2A2C31] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
          <span className="text-[#8E8A7E] font-medium hidden sm:inline">
            Direct Contact Options:
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {/* 1. Phone */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-1.5 text-[#D8D4C8] hover:text-[#D89B3C] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D89B3C]" />
              <span>{phoneNumber}</span>
            </a>

            {/* 2. Email Modal Trigger */}
            <button
              type="button"
              onClick={() => setEmailModalOpen(true)}
              className="flex items-center gap-1.5 text-[#D8D4C8] hover:text-[#D89B3C] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D89B3C]" />
              <span>{emailAddress}</span>
            </button>

            {/* 3. Facebook */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#D8D4C8] hover:text-[#D89B3C] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 fill-[#1877F2]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>

            {/* 4. WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#D8D4C8] hover:text-[#D89B3C] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hazard strip */}
      <div
        aria-hidden="true"
        className="h-[6px] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #D89B3C 0, #D89B3C 14px, #17181B 14px, #17181B 28px)",
        }}
      />

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#17181B]/95 backdrop-blur-sm border-b-2 border-[#D89B3C]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
            className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D89B3C] rounded-sm"
          >
            <div className="w-11 h-11 bg-[#0F0F10] border border-[#3A3C41] flex items-center justify-center overflow-hidden shrink-0">
              <img
                src={logoPath}
                alt="K&S Mobile Tech logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    "<span class='text-[#D89B3C] font-bold text-sm'>K&S</span>";
                }}
              />
            </div>
            <div className="leading-tight">
              <span
                className="block text-white text-xl tracking-wide"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                K&amp;S Mobile Tech
              </span>
              <span className="text-[11px] text-[#9C978A] block">
                Automotive servicing &amp; general mechanical repairs
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-[#B9B5A8]">
            {[
              ["services", "Services"],
              ["mechanic", "Our mechanic"],
              ["contact", "Dispatch"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className="relative py-1 hover:text-[#EFE8D8] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D89B3C] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#D89B3C] hover:after:w-full after:transition-[width] after:duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-2 bg-[#D89B3C] hover:bg-[#E4AB57] text-[#17181B] font-bold px-4 py-2.5 rounded-sm text-sm transition-all shadow-[3px_3px_0_0_#7A5820] hover:shadow-[1px_1px_0_0_#7A5820] hover:translate-x-[2px] hover:translate-y-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EFE8D8]"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call the mechanic</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative border-b border-[#2A2C31] pt-14 pb-16 md:pt-20 md:pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 pl-3 pr-4 py-1.5 bg-[#1E2024] border-l-4 border-[#D89B3C] text-[#C9C5B8] text-sm mb-7">
                <Clock className="w-4 h-4 text-[#D89B3C] shrink-0" />
                On-call mobile service across Colac & surrounding areas
              </div>

              <h1
                className="text-white leading-[0.95]"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                <span className="block text-3xl sm:text-4xl font-semibold text-[#D8D4C8]">
                  On-call mobile mechanic for
                </span>
                <span
                  className="block text-6xl sm:text-7xl lg:text-8xl mt-1 tracking-wide"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Automotive Repairs &amp; Servicing
                </span>
              </h1>

              <p className="mt-7 text-[15px] text-[#A9A59A] leading-relaxed max-w-lg">
                Stuck on the road or broken down at home? From computerised
                scanner diagnostics and engine repairs to auto electrical and
                brake servicing, we come directly to you so you can skip the tow
                truck.
              </p>

              {/* 4 Contact Buttons in Hero */}
              <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
                {/* 1. Phone */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#D89B3C] hover:bg-[#E4AB57] text-[#17181B] font-bold px-4 py-3 rounded-sm text-[14px] transition-all shadow-[3px_3px_0_0_#7A5820] hover:shadow-[1px_1px_0_0_#7A5820] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call {phoneNumber}</span>
                </a>

                {/* 2. WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 font-semibold px-4 py-3 rounded-sm text-[14px] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* 3. Email Modal Trigger */}
                <button
                  type="button"
                  onClick={() => setEmailModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#1E2024] hover:bg-[#272A30] text-[#D8D4C8] border border-[#3A3C41] font-semibold px-4 py-3 rounded-sm text-[14px] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#D89B3C] shrink-0" />
                  <span>Email Jerold</span>
                </button>

                {/* 4. Facebook */}
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#5B9DF6] border border-[#1877F2]/40 font-semibold px-4 py-3 rounded-sm text-[14px] transition-colors"
                >
                  <svg
                    className="w-4 h-4 shrink-0 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook Profile</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="relative overflow-hidden border border-[#3A3C41] bg-[#0F0F10] aspect-[4/3] lg:aspect-[16/12]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="mt-14 pt-7 border-t border-[#2A2C31] flex flex-wrap gap-x-10 gap-y-3 text-sm text-[#B9B5A8]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D89B3C]" />
              On-site diagnostics
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D89B3C]" />
              25+ years experience
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D89B3C]" />
              Direct mechanic dispatch
            </div>
          </div>
        </div>
      </section>

      {/* Services with Centered 04 & 05 */}
      <section id="services" className="py-20 bg-[#1A1B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <h2
              className="text-4xl sm:text-5xl text-white tracking-wide"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              What's on the work order
            </h2>
            <p className="mt-3 text-[#A9A59A] max-w-lg">
              Scanning tools, replacement components, and full mechanical
              capability delivered right to your vehicle.
            </p>
          </div>

          {/* Row 1: Services 01, 02, 03 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between gap-4 mb-3 pb-2 border-b border-[#2E3035]">
                  <span
                    className="text-[#848074] group-hover:text-[#D89B3C] text-4xl sm:text-5xl font-black leading-none transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {service.number}
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D89B3C] bg-[#D89B3C]/10 border border-[#D89B3C]/50 px-3 py-1 rounded-xs">
                    {service.badge}
                  </span>
                </div>

                <div className="h-44 w-full bg-[#0F0F10] border border-[#2E3035] mb-4 overflow-hidden">
                  {service.isVideo ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={service.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  )}
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#0F0F10] border border-[#2E3035] flex items-center justify-center text-[#D89B3C] shrink-0 mt-0.5">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-snug mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#9C988B] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Services 04 & 05 centered */}
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-x-8 gap-y-12">
            {services.slice(3, 5).map((service, index) => (
              <div key={index} className="group w-full md:max-w-md">
                <div className="flex items-center justify-between gap-4 mb-3 pb-2 border-b border-[#2E3035]">
                  <span
                    className="text-[#848074] group-hover:text-[#D89B3C] text-4xl sm:text-5xl font-black leading-none transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {service.number}
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D89B3C] bg-[#D89B3C]/10 border border-[#D89B3C]/50 px-3 py-1 rounded-xs">
                    {service.badge}
                  </span>
                </div>

                <div className="h-44 w-full bg-[#0F0F10] border border-[#2E3035] mb-4 overflow-hidden">
                  {service.isVideo ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={service.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  )}
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#0F0F10] border border-[#2E3035] flex items-center justify-center text-[#D89B3C] shrink-0 mt-0.5">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-snug mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#9C988B] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mechanic */}
      <section id="mechanic" className="py-20 border-t border-[#2A2C31]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-1 h-64 bg-[#1E2024] border border-[#2E3035] overflow-hidden">
                  <img
                    src="/pic2.png"
                    alt="Jerold Escabusa, head mechanic"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 h-64 bg-[#1E2024] border border-[#2E3035] overflow-hidden">
                  <img
                    src="/blur.jpg"
                    alt="Jerold working on an engine"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              </div>

              <div
                className="absolute -top-4 -left-4 bg-[#D89B3C] text-[#17181B] w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-[3px_3px_0_0_#7A5820] rotate-[-8deg]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="text-2xl leading-none">25+</span>
                <span
                  className="text-[10px] tracking-wide leading-none mt-0.5"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  years
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-[#D89B3C] text-sm">
                <Award className="w-4 h-4" />
                Lead technician
              </div>

              <h2
                className="text-4xl sm:text-5xl text-white tracking-wide"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Jerold Escabusa
              </h2>

              <p className="text-[#A9A59A] leading-relaxed max-w-xl">
                With over 25 years of hands-on automotive service and repair
                experience, Jerold has worked on everything from vintage
                carburettors and heavy diesels to late-model computerised
                electronics.
              </p>

              <p className="text-[#A9A59A] leading-relaxed max-w-xl">
                Whether diagnosing an elusive electrical fault with digital scan
                tools or doing a full brake rebuild in your driveway, you deal
                directly with the person doing the work — no call centre, no
                hand-off.
              </p>

              <div className="flex flex-wrap gap-8 pt-2">
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-[#D89B3C]" />
                  <div>
                    <span className="block text-white font-semibold leading-none">
                      25+ years
                    </span>
                    <span className="text-xs text-[#8E8A7E]">
                      Mechanical experience
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-[#D89B3C]" />
                  <div>
                    <span className="block text-white font-semibold leading-none">
                      Direct dispatch
                    </span>
                    <span className="text-xs text-[#8E8A7E]">
                      You deal with Jerold, always
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#D8D4C8] border-b border-[#3A3C41] hover:border-[#D89B3C] hover:text-white pb-1 transition-colors"
                >
                  Facebook profile
                  <ExternalLink className="w-3.5 h-3.5 text-[#D89B3C]" />
                </a>
                <span className="text-[#3A3C41]">•</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#25D366] border-b border-[#25D366]/30 hover:border-[#25D366] pb-1 transition-colors"
                >
                  WhatsApp Jerold
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispatch form */}
      <section id="contact" className="py-20 border-t border-[#2A2C31]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EFE8D8] text-[#17181B]">
            <Perforation hole={INK} />
            <div className="p-8 sm:p-11">
              <div className="flex items-start justify-between mb-8 pb-5 border-b-2 border-dashed border-[#C9BF9F]">
                <div>
                  <h2
                    className="text-3xl sm:text-4xl tracking-wide"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Dispatch Request
                  </h2>
                  <p className="text-sm text-[#5C5847] mt-1">
                    Send your location and the issue — it goes straight to
                    Jerold.
                  </p>
                </div>
                <span className="text-xs text-[#8A8468] hidden sm:block">
                  No. {new Date().getFullYear()}-
                  {String(new Date().getMonth() + 1).padStart(2, "0")}
                </span>
              </div>

              <form onSubmit={handleMessageSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-[#7A755E] mb-1.5">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex"
                      className="w-full bg-transparent border-b-2 border-[#C9BF9F] px-0.5 py-2 text-[15px] text-[#17181B] placeholder:text-[#A39C7E] focus:outline-none focus:border-[#B3712A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#7A755E] mb-1.5">
                      Contact phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="04XX XXX XXX"
                      className="w-full bg-transparent border-b-2 border-[#C9BF9F] px-0.5 py-2 text-[15px] text-[#17181B] placeholder:text-[#A39C7E] focus:outline-none focus:border-[#B3712A] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#7A755E] mb-1.5">
                    Current location (address, street, or breakdown pin)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="e.g. Murray St, Colac or highway shoulder"
                    className="w-full bg-transparent border-b-2 border-[#C9BF9F] px-0.5 py-2 text-[15px] text-[#17181B] placeholder:text-[#A39C7E] focus:outline-none focus:border-[#B3712A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#7A755E] mb-1.5">
                    Vehicle issue
                  </label>
                  <textarea
                    rows="3"
                    required
                    value={formData.issue}
                    onChange={(e) =>
                      setFormData({ ...formData, issue: e.target.value })
                    }
                    placeholder="Car won't turn over, check-engine scan needed, brake inspection, wiring fault..."
                    className="w-full bg-transparent border-b-2 border-[#C9BF9F] px-0.5 py-2 text-[15px] text-[#17181B] placeholder:text-[#A39C7E] focus:outline-none focus:border-[#B3712A] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#17181B] hover:bg-[#26282C] text-[#EFE8D8] font-semibold py-3.5 px-6 rounded-sm transition-all flex items-center justify-center gap-2 text-sm shadow-[3px_3px_0_0_#B3712A] hover:shadow-[1px_1px_0_0_#B3712A] hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    <Send className="w-4 h-4" />
                    Send dispatch SMS
                  </button>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="border border-[#17181B]/30 hover:border-[#17181B] text-[#17181B] font-medium py-3.5 px-6 rounded-sm transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call directly
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1B1F]">
        <Perforation hole={INK} />
        <div className="border-t border-[#2A2C31] py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#8E8A7E]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#0F0F10] border border-[#2E3035] flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={logoPath}
                  alt="K&S Mobile Tech logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div>
                <p className="text-white font-semibold leading-none">
                  K&amp;S Mobile Tech
                </p>
                <p className="text-xs text-[#7A7669] mt-1">
                  Automotive servicing &amp; general mechanical repairs
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
              <a
                href={`tel:${phoneNumber}`}
                className="text-[#D89B3C] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                {phoneNumber}
              </a>
              <span className="text-[#3A3C41]">•</span>
              <button
                type="button"
                onClick={() => setEmailModalOpen(true)}
                className="text-[#D89B3C] hover:underline flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                {emailAddress}
              </button>
              <span className="text-[#3A3C41]">•</span>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D89B3C] hover:underline flex items-center gap-1"
              >
                Facebook
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-[#3A3C41]">•</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>

            <p className="text-xs text-[#5C594F]">
              © {new Date().getFullYear()} K&amp;S Mobile Tech.
            </p>
          </div>
        </div>
      </footer>

      {/* Email Platform Selector Modal */}
      {emailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#1E2024] border border-[#3A3C41] w-full max-w-md p-6 rounded-sm shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2E3035]">
              <div>
                <h3
                  className="text-2xl text-white tracking-wide"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Choose Email Provider
                </h3>
                <p className="text-xs text-[#9C978A] mt-0.5">
                  Sending to:{" "}
                  <span className="text-[#D89B3C]">{emailAddress}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEmailModalOpen(false)}
                className="text-[#9C978A] hover:text-white text-lg font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5">
              {emailPlatforms.map((platform, idx) => (
                <a
                  key={idx}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setEmailModalOpen(false)}
                  className="flex items-center gap-3 w-full p-3.5 bg-[#17181B] hover:bg-[#26282C] border border-[#2E3035] hover:border-[#D89B3C] rounded-sm text-sm text-[#D8D4C8] hover:text-white transition-all group"
                >
                  <div className="text-[#D89B3C] group-hover:scale-110 transition-transform">
                    {platform.icon}
                  </div>
                  <span className="font-medium flex-1">{platform.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5C594F] group-hover:text-[#D89B3C]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
