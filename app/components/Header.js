"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  useEffect(() => {
    if (!theme) return;
    window.localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <header className="sticky top-0 z-20 border-b border-white/50 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-[#0B1120]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-lg font-display font-semibold text-ink dark:text-white">
            Pierce Xander Giron
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-slate dark:text-slate-300">
            AI Automation Specialist
          </p>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate md:flex dark:text-slate-300">
          <a className="transition hover:text-ink dark:hover:text-white" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-ink dark:hover:text-white" href="#tools">
            Tools
          </a>
          <a className="transition hover:text-ink dark:hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-full border border-ink/20 p-2 text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-ink"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm0-18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm9 9a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1zM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm13.95 5.36a1 1 0 0 1 1.41 0l.71.7a1 1 0 1 1-1.42 1.42l-.7-.71a1 1 0 0 1 0-1.41zM5.64 6.05a1 1 0 0 1 1.41 0l.7.71a1 1 0 0 1-1.41 1.41l-.7-.7a1 1 0 0 1 0-1.42zm12.02-1.41a1 1 0 0 1 0 1.41l-.7.71a1 1 0 1 1-1.42-1.41l.71-.71a1 1 0 0 1 1.41 0zM6.05 17.95a1 1 0 0 1 0 1.41l-.71.7a1 1 0 1 1-1.41-1.41l.7-.71a1 1 0 0 1 1.42 0z"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12.74 2a9 9 0 1 0 9.26 11.36 1 1 0 0 0-1.42-1.09A7 7 0 1 1 11.73 3.42 1 1 0 0 0 12.74 2z"
                />
              </svg>
            )}
            <span className="sr-only">
              {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            </span>
          </button>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-ink px-4 py-2 text-xs font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
