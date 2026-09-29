import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '@/config/weddingDetails';
import { OrnamentalDivider } from '@/components/Ornaments';

export function WeddingDateReveal() {
  const [revealed, setRevealed] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { weddingDate, muhurthamTime } = weddingDetails;

  const dateObj = new Date(weddingDate);
  const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
  const fullDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleReveal = useCallback(() => {
    if (revealed) return;
    setRevealed(true);
    setDragProgress(100);
  }, [revealed]);

  // Pointer drag handlers
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (revealed) return;
    isDragging.current = true;
    startX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [revealed]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || revealed) return;
    const deltaX = e.clientX - startX.current;
    const containerWidth = scrollRef.current?.offsetWidth || 300;
    const progress = Math.min(100, Math.max(0, (deltaX / containerWidth) * 100));
    setDragProgress(progress);
    if (progress >= 80) {
      setRevealed(true);
      setDragProgress(100);
      isDragging.current = false;
    }
  }, [revealed]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
    if (!revealed && dragProgress < 80) {
      setDragProgress(0);
    }
  }, [revealed, dragProgress]);

  const revealPercent = revealed ? 100 : dragProgress;

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-20"
      aria-label="Wedding date reveal"
      style={{
        background: 'linear-gradient(180deg, #4a0e0e 0%, #3d2414 50%, #4a0e0e 100%)',
      }}
    >
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-script text-3xl md:text-5xl text-[#f0d97a] text-shadow-gold"
        >
          Unroll Our Wedding Date
        </motion.h2>

        <OrnamentalDivider className="my-4" />

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="relative mx-auto mt-8 w-full max-w-xl"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          role="button"
          tabIndex={0}
          aria-label="Drag to reveal wedding date, or tap the button below"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleReveal();
            }
          }}
          style={{ cursor: revealed ? 'default' : 'grab', touchAction: 'pan-y' }}
        >
          {/* Scroll handle left */}
          <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2">
            <ScrollHandle />
          </div>

          {/* Scroll body */}
          <div className="relative overflow-hidden rounded-lg" style={{ minHeight: '200px' }}>
            {/* Hidden content (revealed as scroll unrolls) */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-8"
              style={{
                background:
                  'linear-gradient(135deg, #f5ecd7 0%, #ede0c0 50%, #e0d0a8 100%)',
              }}
            >
              <p className="font-script text-2xl md:text-3xl text-[#9b1b1b]">
                The Auspicious Day
              </p>
              <OrnamentalDivider className="my-3" color="#c9a227" />
              <p className="font-serif-display text-3xl md:text-5xl font-medium text-[#6b1d1d]">
                {weekday}
              </p>
              <p className="font-body text-xl md:text-2xl text-[#8b6914] mt-2">
                {fullDate}
              </p>
              <div className="mt-4 rounded-full border border-[#c9a227] px-6 py-2">
                <span className="font-serif-display text-lg md:text-xl text-[#9b1b1b]">
                  Muhurtham: {muhurthamTime}
                </span>
              </div>
            </div>

            {/* Covering flap that retracts */}
            <motion.div
              className="absolute inset-0 z-10 flex items-center justify-center"
              style={{
                background:
                  'linear-gradient(135deg, #3d2414 0%, #5c3a1e 50%, #3d2414 100%)',
                clipPath: `inset(0 ${revealPercent}% 0 0)`,
                transition: revealed ? 'clip-path 1.5s ease-in-out' : 'clip-path 0.1s linear',
              }}
            >
              {!revealed && (
                <div className="text-center">
                  <p className="font-body text-sm md:text-base text-[#f0d97a]/70 px-8">
                    Drag or tap to reveal
                  </p>
                  <motion.div
                    className="mt-2 text-3xl"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span className="text-[#c9a227]">‹ ›</span>
                  </motion.div>
                </div>
              )}
            </motion.div>

            {/* Golden shimmer when revealed */}
            {revealed && (
              <motion.div
                className="pointer-events-none absolute inset-0 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, delay: 0.5 }}
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(240,217,122,0.4) 50%, transparent 100%)',
                }}
              />
            )}
          </div>

          {/* Scroll handle right */}
          <div className="absolute right-0 top-1/2 z-20 -translate-y-1/2">
            <ScrollHandle />
          </div>
        </div>

        {/* Tap to reveal button */}
        {!revealed && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleReveal}
            className="mt-6 rounded-full border-2 border-[#c9a227] bg-[#4a0e0e]/80 px-8 py-3 font-serif-display text-lg text-[#f0d97a] transition-all hover:border-[#f0d97a] hover:bg-[#6b1d1d]/80"
            aria-label="Tap to reveal the wedding date"
          >
            Tap to Reveal
          </motion.button>
        )}

        {/* Scroll down hint after reveal */}
        {revealed && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 font-body text-sm text-ivory/60 tracking-widest uppercase"
          >
            Continue scrolling
          </motion.p>
        )}
      </div>
    </section>
  );
}

function ScrollHandle() {
  return (
    <svg width="30" height="80" viewBox="0 0 30 80" fill="none" aria-hidden="true">
      {/* Wooden handle */}
      <rect x="8" y="5" width="14" height="70" rx="7" fill="#5c3a1e" />
      <rect x="10" y="8" width="10" height="64" rx="5" fill="#3d2414" />
      {/* Gold caps */}
      <ellipse cx="15" cy="8" rx="10" ry="5" fill="#c9a227" />
      <ellipse cx="15" cy="72" rx="10" ry="5" fill="#c9a227" />
      <ellipse cx="15" cy="6" rx="8" ry="3" fill="#f0d97a" opacity="0.6" />
      <ellipse cx="15" cy="74" rx="8" ry="3" fill="#f0d97a" opacity="0.6" />
    </svg>
  );
}
