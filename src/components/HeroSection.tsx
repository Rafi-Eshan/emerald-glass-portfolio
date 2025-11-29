import { Button } from "./ui/button";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glass card container */}
          <div className="glass p-8 md:p-12 neo-raised">
            <div className="opacity-0 animate-slide-up">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="opacity-0 animate-slide-up animation-delay-200 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
Rafi Ahmed Eshan</span>
            </h1>

            <p className="opacity-0 animate-slide-up animation-delay-400 text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A passionate{" "}
              <span className="text-secondary font-medium">Creative Professional</span>{" "}
              specializing in 3D Design, Web Development & Automation.
            </p>

            <div className="opacity-0 animate-slide-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social links */}
            <div className="opacity-0 animate-scale-in animation-delay-600 flex justify-center gap-4">
              {[{
              icon: Linkedin,
              href: "https://www.linkedin.com/in/rafi-eshan/",
              label: "LinkedIn"
            }, {
              icon: Mail,
              href: "mailto:rafi.eshan@gmail.com",
              label: "Email"
            }].map(({
              icon: Icon,
              href,
              label
            }) => <a key={label} href={href} aria-label={label} target={label !== "Email" ? "_blank" : undefined} rel={label !== "Email" ? "noopener noreferrer" : undefined} className="p-3 glass rounded-xl hover:scale-110 hover:glow-accent transition-all duration-300">
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                </a>)}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>;
};
export default HeroSection;