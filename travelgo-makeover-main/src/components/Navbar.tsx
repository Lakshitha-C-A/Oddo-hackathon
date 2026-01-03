import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHome ? "bg-transparent" : "bg-card"
      }`}
      style={{ boxShadow: isHome ? "none" : "var(--shadow-nav)" }}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className={`text-2xl font-bold ${isHome ? "text-white" : "text-foreground"}`}>
              Itinex
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`nav-link ${isHome ? "text-white/90 hover:text-white" : ""}`}>
              Home
            </Link>
            <Link to="/dashboard" className={`nav-link ${isHome ? "text-white/90 hover:text-white" : ""}`}>
              Dashboard
            </Link>
            <Link to="/chatbot" className={`nav-link ${isHome ? "text-white/90 hover:text-white" : ""}`}>
              Nexa AI
            </Link>
            <Link to="/dashboard" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isHome ? "text-white" : "text-foreground"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-card rounded-2xl p-6 mb-4 animate-scale-in" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex flex-col gap-4">
              <Link to="/" className="nav-link py-2" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/dashboard" className="nav-link py-2" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
              <Link to="/chatbot" className="nav-link py-2" onClick={() => setIsOpen(false)}>
                Nexa AI
              </Link>
              <Link to="/dashboard" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
