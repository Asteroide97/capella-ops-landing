type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center items-center" : "max-w-3xl";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`.trim()}>
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-4">
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl lg:text-[3rem]">
          {title}
        </h2>
        <p className="text-balance text-slate-700">{description}</p>
      </div>
    </div>
  );
}
