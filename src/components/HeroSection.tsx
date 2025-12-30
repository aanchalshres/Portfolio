import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-[80px] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-primary font-medium mb-4 tracking-wider"
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              I'm{" "}
              <span className="gradient-text">Aachal</span>
              <br />
              Shrestha
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl"
            >
              Full Stack Developer & Tech Enthusiast crafting digital experiences
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[var(--glow-primary)] transition-all duration-300 hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border border-border hover:border-primary text-foreground font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Profile image cutout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-2xl opacity-50 animate-pulse-glow" />
              
              {/* Rotating border */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-accent to-secondary animate-gradient opacity-80" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background animate-float">
                <img
                  src="https://github.com/aanchalshres.png"
                  alt="GitHub Profile"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-4 w-14 h-14 rounded-xl bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center"
              >
                <span className="text-xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
