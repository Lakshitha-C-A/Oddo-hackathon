import { MapPin, Star } from "lucide-react";

interface DestinationCardProps {
  image: string;
  name: string;
  location: string;
  rating: number;
  price: string;
  delay?: number;
}

const DestinationCard = ({ image, name, location, rating, price, delay = 0 }: DestinationCardProps) => {
  return (
    <div 
      className="card-travel group cursor-pointer animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
          <MapPin size={14} />
          {location}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-primary font-bold text-lg">{price}</span>
            <span className="text-muted-foreground text-sm"> / person</span>
          </div>
          <button className="btn-outline text-sm py-2 px-4">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
