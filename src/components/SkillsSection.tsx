
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiJavascript, SiTypescript, SiNodedotjs, SiReact, SiLaravel, SiMysql } from "react-icons/si";
import { SiNextdotjs, SiMongodb, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" title="JavaScript" />, color: "from-yellow-500/20 to-amber-500/20" },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" title="Laravel" />, color: "from-red-500/20 to-pink-500/20" },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" title="Node.js" />, color: "from-green-500/20 to-emerald-500/20" },
  { name: "React", icon: <SiReact className="text-cyan-500" title="React" />, color: "from-cyan-500/20 to-blue-500/20" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" title="MongoDB" />, color: "from-green-700/20 to-green-500/20" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" title="TypeScript" />, color: "from-blue-600/20 to-indigo-500/20" },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" title="Next.js" />, color: "from-gray-100/20 via-gray-300/20 to-blue-200/20" },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" title="MySQL" />, color: "from-blue-500/20 to-cyan-500/20" },
  { name: "C/C++", icon: <SiCplusplus className="text-blue-400" title="C/C++" />, color: "from-blue-400/20 to-blue-700/20" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className={`glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-default transition-all duration-300 hover:shadow-[var(--glow-primary)] bg-gradient-to-br ${skill.color}`}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-5xl mb-4 flex items-center justify-center w-full"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
