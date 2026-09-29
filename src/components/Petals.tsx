import { motion } from 'framer-motion';

interface PetalProps {
  className?: string;
  style?: React.CSSProperties;
}

// Marigold petal SVG
export function MarigoldPetal({ className = '', style = {} }: PetalProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2C10 6 8 9 5 11c3 2 5 5 7 9 2-4 4-7 7-9-3-2-5-5-7-11z"
        fill="#e8731d"
        opacity="0.85"
      />
      <path
        d="M12 4C10.5 7 9 9 7 10.5c2 1.5 3.5 3.5 5 6.5 1.5-3 3-5 5-6.5-2-1.5-3.5-3.5-5-6.5z"
        fill="#f9a825"
        opacity="0.7"
      />
    </svg>
  );
}

interface PetalSystemProps {
  count?: number;
  className?: string;
  colors?: string[];
}

// Floating petals background effect
export function FloatingPetals({
  count = 15,
  className = '',
  colors = ['#e8731d', '#f9a825', '#d4af37', '#c9a227', '#ff6f00'],
}: PetalSystemProps) {
  const petals = Array.from({ length: count }, (_, i) => {
    const left = (i * 97 + 13) % 100;
    const delay = (i * 1.7) % 10;
    const duration = 8 + (i % 5) * 2;
    const size = 12 + (i % 4) * 6;
    const color = colors[i % colors.length];
    return { left, delay, duration, size, color, id: i };
  });

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.left}%`, top: '-5%' }}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{ y: '110vh', opacity: [0, 0.8, 0.8, 0], rotate: 360 }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C10 6 8 9 5 11c3 2 5 5 7 9 2-4 4-7 7-9-3-2-5-5-7-11z"
              fill={p.color}
              opacity="0.75"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
