interface RangoliProps {
  className?: string;
  color?: string;
}

// Rangoli — traditional circular floor art pattern
export function Rangoli({ className = '', color = '#c9a227' }: RangoliProps) {
  return (
    <svg
      className={`animate-slow-spin ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="1" opacity="0.3" />
      <circle cx="100" cy="100" r="88" stroke={color} strokeWidth="0.5" opacity="0.4" />

      {/* Petal ring */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 80;
        const y = 100 + Math.sin(angle) * 80;
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="10"
            ry="5"
            fill={color}
            opacity="0.2"
            transform={`rotate(${i * 22.5} ${x} ${y})`}
          />
        );
      })}

      {/* Inner circle */}
      <circle cx="100" cy="100" r="60" stroke={color} strokeWidth="0.8" opacity="0.5" />
      <circle cx="100" cy="100" r="52" stroke={color} strokeWidth="0.5" opacity="0.4" />

      {/* Inner petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x = 100 + Math.cos(angle) * 45;
        const y = 100 + Math.sin(angle) * 45;
        return (
          <path
            key={i}
            d={`M100 100 Q${x - 8} ${y - 8} ${x} ${y} Q${x + 8} ${y + 8} 100 100z`}
            fill={color}
            opacity="0.15"
          />
        );
      })}

      {/* Center mandala */}
      <circle cx="100" cy="100" r="25" stroke={color} strokeWidth="1" opacity="0.6" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 100 + Math.cos(angle) * 15;
        const y1 = 100 + Math.sin(angle) * 15;
        const x2 = 100 + Math.cos(angle) * 25;
        const y2 = 100 + Math.sin(angle) * 25;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="0.8"
            opacity="0.5"
          />
        );
      })}

      {/* Center dot */}
      <circle cx="100" cy="100" r="8" fill={color} opacity="0.3" />
      <circle cx="100" cy="100" r="4" fill={color} opacity="0.5" />
    </svg>
  );
}

// Ganesha motif — stylized decorative representation
export function GaneshaMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Halo */}
      <circle cx="60" cy="55" r="50" stroke="#c9a227" strokeWidth="0.5" opacity="0.3" />
      <circle cx="60" cy="55" r="45" stroke="#c9a227" strokeWidth="0.3" opacity="0.2" />

      {/* Head */}
      <ellipse cx="60" cy="45" rx="28" ry="26" fill="#c9a227" opacity="0.12" />
      <ellipse cx="60" cy="45" rx="25" ry="23" stroke="#c9a227" strokeWidth="1" opacity="0.5" />

      {/* Crown */}
      <path
        d="M45 25L50 15L55 22L60 12L65 22L70 15L75 25"
        stroke="#c9a227"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />

      {/* Ears (elephant) */}
      <ellipse cx="32" cy="42" rx="10" ry="14" fill="#c9a227" opacity="0.1" />
      <ellipse cx="32" cy="42" rx="8" ry="12" stroke="#c9a227" strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="88" cy="42" rx="10" ry="14" fill="#c9a227" opacity="0.1" />
      <ellipse cx="88" cy="42" rx="8" ry="12" stroke="#c9a227" strokeWidth="0.8" opacity="0.4" />

      {/* Eyes */}
      <ellipse cx="50" cy="45" rx="3" ry="4" fill="#c9a227" opacity="0.5" />
      <ellipse cx="70" cy="45" rx="3" ry="4" fill="#c9a227" opacity="0.5" />

      {/* Trunk — curved */}
      <path
        d="M60 55C58 65 55 72 50 78C48 82 50 86 54 86C58 86 60 82 60 78"
        stroke="#c9a227"
        strokeWidth="2.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />

      {/* Tusks */}
      <path
        d="M52 58C48 62 46 65 44 67"
        stroke="#c9a227"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M68 58C72 62 74 65 76 67"
        stroke="#c9a227"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />

      {/* Body */}
      <ellipse cx="60" cy="88" rx="22" ry="14" fill="#c9a227" opacity="0.1" />
      <ellipse cx="60" cy="88" rx="20" ry="12" stroke="#c9a227" strokeWidth="0.8" opacity="0.4" />

      {/* Four arms suggestion */}
      <path d="M42 82C36 78 33 72 35 67" stroke="#c9a227" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M78 82C84 78 87 72 85 67" stroke="#c9a227" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M44 90C38 93 35 96 35 100" stroke="#c9a227" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M76 90C82 93 85 96 85 100" stroke="#c9a227" strokeWidth="1" opacity="0.3" fill="none" />

      {/* Base / lotus */}
      <path
        d="M40 102C50 106 70 106 80 102"
        stroke="#c9a227"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M38 105C48 110 72 110 82 105"
        stroke="#c9a227"
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
