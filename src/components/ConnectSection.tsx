import { Users, MonitorSpeaker, Calendar, Search, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ConnectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const connectOptions = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Join ACM",
      description: "Become part of our vibrant community",
      link: "#",
      color: "from-acm-blue to-acm-cyan"
    },
    {
      icon: <MonitorSpeaker className="w-8 h-8" />,
      title: "Resources",
      description: "Access learning materials and tools",
      link: "#",
      color: "from-acm-green to-acm-blue"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Events",
      description: "Discover upcoming activities",
      link: "/events",
      color: "from-acm-orange to-acm-yellow"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Research",
      description: "Explore innovation projects",
      link: "#",
      color: "from-acm-purple to-acm-pink"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, rotateX: 15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      className="py-20 bg-background relative overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Advanced animated background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <div className={`w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg rotate-45'}`} />
          </motion.div>
        ))}

        {/* Dynamic grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </motion.div>

      {/* Enhanced scrolling banner */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground py-3 overflow-hidden transform -skew-y-1"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <motion.div 
          className="flex whitespace-nowrap skew-y-1"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="flex items-center space-x-8 text-sm font-medium tracking-wide">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center space-x-8">
                <motion.span
                  whileHover={{ scale: 1.1, color: "#a855f7" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  GET IN TOUCH
                </motion.span>
                <span>•</span>
                <motion.span
                  whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  START A CONVERSATION
                </motion.span>
                <span>•</span>
                <motion.span
                  whileHover={{ scale: 1.1, color: "#10b981" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  JOIN ACM KARE
                </motion.span>
                <span>•</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
        >
          {/* Left Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h2 
              className="text-5xl md:text-6xl font-black tracking-tight"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.span
                className="inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: "linear-gradient(90deg, hsl(var(--foreground)), hsl(var(--primary)), hsl(var(--accent)), hsl(var(--foreground)))",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Let's Connect
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              Join KARE's vibrant tech community. Whether you're a student, mentor, or 
              industry partner, we'd love to hear from you.
            </motion.p>
            <motion.div 
              className="w-20 h-1 bg-acm-cyan origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>

          {/* Right Content - Enhanced Connect Options Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {connectOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.link}
                className="group bg-card border rounded-3xl p-6 relative overflow-hidden"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  animate={hoveredIndex === index ? { x: ['-100%', '100%'] } : {}}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-4 relative z-10`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div 
                    className="text-white"
                    animate={hoveredIndex === index ? {
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{ duration: 0.8 }}
                  >
                    {option.icon}
                  </motion.div>
                  
                  {/* Orbiting particles */}
                  {hoveredIndex === index && [...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/60 rounded-full"
                      animate={{
                        rotate: [0, 360],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      style={{
                        transformOrigin: `${25 + i * 10}px ${25 + i * 10}px`,
                      }}
                    />
                  ))}
                </motion.div>
                
                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-between">
                    <motion.h3 
                      className="font-bold text-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {option.title}
                    </motion.h3>
                    <motion.div
                      animate={hoveredIndex === index ? {
                        rotate: [0, 90],
                        scale: [1, 1.2]
                      } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </motion.div>
                  </div>
                  <motion.p 
                    className="text-sm text-muted-foreground leading-relaxed"
                    animate={hoveredIndex === index ? { y: [-2, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {option.description}
                  </motion.p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ConnectSection;