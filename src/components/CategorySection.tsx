import React from 'react';
import { Button } from '@/components/ui/button';
import { Film, Tv, Gamepad2, Music } from 'lucide-react';

const categories = [
  { id: 1, name: 'Movies', icon: Film, count: 1250 },
  { id: 2, name: 'TV Shows', icon: Tv, count: 890 },
  { id: 3, name: 'Sports', icon: Gamepad2, count: 340 },
  { id: 4, name: 'Music', icon: Music, count: 567 },
];

const CategorySection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <div
            key={category.id}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <Icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
            <p className="text-muted-foreground text-sm">{category.count} items</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;