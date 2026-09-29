import { motion } from 'framer-motion';
import { ArrowUp, Share2 } from 'lucide-react';
import { weddingDetails } from '@/config/weddingDetails';
import { OrnamentalDivider } from '@/components/Ornaments';
import { GaneshaMotif } from '@/components/Decorations';
import { FloatingPetals } from '@/components/Petals';
import { DiyaRow } from '@/components/Diya';

export function WeddingFooter() {
  const { bride, groom } = weddingDetails;

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppShare = () => {
    const url = window.location.href;
    const message = `With the blessings of Lord Ganesha, ${bride.firstName} & ${groom.firstName} cordially invite you to their wedding. Join us in celebrating our beautiful beginning. ${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer
      className="relative overflow-hidden py-20 md:py-32"
      aria-label="Closing blessings"
      style={{
        background: 'linear-gradient(180deg, #4a0e0e 0%, #3d2414 100%)',
      }}
    >
      <FloatingPetals count={15} className="z-0" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        {/* Ganesha motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <GaneshaMotif className="w-20 h-20 md:w-24 md:h-24" />
        </motion.div>

        <OrnamentalDivider className="my-4" />

        {/* Blessings text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif-display text-3xl md:text-5xl text-[#f0d97a] text-shadow-gold"
        >
          Your Presence Is Our Greatest Gift
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-body mt-4 text-base md:text-lg text-ivory/80"
        >
          We look forward to celebrating this beautiful beginning with you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-script text-2xl md:text-3xl text-[#f0d97a] mt-4"
        >
          With love and gratitude,
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-serif-display text-3xl md:text-4xl text-ivory mt-2"
        >
          {bride.firstName} <span className="font-script text-[#c9a227]">&</span> {groom.firstName}
        </motion.p>

        {/* Diyas */}
        <div className="mt-8">
          <DiyaRow count={3} />
        </div>

        <OrnamentalDivider className="my-8" />

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={handleWhatsAppShare}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#c9a227]/60 bg-[#4a0e0e]/80 px-6 py-3 font-body text-sm md:text-base text-[#f0d97a] transition-all hover:border-[#f0d97a] hover:bg-[#6b1d1d]/80"
            aria-label="Share invitation on WhatsApp"
          >
            <Share2 className="w-4 h-4" />
            Share on WhatsApp
          </button>

          <button
            onClick={handleBackToTop}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#c9a227]/60 bg-[#4a0e0e]/80 px-6 py-3 font-body text-sm md:text-base text-[#f0d97a] transition-all hover:border-[#f0d97a] hover:bg-[#6b1d1d]/80"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </motion.div>

        {/* Copyright */}
        <p className="mt-12 font-body text-xs text-ivory/40">
          ॥ शुभम् भवतु ॥ · Made with love for our families
        </p>
      </div>
    </footer>
  );
}
