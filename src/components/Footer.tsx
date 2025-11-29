import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#contact", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Name */}
            <div className="text-center md:text-left">
              <a
                href="#home"
                className="text-2xl font-bold gradient-text hover:scale-105 inline-block transition-transform"
              >
                John Doe
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Full-Stack Developer & Designer
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-3 glass rounded-xl hover:scale-110 hover:glow-accent transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} John Doe. Built with passion and{" "}
              <span className="text-accent">♥</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
