
import { Github, Mail, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  const links = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/EricNeural",
      external: true
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:eric-cabrera@live.com",
      external: false
    },
    {
      icon: Link,
      label: "Eric Cabrera Blog",
      href: "#",
      external: true
    }
  ];

  return (
    <section className="mb-12">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {links.map((link) => {
          const IconComponent = link.icon;
          return (
            <Button
              key={link.label}
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto min-w-[200px] h-12 text-base"
            >
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center gap-3"
              >
                <IconComponent className="w-5 h-5" />
                {link.label}
              </a>
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default SocialLinks;
