import actionCategory from "@/assets/category-action.jpg";
import comedyCategory from "@/assets/category-comedy.jpg";
import dramaCategory from "@/assets/category-drama.jpg";

interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  { id: "action", name: "Action", image: actionCategory, count: 1250 },
  { id: "comedy", name: "Comedy", image: comedyCategory, count: 890 },
  { id: "drama", name: "Drama", image: dramaCategory, count: 2100 },
  { id: "sci-fi", name: "Sci-Fi", image: actionCategory, count: 650 },
  { id: "horror", name: "Horror", image: dramaCategory, count: 430 },
  { id: "romance", name: "Romance", image: comedyCategory, count: 780 },
];

export const CategoriesSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-semibold mb-1">{category.name}</h3>
                  <p className="text-white/70 text-sm">{category.count.toLocaleString()} titles</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};