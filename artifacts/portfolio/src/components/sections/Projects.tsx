import { motion } from "framer-motion";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

const PROJECTS = [
  {
    title: "Linux Automation Toolkit",
    description: "A robust suite of shell scripts designed to automate repetitive Linux system administration tasks, monitor system health, and manage backups.",
    tags: ["Linux", "Bash", "Automation", "SysAdmin"],
    links: {
      github: "#",
      demo: "#"
    },
    highlight: "primary"
  },
  {
    title: "AI File Organizer",
    description: "A Python application that leverages AI to intelligently scan, categorize, and rename unorganized files across directories based on their content and context.",
    tags: ["Python", "AI Integration", "Productivity"],
    links: {
      github: "#"
    },
    highlight: "secondary"
  },
  {
    title: "Password Strength Checker",
    description: "An interactive, real-time web tool that evaluates password security, estimates cracking time, and provides actionable suggestions for better security.",
    tags: ["JavaScript", "Security", "Web Dev"],
    links: {
      github: "#",
      demo: "#"
    },
    highlight: "primary"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-background border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-4">
            <span className="w-8 h-[1px] bg-primary"></span>
            Featured Work
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="group relative flex flex-col justify-between h-full p-8 rounded-2xl border border-border bg-card/40 hover:bg-card transition-colors duration-300"
            >
              {/* Highlight bar at top */}
              <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-${project.highlight} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-${project.highlight}/10 text-${project.highlight}`}>
                    <FolderOpen size={24} />
                  </div>
                  <div className="flex gap-3 text-muted-foreground">
                    {project.links.github && (
                      <a href={project.links.github} className="hover:text-foreground transition-colors" aria-label="GitHub Repository">
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} className="hover:text-foreground transition-colors" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                    {tIdx < project.tags.length - 1 && <span className="ml-2 text-border">/</span>}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary-foreground hover:bg-primary px-6 py-3 rounded-full border border-primary transition-colors"
          >
            View More on GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
