import ContactForm from "./components/contact-form";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navigation from "./components/navigation";
import PortfolioSection from "./components/portfolio-section";
import ServicesSection from "./components/services-section";
import VisionSection from "./components/vision-section";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navigation />
      <HeroSection />
      <VisionSection />
      <ServicesSection />
      <ContactForm />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
