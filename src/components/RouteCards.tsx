import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import route1 from "@/assets/route1.jpg";
import route2 from "@/assets/route2.jpg";
import route3 from "@/assets/route3.jpg";

const RouteCards = () => {
  const routes = [
    {
      id: 1,
      busNumber: "101",
      departure: "Central Station",
      destination: "Airport",
      duration: "45 mins",
      frequency: "Every 15 mins",
      image: route1,
      stops: 12
    },
    {
      id: 2,
      busNumber: "205",
      departure: "City Center",
      destination: "University Campus",
      duration: "30 mins",
      frequency: "Every 20 mins",
      image: route2,
      stops: 8
    },
    {
      id: 3,
      busNumber: "Express 301",
      departure: "Railway Station",
      destination: "IT Park",
      duration: "25 mins",
      frequency: "Every 10 mins",
      image: route3,
      stops: 5
    }
  ];

  return (
    <section className="py-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Popular Routes</h2>
          <p className="text-muted-foreground">Discover our most frequently used bus routes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <Card key={route.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted">
                <img 
                  src={route.image} 
                  alt={`Route ${route.busNumber}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">Bus {route.busNumber}</CardTitle>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {route.stops} stops
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{route.departure}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="font-medium">{route.destination}</span>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{route.duration}</span>
                  </div>
                  <span>Frequency: {route.frequency}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RouteCards;