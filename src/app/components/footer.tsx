import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="gap-12 grid lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 font-bold text-foreground text-3xl">
              Let&apos;s Talk!
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">
                  customer_care@bemalo.id
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">+62 813-8526-7252</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">
                  Jakarta, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 font-semibold text-foreground text-xl">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Web Design
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  E-commerce Solutions
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Web Consultation
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
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
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
