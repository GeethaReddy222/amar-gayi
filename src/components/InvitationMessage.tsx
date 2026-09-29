import { motion } from 'framer-motion';
import { weddingDetails } from '@/config/weddingDetails';
import { OrnamentalDivider, CornerOrnament, ArchTop, ArchBottom } from '@/components/Ornaments';
import { GaneshaMotif } from '@/components/Decorations';

export function InvitationMessage() {
  const { bride, groom } = weddingDetails;

  return (
    <section
      className="relative overflow-hidden py-20 md:py-32"
      aria-label="Wedding invitation message"
      style={{
        backgroundColor: '#f5ecd7',
        backgroundImage: `url(${weddingDetails.images.parchment})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Parchment overlay */}
      <div className="absolute inset-0 bg-[#f5ecd7]/80" />

      {/* Decorative arch top */}
      <ArchTop className="absolute top-0 left-0 right-0 h-16 md:h-20 text-[#c9a227]" />

      {/* Content */}
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

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif-display mt-4 text-3xl md:text-5xl font-medium text-[#6b1d1d]"
        >
          With the Blessings of Our Families
        </motion.h2>

        <OrnamentalDivider className="my-6 md:my-8" color="#c9a227" />

        {/* Invitation card with ornamental frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative rounded-lg border-2 border-[#c9a227]/40 bg-[#fdf8ee]/60 p-8 md:p-12 shadow-lg"
        >
          <CornerOrnament className="absolute top-1 left-1" color="#c9a227" rotation={0} />
          <CornerOrnament className="absolute top-1 right-1" color="#c9a227" rotation={90} />
          <CornerOrnament className="absolute bottom-1 right-1" color="#c9a227" rotation={180} />
          <CornerOrnament className="absolute bottom-1 left-1" color="#c9a227" rotation={270} />

          {/* Parents */}
          <p className="font-body text-sm md:text-base text-[#8b6914] tracking-wide">
            {bride.parents}
          </p>
          <p className="font-script text-2xl md:text-3xl text-[#6b1d1d] my-2">
            and
          </p>
          <p className="font-body text-sm md:text-base text-[#8b6914] tracking-wide">
            {groom.parents}
          </p>

          <OrnamentalDivider className="my-5" color="#c9a227" />

          {/* Invitation text */}
          <p className="font-body text-base md:text-lg text-[#3d2414] leading-relaxed">
            With immense joy and the blessings of the Almighty, we cordially invite
            you and your family to join us as we celebrate the sacred union of
          </p>

          <p className="font-serif-display text-3xl md:text-4xl text-[#9b1b1b] mt-4 mb-2">
            {bride.firstName} <span className="font-script text-[#c9a227]">&</span> {groom.firstName}
          </p>

          <p className="font-body text-base md:text-lg text-[#3d2414] leading-relaxed mt-4">
            Your gracious presence and blessings will make our special day even more
            memorable.
          </p>

          <p className="font-body text-base md:text-lg text-[#3d2414] leading-relaxed mt-4">
            Please join us to celebrate love, togetherness, and the beginning of a
            beautiful new journey.
          </p>
        </motion.div>

        {/* Family names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-1"
        >
          <p className="font-body text-sm md:text-base text-[#8b6914]">
            {bride.familyName}
          </p>
          <span className="font-script text-xl text-[#c9a227]">&</span>
          <p className="font-body text-sm md:text-base text-[#8b6914]">
            {groom.familyName}
          </p>
        </motion.div>
      </div>

      {/* Decorative arch bottom */}
      <ArchBottom className="absolute bottom-0 left-0 right-0 h-16 md:h-20 text-[#c9a227]" />
    </section>
  );
}
