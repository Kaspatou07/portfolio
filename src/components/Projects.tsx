import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

type Project = {
  title: string;
  focus?: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Annuaire de restaurant",
    focus: "Focus : mobile-first, responsive, animations CSS, loader",
    description:
      "Création du site en suivant les maquettes fournies sur Figma. L'objectif de ce projet est de développer en mobile first et d'appliquer le responsive design. Parmi les demandes, création d'un loader, appliquer des animations CSS et keyframes.",
    tags: ["HTML", "CSS", "Sass"],
    image: "/images/ohmyfood.webp",
    githubUrl: "https://github.com/Kaspatou07/OhMyFood",
    liveUrl: "https://kaspatou07.github.io/OhMyFood/",
  },
  {
    title: "Refonte d'une app de location immobilière, Kasa",
    focus: "Rôle : refonte React, composants modulaires, routing",
    description:
      "Refonte du site Web Kasa avec utilisation d'une base de données. React a été utilisé pour le front-end notamment via la création de composants modulaires, ainsi que l'utilisation du système de routes pour créer plusieurs pages. Ce fut une expérience enrichissante de concevoir et de mettre en œuvre des composants en suivant la syntaxe spécifique de React. ",
    tags: ["React", "JavaScript", "Sass"],
    image: "/images/kasa.png",
    githubUrl: "https://github.com/Kaspatou07/Kasa",
    liveUrl: "https://kaspatou07.github.io/Kasa/",
  },
  {
    title: "Plateforme d’actualités tech avec gestion complète des articles",
    focus: "Rôle : API REST + auth JWT + back-office admin + éditeur riche",
    description:
      "Application web permettant de consulter des articles classés par catégorie, avec un espace administrateur sécurisé pour créer, modifier et publier du contenu via un éditeur riche.",
    tags: ["Node.js", "Express", "JWT", "Quill", "Render"],
    image: "/images/tech-news.png",
    githubUrl: "https://github.com/Kaspatou07/tech-news",
    liveUrl: "https://kaspatou07.github.io/tech-news/",
  },
  {
    title: "Débogage et mise en place de test pour 724events",
    focus: "Rôle : debug prod + reprise UI + tests (Jest / RTL)",
    description:
      "Débogage et remise en production d’un site vitrine pour une agence événementielle. Affichage dynamique des événements (cards, modales, carrousel, pagination, filtres). Mise en place de tests unitaires.",
    tags: ["React", "JavaScript", "Jest", "SCSS"],
    image: "/images/724events.png",
    githubUrl: "https://github.com/Kaspatou07/724events",
    liveUrl: "https://kaspatou07.github.io/724events/",
  },
  {
    title: "Projet Booki",
    focus: "Focus : intégration fidèle Figma + responsive",
    description:
      "Premiers pas dans l'univers HTML/CSS sur ce projet. Création d'une page responsive mobile, tablette et desktop à partir d'une maquette Figma.",
    tags: ["HTML", "CSS", "Figma"],
    image: "/images/booki.webp",
    githubUrl: "https://github.com/Kaspatou07/Booki",
    liveUrl: "https://kaspatou07.github.io/Booki/",
  },
  {
    title: "Gestion d'un site bancaire",
    focus: "Rôle : intégration API + state Redux",
    description:
      "Intégration du front-end et du back-end via une API. Transformation du site statique en application web responsive avec React et Redux.",
    tags: ["React", "Redux", "JavaScript"],
    image: "/images/argentbank.png",
    githubUrl: "https://github.com/Kaspatou07/Argentbank",
  },
  {
    title: "Projet Nina Carducci",
    focus: "Focus : accessibilité, SEO, performance (Lighthouse 90+)",
    description:
      "Optimisations de la one page d'une photographe afin de la rendre plus accessible aux utilisateurs ayant une déficience visuelle grâce aux principes d'accessibilités. Le redimensionnement et la conversion des images aux bon formats, permet d'améliorer les performances d'affichages. L'objectif demandé est d'obtenir un score d'au moins 90 sur Lighthouse. Une amélioration du SEO à notamment était effectuée en ajoutant une balise meta title, en renommant les images et en contribuant les balises ALT.",
    tags: ["HTML", "CSS", "Lighthouse"],
    image: "/images/carducci-projet.webp",
    githubUrl: "https://github.com/Kaspatou07/Ninacarducci",
    liveUrl: "https://kaspatou07.github.io/Ninacarducci",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = descRef.current;
    if (!el) return;

    const isOverflowing = el.scrollHeight > el.clientHeight;
    setCanExpand(isOverflowing);
  }, [project.description]);

  return (
    <Card className="overflow-hidden bg-card border-border transition-smooth hover:border-primary/50">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-smooth hover:scale-110"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold">{project.title}</h3>

        {project.focus && (
          <p className="text-sm font-medium text-primary/90 line-clamp-1">
            {project.focus}
          </p>
        )}

        <p
          ref={descRef}
          className={`text-muted-foreground ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>

        {canExpand && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            {expanded ? (
              <>
                Réduire <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Voir plus <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}

          {project.liveUrl && (
            <Button
              asChild
              size="sm"
              className="gap-2 transition-transform hover:animate-pulseHover">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-muted/30 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Mes projets</h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Une sélection de mes travaux récents et de mes projets parallèles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
