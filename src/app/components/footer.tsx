import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-background text-muted-foreground py-20"
      aria-label="Footer BeMalo - Jasa Web Medan"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-5 xl:col-span-6 space-y-24">
            <div className="space-y-6">
              <p className="text-4xl font-bold text-foreground tracking-tight">beMalo</p>
              <p className="max-w-md text-base leading-relaxed text-foreground font-medium">
                Menyelaraskan Teknologi Informasi (IT) dengan bisnis untuk
                membawa perubahan dengan mengikuti perkembangan jaman
              </p>
            </div>
            <div className="max-w-[180px]">
              <Image
                src="/images/bm-outline.svg"
                alt="bm outline logo"
                width={180}
                height={80}
                className="object-contain"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-3 xl:col-span-2 space-y-12">
            <div>
              <h3 className="mb-6 text-base font-medium text-foreground">
                Our Company
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-foreground transition-colors duration-200">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="hover:text-foreground transition-colors duration-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#volunteer" className="hover:text-foreground transition-colors duration-200">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#article" className="hover:text-foreground transition-colors duration-200">
                    Article
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-base font-medium text-foreground">
                Contact Us
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a href="tel:+6281385267252" className="hover:text-foreground">
                    +62 81385267252
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a href="mailto:customer_care@bemalo.id" className="hover:text-foreground">
                    customer_care@bemalo.id
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-base font-medium text-foreground">
                Location
              </h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 xl:col-span-4">
            <h3 className="mb-6 text-base font-medium text-foreground">
              Our Service
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors duration-200">
                  Pembuatan Website &amp; Aplikasi
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors duration-200">
                  Konsultasi IT &amp; digital transformation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors duration-200">
                  E-Solusi CRM &amp; sistem bisnis
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors duration-200">
                  Digital marketing &amp; branding berbasis teknologi
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors duration-200">
                  Keamanan Siber (Cybersecurity)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors duration-200">
                  Keamanan data &amp; integrasi sistem
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground">
                A TRANSFORMATION DIGITAL OF 
                <span className="inline-flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-muted-foreground/20 rounded-sm">
                    <img
                      src="/images/bemalo.png"
                      className="object-contain"
                    />
                  </span>
                  <span className="normal-case font-bold tracking-normal text-base">beMalo</span>
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <span>©2026 beMalo.id</span>
                  <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
                  <a href="#terms" className="hover:text-foreground transition-colors">Terms</a>
                </div>
                <div>
                  <a href="#vdp" className="hover:text-foreground transition-colors">Vulnerability Disclosure Program</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="inline-flex items-center gap-2 rounded-full border border-foreground px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background">
                <Globe className="w-4 h-4" />
                English (US)
              </button>
              
              <div className="flex items-center gap-6 text-foreground">
                <a
                  href="https://www.linkedin.com/company/bemalo-id/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/bemalo.id/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=61577782198712"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
