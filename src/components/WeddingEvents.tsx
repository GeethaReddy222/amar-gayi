import { motion } from 'framer-motion';
import {
  Sparkles,
  Flower2,
  Music,
  Flame,
  PartyPopper,
  MapPin,
  Clock,
  Calendar,
  type LucideIcon,
} from 'lucide-react';
import { weddingDetails, type WeddingEvent } from '@/config/weddingDetails';
import { OrnamentalDivider } from '@/components/Ornaments';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Flower2,
  Music,
  Flame,
  PartyPopper,
};

export function WeddingEvents() {
  const { events } = weddingDetails;

  return (
    <section
      className="relative overflow-hidden py-20 md:py-32"
      aria-label="Wedding events and ceremony schedule"
      style={{
        background: 'linear-gradient(180deg, #4a0e0e 0%, #3d2414 50%, #4a0e0e 100%)',
      }}
    >
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif-display text-3xl md:text-5xl text-[#f0d97a] text-shadow-gold">
            Our Wedding Celebrations
          </h2>
          <OrnamentalDivider className="my-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a227]/60 via-[#c9a227]/40 to-transparent" />

          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  const Icon = iconMap[event.icon] || Sparkles;
  const dateObj = new Date(event.date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  const directionsUrl = event.mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapQuery)}`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative mb-8 pl-16 md:pl-20"
    >
      {/* Timeline dot with icon */}
      <div className="absolute left-0 top-2 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full border-2 border-[#c9a227]/60 bg-[#4a0e0e] shadow-gold-glow">
        <Icon className="w-5 h-5 md:w-7 md:h-7 text-[#f0d97a]" aria-hidden="true" />
      </div>

      {/* Card */}
      <div className="rounded-xl border border-[#c9a227]/30 bg-[#4a0e0e]/60 p-5 md:p-6 backdrop-blur-sm transition-all hover:border-[#c9a227]/60 hover:bg-[#6b1d1d]/40">
        <h3 className="font-serif-display text-2xl md:text-3xl text-[#f0d97a]">
          {event.name}
        </h3>

        {/* Meta info */}
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          <span className="inline-flex items-center gap-1.5 text-sm text-ivory/80">
            <Calendar className="w-4 h-4 text-[#c9a227]" aria-hidden="true" />
            {formattedDate}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-ivory/80">
            <Clock className="w-4 h-4 text-[#c9a227]" aria-hidden="true" />
            {event.time}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-ivory/80">
            <MapPin className="w-4 h-4 text-[#c9a227]" aria-hidden="true" />
            {event.venue}
          </span>
        </div>

        {/* Description */}
        <p className="font-body mt-3 text-sm md:text-base text-ivory/70 leading-relaxed">
          {event.description}
        </p>

        {/* View location button */}
        {directionsUrl && (
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#c9a227]/50 px-4 py-1.5 text-sm text-[#f0d97a] transition-all hover:border-[#f0d97a] hover:bg-[#c9a227]/10"
          >
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            View Location
          </a>
        )}
      </div>
    </motion.div>
  );
}
