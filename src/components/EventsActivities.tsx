import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EventsActivities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      title: "IdeaForge",
      date: "March 15-16, 2024",
      category: "Innovation",
      description: "Transform your innovative ideas into reality through intensive workshops and mentorship sessions.",
      image: "🚀",
      color: "from-acm-green to-acm-cyan",
      status: "upcoming"
    },
    {
      title: "Hack Pair",
      category: "Hackathon", 
      status: "Ongoing",
      description: "Collaborative coding challenge for innovative solutions",
      image: "👥",
      color: "from-acm-blue to-acm-purple",
      cta: "Learn More"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-acm-cyan/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-acm-orange/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-primary-foreground/70 text-sm uppercase tracking-wide mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            UPCOMING & ONGOING
          </motion.p>
          <motion.h2 
            className="text-5xl md:text-6xl font-black tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          >
            Events & Activities
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary-foreground mx-auto mt-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              initial={{ opacity: 0, y: 80, rotateX: 15 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: {
                  delay: index * 0.3,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }
              } : {}}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 2,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Event Image/Placeholder */}
              <motion.div 
                className={`h-64 bg-gradient-to-br ${event.color} flex items-center justify-center relative overflow-hidden`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 70%)`,
                      `radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 70%)`,
                      `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 70%)`,
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.span 
                  className="text-6xl z-10 relative"
                  whileHover={{ 
                    scale: 1.3,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.6 }
                  }}
                >
                  {event.image}
                </motion.span>
                
                {/* Status Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.3 + 0.5 }}
                >
                  <span className="bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {event.status === "upcoming" ? event.date : event.status}
                  </span>
                </motion.div>

                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.3 + 0.7 }}
                >
                  <span className="bg-primary-foreground text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </motion.div>
              </motion.div>

              {/* Event Content */}
              <motion.div 
                className="p-6 space-y-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.3 + 0.9 }}
              >
                <motion.h3 
                  className="text-2xl font-bold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {event.title}
                </motion.h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {event.description}
                </p>
                
                {event.cta && (
                  <motion.div 
                    className="pt-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <button className="flex items-center space-x-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors group">
                      <span className="font-medium">{event.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsActivities;