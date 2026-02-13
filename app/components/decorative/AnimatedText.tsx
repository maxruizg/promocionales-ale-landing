import { useScrollAnimation } from "~/hooks/useScrollAnimation";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedText({ text, className, as: Tag = "h1" }: AnimatedTextProps) {
  const ref = useScrollAnimation<HTMLDivElement>();
  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => (
          <span
            key={i}
            className="scroll-hidden inline-block mr-[0.3em]"
            style={{ "--stagger": i } as React.CSSProperties}
          >
            {word}
          </span>
        ))}
      </Tag>
    </div>
  );
}
