import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background py-32" aria-label="Footer BeMalo - Jasa Web Medan">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="gap-12 grid lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 font-bold text-foreground text-3xl">
              Hubungi Kami
            </h3>
            <p className="mb-4 text-muted-foreground">
              Siap membantu bikin website impian Anda. Konsultasi gratis untuk jasa pembuatan website di Medan dan seluruh Indonesia.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:customer_care@bemalo.id" className="text-muted-foreground hover:text-foreground">
                  customer_care@bemalo.id
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+6281385267252" className="text-muted-foreground hover:text-foreground">+62 813-8526-7252</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">
                  Medan, Sumatera Utara, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 font-semibold text-foreground text-xl">
              Layanan Kami
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Jasa Pembuatan Website
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Jasa Desain Web
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Website Company Profile
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Konsultasi Web
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Brand Identity
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex md:flex-row flex-col justify-between items-center mt-12 pt-8 border-border border-t">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://web.facebook.com/profile.php?id=61577782198712"
              target="_blank"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/bemalo.id/"
              target="_blank"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/bemalo-id/"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2025 beMalo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
