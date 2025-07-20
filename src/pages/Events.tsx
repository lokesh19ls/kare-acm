import Navigation from "@/components/Navigation";
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Hackathon 2024",
      date: "March 15-17, 2024",
      location: "KARE Campus",
      participants: "200+",
      description: "48-hour coding marathon with industry mentors and exciting prizes.",
      status: "Registration Open",
      color: "from-acm-orange to-acm-yellow"
    },
    {
      title: "Tech Talk: AI in Healthcare",
      date: "March 25, 2024",
      location: "Auditorium A",
      participants: "150+",
      description: "Expert insights on artificial intelligence applications in healthcare.",
      status: "Coming Soon",
      color: "from-acm-blue to-acm-cyan"
    },
    {
      title: "Workshop: Full Stack Development",
      date: "April 5-7, 2024",
      location: "Lab Complex",
      participants: "50+",
      description: "Hands-on workshop covering React, Node.js, and modern web development.",
      status: "Early Bird",
      color: "from-acm-green to-acm-blue"
    }
  ];

  const pastEvents = [
    {
      title: "Code Quest 2023",
      date: "December 2023",
      participants: "180+",
      description: "Annual programming competition with algorithmic challenges."
    },
    {
      title: "Industry Connect Summit",
      date: "November 2023", 
      participants: "300+",
      description: "Networking event with leading tech companies and startups."
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
              EVENTS
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for exciting events that bring together technology enthusiasts, 
              industry experts, and future innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="group">
                <div className={`h-48 bg-gradient-to-br ${event.color} rounded-3xl p-6 mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <div className="flex justify-between items-start">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.status}
                    </span>
                    <Calendar className="text-white w-6 h-6" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} Expected</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                  <Button className="w-full">Register Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Past Events</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{event.date} • {event.participants} Participants</p>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;