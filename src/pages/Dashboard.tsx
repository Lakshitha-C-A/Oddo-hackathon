import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TripCard from "@/components/TripCard";
import { Plus, Search, Filter } from "lucide-react";
import destBeach from "@/assets/dest-beach.jpg";
import destMountain from "@/assets/dest-mountain.jpg";
import destCity from "@/assets/dest-city.jpg";

const trips = [
  {
    title: "Goa Beach Getaway",
    destination: "Goa, India",
    startDate: "Jan 15",
    endDate: "Jan 20, 2026",
    travelers: 4,
    status: "upcoming" as const,
    image: destBeach,
  },
  {
    title: "Himalayan Adventure",
    destination: "Manali, India",
    startDate: "Feb 10",
    endDate: "Feb 18, 2026",
    travelers: 2,
    status: "upcoming" as const,
    image: destMountain,
  },
  {
    title: "Europe City Tour",
    destination: "Paris & Rome",
    startDate: "Dec 1",
    endDate: "Dec 10, 2025",
    travelers: 3,
    status: "completed" as const,
    image: destCity,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Trips</h1>
              <p className="text-muted-foreground mt-1">Manage and track all your travel plans</p>
            </div>
            <button className="btn-primary flex items-center gap-2 mt-4 md:mt-0">
              <Plus size={18} />
              Create New Trip
            </button>
          </div>

          {/* Search & Filters */}
          <div className="bg-card rounded-xl p-4 mb-8 flex flex-col sm:flex-row gap-4" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex-1 flex items-center gap-2 bg-secondary rounded-lg px-4">
              <Search size={18} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search trips..."
                className="flex-1 py-3 bg-transparent border-0 outline-none text-foreground"
              />
            </div>
            <button className="btn-outline flex items-center gap-2">
              <Filter size={16} />
              Filters
            </button>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Total Trips", value: "12", color: "bg-primary/10 text-primary" },
              { label: "Upcoming", value: "3", color: "bg-blue-100 text-blue-700" },
              { label: "Countries Visited", value: "8", color: "bg-amber-100 text-amber-700" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <p className="text-muted-foreground text-sm">{stat.label}</p>
                <p className={`text-3xl font-bold mt-1 ${stat.color.split(" ")[1]}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Trip List */}
          <div className="space-y-4">
            {trips.map((trip) => (
              <TripCard key={trip.title} {...trip} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
