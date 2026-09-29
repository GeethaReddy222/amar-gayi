import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { weddingDetails } from '@/config/weddingDetails';
import { FloatingPetals } from '@/components/Petals';
import { OrnamentalDivider } from '@/components/Ornaments';

export function WeddingHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const { bride, groom, weddingDate, muhurthamTime } = weddingDetails;

  const formattedDate = new Date(weddingDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Bride and groom invitation"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src={weddingDetails.images.heroBackground}
          alt="Traditional Hindu wedding mandap with floral decorations"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a0e0e]/50 via-[#6b1d1d]/40 to-[#4a0e0e]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a0e0e] via-transparent to-[#4a0e0e]/30" />
      </motion.div>

      {/* Floating petals */}
      <FloatingPetals count={10} className="z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center px-4 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-script text-2xl md:text-4xl text-[#f0d97a] text-shadow-gold"
        >
          Two Hearts, One Beautiful Journey
        </motion.p>

        <OrnamentalDivider className="my-4 md:my-6" />

        {/* Bride name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
          className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-light text-ivory text-shadow-dark"
        >
          {bride.firstName}
        </motion.h1>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="my-2 md:my-3"
        >
          <span className="font-script text-4xl md:text-6xl text-gold-gradient">&</span>
        </motion.div>

        {/* Groom name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.2, ease: 'easeOut' }}
          className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-light text-ivory text-shadow-dark"
        >
          {groom.firstName}
        </motion.h1>

        <OrnamentalDivider className="my-4 md:my-6" />

        {/* Invitation text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="font-body text-base md:text-xl text-ivory/90 max-w-md text-shadow-dark"
        >
          Together with our families
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="font-body text-base md:text-xl text-ivory/90 max-w-md mt-1 text-shadow-dark"
        >
          Invite you to celebrate our wedding
        </motion.p>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="mt-6 rounded-lg border border-[#c9a227]/40 bg-[#4a0e0e]/60 px-6 py-3 backdrop-blur-sm"
        >
          <p className="font-serif-display text-lg md:text-2xl text-[#f0d97a]">
            {formattedDate}
          </p>
          <p className="font-body text-sm md:text-base text-ivory/70 mt-1">
            Muhurtham: {muhurthamTime}
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs text-ivory/60 tracking-widest uppercase">
            Scroll
          </span>
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-[#c9a227]/50 pt-2">
            <motion.div
              className="h-2 w-1 rounded-full bg-[#f0d97a]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
