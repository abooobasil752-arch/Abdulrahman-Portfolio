import { motion } from "framer-motion";
import { Terminal, Globe, Brain, Cpu, Headset } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    name: "Python Development",
    description: "Core language for automation, scripting, data, and APIs",
    icon: Terminal,
    color: "primary",
    skills: ["Python 3", "Automation", "APIs", "Data Processing", "Scripting"],
  },
  {
    name: "Linux & System Admin",
    description: "System administration and workflow automation",
    icon: Cpu,
    color: "secondary",
    skills: ["Bash", "Ubuntu/Linux", "Cron Jobs", "SSH", "Server Management", "Shell Scripting"],
  },
  {
    name: "Web Development",
    description: "Building responsive, modern interfaces",
    icon: Globe,
    color: "primary",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "GitHub Pages"],
  },
  {
    name: "AI & Automation",
    description: "Intelligent tools for practical productivity",
    icon: Brain,
    color: "secondary",
    skills: ["OpenAI API", "AI Integration", "Workflow Automation", "Productivity Systems", "Smart Tools"],
  },
  {
    name: "IT Support & Networking",
    description: "Infrastructure support and troubleshooting",
    icon: Headset,
    color: "primary",
    skills: ["Troubleshooting", "System Setup", "Cybersecurity Basics", "Technical Support", "Hardware/Software Support"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const colorMap: Record<string, string> = {
  primary: "text-primary border-primary/20 bg-primary/5 group-hover:border-primary/50 group-hover:bg-primary/10",
  secondary: "text-secondary border-secondary/20 bg-secondary/5 group-hover:border-secondary/50 group-hover:bg-secondary/10",
};

const iconColorMap: Record<string, string> = {
  primary: "text-primary bg-primary/10",
  secondary: "text-secondary bg-secondary/10",
};

const tagColorMap: Record<string, string> = {
  primary: "group-hover:border-primary/30 group-hover:text-primary/80",
  secondary: "group-hover:border-secondary/30 group-hover:text-secondary/80",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 bg-background border-t border-border/50 relative overflow-hidden"
    >
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-4">
            <span className="w-8 h-[1px] bg-primary"></span>
            Technical Arsenal
            <span className="w-8 h-[1px] bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Tools &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Technologies
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            A comprehensive toolkit bridging IT infrastructure, software development,
            and modern AI capabilities.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 rounded-2xl border bg-card/40 backdrop-blur-sm transition-all duration-300 group cursor-default ${colorMap[category.color]}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${iconColorMap[category.color]}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-foreground transition-colors">
                    {category.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-5 min-h-[2.5rem]">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-muted/40 border border-border text-muted-foreground transition-all duration-200 ${tagColorMap[category.color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
