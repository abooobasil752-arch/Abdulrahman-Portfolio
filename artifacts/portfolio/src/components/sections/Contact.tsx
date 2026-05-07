import { motion } from "framer-motion";
import { Mail, Github, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-background border-t border-border/50 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-full h-[30rem] bg-gradient-to-t from-primary/8 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-4">
              <span className="w-8 h-[1px] bg-primary"></span>
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                together.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4 max-w-md">
              Whether you need to automate a workflow, build a robust web application,
              or integrate AI into your systems — I'm ready to help.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-mono mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for freelance work
            </div>

            <div className="space-y-5">
              <a
                href="mailto:abooobasil752@gmail.com"
                data-testid="link-email-contact"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group w-fit"
              >
                <div className="p-3 rounded-full bg-card border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground/60 font-mono uppercase tracking-wider mb-0.5">Email</div>
                  <span className="font-medium text-base group-hover:text-primary transition-colors">
                    abooobasil752@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/abooobasil752-arch"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github-contact"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group w-fit"
              >
                <div className="p-3 rounded-full bg-card border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground/60 font-mono uppercase tracking-wider mb-0.5">GitHub</div>
                  <span className="font-medium text-base group-hover:text-primary transition-colors">
                    abooobasil752-arch
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground w-fit">
                <div className="p-3 rounded-full bg-card border border-border">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground/60 font-mono uppercase tracking-wider mb-0.5">Upwork</div>
                  <span className="font-medium text-base text-muted-foreground/60 text-sm">Profile coming soon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 relative overflow-hidden">
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-background/95 flex flex-col items-center justify-center z-20 rounded-2xl"
              >
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent</h3>
                <p className="text-muted-foreground text-center px-6">
                  I'll get back to you as soon as possible.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  data-testid="input-contact-name"
                  className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/40"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  data-testid="input-contact-email"
                  className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/40"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  data-testid="input-contact-message"
                  className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none placeholder:text-muted-foreground/40"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                data-testid="button-contact-submit"
                className="mt-1 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Abdulrahman. All rights reserved.</p>
          <p>Built by Abdulrahman</p>
        </div>
      </div>
    </section>
  );
}
