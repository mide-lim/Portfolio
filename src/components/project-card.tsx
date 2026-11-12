import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectCover } from "./project-cover";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-card" href={"/portfolio/" + project.id + "/"}>
      <ProjectCover project={project} />
      <div className="card-copy">
        <small>{project.category}</small>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
      </div>
    </Link>
  );
}
