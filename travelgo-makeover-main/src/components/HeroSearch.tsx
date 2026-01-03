import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSearch = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [tripType, setTripType] = useState("");
  const [travelers, setTravelers] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSearch} className="search-box animate-slide-up" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-center gap-2 flex-1 min-w-[200px]">
        <MapPin className="w-5 h-5 text-muted-foreground ml-2" />
        <input
          type="text"
          placeholder="Where to?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="flex items-center gap-2 flex-1 min-w-[160px]">
        <Calendar className="w-5 h-5 text-muted-foreground ml-2" />
        <select
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          className="search-input cursor-pointer"
        >
          <option value="">Trip Type</option>
          <option value="adventure">Adventure</option>
          <option value="relaxation">Relaxation</option>
          <option value="cultural">Cultural</option>
          <option value="romantic">Romantic</option>
        </select>
      </div>

      <div className="flex items-center gap-2 flex-1 min-w-[140px]">
        <Users className="w-5 h-5 text-muted-foreground ml-2" />
        <select
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
          className="search-input cursor-pointer"
        >
          <option value="">Travelers</option>
          <option value="1">Solo</option>
          <option value="2">Couple</option>
          <option value="3-5">Small Group</option>
          <option value="6+">Large Group</option>
        </select>
      </div>

      <button type="submit" className="btn-primary flex items-center gap-2 whitespace-nowrap">
        <Search size={18} />
        Search
      </button>
    </form>
  );
};

export default HeroSearch;
