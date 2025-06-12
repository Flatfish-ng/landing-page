
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Products = () => {
  const products = [
    {
      id: "100g",
      name: "100g Pack",
      subtitle: "A Taste of Home in Your Pocket",
      description: "Small but mighty! Great for snacking on the go.",
      image: "/images/logo-1.png",
      whatsappMessage:
        "Hi Flatfish! I'd love to order the 100g pack of your delectable chin chin. Is it available?",
      color: "bg-flatfish-yellow-bright",
    },
    {
      id: "250g",
      name: "250g Pack",
      subtitle: "Your Midweek Pick-Me-Up",
      description: "Desk, bag, or bedside—always close.",
      image: "/images/logo-3.png",
      whatsappMessage:
        "Hi Flatfish! I'm interested in the 250g pack of your chin chin. Please share the price and how to get it.",
      color: "bg-flatfish-brown-medium",
    },
    {
      id: "500g",
      name: "500g Pack",
      subtitle: "The Sharing Pack",
      description: "Perfect for couples, roommates, and generous snackers.",
      image: "/images/logo-1.png",
      whatsappMessage:
        "Hi Flatfish! I'd like to order the 500g pack of your delectable chin chin. How do I proceed?",
      color: "bg-flatfish-yellow-warm",
    },
    {
      id: "1kg",
      name: "1kg Pack",
      subtitle: "Your Party Starter",
      description: "Movie night? Guests? Sorted.",
      image: "/images/logo-3.png",
      whatsappMessage:
        "Hi Flatfish! I'm ready to order the 1kg chin chin pack. Please send me the details. Thanks!",
      color: "bg-flatfish-brown-light",
    },
    {
      id: "2kg",
      name: "2kg+ Pack",
      subtitle: "The More, The Merrier",
      description: "For events, gifting, or serious cravings.",
      image: "/images/logo-1.png",
      whatsappMessage:
        "Hi Flatfish! I'm interested in placing a bulk order (2kg or more) of your delectable chin chin. Please let me know pricing and delivery options.",
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
            From quick snacks to party favorites, we have the perfect size for every craving
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
              <CardHeader className={`${product.color} text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                <div className="relative z-10 flex justify-center mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-24 h-24 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-flatfish-brown-dark text-xl font-bold">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-flatfish-brown-medium font-medium">
                  {product.subtitle}
                </CardDescription>
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
  );
};

export default Products;
