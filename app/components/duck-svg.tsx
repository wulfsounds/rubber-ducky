export default function DuckSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 260 230"
      role="img"
      aria-label="Rubber ducky"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="122" cy="214" rx="88" ry="9" fill="#000" opacity="0.12" />

      {/* Tail */}
      <path d="M48 150 Q18 118 26 92 Q52 112 78 128 Z" fill="#FFCC1F" />

      {/* Body */}
      <path
        d="M30 150 Q30 104 92 108 L170 112 Q218 118 214 160 Q210 208 128 208 Q38 208 30 150 Z"
        fill="#FFD43B"
      />
      {/* Body shading */}
      <path
        d="M36 166 Q60 200 128 200 Q200 200 212 162 Q210 208 128 208 Q46 208 36 166 Z"
        fill="#F2B705"
      />

      {/* Wing */}
      <path
        d="M78 140 Q112 118 150 138 Q148 172 108 176 Q76 174 78 140 Z"
        fill="#F7C21A"
      />
      <path
        d="M90 150 Q112 140 134 150"
        fill="none"
        stroke="#E5A800"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Head */}
      <circle cx="162" cy="78" r="48" fill="#FFD43B" />
      {/* Head highlight */}
      <ellipse
        cx="142"
        cy="56"
        rx="14"
        ry="9"
        fill="#fff"
        opacity="0.55"
        transform="rotate(-30 142 56)"
      />

      {/* Beak */}
      <path d="M200 80 Q232 70 246 84 Q232 92 204 94 Z" fill="#FF8C1A" />
      <path d="M204 94 Q230 92 240 98 Q226 110 202 102 Z" fill="#E86F00" />

      {/* Cheek */}
      <ellipse cx="186" cy="96" rx="9" ry="5.5" fill="#FF9D7A" opacity="0.7" />

      {/* Eye */}
      <circle cx="178" cy="66" r="8" fill="#1F1A17" />
      <circle cx="181" cy="63" r="2.8" fill="#fff" />
    </svg>
  );
}
