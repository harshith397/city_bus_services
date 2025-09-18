import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SearchCard from "@/components/SearchCard";
import RouteCards from "@/components/RouteCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SearchCard />
      <RouteCards />
      <Footer />
    </div>
  );
};

export default Index;
