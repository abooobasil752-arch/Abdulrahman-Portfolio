import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    name: "Python",
    description: "Core language for automation, AI, and scripting",
    skills: ["Python 3", "Pandas", "NumPy", "API Integration", "Automation Scripts", "Data Processing"]
  },
  {
    name: "Linux / Shell",
    description: "System administration and workflow automation",
    skills: ["Bash Scripting", "Ubuntu/Debian", "System Admin", "Cron Jobs", "SSH", "Server config"]
  },
  {
    name: "Web Development",
    description: "Building responsive, modern interfaces",
    skills: ["React", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind CSS", "Vite", "RESTful APIs"]
  },
  {
    name: "AI & Automation",
    description: "Intelligent tools for practical productivity",
    skills: ["OpenAI API", "Prompt Engineering", "Task Automation", "Workflow Optimization"]
  },
  {
    name: "IT & Networking",
    description: "Infrastructure support and troubleshooting",
    skills: ["Network Security", "Troubleshooting", "Hardware Setup", "IT Support"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-background border-t border-border/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-4">
            <span className="w-8 h-[1px] bg-primary"></span>
            Technical Arsenal
            <span className="w-8 h-[1px] bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            A comprehensive toolkit focused on bridging IT infrastructure, software development, and modern AI capabilities.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-colors group ${
                idx === SKILL_CATEGORIES.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 h-10">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-muted/50 border border-border text-foreground group-hover:border-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
