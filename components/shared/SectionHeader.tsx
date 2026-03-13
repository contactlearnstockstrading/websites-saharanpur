import ScrollReveal from "./ScrollReveal";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  className = "",
}: Props) {
  return (
    <ScrollReveal className={`text-center mb-14 ${className}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-body font-bold uppercase tracking-widest mb-4 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 border border-orange-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg font-body max-w-2xl mx-auto text-zinc-400">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
