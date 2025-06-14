import { Button } from "@/components/ui/button"

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-[80dvh] bg-gradient-to-b from-flatfish-cream via-white to-flatfish-yellow-warm flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="hero-bg absolute top-[20%] md:top-0 w-full h-full z-0"></div>
      <div className="max-w-6xl mx-auto md:mr-auto md:ml-0 items-center relative z-1">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8 mx-auto max-w-[85%] lg:max-w-[70%]">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold text-flatfish-brown-dark leading-tight">
              Premium, Luxury Chin Chin, Elevated.
            </h1>
            <p className="text-flatfish-brown-medium text-lg md:text-xl xl:text-3xl">
              We only serve what we&apos;re proud of — indulgent chin chin crafted
              with care and packaged with purpose.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={scrollToProducts}
              className="bg-flatfish-yellow-warm hover:bg-flatfish-yellow-soft text-flatfish-brown-dark font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              Browse Packs
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-flatfish-brown-medium text-flatfish-brown-dark hover:bg-flatfish-brown-medium hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-200"
            >
              Our Story
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        {/* <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-flatfish-yellow-warm rounded-full blur-3xl opacity-20 transform scale-110 animate-pulse-warm"></div>
            <img
              src="/images/6401b4d3-20f8-4146-af57-815ee48ac664.png"
              alt="FlatFish Products"
              className="relative z-10 w-full max-w-lg animate-gentle-float"
            />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Hero
