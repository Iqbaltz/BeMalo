"use client";
import { Button } from "@/app/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex justify-center items-center pt-16 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-900 to-background"></div>

      {/* Background Elements */}
      <div className="top-1/4 right-1/4 absolute opacity-20 blur-3xl rounded-full w-96 h-96 gradient-hero"></div>
      <div className="bottom-1/4 left-1/4 absolute bg-accent/10 blur-3xl rounded-full w-80 h-80"></div>

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="items-center gap-12 grid lg:grid-cols-2">
          {/* Content */}
          <div className="lg:text-left text-center">
            <h1 className="mb-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              <span className="block text-foreground">Build</span>
              <span className="block text-gradient">With Us</span>
            </h1>
            <p className="mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed">
              We&apos;re an experienced development agency that helps startups
              and enterprises launch beautiful products. From concept to
              production, bring your projects to life with speed and precision.
            </p>
            <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                className="hover:opacity-90 px-8 py-4 h-auto font-semibold text-white hover:scale-105 transition-all duration-200 gradient-cta transform"
              >
                Our Services
              </Button>
              <Button
                onClick={() => scrollToSection("work")}
                variant="outline"
                className="px-8 py-4 hover:border-muted-foreground border-border h-auto font-semibold text-foreground transition-colors duration-200"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Laptop Image */}
          <div className="relative">
            <div className="relative shadow-2xl rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern laptop displaying code and development work"
                className="rounded-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl"></div>
            </div>
            {/* Floating elements */}
            <div className="-top-4 -right-4 absolute opacity-80 blur-sm rounded-full w-24 h-24 gradient-hero"></div>
            <div className="-bottom-6 -left-6 absolute bg-accent/30 blur-lg rounded-full w-32 h-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
