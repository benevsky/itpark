export function Logomark({ className }: { className?: string }) {
  // App-icon-стиль: squircle-плашка с градиентом + знак (хребет Тянь-Шаня).
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      style={{ filter: "drop-shadow(0 3px 8px rgba(22,163,74,0.38))" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nomadTile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2bd06a" />
          <stop offset="55%" stopColor="#19a850" />
          <stop offset="100%" stopColor="#127a3a" />
        </linearGradient>
      </defs>

      {/* tile */}
      <rect x="1" y="1" width="38" height="38" rx="10.5" fill="url(#nomadTile)" />
      {/* glossy top highlight */}
      <path d="M1 11.5 Q1 1 11.5 1 H28.5 Q39 1 39 11.5 V18 Q20 12 1 18 Z" fill="#ffffff" opacity="0.14" />
      {/* mountain ridge */}
      <polyline
        points="9,28.5 16,16 21,22.5 28,11.5 31,28.5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* baseline */}
      <path d="M8.5 28.5 H31.5" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
      {/* summit node */}
      <circle cx="28" cy="11.5" r="2.7" fill="#ffffff" />
    </svg>
  );
}
