import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingDetails } from '@/config/weddingDetails';
import { Diya, DiyaRow } from '@/components/Diya';
import { GaneshaMotif, Rangoli } from '@/components/Decorations';
import { FloatingPetals } from '@/components/Petals';
import { OrnamentalDivider } from '@/components/Ornaments';

interface GaneshaWelcomeProps {
  onEnter: () => void;
}

export function GaneshaWelcome({ onEnter }: GaneshaWelcomeProps) {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = useCallback(() => {
    if (doorsOpen || isExiting) return;
    setDoorsOpen(true);

    // Wait for door animation then trigger exit
    setTimeout(() => {
      setIsExiting(true);
    }, 2800);

    setTimeout(() => {
      onEnter();
    }, 3400);
  }, [doorsOpen, isExiting, onEnter]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background behind doors — revealed as they open */}
          <div className="absolute inset-0">
            <img
              src={weddingDetails.images.mandap}
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4a0e0e]/60 via-[#6b1d1d]/40 to-[#4a0e0e]/70" />
            {/* Warm golden glow emanating from center */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(232,115,29,0.15) 40%, transparent 70%)',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={doorsOpen ? { opacity: 1, scale: 1.5 } : { opacity: 0.3, scale: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </div>

          {/* Floating petals */}
          <FloatingPetals count={12} className="z-10" />

          {/* Rangoli at the bottom */}
          <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 pb-4">
            <Rangoli className="w-32 md:w-48 opacity-40" />
          </div>

          {/* Diya row at the bottom */}
          <div className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 md:bottom-24">
            <DiyaRow count={5} />
          </div>

          {/* Central Ganesha content */}
          <div className="relative z-20 flex h-full flex-col items-center justify-center px-4">
            {/* Ganesha motif */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute inset-0 animate-glow-pulse rounded-full bg-gold-gradient blur-2xl opacity-30" />
              <GaneshaMotif className="relative w-32 h-32 md:w-44 md:h-44" />
            </motion.div>

            {/* Sanskrit blessing */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-serif-display mt-6 text-2xl md:text-4xl text-gold-gradient text-center text-shadow-gold"
            >
              ॥ श्री गणेशाय नमः ॥
            </motion.p>

            {/* English subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-body mt-3 text-base md:text-lg text-ivory/80 text-center"
            >
              With the blessings of Lord Ganesha
            </motion.p>

            <OrnamentalDivider className="my-6" color="#c9a227" />

            {/* Tap to Enter button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              onClick={handleEnter}
              disabled={doorsOpen}
              aria-label="Tap to enter the wedding invitation"
              className="group relative cursor-pointer overflow-hidden rounded-full border-2 border-[#c9a227] bg-[#4a0e0e]/80 px-8 py-3 md:px-12 md:py-4 backdrop-blur-sm transition-all hover:border-[#f0d97a] hover:bg-[#6b1d1d]/80 disabled:cursor-default"
            >
              <span className="font-serif-display text-lg md:text-xl text-[#f0d97a] tracking-wider">
                Tap to Enter
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </motion.button>

            {/* Decorative side diyas */}
            <div className="absolute left-4 bottom-1/3 hidden md:block">
              <Diya className="w-16" />
            </div>
            <div className="absolute right-4 bottom-1/3 hidden md:block">
              <Diya className="w-16" />
            </div>
          </div>

          {/* Left door */}
          <div
            className="absolute inset-y-0 left-0 z-30 w-1/2"
            style={{ perspective: '1200px' }}
          >
            <motion.div
              className="h-full w-full origin-left"
              initial={{ rotateY: 0 }}
              animate={doorsOpen ? { rotateY: -110 } : { rotateY: 0 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
            >
              <DoorPanel side="left" />
            </motion.div>
          </div>

          {/* Right door */}
          <div
            className="absolute inset-y-0 right-0 z-30 w-1/2"
            style={{ perspective: '1200px' }}
          >
            <motion.div
              className="h-full w-full origin-right"
              initial={{ rotateY: 0 }}
              animate={doorsOpen ? { rotateY: 110 } : { rotateY: 0 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
            >
              <DoorPanel side="right" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Individual wooden door panel with traditional carvings
function DoorPanel({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Wood texture base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #3d2414 0%, #5c3a1e 30%, #4a2c16 60%, #3d2414 100%)',
        }}
      />

      {/* Wood grain lines */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(${
            isLeft ? '90deg' : '90deg'
          }, transparent 0px, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)`,
        }}
      />

      {/* Outer gold frame */}
      <div className="absolute inset-0 border-4 border-[#c9a227]/60" />
      <div className="absolute inset-2 border border-[#c9a227]/30" />

      {/* Inner decorative arch */}
      <div className="absolute left-1/2 top-6 w-[85%] -translate-x-1/2">
        <svg viewBox="0 0 100 80" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M5 80V25C5 12 15 5 25 5H75C85 5 95 12 95 25V80"
            stroke="#c9a227"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M10 80V28C10 16 18 10 28 10H72C82 10 90 16 90 28V80"
            stroke="#c9a227"
            strokeWidth="0.8"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Carved panels */}
      <div className="absolute inset-x-4 top-[20%] bottom-4 flex flex-col gap-3">
        {/* Top panel — circular motif */}
        <div className="flex items-center justify-center py-3">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="30" stroke="#c9a227" strokeWidth="1" opacity="0.4" />
            <circle cx="35" cy="35" r="22" stroke="#c9a227" strokeWidth="0.5" opacity="0.3" />
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x = 35 + Math.cos(angle) * 25;
              const y = 35 + Math.sin(angle) * 25;
              return <circle key={i} cx={x} cy={y} r="2" fill="#c9a227" opacity="0.3" />;
            })}
            <circle cx="35" cy="35" r="6" fill="#c9a227" opacity="0.2" />
          </svg>
        </div>

        {/* Middle panels — carved rectangles */}
        <div className="grid grid-cols-1 gap-2">
          {[0, 1].map((row) => (
            <div
              key={row}
              className="relative flex items-center justify-center rounded border border-[#c9a227]/20 py-4"
              style={{ background: 'rgba(0,0,0,0.15)' }}
            >
              <svg width="100" height="30" viewBox="0 0 100 30" fill="none">
                <path
                  d="M10 15H40M60 15H90"
                  stroke="#c9a227"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <path
                  d="M45 15C45 10 50 5 50 10C50 5 55 10 55 15C55 20 50 25 50 20C50 25 45 20 45 15z"
                  fill="#c9a227"
                  opacity="0.2"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Bottom panel — lotus */}
        <div className="flex items-center justify-center py-2">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
            <path
              d="M30 5C25 15 20 20 10 22C18 26 24 30 30 38C36 30 42 26 50 22C40 20 35 15 30 5z"
              stroke="#c9a227"
              strokeWidth="0.8"
              fill="#c9a227"
              fillOpacity="0.1"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      {/* Door handle */}
      <div
        className={`absolute top-1/2 ${
          isLeft ? 'right-3' : 'left-3'
        } -translate-y-1/2`}
      >
        <div className="h-20 w-3 rounded-full bg-gradient-to-b from-[#d4af37] to-[#8b6914] shadow-lg">
          <div className="mt-2 h-3 w-3 rounded-full bg-[#f0d97a] mx-auto" />
        </div>
      </div>

      {/* Marigold garland on top of door */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <svg width="200" height="60" viewBox="0 0 200 60" fill="none">
          {Array.from({ length: 10 }).map((_, i) => {
            const x = 15 + i * 19;
            const y = 10 + Math.sin(i * 0.5) * 8;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="6" fill="#e8731d" opacity="0.7" />
                <circle cx={x} cy={y} r="3" fill="#f9a825" opacity="0.8" />
              </g>
            );
          })}
          <path
            d="M15 10Q100 40 185 10"
            stroke="#2d7a2d"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Shadow where doors meet */}
      {!isLeft && (
        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/40 to-transparent" />
      )}
      {isLeft && (
        <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/40 to-transparent" />
      )}
    </div>
  );
}
