import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, href: "https://github.com/aanchalshres", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aachal-shrestha-4b5449265/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:aachalshrsth@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 hover-glow">
            <div className="text-center mb-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block text-6xl mb-6"
              >
                👋
              </motion.div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Let's work together!
              </h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, 
                or opportunities to be part of your visions.
              </p>
            </div>

            <a
              href="mailto:aachalshrsth@gmail.com"
              className="group flex items-center justify-center gap-3 w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg transition-all duration-300 hover:shadow-[var(--glow-primary)] hover:-translate-y-1"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              Email Me
            </a>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
