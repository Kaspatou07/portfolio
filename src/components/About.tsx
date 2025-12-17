import { Card } from "@/components/ui/card";
import { Code2, Database, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Stack Frontend",
    description: "React, TypeScript, Next.js — hooks, routing, state management",
  },
  {
    icon: Database,
    title: "Stack Backend",
    description: "Prisma, PostgreSQL, Node.js, Express — API REST, JWT"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lighthouse, lazy loading, optimisation bundle, CI/CD",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Responsive, accessibilité, design system léger, UX claire",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">À propos de moi</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Développeur passionné, axé sur la création de solutions numériques performantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-smooth hover:shadow-glow group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
