import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/pabarn-dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pa-barnouin",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
  },
];

const EMAIL = "pabarn.dev@gmail.com";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Me contacter</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Disponible pour missions freelance ou opportunités CDI.
            Réponse sous 24/48h.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border text-center space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Travaillons ensemble</h3>
            <p className="text-muted-foreground">
              Une question, un projet ou une opportunité ? Écrivez-moi.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social) => (
              <Button
                key={social.label}
                asChild
                variant="outline"
                size="lg"
                className="gap-2 hover:border-primary/50 transition-smooth"
              >
                <a href={social.href} target="_blank" rel="noreferrer">
                  <social.icon className="w-5 h-5" />
                  {social.label}
                </a>
              </Button>
            ))}
          </div>

          <div className="pt-6 space-y-2">
            <Button
              size="lg"
              className="shadow-glow transition-transform hover:animate-pulseHover"
              asChild
            >
              <a href={`mailto:${EMAIL}`}>Envoyer un email</a>
            </Button>

            <p className="text-sm text-muted-foreground select-all">
              {EMAIL}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
