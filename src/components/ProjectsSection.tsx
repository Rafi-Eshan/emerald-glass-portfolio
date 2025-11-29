import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "3D Product Visualization",
    description: "Creating photorealistic 3D product renders and animations using Blender for various clients.",
    tags: ["Blender", "3D Modeling", "Animation", "Rendering"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    liveUrl: "#",
  },
  {
    title: "Customer Support Dashboard",
    description: "Excel-based dashboard for tracking support metrics and customer satisfaction at Axilweb.",
    tags: ["MS Excel", "Data Analysis", "Dashboard", "Reporting"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveUrl: "#",
  },
  {
    title: "Automated Data Processing",
    description: "Python scripts for automating repetitive data entry and processing tasks, saving hours of manual work.",
    tags: ["Python", "Automation", "Data Processing", "Scripts"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    liveUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing my work with glassmorphism and neomorphic design.",
    tags: ["HTML", "CSS", "JavaScript", "Web Design"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    liveUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full border border-accent/20">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills in 3D design, 
              automation, and data management.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group glass neo-raised overflow-hidden hover:scale-[1.02] transition-all duration-500"
              >
                {/* Project image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button variant="glass" size="icon" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more button */}
          <div className="text-center mt-12">
            <Button variant="glass" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
