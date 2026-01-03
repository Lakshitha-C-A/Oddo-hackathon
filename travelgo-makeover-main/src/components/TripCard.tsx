import { Calendar, MapPin, Users, MoreVertical } from "lucide-react";

interface TripCardProps {
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  status: "upcoming" | "ongoing" | "completed";
  image: string;
}

const TripCard = ({ title, destination, startDate, endDate, travelers, status, image }: TripCardProps) => {
  const statusStyles = {
    upcoming: "bg-blue-100 text-blue-700",
    ongoing: "bg-primary/10 text-primary",
    completed: "bg-muted text-muted-foreground",
  };

  const statusLabels = {
    upcoming: "Upcoming",
    ongoing: "Ongoing",
    completed: "Completed",
  };

  return (
    <div className="card-travel flex flex-col sm:flex-row overflow-hidden group">
      <div className="sm:w-48 h-32 sm:h-auto relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyles[status]}`}>
              {statusLabels[status]}
            </span>
            <h3 className="text-lg font-semibold text-foreground mt-2">{title}</h3>
          </div>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <MoreVertical size={18} className="text-muted-foreground" />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3">
          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-primary" />
            {destination}
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-primary" />
            {startDate} - {endDate}
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} className="text-primary" />
            {travelers} travelers
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button className="btn-primary text-sm py-2">View Details</button>
          <button className="btn-outline text-sm py-2">Edit Trip</button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
