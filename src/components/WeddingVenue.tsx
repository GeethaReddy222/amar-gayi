import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { weddingDetails } from '@/config/weddingDetails';
import { OrnamentalDivider, CornerOrnament } from '@/components/Ornaments';

export function WeddingVenue() {
  const { venue, weddingDate, muhurthamTime } = weddingDetails;

  const dateObj = new Date(weddingDate);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    venue.mapQuery
  )}`;

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    venue.mapQuery
  )}&output=embed`;

  return (
    <section
      className="relative overflow-hidden py-20 md:py-32"
      aria-label="Wedding venue and directions"
      style={{
        background: 'linear-gradient(180deg, #4a0e0e 0%, #3d2414 50%, #4a0e0e 100%)',
      }}
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif-display text-3xl md:text-5xl text-[#f0d97a] text-shadow-gold">
            Join Us for Our Special Day
          </h2>
          <OrnamentalDivider className="my-4" />
        </motion.div>

        {/* Venue card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative mt-8 overflow-hidden rounded-2xl border-2 border-[#c9a227]/40 bg-[#4a0e0e]/70 shadow-gold-glow"
        >
          <CornerOrnament className="absolute top-2 left-2 z-20" color="#c9a227" />
          <CornerOrnament className="absolute top-2 right-2 z-20" color="#c9a227" rotation={90} />

          {/* Venue background image */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img
              src={weddingDetails.images.venueHall}
              alt="Wedding venue decoration"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4a0e0e] via-[#4a0e0e]/40 to-transparent" />
          </div>

          {/* Venue details */}
          <div className="p-6 md:p-8">
            <h3 className="font-serif-display text-2xl md:text-3xl text-[#f0d97a]">
              {venue.name}
            </h3>

            <div className="mt-4 space-y-2">
              <p className="inline-flex items-start gap-2 text-ivory/80">
                <MapPin className="w-5 h-5 text-[#c9a227] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {venue.address}
                  <br />
                  {venue.city}, {venue.state}
                </span>
              </p>
              <p className="inline-flex items-center gap-2 text-ivory/80">
                <Clock className="w-5 h-5 text-[#c9a227] shrink-0" aria-hidden="true" />
                <span>
                  {formattedDate} &middot; {muhurthamTime}
                </span>
              </p>
            </div>

            {/* Embedded map */}
            <div className="mt-6 overflow-hidden rounded-lg border border-[#c9a227]/30">
              <iframe
                src={mapEmbedUrl}
                title={`Map of ${venue.name}`}
                className="w-full h-48 md:h-56"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>

            {/* Get Directions button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#c9a227] bg-[#4a0e0e]/80 px-8 py-3 font-serif-display text-lg text-[#f0d97a] transition-all hover:border-[#f0d97a] hover:bg-[#6b1d1d]/80"
              aria-label={`Get directions to ${venue.name}`}
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
