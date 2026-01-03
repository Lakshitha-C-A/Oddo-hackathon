import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";
import DestinationCard from "@/components/DestinationCard";
import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import destBeach from "@/assets/dest-beach.jpg";
import destMountain from "@/assets/dest-mountain.jpg";
import destCity from "@/assets/dest-city.jpg";

const destinations = [
  {
    image: destBeach,
    name: "Maldives Paradise",
    location: "Maldives",
    rating: 4.9,
    price: "₹85,000",
  },
  {
    image: destMountain,
    name: "Swiss Alps Trek",
    location: "Switzerland",
    rating: 4.8,
    price: "₹1,20,000",
  },
  {
    image: destCity,
    name: "European Charm",
    location: "France",
    rating: 4.7,
    price: "₹95,000",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Planning",
    description: "Nexa AI creates personalized itineraries based on your preferences and travel style.",
  },
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "Your travel data is protected with enterprise-grade security and encryption.",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Living itineraries that adapt to weather, events, and your changing plans.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(220 30% 10% / 0.75), hsl(220 30% 10% / 0.4)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 pt-20">
          <div className="max-w-3xl">
            <p className="tagline animate-fade-in">Explore the world</p>
            <h1 
              className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 leading-tight animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Find Your Perfect Trip
            </h1>
            <p 
              className="text-xl text-white/80 mb-10 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Create unforgettable journeys with Itinex – your living itinerary engine powered by Nexa AI.
            </p>
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="tagline">Why Choose Itinex</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Travel Smarter, Not Harder
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-8 rounded-2xl text-center animate-slide-up"
                style={{ 
                  boxShadow: "var(--shadow-card)",
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <p className="tagline">Popular Destinations</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Trending This Season
              </h2>
            </div>
            <button className="btn-outline flex items-center gap-2 mt-4 md:mt-0">
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <DestinationCard key={dest.name} {...dest} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Let Nexa AI plan your perfect trip. Just tell us your preferences and we'll handle the rest.
          </p>
          <a
            href="/chatbot"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors"
            style={{ boxShadow: "0 4px 20px hsl(0 0% 0% / 0.2)" }}
          >
            <Sparkles size={20} />
            Chat with Nexa
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
