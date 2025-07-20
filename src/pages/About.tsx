import Navigation from "@/components/Navigation";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing the boundaries of technology and creative problem-solving",
      color: "from-acm-orange to-acm-yellow"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Excellence", 
      description: "Striving for the highest standards in everything we do",
      color: "from-acm-blue to-acm-cyan"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Impact",
      description: "Creating meaningful change in our community and beyond",
      color: "from-acm-green to-acm-blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Building strong networks and working together towards common goals",
      color: "from-acm-purple to-acm-pink"
    }
  ];

  const achievements = [
    "Winner of National Hackathon Championship 2023",
    "Best Student Chapter Award - ACM India 2022",
    "Published 15+ research papers in top-tier conferences",
    "Organized 50+ technical events and workshops",
    "Partnered with 8 leading tech companies",
    "Mentored 200+ students in career development"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              ABOUT US
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the story behind ACM KARE, our mission, values, and the 
              impact we're making in the computing community.
            </p>
          </div>
        </div>
      </section>

      {/* About ACM KARE */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ACM KARE Student Chapter is the premier computing organization at 
                  KARE Institute of Technology, affiliated with the Association for 
                  Computing Machinery (ACM) - the world's largest educational and 
                  scientific computing society.
                </p>
                <p>
                  Founded with the vision of fostering innovation in computing, we bring 
                  together passionate students, faculty, and industry professionals to 
                  advance the field of computer science and technology.
                </p>
                <p>
                  Our chapter serves as a bridge between academic learning and industry 
                  practice, providing students with opportunities to explore cutting-edge 
                  technologies, develop professional skills, and build lasting connections 
                  in the tech community.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-acm-blue to-acm-cyan rounded-2xl"></div>
                  <div className="h-24 bg-gradient-to-br from-acm-green to-acm-blue rounded-2xl"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-24 bg-gradient-to-br from-acm-orange to-acm-yellow rounded-2xl"></div>
                  <div className="h-32 bg-gradient-to-br from-acm-purple to-acm-pink rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our actions and define our commitment to 
              excellence in computing education and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`h-32 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-acm-blue">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To advance computing as a science and profession by providing students 
                with opportunities for technical growth, professional development, and 
                meaningful contributions to the computing community through innovative 
                programs, events, and collaborative projects.
              </p>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-acm-purple">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the leading student organization at KARE, 
                nurturing future tech leaders who will drive positive change through 
                the power of computing and inspire innovation in the global technology 
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Celebrating the milestones and accomplishments that mark our journey 
              of excellence in computing education and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-background rounded-2xl p-6 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-acm-green rounded-full flex-shrink-0 mt-1">
                    <div className="w-full h-full bg-white rounded-full m-1"></div>
                  </div>
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Journey?</h2>
          <p className="text-lg opacity-90 mb-8">
            Become part of a community that's shaping the future of technology. 
            Together, we can achieve extraordinary things.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors">
            Become a Member
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;