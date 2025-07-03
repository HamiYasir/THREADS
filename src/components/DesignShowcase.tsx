import { Card, CardContent } from '@/components/ui/card';

const DesignShowcase = () => {
  const showcaseItems = [
    {
      id: 1,
      title: "T-Shirt Design",
      subtitle: "Mockup Man",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
      category: "DESIGNER DENIM",
      bgColor: "bg-gradient-to-br from-teal-400 to-emerald-500"
    },
    {
      id: 2,
      title: "Magazine Mockup",
      subtitle: "Fashion Editorial",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      category: "CASUAL CLASSICS",
      bgColor: "bg-gradient-to-br from-slate-300 to-gray-400"
    },
    {
      id: 3,
      title: "Glam Garments",
      subtitle: "Premium Collection",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
      category: "GLAM GARMENTS",
      bgColor: "bg-gradient-to-br from-orange-200 to-amber-100"
    },
    {
      id: 4,
      title: "Cloth Garments",
      subtitle: "Modern Style",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
      category: "CLOTH GARMENTS",
      bgColor: "bg-gradient-to-br from-yellow-100 to-orange-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">DESIGN SHOWCASE</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Design your own wear</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Design - Takes up more space */}
          <div className="lg:row-span-2">
            <Card className={`${showcaseItems[0].bgColor} border-0 overflow-hidden h-full group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
              <CardContent className="p-8 h-full flex flex-col justify-between text-white relative">
                <div className="absolute top-6 left-6 text-white/80">
                  <div className="text-sm font-medium">001</div>
                  <div className="text-sm font-medium">002</div>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">003</div>
                  <div className="text-xl font-semibold">Mockup</div>
                  <div className="text-xl font-semibold">T-Shirt</div>
                  <div className="text-lg">Man</div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Number</span>
                    <span>004</span>
                  </div>
                  <div className="flex justify-between">
                    <span>003</span>
                    <span>005</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Series</span>
                    <span>006</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Clothing</span>
                    <span>007</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Edit</span>
                    <span></span>
                  </div>
                  <div className="flex justify-between">
                    <span>Full</span>
                    <span></span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold text-sm inline-block">
                    {showcaseItems[0].category}
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 space-y-1">
                  <div className="text-sm">010</div>
                  <div className="text-sm">011</div>
                  <div className="text-sm">012</div>
                </div>

                {/* Decorative patterns */}
                <div className="absolute top-8 right-8 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white/30 rounded-full"></div>
                  ))}
                </div>
                <div className="absolute bottom-20 left-8 grid grid-cols-3 gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white/20 transform rotate-45"></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other showcase items */}
          <div className="space-y-8">
            {showcaseItems.slice(1).map((item) => (
              <Card key={item.id} className={`${item.bgColor} border-0 overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                <CardContent className="p-6 flex items-center space-x-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.subtitle}</p>
                    <div className="bg-white/80 text-gray-900 px-4 py-1 rounded-full font-semibold text-sm inline-block">
                      {item.category}
                    </div>
                  </div>
                  <div className="w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;
