// Ornate Indian arch / temple-inspired decorative border SVGs
// Used as section dividers and frame elements

interface ArchProps {
  className?: string;
  strokeColor?: string;
}

export function ArchTop({ className = '', strokeColor = '#c9a227' }: ArchProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 50V20C0 9 9 0 20 0H80C90 0 100 8 100 18C100 8 110 0 120 0H180C191 0 200 9 200 20V50"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M5 50V22C5 12 12 5 22 5H78C88 5 95 12 95 22V50"
        stroke={strokeColor}
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M105 50V22C105 12 112 5 122 5H178C188 5 195 12 195 22V50"
        stroke={strokeColor}
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      {/* Central ornament */}
      <circle cx="100" cy="18" r="3" fill={strokeColor} opacity="0.6" />
      <path d="M97 18L100 15L103 18L100 21z" fill={strokeColor} opacity="0.4" />
    </svg>
  );
}

export function ArchBottom({ className = '', strokeColor = '#c9a227' }: ArchProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 0V30C0 41 9 50 20 50H80C90 50 100 42 100 32C100 42 110 50 120 50H180C191 50 200 41 200 30V0"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M5 0V28C5 38 12 45 22 45H78C88 45 95 38 95 28V0"
        stroke={strokeColor}
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M105 0V28C105 38 112 45 122 45H178C188 45 195 38 195 28V0"
        stroke={strokeColor}
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      <circle cx="100" cy="32" r="3" fill={strokeColor} opacity="0.6" />
    </svg>
  );
}

// Ornamental divider with central motif
export function OrnamentalDivider({
  className = '',
  color = '#c9a227',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
        <path
          d="M0 10H30M50 10H80"
          stroke={color}
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="35" cy="10" r="2" fill={color} />
        <circle cx="45" cy="10" r="2" fill={color} />
      </svg>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2z"
          fill={color}
          opacity="0.7"
        />
      </svg>
      <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
        <path
          d="M0 10H30M50 10H80"
          stroke={color}
          strokeWidth="1"
          opacity="0.6"
        />
        <circle cx="35" cy="10" r="2" fill={color} />
        <circle cx="45" cy="10" r="2" fill={color} />
      </svg>
    </div>
  );
}

// Corner ornament for cards
export function CornerOrnament({
  className = '',
  color = '#c9a227',
  rotation = 0,
}: {
  className?: string;
  color?: string;
  rotation?: number;
}) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M2 2C2 15 2 30 2 38M2 2C15 2 30 2 38 2"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M2 12C8 12 12 8 12 2"
        stroke={color}
        strokeWidth="0.8"
        opacity="0.5"
      />
      <circle cx="6" cy="6" r="2" fill={color} opacity="0.4" />
    </svg>
  );
}
