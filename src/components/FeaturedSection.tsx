import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated background pattern */}
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
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Side - Featured Content */}
          <motion.div className="space-y-8" variants={slideInLeft}>
            <div className="text-center lg:text-left">
              <motion.p 
                className="text-sm text-muted-foreground uppercase tracking-wide mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                ACM KARE STUDENT CHAPTER
              </motion.p>
              <motion.h2 
                className="text-5xl md:text-6xl font-black leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ 
                    scale: 1.05,
                    color: "hsl(var(--primary))",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  Fostering Innovation
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  whileHover={{ 
                    scale: 1.05,
                    color: "hsl(var(--primary))",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  in Computing
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
              >
                Join the world's largest computing society's student chapter at 
                KARE Institute of Technology, where we nurture future tech 
                leaders and innovators.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button 
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-acm-blue to-acm-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">Join ACM KARE</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Team Image Placeholder */}
          <motion.div className="relative" variants={slideInRight}>
            <motion.div 
              className="aspect-video bg-gradient-to-br from-acm-cyan via-acm-blue to-acm-purple rounded-3xl flex items-center justify-center relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{
                  background: [
                    'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                    'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                    'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="text-center text-white relative z-10">
                <motion.div 
                  className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-3xl">👥</span>
                </motion.div>
                <p className="text-lg font-semibold">Our Amazing Team</p>
                <p className="text-sm opacity-80">Building the future together</p>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-12 h-12 bg-acm-orange rounded-full opacity-80"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-acm-yellow rounded-full opacity-60"
              animate={{
                x: [0, 10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;