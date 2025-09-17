import { Search, Bell, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const headerNavItems = [
  { name: "Home", href: "/" },
  { name: "Live TV", href: "/live-tv" },
  { name: "Movies", href: "/movies" },
  { name: "Sports", href: "/sports" },
  { name: "Favorites", href: "/favorites" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="flex items-center justify-between h-full px-6">
        <nav className="hidden md:flex items-center space-x-8">
          {headerNavItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                index === 0 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="w-80 pl-10 bg-surface border-border"
            />
          </div>
          
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};