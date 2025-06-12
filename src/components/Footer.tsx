import {
  Facebook,
  Instagram,
  MessageCircle,
  Music2,
  Phone,
  PhoneCall,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-flatfish-brown-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/images/logo-2.png"
              alt="FlatFish Foods"
              className="h-12 w-auto"
            />
            <p className="text-gray-300">
              Premium homemade chin chin made with love. No preservatives, just
              pure goodness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-flatfish-yellow-warm transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-flatfish-yellow-warm transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-300 hover:text-flatfish-yellow-warm transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#order"
                  className="text-gray-300 hover:text-flatfish-yellow-warm transition-colors"
                >
                  How to Order
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-flatfish-yellow-warm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <a
                href="https://wa.me/+2347074063047"
                target="_blank"
                className="flex items-center gap-2"
              >
                <MessageCircle /> WhatsApp: +2347074063047
              </a>
              <a
                href="tel:+2349011288423"
                target="_blank"
                className="flex items-center gap-2"
              >
                <PhoneCall /> Phone: +2349011288423
              </a>
              <div className="flex flex-col gap-2 pt-4 items-start">
                <a
                  href="https://instagram.com/flatfish.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-flatfish-yellow-warm transition-colors flex gap-2"
                >
                  <Instagram /> Instagram
                </a>
                <a
                  href="https://tiktok.com/@flatfish.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-flatfish-yellow-warm transition-colors flex gap-2"
                >
                  <Music2 /> Tiktok
                </a>
                <a
                  href="https://facebook.com/flatfish.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-flatfish-yellow-warm transition-colors flex gap-2"
                >
                  <Facebook /> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>
            &copy; 2025 FlatFish Foods. Made with ❤️ for chin chin lovers
            everywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
