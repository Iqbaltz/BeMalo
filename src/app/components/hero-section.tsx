export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex justify-center items-center bg-[url('/images/bg-hero.jpg')] bg-cover bg-center pt-16 min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-900 to-background opacity-50"></div>

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Content */}
        <div className="lg:text-left text-center">
          <h1 className="mb-6 font-bold text-4xl md:text-6xl lg:text-7xl text-center leading-tight">
            Build With Us
          </h1>
          <p className="mb-8 max-w-2xl text-muted-foreground text-lg md:text-xl text-center leading-relaxed">
            build your websites, grow your business.
          </p>
        </div>
      </div>
    </section>
  );
}
