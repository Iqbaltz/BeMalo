/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-xl"
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <div className="flex justify-center items-center rounded-lg w-12 h-12 gradient-hero">
                <img src="/images/bemalo.png" alt="BeMalo - Jasa Pembuatan Website Medan" />
              </div>
              <span className="font-semibold text-foreground text-xl">
                beMalo
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="px-3 py-2 font-medium text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-3 py-2 font-medium text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="px-3 py-2 font-medium text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
              >
                Portfolio
              </button>
            </div>
          </div>

          {/* Get In Touch Button */}
          <div className="hidden md:block">
            <a href="https://wa.me/6281385267252" target="_blank" rel="noopener noreferrer" aria-label="Hubungi kami via WhatsApp untuk konsultasi jasa pembuatan website">
              <Button
                onClick={() => {}}
                className="bg-accent bg-primary hover:bg-accent/90 rounded-full text-accent-foreground"
              >
                Hubungi Kami
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card">
                <SheetTitle></SheetTitle>
                <div className="flex flex-col space-y-4 mt-8">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="px-3 py-2 pb-3 border-b font-medium text-muted-foreground hover:text-foreground text-base text-left transition-colors duration-200"
                  >
                    Tentang Kami
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="px-3 py-2 pb-3 border-b font-medium text-muted-foreground hover:text-foreground text-base text-left transition-colors duration-200"
                  >
                    Layanan
                  </button>
                  <button
                    onClick={() => scrollToSection("work")}
                    className="px-3 py-2 pb-3 border-b font-medium text-muted-foreground hover:text-foreground text-base text-left transition-colors duration-200"
                  >
                    Portfolio
                  </button>
                  <a href="https://wa.me/6281385267252" target="_blank" rel="noopener noreferrer">
                    <Button
                      onClick={() => {}}
                      className="mt-4 w-full text-accent-foreground"
                    >
                      Hubungi Kami
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
