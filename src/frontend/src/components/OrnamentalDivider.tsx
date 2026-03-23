interface OrnamentalDividerProps {
  color?: string;
  className?: string;
}

export default function OrnamentalDivider({
  color = "var(--gold)",
  className = "",
}: OrnamentalDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <div
        style={{
          height: "1px",
          flex: 1,
          background: `linear-gradient(90deg, transparent, ${color})`,
        }}
      />
      <svg
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="ornamental divider"
      >
        <title>Ornamental Divider</title>
        <path
          d="M20 2 L22 8 L28 8 L23 12 L25 18 L20 14 L15 18 L17 12 L12 8 L18 8 Z"
          fill={color}
          opacity="0.9"
        />
        <circle cx="4" cy="10" r="2.5" fill={color} opacity="0.6" />
        <circle cx="36" cy="10" r="2.5" fill={color} opacity="0.6" />
        <circle cx="10" cy="10" r="1.5" fill={color} opacity="0.4" />
        <circle cx="30" cy="10" r="1.5" fill={color} opacity="0.4" />
      </svg>
      <div
        style={{
          height: "1px",
          flex: 1,
          background: `linear-gradient(90deg, ${color}, transparent)`,
        }}
      />
    </div>
  );
}
