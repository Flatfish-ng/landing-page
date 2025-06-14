
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Products = () => {
  const products = [
    {
      id: "100g",
      name: "100g Pack",
      subtitle: "A Gentle First Bite",
      description:
        "Perfectly portioned for solo snacking or sharing a taste of Flatfish joy.",
      image: "/images/100g.jpeg",
      whatsappMessage:
        "Hi Flatfish! I'd love to order the 100g pack of your premium chin chin. Is it available?",
      color: "bg-flatfish-yellow-bright",
    },
    {
      id: "500g",
      name: "500g Pack",
      subtitle: "Moments Made Sweeter",
      description:
        "Great for sharing — at home, work, or your next small get-together.",
      image: "/images/500g.jpeg",
      whatsappMessage:
        "Hi Flatfish! I'd like to order the 500g pack of your delicious chin chin. How do I proceed?",
      color: "bg-flatfish-yellow-warm",
    },
    {
      id: "750g",
      name: "750g Pack",
      subtitle: "Not Too Little, Not Too Much",
      description:
        "Perfect balance for those who snack with intention — or share with love.",
      image: "/images/750g.jpeg",
      whatsappMessage:
        "Hi Flatfish! I'm interested in the 750g pack of your chin chin. Please send me the details.",
      color: "bg-flatfish-brown-medium",
    },
    {
      id: "1kg",
      name: "1kg Pack",
      subtitle: "For Life's Small Gatherings",
      description:
        "Whether it's hosting, celebrating, or stocking up — this pack covers it.",
      image: "/images/1kg.jpeg",
      whatsappMessage:
        "Hi Flatfish! I'm ready to order the 1kg chin chin pack. Please send me the details. Thanks!",
      color: "bg-flatfish-brown-light",
    },
    {
      id: "2kg",
      name: "2kg+ Pack",
      subtitle: "The More, The Merrier",
      description:
        "For events, gifting, or serious cravings. Quality never looked this generous.",
      image: "/images/demo.jpeg",
      whatsappMessage:
        "Hi Flatfish! I'm interested in placing a bulk order (2kg or more) of your premium chin chin. Please let me know pricing and delivery options.",
      color: "bg-flatfish-yellow-soft",
    },
  ]
  

  const handleWhatsAppOrder = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2347074063047?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-flatfish-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-flatfish-brown-dark">
            Our Chin Chin Packs
          </h2>
          <div className="w-20 h-1 bg-flatfish-yellow-warm rounded-full mx-auto"></div>
          <p className="text-xl text-flatfish-brown-light max-w-2xl mx-auto">
            From quick snacks to party favorites, we have the perfect size for
            every craving
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-flatfish-yellow-warm/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader
                className={`${product.color} space-y-0 p-0 m-0 text-center relative overflow-hidden`}
              >
                <div className="absolute z-[11] inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
                <div className="relative z-10 flex justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full object-cover drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-[10px] z-[12] inset-x-0">
                  <CardTitle className=" text-flatfish-cream text-xl font-bold">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-flatfish-cream font-medium">
                    {product.subtitle}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-6 bg-white">
                <p className="text-flatfish-brown-light mb-6 text-center">
                  {product.description}
                </p>

                <Button
                  onClick={() => handleWhatsAppOrder(product.whatsappMessage)}
                  className="w-full bg-flatfish-brown-medium hover:bg-flatfish-brown-dark text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  Order on WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Products;
