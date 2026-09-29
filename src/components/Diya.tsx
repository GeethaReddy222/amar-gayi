import { motion } from 'framer-motion';

// Diya (traditional oil lamp) SVG with animated flame
interface DiyaProps {
  className?: string;
  flicker?: boolean;
}

export function Diya({ className = '', flicker = true }: DiyaProps) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Flame */}
      <motion.div
        className={flicker ? 'animate-flame-flicker' : ''}
        style={{ transformOrigin: 'bottom center' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 40 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer glow */}
          <ellipse cx="20" cy="28" rx="16" ry="22" fill="#ff8f00" opacity="0.25" />
          {/* Flame shape */}
          <path
            d="M20 8C16 16 12 22 12 32c0 6 4 12 8 12s8-6 8-12c0-10-4-16-8-24z"
            fill="#ff6f00"
          />
          <path
            d="M20 14C17 20 15 24 15 32c0 4 3 8 5 8s5-4 5-8c0-8-3-12-5-18z"
            fill="#ffc107"
          />
          <path
            d="M20 20C18.5 24 18 27 18 31c0 3 2 5 2 5s2-2 2-5c0-4-0.5-7-2-11z"
            fill="#fff59d"
          />
        </svg>
      </motion.div>

      {/* Diya bowl */}
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 60 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginTop: '-4px' }}
      >
        {/* Bowl shadow */}
        <ellipse cx="30" cy="25" rx="26" ry="5" fill="#000" opacity="0.3" />
        {/* Bowl body */}
        <path
          d="M4 16C4 16 12 28 30 28C48 28 56 16 56 16L52 12C52 12 44 22 30 22C16 22 8 12 8 12L4 16z"
          fill="#8b6914"
        />
        {/* Bowl rim */}
        <ellipse cx="30" cy="14" rx="24" ry="4" fill="#c9a227" />
        <ellipse cx="30" cy="13" rx="22" ry="3" fill="#a07814" />
        {/* Decorative dots */}
        <circle cx="18" cy="20" r="1" fill="#d4af37" />
        <circle cx="30" cy="23" r="1" fill="#d4af37" />
        <circle cx="42" cy="20" r="1" fill="#d4af37" />
      </svg>
    </div>
  );
}

// Row of diyas for decoration
export function DiyaRow({ count = 5, className = '' }: { count?: number; className?: string }) {
  return (
    <div
      className={`flex items-end justify-center gap-2 md:gap-4 ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
        >
          <Diya className="w-10 md:w-14" />
        </motion.div>
      ))}
    </div>
  );
}
