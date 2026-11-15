import type { Project } from "@/content/projects";
import { ArrowText } from "@/components/ui/arrow-text";

export function ProjectCover({ project }: { project: Project }) {
  return (
    <div
      className={
        "cover " + (project.type === "web" ? "terminal" : project.type)
      }
      aria-hidden="true"
    >
      {project.type === "mb" && (
        <>
          <span className="word">
            MEGA
            <br />
            BRAIN.
          </span>
          <div className="orb" />
        </>
      )}
      {project.type === "cube" && (
        <>
          <div className="scene">
            <span />
          </div>
          <span className="cover-label">CUB3D / RAYCASTING</span>
        </>
      )}
      {(project.type === "terminal" || project.type === "web") && (
        <>
          <div className="bar">
            <i />
            <i />
            <i />
          </div>
          {project.type === "terminal" ? (
            <>
              <code>
                <span className="prompt">mide-lim $</span> echo hello | cat
                <br />
                hello
                <br />
                <span className="prompt">mide-lim $</span> pwd
                <br />
                /home/mide-lim
              </code>
              <span className="title">minishell_</span>
            </>
          ) : (
            <>
              <code>
                <span className="prompt">GET / HTTP/1.1</span>
                <br />
                Host: localhost
                <br />
                <br />
                HTTP/1.1 200 OK
              </code>
              <span className="title">webserv.</span>
            </>
          )}
        </>
      )}
      {project.type === "philo" && (
        <>
          <div className="table">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className="cover-label">THREADS / RECURSOS COMPARTILHADOS</span>
        </>
      )}
      {project.type === "infra" && (
        <>
          <div className="blocks">
            <span>NGINX</span>
            <span>WP</span>
            <span>DB</span>
          </div>
          <span className="cover-label">INCEPTION / CONTAINERS</span>
        </>
      )}
      <span className="open"><ArrowText>{"↗"}</ArrowText></span>
    </div>
  );
}
