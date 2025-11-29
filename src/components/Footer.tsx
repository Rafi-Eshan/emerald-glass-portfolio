import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/rafi.eshan/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/rafi_eshan/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/rafi_eshan", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rafi-eshan/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rafi.eshan@gmail.com", label: "Email" },
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
                Rafi Ahmed Eshan
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Creative Professional | 3D Designer | Web Developer
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
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
              © {new Date().getFullYear()} Rafi Ahmed Eshan. Built with passion and{" "}
              <span className="text-accent">♥</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
