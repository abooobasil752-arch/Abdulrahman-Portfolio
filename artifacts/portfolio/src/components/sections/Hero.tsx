import { motion } from "framer-motion";
import { Github, ArrowRight, Terminal, Briefcase, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[50rem] h-[50rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full bg-primary/5 blur-[80px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl z-10">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono">
              <Terminal size={14} />
              <span>Hello, World.</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card/50 text-muted-foreground text-sm font-mono">
              <MapPin size={13} />
              <span>Jordan</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
              Abdulrahman
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed"
          >
            AI Integration, Python & Web Development Specialist crafting modern
            digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-6"
          >
            <a
              href="#projects"
              data-testid="button-view-projects"
              className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="https://github.com/abooobasil752-arch"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github-hero"
              className="flex items-center gap-2 px-6 py-4 rounded-full border border-border bg-card hover:bg-muted hover:border-primary/40 transition-all font-medium text-foreground"
            >
              <Github size={20} />
              GitHub Profile
            </a>

            <a
              href="#contact"
              data-testid="button-hire-me-hero"
              className="flex items-center gap-2 px-6 py-4 rounded-full border border-primary/40 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all font-medium"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Briefcase size={18} />
              Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6 mt-8 pt-8 border-t border-border/40"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground font-mono">4+</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Projects</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground font-mono">5+</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Tech Stacks</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for freelance</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
