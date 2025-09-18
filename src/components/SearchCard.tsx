import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const SearchCard = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [busNumber, setBusNumber] = useState("");

  const handleRouteSearch = () => {
    console.log("Searching route:", { departure, destination });
  };

  const handleBusSearch = () => {
    console.log("Searching bus:", busNumber);
  };

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <Tabs defaultValue="route" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="route">Search by Route</TabsTrigger>
                <TabsTrigger value="bus">Search by Bus Number</TabsTrigger>
              </TabsList>
              
              <TabsContent value="route" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="departure">Departure</Label>
                    <Input
                      id="departure"
                      placeholder="Enter departure location"
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Input
                      id="destination"
                      placeholder="Enter destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleRouteSearch}
                  className="w-full md:w-auto bg-primary hover:bg-primary/90"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search Routes
                </Button>
              </TabsContent>
              
              <TabsContent value="bus" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="busNumber">Bus Number</Label>
                  <Input
                    id="busNumber"
                    placeholder="Enter bus number (e.g., 101, 205)"
                    value={busNumber}
                    onChange={(e) => setBusNumber(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleBusSearch}
                  className="w-full md:w-auto bg-primary hover:bg-primary/90"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search Bus
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SearchCard;