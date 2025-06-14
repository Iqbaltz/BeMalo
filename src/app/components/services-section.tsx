import { Card, CardContent } from "@/app/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      title: "Website Development",
      description:
        "Build a gorgeous website for your business. We create modern, responsive websites that convert visitors into customers.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      alt: "Modern office workspace with computer displaying website development",
    },
    {
      title: "App Development",
      description:
        "Build a mobile experience your users won't forget. Native and cross-platform apps that perform beautifully.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      alt: "Laptop screen showing mobile app development interface",
    },
    {
      title: "Event Website",
      description:
        "Create stunning event experiences that reflect your brand and engage your audience effectively.",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      alt: "Elegant event setup with beautiful table arrangements and catering",
    },
  ];

  return (
    <section id="services" className="bg-background py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 font-semibold text-primary text-lg">WHAT WE DO</p>
          <h2 className="mb-6 font-bold text-foreground text-4xl md:text-5xl">
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
                <h3 className="mb-3 font-semibold text-background text-xl">
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
