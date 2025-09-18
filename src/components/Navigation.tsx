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
    <nav className="bg-slate border-b border-primary-foreground/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Bus className="h-8 w-8 text-primary-foreground" />
            <span className="text-xl font-semibold text-primary-foreground">City Bus Services</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleLoginClick}
              variant="outline"
              className="flex items-center space-x-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
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