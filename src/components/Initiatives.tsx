import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Initiatives = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const initiatives = [
    {
      title: "Technical Excellence",
      description: "Workshops, hackathons, and coding competitions to enhance technical skills.",
      icon: "💡",
      color: "from-acm-green to-acm-cyan"
    },
    {
      title: "Research & Development", 
      description: "Collaborative projects with industry partners and research opportunities.",
      icon: "🔬",
      color: "from-acm-orange to-acm-pink"
    },
    {
      title: "Professional Growth",
      description: "Networking events, mentorship programs, and career development sessions.",
      icon: "🚀",
      color: "from-acm-purple to-acm-blue"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, hsl(var(--accent)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 40px 40px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black tracking-tight mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              Our Initiatives
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            Driving innovation and learning through diverse technical and professional 
            development programs.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {initiatives.map((initiative, index) => (
            <motion.div 
              key={index} 
              className="group cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <motion.div 
                className={`h-48 bg-gradient-to-br ${initiative.color} rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden`}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onHoverStart={() => {}}
                onHoverEnd={() => {}}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%', skewX: -15 }}
                  whileHover={{
                    x: '100%',
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                />
                <motion.span 
                  className="text-5xl relative z-10"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {initiative.icon}
                </motion.span>
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {initiative.title}
              </motion.h3>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 + 0.7 }}
              >
                {initiative.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Initiatives;