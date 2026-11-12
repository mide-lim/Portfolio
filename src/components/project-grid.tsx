import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ featured = false }: { featured?: boolean }) {
  return (
    <div className={"projects" + (featured ? " featured-grid" : "")}>
      {(featured ? projects.slice(0, 4) : projects).map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
