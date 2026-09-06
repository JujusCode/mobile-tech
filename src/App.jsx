import React, { useState, useEffect } from "react";
import {
  Phone,
  Wrench,
  Cpu,
  Sparkles,
  Zap,
  AlertTriangle,
  Car,
  MapPin,
  Clock,
  CheckCircle2,
  Navigation,
  Send,
  ExternalLink,
  Store,
  Award,
  UserCheck,
} from "lucide-react";

/* Thin row of "punched" holes — used to give panels a tear-off / carbon-copy
   work-order feel. `hole` is the colour showing through the holes, i.e. the
   colour of whatever sits behind the panel. */
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

  const phoneNumber = "0431340980";
  const shopAddress = "2 Thompson St, Colac VIC 3250";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    shopAddress,
  )}`;
  const facebookUrl = "https://www.facebook.com/jerold.escabusa";

  const logoPath = "/logoo.png";

  // Pull in the display + body typefaces without touching index.html.
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
      desc: "Advanced electronic scan tools identifying check-engine lights, sensor failures, ECU fault codes, live data stream issues, and transmission glitches.",
      badge: "Diagnostic",
      image: "/service-scanner.jpg",
      isVideo: false,
    },
    {
      number: "02",
      icon: <Wrench className="w-5 h-5" />,
      title: "Engine & mechanical repairs",
      desc: "Timing belts, head gaskets, alternators, fuel pumps, radiator overhauls, cooling systems, oil changes, leaks, and preventative maintenance.",
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
      icon: <Sparkles className="w-5 h-5" />,
      title: "Professional auto detailing",
      desc: "Full interior sanitisation, deep carpet stain extraction, exterior buffing, wash, and surface restoration to bring back that brand-new look and feel.",
      badge: "Showroom care",
      image: "/detailing.mp4",
      isVideo: true,
    },
    {
      number: "05",
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Emergency roadside assistance",
      desc: "Dead on the road or broken down at an intersection? We come straight to your car equipped with tools and emergency parts to get you rolling again.",
      badge: "On call",
      image: "/service-roadside.jpg",
      isVideo: false,
    },
    {
      number: "06",
      icon: <Car className="w-5 h-5" />,
      title: "Brakes, rotors & suspension",
      desc: "Brake pad replacements, caliper servicing, disc rotor changes, shock absorber fixes, ball joints, and suspension bushing inspection.",
      badge: "Safety first",
      image: "/brakes.mp4",
      isVideo: true,
    },
  ];

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 82;
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
                Mobile &amp; in-shop automotive repairs
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-[#B9B5A8]">
            {[
              ["services", "Services"],
              ["mechanic", "Our mechanic"],
              ["shop", "Workshop"],
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
                Mobile callout or book in at the Colac workshop
              </div>

              <h1
                className="text-white leading-[0.95]"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                <span className="block text-3xl sm:text-4xl font-semibold text-[#D8D4C8]">
                  On-call mobile mechanics and a
                </span>
                <span
                  className="block text-6xl sm:text-7xl lg:text-8xl mt-1 tracking-wide"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Full-Service Workshop
                </span>
              </h1>

              <p className="mt-7 text-[15px] text-[#A9A59A] leading-relaxed max-w-lg">
                Stuck on the road or broken down at home? From computerised
                scanners and engine teardowns to precise wiring fixes and full
                detailing, we bring the repair to your vehicle — or you bring
                the vehicle to our Colac bay.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-3 bg-[#D89B3C] hover:bg-[#E4AB57] text-[#17181B] font-bold px-6 py-3.5 rounded-sm text-[15px] transition-all shadow-[4px_4px_0_0_#7A5820] hover:shadow-[2px_2px_0_0_#7A5820] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <Phone className="w-4 h-4" />
                  Call {phoneNumber}
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-[#1E2024] text-[#D8D4C8] border border-[#3A3C41] font-medium px-6 py-3.5 rounded-sm text-[15px] transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#D89B3C]" />
                  Route on Google Maps
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
              Workshop in Colac
            </div>
          </div>
        </div>
      </section>

      {/* Services — larger work-order indicators */}
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
              capability, all under one call-out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((service, index) => (
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
                    src="/mechanic-lead.jpg"
                    alt="Jerold Escabusa, head mechanic"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 h-64 bg-[#1E2024] border border-[#2E3035] overflow-hidden">
                  <img
                    src="/mechanic-action.jpg"
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
                Whether he's diagnosing an elusive electrical fault with digital
                scan tools or doing a full brake rebuild in your driveway, you
                deal directly with the person doing the work — no call centre,
                no hand-off.
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

              <div className="pt-2">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#D8D4C8] border-b border-[#3A3C41] hover:border-[#D89B3C] hover:text-white pb-1 transition-colors"
                >
                  Visit Jerold's Facebook profile
                  <ExternalLink className="w-3.5 h-3.5 text-[#D89B3C]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section
        id="shop"
        className="py-20 bg-[#1A1B1F] border-t border-[#2A2C31]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-[#D89B3C] text-sm">
                <Store className="w-4 h-4" />
                Physical workshop
              </div>

              <h2
                className="text-4xl sm:text-5xl text-white tracking-wide leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                The Colac Bay
              </h2>

              <p className="text-[#A9A59A] leading-relaxed">
                Need more than an on-site fix? The Colac workshop handles
                complex mechanical overhauls, full wiring harnesses, and
                intensive detailing jobs that need a lift and a bench.
              </p>

              <div className="bg-[#0F0F10] border border-[#2E3035] p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D89B3C] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-[#8E8A7E]">Address</p>
                    <p className="text-white text-sm font-medium">
                      {shopAddress}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D89B3C] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-[#8E8A7E]">Call ahead</p>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-[#D89B3C] text-sm font-semibold hover:underline"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D89B3C] hover:bg-[#E4AB57] text-[#17181B] font-bold px-6 py-3 rounded-sm text-sm transition-all shadow-[3px_3px_0_0_#7A5820] hover:shadow-[1px_1px_0_0_#7A5820] hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <Navigation className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="sm:col-span-2 h-60 bg-[#0F0F10] border border-[#2E3035] overflow-hidden">
                <img
                  src="/shop-main.jpg"
                  alt="K&S workshop frontage"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="h-44 bg-[#0F0F10] border border-[#2E3035] overflow-hidden">
                <img
                  src="/shop-interior.jpg"
                  alt="Workshop bays and lifts"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="h-44 bg-[#0F0F10] border border-[#2E3035] overflow-hidden">
                <img
                  src="/shop-tools.jpg"
                  alt="Detailing and diagnostics setup"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
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
                    placeholder="e.g. 25 Murray St, Colac or highway shoulder"
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
                    placeholder="Car won't turn over, check-engine scan needed, wiring issue, detailing package..."
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
                  Automotive services &amp; general mechanical repairs
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D89B3C] transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D89B3C]" />
                {shopAddress}
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="text-[#D89B3C] hover:underline"
              >
                {phoneNumber}
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D89B3C] hover:underline flex items-center gap-1.5"
              >
                Facebook: Jerold Escabusa
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="text-xs text-[#5C594F]">
              © {new Date().getFullYear()} K&S Mobile Tech.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
