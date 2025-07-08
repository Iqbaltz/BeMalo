import { Card, CardContent } from "@/app/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      title: "Website Development",
      description:
        "Build a professional website that is fast, secure, and ready to support your business growth.",
      image: "/images/service1.jpg",
      alt: "Modern office workspace with computer displaying website development",
    },
    {
      title: "Web Design",
      description:
        "Create a modern, responsive, and visually appealing website optimized for all devices.",
      image: "/images/service2.jpg",
      alt: "Laptop screen showing mobile app development interface",
    },
    {
      title: "Web Consultation",
      description:
        "Gain strategic guidance on site structure, technology, and performance to maximize your website’s potential.",
      image: "/images/service3.jpg",
      alt: "Elegant event setup with beautiful table arrangements and catering",
    },
  ];

  return (
    <section id="services" className="bg-background py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 font-semibold text-primary md:text-lg">
            WHAT WE DO
          </p>
          <h2 className="mb-6 font-bold text-foreground text-3xl md:text-5xl">
            We help to build clients their
            <br />
            <span>dream projects</span>
          </h2>
        </div>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card bg-white border-none rounded-2xl overflow-hidden cursor-pointer service-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 font-semibold text-background text-lg md:text-xl">
                  {service.title}
                </h3>
                <p className="text-background leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
