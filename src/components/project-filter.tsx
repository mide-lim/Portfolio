"use client";
import { useState } from "react";
import { projects } from "@/content/projects";
import { ProjectCard } from "./project-card";

const filters = [
  { id: "all", label: "Todos" },
  { id: "author", label: "Autorais & IA" },
  { id: "42", label: "42 Rio" },
  { id: "systems", label: "Sistemas & infraestrutura" },
];
export function ProjectFilter() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter(
    (project) => filter === "all" || project.group.includes(filter),
  );
  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar projetos">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            className={filter === item.id ? "active" : ""}
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} projetos
      </p>
      <div className="projects">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
