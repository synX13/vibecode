import React from "react";

const colorClass: Record<string, string> = {
  teal: "text-teal",
  accent: "text-accent",
  ink: "font-semibold text-ink",
  muted: "text-[#5C6579]",
};

/**
 * Renders a string containing lightweight `{{color:content}}` tokens
 * (as stored in data/site.json) into React nodes with the matching
 * Tailwind color class. Falls back to plain text for unknown tokens.
 */
export function renderRich(text: string): React.ReactNode {
  const parts = text.split(/(\{\{\w+:[^}]+\}\})/g);
  return parts.map((part, i) => {
    const match = part.match(/^\{\{(\w+):([^}]+)\}\}$/);
    if (match) {
      const [, color, content] = match;
      return (
        <span key={i} className={colorClass[color] ?? ""}>
          {content}
        </span>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}
