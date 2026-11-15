import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ProjectCover } from "@/components/project-cover";
import { ProjectCard } from "@/components/project-card";
import { ArrowText } from "@/components/ui/arrow-text";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.id === slug);
  return { title: project?.name, description: project?.summary };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((project) => project.id === slug);
  if (!project) notFound();
  return (
    <>
      <div className="page-hero">
        <Link className="text-link" href="/portfolio/">
          <ArrowText>{"← Todos os projetos"}</ArrowText>
        </Link>
        <h1>{project.name}</h1>
        <p className="intro">{project.summary}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="detail-cover">
        <ProjectCover project={project} />
      </div>
      <p className="detail-note">Composição visual ilustrativa do projeto.</p>
      <div className="detail-copy">
        <h2>Sobre o projeto</h2>
        <div>
          <p>{project.description}</p>
          <p>{project.focus}</p>
          {project.repo && (
            <a
              className="button"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowText>{"Explorar código ↗"}</ArrowText>
            </a>
          )}
        </div>
      </div>
      <div className="section">
        <span className="eyebrow">CONTINUE EXPLORANDO</span>
        <div className="projects mt-[30px]">
          {projects
            .filter((item) => item.id !== project.id)
            .slice(0, 2)
            .map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
        </div>
      </div>
    </>
  );
}
