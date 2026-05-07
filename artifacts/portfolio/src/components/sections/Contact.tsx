import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[30rem] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      
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
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">together.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Whether you need to automate a workflow, build a robust web application, or integrate AI into your systems, I'm ready to help.
            </p>

            <div className="space-y-6">
              <a href="mailto:contact@example.com" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group w-fit">
                <div className="p-3 rounded-full bg-card border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium text-lg">contact@example.com</span>
              </a>
              
              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group w-fit">
                <div className="p-3 rounded-full bg-card border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <Github size={20} />
                </div>
                <span className="font-medium text-lg">GitHub Profile</span>
              </a>

              <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group w-fit">
                <div className="p-3 rounded-full bg-card border border-border group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-medium text-lg">Upwork Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 relative overflow-hidden">
            {/* Success Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-background/95 flex flex-col items-center justify-center z-20">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                  <Send size={24} className="ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent</h3>
                <p className="text-muted-foreground text-center px-6">I'll get back to you as soon as possible.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-5xl mt-24 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} Abdulrahman. All rights reserved.</p>
        <p>Built with React, Vite & Tailwind</p>
      </div>
    </section>
  );
}
