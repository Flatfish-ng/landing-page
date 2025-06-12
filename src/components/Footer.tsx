
const Footer = () => {
  return (
    <footer className="bg-flatfish-brown-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/93b120a9-ecf7-4ade-8893-273d280cfafd.png" 
              alt="FlatFish Foods" 
              className="h-12 w-auto"
            />
            <p className="text-gray-300">
              Premium homemade chin chin made with love. No preservatives, just pure goodness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-flatfish-yellow-warm transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-flatfish-yellow-warm transition-colors">About</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-flatfish-yellow-warm transition-colors">Products</a></li>
              <li><a href="#order" className="text-gray-300 hover:text-flatfish-yellow-warm transition-colors">How to Order</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-flatfish-yellow-warm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>📱 WhatsApp: +2347074063047</p>
              <p>📞 Phone: +2347074063047</p>
              <div className="flex space-x-4 pt-4">
                <a href="https://instagram.com/flatfish.ng" target="_blank" rel="noopener noreferrer" className="hover:text-flatfish-yellow-warm transition-colors">📷</a>
                <a href="https://tiktok.com/@flatfish.ng" target="_blank" rel="noopener noreferrer" className="hover:text-flatfish-yellow-warm transition-colors">🎵</a>
                <a href="https://facebook.com/flatfish.ng" target="_blank" rel="noopener noreferrer" className="hover:text-flatfish-yellow-warm transition-colors">👥</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 FlatFish Foods. Made with ❤️ for chin chin lovers everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
