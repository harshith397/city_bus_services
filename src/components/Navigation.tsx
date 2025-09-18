import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Bus, User } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be managed by auth context in real app

  const handleLoginClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bus className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-foreground">City Bus Services</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleLoginClick}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <User className="h-4 w-4" />
              <span>{isLoggedIn ? "Dashboard" : "Login"}</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;