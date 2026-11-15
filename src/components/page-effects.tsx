"use client";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export function PageEffects() {
  const pathname = usePathname();
  const router = useRouter();
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const legacyRoute = () => {
      if (location.pathname !== "/") return;
      const hash = location.hash.slice(1);
      if (["home", "about", "resume", "portfolio", "blog", "services"].includes(hash))
        router.replace(hash === "home" ? "/" : "/" + hash + "/");
      else if (hash.startsWith("project-"))
        router.replace("/portfolio/" + encodeURIComponent(hash.slice(8)) + "/");
    };
    legacyRoute();
    addEventListener("hashchange", legacyRoute);
    return () => removeEventListener("hashchange", legacyRoute);
  }, [router, pathname]);
  useEffect(() => {
    let frame = 0;
    const progress = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - innerHeight;
        if (bar.current)
          bar.current.style.width =
            (total > 0 ? (scrollY / total) * 100 : 0) + "%";
        frame = 0;
      });
    };
    progress();
    addEventListener("scroll", progress, { passive: true });
    addEventListener("resize", progress);
    const nodes = document.querySelectorAll(
      "main .project-card,main .section-heading,main .timeline article,main .service-list article",
    );
    let observer: IntersectionObserver | undefined;
    if (
      !matchMedia("(prefers-reduced-motion: reduce)").matches &&
      "IntersectionObserver" in window
    ) {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer?.unobserve(entry.target);
            }
          }),
        { threshold: 0.08 },
      );
      nodes.forEach((node) => {
        node.classList.add("reveal");
        observer?.observe(node);
      });
    }
    return () => {
      removeEventListener("scroll", progress);
      removeEventListener("resize", progress);
      cancelAnimationFrame(frame);
      observer?.disconnect();
      nodes.forEach((node) => node.classList.remove("reveal", "visible"));
    };
  }, [pathname]);
  return <div ref={bar} className="progress" aria-hidden="true" />;
}
