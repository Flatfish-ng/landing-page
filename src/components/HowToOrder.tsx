const HowToOrder = () => {
  const steps = [
    {
      number: "1",
      title: "Browse our chin chin packs",
      description: "Explore our range from 100g to 2kg+ sizes",
      icon: "👀",
    },
    {
      number: "2",
      title: 'Click "Order on WhatsApp"',
      description: "Choose your preferred pack size",
      icon: "💬",
    },
    {
      number: "3",
      title: "Chat with our team and complete your order",
      description: "Get personalized service and arrange delivery",
      icon: "✨",
    },
  ]

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-flatfish-brown-dark">
            How to Order
          </h2>
          <div className="w-20 h-1 bg-flatfish-yellow-warm rounded-full mx-auto"></div>
          <p className="text-xl text-flatfish-brown-light max-w-2xl mx-auto">
            Simple 3-step process to get your delectable chin chin
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 ">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="text-center group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Step Number */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-flatfish-yellow-warm rounded-full mx-auto flex items-center justify-center text-3xl group-hover:bg-flatfish-yellow-soft transition-colors duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-flatfish-brown-medium text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-flatfish-brown-dark">
                  {step.title}
                </h3>
                <p className="text-flatfish-brown-light">{step.description}</p>
              </div>

              {/* Connector Line (hidden on last item) */}
              {/* {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-flatfish-yellow-warm/30 transform translate-x-10"></div>
              )} */}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-flatfish-cream p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-flatfish-brown-dark mb-4">
              Ready to taste home?
            </h3>
            <p className="text-flatfish-brown-light mb-6">
              Browse our packs and place your order today!
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-flatfish-yellow-warm hover:bg-flatfish-yellow-soft text-flatfish-brown-dark font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              Browse Packs Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToOrder
