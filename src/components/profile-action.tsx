"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
export function ProfileAction() {
  const router = useRouter();
  const [moving, setMoving] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  return (
    <Link
      href="/portfolio/"
      className="button full profile-action"
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          matchMedia("(prefers-reduced-motion: reduce)").matches
        )
          return;
        event.preventDefault();
        if (timer.current) return;
        setMoving(true);
        timer.current = setTimeout(() => router.push("/portfolio/"), 360);
      }}
    >
      <span className="profile-action-label">{site.projectAction}</span>
      <span
        aria-hidden="true"
        className={"profile-arrow" + (moving ? " is-moving" : "")}
      >
        ↗
      </span>
    </Link>
  );
}
