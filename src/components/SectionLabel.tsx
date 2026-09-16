export default function SectionLabel({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <p
      className={`font-display text-lg text-green-dark ${
        align === "center" ? "text-center" : ""
      }`}
    >
      <span className="brush-underline italic">{children}</span>
    </p>
  );
}
