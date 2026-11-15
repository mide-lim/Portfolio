import Link from "next/link";
import { resume } from "@/content/resume";
import { site } from "@/content/site";
import { ArrowText } from "@/components/ui/arrow-text";
import "./resume.css";

export const metadata = {
  title: "Resume",
  description: "Experiência profissional, formação, projetos e conhecimentos de Michel Marques.",
};

export default function ResumePage() {
  return (
    <article className="resume-page">
      <div className="page-hero resume-hero">
        <span className="eyebrow">RESUME · MICHEL MARQUES</span>
        <h1>{resume.title}</h1>
        <p className="intro">{resume.introduction}</p>
        <div className="resume-contact" aria-label="Contatos">
          <span>Rio de Janeiro, RJ</span>
          <a href={"tel:" + resume.phoneLink}>{resume.phoneDisplay}</a>
          <a href={"mailto:" + site.email}>{site.email}</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer"><ArrowText>{"LinkedIn ↗"}</ArrowText></a>
          <a href={site.github} target="_blank" rel="noopener noreferrer"><ArrowText>{"GitHub ↗"}</ArrowText></a>
        </div>
      </div>
      <section className="resume-section resume-summary" aria-labelledby="resume-summary-title">
        <div className="resume-section-label"><span>01</span><h2 id="resume-summary-title">Resumo profissional</h2></div>
        <p className="resume-lead">{resume.summary}</p>
      </section>
      <section className="resume-section" aria-labelledby="resume-experience-title">
        <div className="resume-section-label"><span>02</span><h2 id="resume-experience-title">Experiência profissional</h2></div>
        <div><p className="resume-employer">{resume.employer}</p><div className="resume-entries">{resume.experience.map(job => <article key={job.title} className="resume-entry"><div className="resume-entry-heading"><h3>{job.title}</h3><span className="resume-period">{job.period}</span></div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div></div>
      </section>
      <section className="resume-section" aria-labelledby="resume-education-title">
        <div className="resume-section-label"><span>03</span><h2 id="resume-education-title">Formação</h2></div>
        <div className="resume-entries">{resume.education.map(item=><article className="resume-entry" key={item.title}><h3>{item.title}</h3><p className="resume-place">{item.place}</p><p>{item.detail}</p></article>)}</div>
      </section>
      <section className="resume-section" aria-labelledby="resume-projects-title">
        <div className="resume-section-label"><span>04</span><h2 id="resume-projects-title">Projetos</h2></div>
        <div className="resume-entries"><article className="resume-entry"><div className="resume-entry-heading"><h3>{resume.featured.title}</h3><a className="text-link" href={resume.featured.href} target="_blank" rel="noopener noreferrer"><ArrowText>{"Ver no GitHub ↗"}</ArrowText></a></div><p>{resume.featured.detail}</p></article><article className="resume-entry"><h3>Projetos da 42 Rio</h3><ul className="resume-project-list">{resume.projects.map(project=><li key={project.title}><Link href={project.href}><strong>{project.title}</strong> <ArrowText>{"↗"}</ArrowText></Link><span> — {project.detail}</span></li>)}</ul></article></div>
      </section>
      <section className="resume-section" aria-labelledby="resume-skills-title">
        <div className="resume-section-label"><span>05</span><h2 id="resume-skills-title">Conhecimentos</h2></div>
        <div className="resume-skill-grid">{resume.skills.map(skill=><div key={skill.title}><h3>{skill.title}</h3><p>{skill.detail}</p></div>)}</div>
      </section>
      <section className="resume-section" aria-labelledby="resume-languages-title">
        <div className="resume-section-label"><span>06</span><h2 id="resume-languages-title">Idiomas</h2></div>
        <p className="resume-lead">{resume.languages}</p>
      </section>
    </article>
  );
}
