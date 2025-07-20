import Navigation from "@/components/Navigation";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Hackathon 2023",
      description: "48 hours of intensive coding and innovation",
      image: "🏆",
      color: "from-acm-orange to-acm-yellow",
      category: "Events"
    },
    {
      title: "Tech Talk Series",
      description: "Industry experts sharing knowledge",
      image: "🎤",
      color: "from-acm-blue to-acm-cyan",
      category: "Workshops"
    },
    {
      title: "Team Building",
      description: "Building stronger connections within the chapter",
      image: "🤝",
      color: "from-acm-green to-acm-blue",
      category: "Social"
    },
    {
      title: "Code Competition",
      description: "Testing algorithmic and programming skills",
      image: "💻",
      color: "from-acm-purple to-acm-pink",
      category: "Competitions"
    },
    {
      title: "Industry Visit",
      description: "Learning from real-world tech environments",
      image: "🏢",
      color: "from-acm-cyan to-acm-green",
      category: "Field Trips"
    },
    {
      title: "Research Showcase",
      description: "Presenting innovative student projects",
      image: "🔬",
      color: "from-acm-pink to-acm-orange",
      category: "Research"
    }
  ];

  const categories = ["All", "Events", "Workshops", "Social", "Competitions", "Field Trips", "Research"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              GALLERY
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capturing moments of innovation, learning, and community building 
              throughout our journey at ACM KARE.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`aspect-square bg-gradient-to-br ${item.color} rounded-3xl p-8 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-6xl">{item.image}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-accent px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join ACM KARE and create your own memorable moments while building 
            the future of technology with like-minded peers.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors">
            Join Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;