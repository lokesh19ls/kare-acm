import Navigation from "@/components/Navigation";
import { Mail, Github, Linkedin } from "lucide-react";

const Teams = () => {
  const leadership = [
    {
      name: "Alex Chen",
      role: "President",
      department: "Computer Science",
      year: "Final Year",
      image: "👨‍💻",
      color: "from-acm-blue to-acm-cyan"
    },
    {
      name: "Priya Sharma",
      role: "Vice President",
      department: "Information Technology",
      year: "Third Year",
      image: "👩‍💻",
      color: "from-acm-purple to-acm-pink"
    },
    {
      name: "Rohit Kumar",
      role: "Technical Lead",
      department: "Computer Science",
      year: "Final Year",
      image: "👨‍🔬",
      color: "from-acm-green to-acm-blue"
    },
    {
      name: "Sneha Reddy",
      role: "Events Coordinator",
      department: "Electronics & Communication",
      year: "Third Year",
      image: "👩‍🎨",
      color: "from-acm-orange to-acm-yellow"
    }
  ];

  const teams = [
    {
      name: "Technical Team",
      description: "Handles all technical aspects of events, workshops, and projects.",
      members: ["Arjun Patel", "Kavya Nair", "Deepak Singh", "Anita Verma"],
      color: "bg-acm-blue"
    },
    {
      name: "Design Team", 
      description: "Creates visual content, graphics, and manages brand identity.",
      members: ["Ravi Kumar", "Pooja Gupta", "Sanjay Yadav", "Meera Shah"],
      color: "bg-acm-green"
    },
    {
      name: "Content Team",
      description: "Manages social media, writes content, and handles communications.",
      members: ["Vikram Joshi", "Nisha Agarwal", "Amit Thakur", "Swati Singh"],
      color: "bg-acm-purple"
    },
    {
      name: "Outreach Team",
      description: "Builds industry connections and manages external partnerships.",
      members: ["Rahul Mehta", "Divya Rao", "Karthik Reddy", "Shreya Iyer"],
      color: "bg-acm-orange"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              OUR TEAM
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals driving innovation and excellence 
              in the ACM KARE student chapter.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Leadership Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="group text-center">
                <div className={`h-64 bg-gradient-to-br ${leader.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-6xl">{leader.image}</span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                  <p className="text-acm-blue font-semibold">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.department}</p>
                  <p className="text-sm text-muted-foreground">{leader.year}</p>
                  
                  <div className="flex justify-center space-x-3 pt-2">
                    <button className="p-2 hover:bg-accent rounded-full transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-accent rounded-full transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-accent rounded-full transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Teams</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teams.map((team, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${team.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold">
                      {team.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{team.name}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">{team.description}</p>
                
                <div className="space-y-2">
                  <p className="font-semibold text-sm">Team Members:</p>
                  <div className="flex flex-wrap gap-2">
                    {team.members.map((member, memberIndex) => (
                      <span 
                        key={memberIndex}
                        className="bg-accent px-3 py-1 rounded-full text-sm"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Join Our Team?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for passionate students who want to make a difference 
            in the tech community. Join us and be part of something amazing!
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Teams;