const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols -2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-flatfish-brown-dark">
                About Us
              </h2>
              <div className="w-20 h-1 bg-flatfish-yellow-warm rounded-full"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="space-y-6 text-lg text-flatfish-brown-light leading-relaxed">
                <p>
                  Flatfish was born out of a deep passion for baking and cooking
                  — a passion I inherited from my mother. What began as a small
                  venture selling homemade chin chin to classmates has grown
                  into Flatfish Foods, a brand committed to sharing premium,
                  homemade goodness with everyone.
                </p>

                <p>
                  We use only the finest whole ingredients, with{" "}
                  <strong className="text-flatfish-brown-medium">
                    no preservatives
                  </strong>
                  , and{" "}
                  <strong className="text-flatfish-brown-medium">
                    no shortcuts
                  </strong>
                  .
                </p>

                <p>
                  Our chin chin is crafted to bring you that comforting feeling
                  of warmth, home, and love with every bite. Whether you're far
                  from home or just don't have time to cook, you still deserve a
                  taste of home — and that's what we deliver.
                </p>
              </div>
              <div className="flex justify-center w-full shrink-0 md:basis-2/5 max-h-[280px] md:max-h-[400px]">
                <div className="relative">
                  <div className="absolute inset-0 bg-flatfish-brown-medium rounded-2xl transform rotate-6"></div>
                  <img
                    src="/images/color-point.jpeg"
                    alt="FlatFish brand colors and identity"
                    className="object-cover relative z-10 w-full h-full max-w-lg rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center p-6 bg-flatfish-cream rounded-xl">
                <div className="w-12 h-12 bg-flatfish-yellow-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-semibold text-flatfish-brown-dark mb-2">
                  Homemade
                </h3>
                <p className="text-sm text-flatfish-brown-light">
                  Made with love and premium ingredients
                </p>
              </div>

              <div className="text-center p-6 bg-flatfish-cream rounded-xl">
                <div className="w-12 h-12 bg-flatfish-yellow-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-semibold text-flatfish-brown-dark mb-2">
                  Natural
                </h3>
                <p className="text-sm text-flatfish-brown-light">
                  No preservatives, just pure goodness
                </p>
              </div>

              <div className="text-center p-6 bg-flatfish-cream rounded-xl">
                <div className="w-12 h-12 bg-flatfish-yellow-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="font-semibold text-flatfish-brown-dark mb-2">
                  Love
                </h3>
                <p className="text-sm text-flatfish-brown-light">
                  Crafted with care and passion
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
        </div>
      </div>
    </section>
  )
}

export default About
