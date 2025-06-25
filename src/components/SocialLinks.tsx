import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  const links = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/eric-cabrera",
      external: true
    },
    {
      icon: Mail,
      label: "eric-cabrera@live.com",
      // No href property, so it will not be clickable
      external: false
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
