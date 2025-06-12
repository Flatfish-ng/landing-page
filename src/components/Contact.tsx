import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { Facebook, Instagram, Music2 } from "lucide-react"

const Contact = () => {
  const handleWhatsApp = (message: string) => {
    window.open(
      `https://wa.me/2347074063047?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }
  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault()
    toast.success("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 bg-flatfish-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-flatfish-brown-dark">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-flatfish-yellow-warm rounded-full mx-auto"></div>
          <p className="text-xl text-flatfish-brown-light max-w-2xl mx-auto">
            Questions about our chin chin? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="border-2 border-flatfish-yellow-warm/20">
              <CardHeader>
                <CardTitle className="text-flatfish-brown-dark flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-flatfish-yellow-warm/10 rounded-lg">
                  <span className="text-flatfish-brown-dark font-medium">
                    WhatsApp
                  </span>
                  <Button
                    onClick={() =>
                      handleWhatsApp(
                        "Hi FlatFish! I'd like to know more about your delectable chin chin. Can you help me?"
                      )
                    }
                    className="bg-flatfish-brown-medium hover:bg-flatfish-brown-dark text-white"
                  >
                    Chat Now
                  </Button>
                </div>
                <div className="text-center text-flatfish-brown-light">
                  <a href="tel:+2349011288423" target="_blank">
                    Phone: +2349011288423
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-2 border-flatfish-yellow-warm/20">
              <CardHeader>
                <CardTitle className="text-flatfish-brown-dark flex items-center gap-3">
                  <span className="text-2xl">🌟</span>
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://instagram.com/flatfish.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-flatfish-yellow-warm/10 rounded-lg hover:bg-flatfish-yellow-warm/20 transition-colors"
                  >
                    <span className="text-2xl mb-2">
                      <Instagram />
                    </span>
                    <span className="text-sm text-flatfish-brown-dark font-[700]">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="https://tiktok.com/@flatfish.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-flatfish-yellow-warm/10 rounded-lg hover:bg-flatfish-yellow-warm/20 transition-colors"
                  >
                    <span className="text-2xl mb-2">
                      <Music2 />
                    </span>
                    <span className="text-sm text-flatfish-brown-dark font-[700]">
                      TikTok
                    </span>
                  </a>
                  <a
                    href="https://facebook.com/flatfish.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-flatfish-yellow-warm/10 rounded-lg hover:bg-flatfish-yellow-warm/20 transition-colors"
                  >
                    <span className="text-2xl mb-2">
                      <Facebook />
                    </span>
                    <span className="text-sm text-flatfish-brown-dark font-[700]">
                      Facebook
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-flatfish-yellow-warm/20">
            <CardHeader>
              <CardTitle className="text-flatfish-brown-dark flex items-center gap-3">
                <span className="text-2xl">💌</span>
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-flatfish-brown-dark mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="border-flatfish-yellow-warm/50 focus:border-flatfish-brown-medium"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-flatfish-brown-dark mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="border-flatfish-yellow-warm/50 focus:border-flatfish-brown-medium"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-flatfish-brown-dark mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="border-flatfish-yellow-warm/50 focus:border-flatfish-brown-medium"
                    placeholder="Tell us how we can help you..."
                  />
                  <input type="hidden" name="form-name" value="contact" />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-flatfish-brown-medium hover:bg-flatfish-brown-dark text-white font-semibold py-3 rounded-xl transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
