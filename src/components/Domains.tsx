import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Domains = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const domains = [
    {
      title: "Corporate",
      description: "Building professional networks and industry connections",
      icon: "💼",
      color: "from-acm-blue to-acm-cyan"
    },
    {
      title: "Design",
      description: "Creating innovative user experiences and visual solutions",
      icon: "🎨",
      color: "from-acm-green to-acm-blue"
    },
    {
      title: "Technical",
      description: "Developing cutting-edge solutions and technical expertise",
      icon: "⚡",
      color: "from-acm-orange to-acm-yellow"
    },
    {
      title: "Event Management",
      description: "Organizing impactful events and memorable experiences",
      icon: "🎯",
      color: "from-acm-purple to-acm-pink"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, rotateX: -15 },
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

  return (
    <section className="py-20 bg-accent/30 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-acm-blue/10 to-acm-purple/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-muted-foreground text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Together, we excel in
          </motion.p>
          <motion.h2 
            className="text-6xl md:text-8xl font-black tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          >
            OUR DOMAINS
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <motion.div 
                className={`h-64 bg-gradient-to-br ${domain.color} rounded-3xl p-8 flex items-center justify-center mb-6 relative overflow-hidden`}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Floating light effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-3xl"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                      `radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                      `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
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
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {domain.icon}
                </motion.span>
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold mb-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {domain.title}
              </motion.h3>
              
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                {domain.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Domains;