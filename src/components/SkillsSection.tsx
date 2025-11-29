const skills = [
  { name: "Blender (3D Design)", level: 85 },
  { name: "Web Design / Front-End", level: 80 },
  { name: "Python Automation", level: 75 },
  { name: "Google Sheets", level: 95 },
  { name: "MS Excel", level: 90 },
  { name: "Live Chat Support", level: 92 },
];

const techStack = [
  "Blender", "HTML5", "CSS3", "JavaScript", "Python",
  "Google Sheets", "MS Excel", "LiveChat", "Figma", "Git"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative gradient-bg">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              Skills & Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Technologies I{" "}
              <span className="gradient-text">Work With</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skill bars */}
            <div className="glass p-8 neo-raised">
              <h3 className="text-xl font-semibold mb-8 text-foreground">
                Core Skills
              </h3>
              <div className="space-y-6">
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-muted-foreground">{level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden neo-inset">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack tags */}
            <div className="glass p-8 neo-raised">
              <h3 className="text-xl font-semibold mb-8 text-foreground">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 glass rounded-xl text-sm font-medium text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { value: "2+", label: "Years Exp." },
                  { value: "27", label: "Age" },
                  { value: "BD", label: "Bangladesh" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="text-center p-4 rounded-xl bg-muted/30 neo-inset"
                  >
                    <div className="text-2xl md:text-3xl font-bold gradient-text">
                      {value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
