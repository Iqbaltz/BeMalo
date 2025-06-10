export default function PortfolioSection() {
  const projects = [
    {
      title: "SaaS Dashboard",
      description: "Analytics platform with beautiful data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      alt: "Modern SaaS dashboard with analytics and data visualization"
    },
    {
      title: "E-commerce Store", 
      description: "Modern online store with seamless checkout experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      alt: "Modern e-commerce website design with product showcase"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
      alt: "Luxury modern house representing real estate platform design"
    }
  ];

  return (
    <section id="work" className="py-20 gradient-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-200 font-semibold text-lg mb-4">OUR PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Recent Works</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            These are our recent examples of packages or entire business websites that we built around the world and it's becoming better and better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="portfolio-item group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
