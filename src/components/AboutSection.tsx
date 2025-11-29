import { Code2, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive interfaces with attention to every detail.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and delivering lightning-fast experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams to bring ideas to life.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Turning Ideas Into{" "}
              <span className="gradient-text">Reality</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About text */}
            <div className="glass p-8 neo-raised">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a full-stack developer with over 5 years of experience building 
                web applications. My journey started with curiosity about how things 
                work on the internet, and it has evolved into a passion for creating 
                seamless digital experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I specialize in{" "}
                <span className="text-secondary font-medium">React</span>,{" "}
                <span className="text-secondary font-medium">TypeScript</span>, and{" "}
                <span className="text-secondary font-medium">Node.js</span>, with a 
                keen eye for design and user experience. I believe in writing code 
                that's not just functional, but elegant.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source, or sharing knowledge with the community.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="glass p-6 neo-flat hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
