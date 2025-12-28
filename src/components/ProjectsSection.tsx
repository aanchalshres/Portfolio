import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Deraa - Rental Platform",
    description: "A user-friendly rental platform connecting tenants with house owners. Built with modern tech stack for seamless experience.",
    link: "#",
    gradient: "from-primary/20 to-cyan-600/20",
    tags: ["Laravel", "MySQL", "React"],
  },
  {
    title: "Thriftsy - E-commerce",
    description: "A modern thrift marketplace to browse, list, and purchase items. Features real-time updates and secure payments.",
    link: "https://thriftsy.vercel.app",
    gradient: "from-secondary/20 to-purple-600/20",
    tags: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    title: "Medipal - Hackathon Project",
    description: "A medical assistance web application built with a team. Won recognition for innovative healthcare solutions.",
    link: "#",
    gradient: "from-accent/20 to-pink-600/20",
    tags: ["React", "Node.js", "AI"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Some of my recent work that I'm proud of
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`glass-card rounded-2xl p-6 h-full flex flex-col transition-all duration-500 hover:shadow-[var(--glow-primary)] bg-gradient-to-br ${project.gradient}`}>
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    📁
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground flex-grow mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
