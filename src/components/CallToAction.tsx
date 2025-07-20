import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        staggerChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Enhanced animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 10% 20%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--accent)) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 20% 80%, hsl(var(--accent)) 0%, transparent 50%)',
            'radial-gradient(circle at 10% 20%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--accent)) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1
          }}
          style={{
            left: `${10 + (i * 6)}%`,
            top: `${20 + Math.sin(i) * 20}%`
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="text-center space-y-8"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight"
            variants={textVariants}
          >
            <motion.span 
              className="block"
              variants={wordVariants}
              whileHover={{
                scale: 1.05,
                color: "hsl(var(--primary))",
                transition: { duration: 0.3 }
              }}
            >
              Let's create something
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              variants={wordVariants}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 100%'
              }}
            >
              extraordinary together.
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            variants={wordVariants}
            whileHover={{
              scale: 1.02,
              color: "hsl(var(--foreground))",
              transition: { duration: 0.3 }
            }}
          >
            Learn, create, and push the boundaries of technology.
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced Scrolling Banner */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-acm-cyan via-acm-blue to-acm-cyan text-primary py-4 overflow-hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
      >
        <motion.div 
          className="flex animate-scroll whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="flex items-center space-x-8 text-sm font-medium tracking-wide">
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                className="flex items-center space-x-8"
                whileHover={{ scale: 1.1, color: "white" }}
              >
                <span>INNOVATE</span>
                <span>•</span>
                <span>CONNECT</span>
                <span>•</span>
                <span>EXCEL</span>
                <span>•</span>
                <span>ACM STUDENT CHAPTER</span>
                <span>•</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;