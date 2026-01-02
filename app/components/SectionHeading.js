export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div
      className={`space-y-4 ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ocean">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-display font-semibold text-ink md:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base text-slate md:text-lg dark:text-white">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
