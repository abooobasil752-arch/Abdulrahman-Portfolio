import { motion } from "framer-motion";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

const PROJECTS = [
  {
    title: "Linux Automation Toolkit",
    description:
      "A collection of Linux automation scripts for monitoring systems, backups, cleanup, and server management. Built for real sysadmin use cases.",
    tags: ["Linux", "Bash", "Automation", "SysAdmin"],
    github: "https://github.com/abooobasil752-arch/linux-automation-toolkit",
    demo: null,
    highlight: "primary",
  },
  {
    title: "AI File Organizer",
    description:
      "An intelligent Python automation tool that organizes files into categorized folders automatically, using smart pattern detection and AI-assisted classification.",
    tags: ["Python", "Automation", "Productivity"],
    github: "https://github.com/abooobasil752-arch/ai-file-organizer",
    demo: null,
    highlight: "secondary",
  },
  {
    title: "Password Strength Checker",
    description:
      "A security-focused Python tool that analyzes password strength and gives advanced security suggestions with entropy scoring and actionable recommendations.",
    tags: ["Python", "Security", "CLI"],
    github: "https://github.com/abooobasil752-arch/password-strength-checker",
    demo: null,
    highlight: "primary",
  },
  {
    title: "Website Status Checker",
    description:
      "A Python monitoring tool that checks website availability, response time, and HTTP status codes. Ideal for uptime tracking and infrastructure health monitoring.",
    tags: ["Python", "Requests", "Monitoring", "APIs"],
    github: "https://github.com/abooobasil752-arch/website-status-checker",
    demo: null,
    highlight: "secondary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-background border-t border-border/50"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-4">
            <span className="w-8 h-[1px] bg-primary"></span>
            Featured Work
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            A selection of real-world projects covering automation, security, AI,
            and system monitoring.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              data-testid={`card-project-${idx}`}
              className="group relative flex flex-col justify-between h-full p-8 rounded-2xl border border-border bg-card/40 hover:bg-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  project.highlight === "primary"
                    ? "shadow-[inset_0_0_40px_rgba(139,92,246,0.05)]"
                    : "shadow-[inset_0_0_40px_rgba(0,204,188,0.05)]"
                }`}
              />

              {/* Top accent line */}
              <div
                className={`absolute top-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  project.highlight === "primary"
                    ? "bg-gradient-to-r from-transparent via-primary to-transparent"
                    : "bg-gradient-to-r from-transparent via-secondary to-transparent"
                }`}
              />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      project.highlight === "primary"
                        ? "bg-primary/10 text-primary group-hover:bg-primary/20"
                        : "bg-secondary/10 text-secondary group-hover:bg-secondary/20"
                    }`}
                  >
                    <FolderOpen size={22} />
                  </div>
                  <div className="flex gap-3 text-muted-foreground">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-github-project-${idx}`}
                      className="hover:text-foreground transition-colors hover:scale-110 flex items-center gap-1.5 text-sm font-mono"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/40">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono border transition-colors ${
                      project.highlight === "primary"
                        ? "bg-primary/5 border-primary/20 text-primary/80 group-hover:bg-primary/10"
                        : "bg-secondary/5 border-secondary/20 text-secondary/80 group-hover:bg-secondary/10"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/abooobasil752-arch"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-github-all-projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary-foreground hover:bg-primary px-6 py-3 rounded-full border border-primary transition-all"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
