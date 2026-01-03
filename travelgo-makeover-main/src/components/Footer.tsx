import { Plane, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-white">Itinex</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Your living itinerary engine. Powered by Nexa AI to create unforgettable journeys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/60 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/dashboard" className="text-white/60 hover:text-primary transition-colors text-sm">Dashboard</Link></li>
              <li><Link to="/chatbot" className="text-white/60 hover:text-primary transition-colors text-sm">Nexa AI</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-white/60 text-sm">Trip Planning</span></li>
              <li><span className="text-white/60 text-sm">AI Recommendations</span></li>
              <li><span className="text-white/60 text-sm">Live Itineraries</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail size={16} className="text-primary" />
                hello@itinex.travel
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Phone size={16} className="text-primary" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={16} className="text-primary" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Itinex – Living Itinerary Engine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
