"use client";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
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
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center rounded-lg w-8 h-8 gradient-hero">
                <span className="font-bold text-white text-sm">bM</span>
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
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-3 py-2 font-medium text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="px-3 py-2 font-medium text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
              >
                Our Work
              </button>
            </div>
          </div>

          {/* Get In Touch Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-card border-border w-[300px]"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="px-3 py-2 font-medium text-muted-foreground hover:text-foreground text-base text-left transition-colors duration-200"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="px-3 py-2 font-medium text-muted-foreground hover:text-foreground text-base text-left transition-colors duration-200"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("work")}
                    className="px-3 py-2 font-medium text-muted-foreground hover:text-foreground text-base text-left transition-colors duration-200"
                  >
                    Our Work
                  </button>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-accent hover:bg-accent/90 mt-4 w-full text-accent-foreground"
                  >
                    Get In Touch
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
