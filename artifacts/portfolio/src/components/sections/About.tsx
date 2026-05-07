import { motion } from "framer-motion";
import { Code2, Server, Workflow } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-background border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-12 items-center"
        >
          <div className="md:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[4/5] rounded-2xl border border-border bg-card overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-700" />
              
              {/* Overlay decor */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-muted-foreground/50">
                <span>01. ABOUT</span>
                <span>CIS_STUDENT</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <div className="h-1 w-12 bg-primary mb-2 rounded-full" />
                <h3 className="font-bold text-lg">System Thinker</h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-2">
              <span className="w-8 h-[1px] bg-primary"></span>
              About Me
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">systems & intelligence</span>.
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a Computer Information Systems student and IT trainee passionate about building practical solutions. My work centers on automation, AI tools, and intelligent systems that solve real-world problems.
              </p>
              <p>
                I don't just write code; I architect solutions. Whether it's streamlining repetitive Linux sysadmin tasks or integrating modern AI capabilities into web applications, I focus on efficiency, scalability, and clean execution.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col gap-3 p-5 rounded-xl border border-border/50 bg-card/50">
                <Code2 className="text-primary" size={24} />
                <h4 className="font-semibold text-foreground">Development</h4>
                <p className="text-sm text-muted-foreground">Clean, scalable code in Python & modern web tech.</p>
              </div>
              
              <div className="flex flex-col gap-3 p-5 rounded-xl border border-border/50 bg-card/50">
                <Server className="text-secondary" size={24} />
                <h4 className="font-semibold text-foreground">IT Support</h4>
                <p className="text-sm text-muted-foreground">Network troubleshooting & sysadmin automation.</p>
              </div>
              
              <div className="flex flex-col gap-3 p-5 rounded-xl border border-border/50 bg-card/50">
                <Workflow className="text-primary" size={24} />
                <h4 className="font-semibold text-foreground">AI Integration</h4>
                <p className="text-sm text-muted-foreground">Embedding intelligence into everyday workflows.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
