import { Box, Code2, FileSpreadsheet, Zap } from "lucide-react";

const highlights = [
  {
    icon: Box,
    title: "3D Design",
    description: "Creating stunning 3D visuals and animations using Blender.",
  },
  {
    icon: Code2,
    title: "Web Design",
    description: "Building modern, responsive front-end experiences.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamlining workflows with Python automation scripts.",
  },
  {
    icon: FileSpreadsheet,
    title: "Data Management",
    description: "Expert in Google Sheets & MS Excel for data solutions.",
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
                I'm Rafi Ahmed Eshan, a Bangladeshi creative professional with a 
                diverse skill set spanning 3D design, web development, and automation. 
                I love bringing ideas to life through visual design and efficient solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Since April 2022, I've been working as a{" "}
                <span className="text-secondary font-medium">Live Chat Support Agent</span> at{" "}
                <span className="text-secondary font-medium">Axilweb</span>, providing 
                customer support via LiveChat for Northwest Career College and Driving School.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I work extensively with{" "}
                <span className="text-secondary font-medium">Google Sheets</span> and{" "}
                <span className="text-secondary font-medium">MS Excel</span>, creating 
                data-driven solutions and streamlining processes through automation.
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
