import { Home, Tv, Film, Trophy, Heart, List, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  active?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: "Home", href: "/", active: true },
  { icon: Radio, label: "Live TV", href: "/live-tv" },
  { icon: Film, label: "Movies", href: "/movies" },
  { icon: Trophy, label: "Sports", href: "/sports" },
  { icon: Heart, label: "Favorites", href: "/favorites" },
  { icon: List, label: "My Playlists", href: "/playlists" },
  { icon: Tv, label: "Direct Stream", href: "/direct-stream" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Tv className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-gradient">StreamVibe</span>
        </div>
        
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "sidebar-item",
                  item.active && "active"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};