import { motion } from 'framer-motion';
import { CalendarHeart, Download } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';
import { weddingDetails } from '@/config/weddingDetails';
import { OrnamentalDivider } from '@/components/Ornaments';
import { DiyaRow } from '@/components/Diya';

export function WeddingCountdown() {
  const { weddingDate, muhurthamTime, venue } = weddingDetails;
  const countdown = useCountdown(weddingDate);

  const handleDownloadICS = () => {
    const ics = generateICS();
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wedding-invitation.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const generateICS = () => {
    const dt = new Date(weddingDate);
    const dtEnd = new Date(dt.getTime() + 3 * 60 * 60 * 1000); // 3 hour event
    const fmt = (d: Date) =>
      d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

    const { bride, groom } = weddingDetails;
    const summary = `Wedding of ${bride.firstName} & ${groom.firstName}`;
    const location = `${venue.name}, ${venue.address}, ${venue.city}, ${venue.state}`;
    const description = `Muhurtham: ${muhurthamTime}. With the blessings of our families, we cordially invite you to celebrate the sacred union of ${bride.firstName} and ${groom.firstName}.`;

    return [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@wedding-invitation`,
      `DTSTAMP:${fmt(new Date())}`,
      `DTSTART:${fmt(dt)}`,
      `DTEND:${fmt(dtEnd)}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      'BEGIN:VALARM',
      'TRIGGER:-P1D',
      'ACTION:DISPLAY',
      `DESCRIPTION:${summary} is tomorrow!`,
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');
  };

  if (!countdown.isValid) {
    return (
      <section
        className="relative flex items-center justify-center py-20 md:py-32"
        aria-label="Wedding countdown"
      >
        <div className="text-center">
          <p className="font-body text-lg text-ivory/80">
            Wedding date to be announced.
          </p>
        </div>
      </section>
    );
  }

  if (countdown.isComplete) {
    return (
      <section
        className="relative flex items-center justify-center overflow-hidden py-20 md:py-32"
        aria-label="Wedding day"
        style={{
          background: 'linear-gradient(180deg, #4a0e0e 0%, #6b1d1d 50%, #4a0e0e 100%)',
        }}
      >
        <FloatingGlowParticles />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <CalendarHeart className="w-16 h-16 md:w-20 md:h-20 text-[#f0d97a] mx-auto" />
            <h2 className="font-script text-4xl md:text-6xl text-[#f0d97a] mt-4 text-shadow-gold">
              Today is the Day!
            </h2>
            <OrnamentalDivider className="my-4" />
            <p className="font-body text-lg md:text-xl text-ivory/90 max-w-md mx-auto">
              The blessed day has arrived. Join us as we celebrate this beautiful
              union with love and joy.
            </p>
            <div className="mt-6">
              <DiyaRow count={5} />
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const units = [
    { label: 'Days', value: countdown.days },
    { label: 'Hours', value: countdown.hours },
    { label: 'Minutes', value: countdown.minutes },
    { label: 'Seconds', value: countdown.seconds },
  ];

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden py-20 md:py-32"
      aria-label="Wedding countdown"
      style={{
        background: 'linear-gradient(180deg, #4a0e0e 0%, #6b1d1d 50%, #4a0e0e 100%)',
      }}
    >
      <FloatingGlowParticles />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-script text-4xl md:text-6xl text-[#f0d97a] text-shadow-gold"
        >
          Counting Down to Forever
        </motion.h2>

        <OrnamentalDivider className="my-6" />

        {/* Countdown grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 md:grid-cols-4">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative rounded-xl border-2 border-[#c9a227]/50 bg-[#4a0e0e]/70 p-4 md:p-6 shadow-gold-glow"
            >
              {/* Corner ornaments */}
              <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-[#c9a227]/40" />
              <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-[#c9a227]/40" />
              <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-[#c9a227]/40" />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-[#c9a227]/40" />

              <motion.div
                key={unit.value}
                initial={{ scale: 0.9, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="font-serif-display text-4xl md:text-6xl font-light text-[#f0d97a]"
              >
                {String(unit.value).padStart(2, '0')}
              </motion.div>
              <p className="font-body text-xs md:text-sm text-ivory/70 uppercase tracking-widest mt-2">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Save the Date button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={handleDownloadICS}
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#c9a227] bg-[#4a0e0e]/80 px-8 py-3 font-serif-display text-lg text-[#f0d97a] transition-all hover:border-[#f0d97a] hover:bg-[#6b1d1d]/80"
          aria-label="Save the date — download calendar invitation"
        >
          <Download className="w-5 h-5" />
          Save the Date
        </motion.button>
      </div>
    </section>
  );
}

// Subtle glowing particles for the countdown background
function FloatingGlowParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    left: (i * 53 + 7) % 100,
    delay: (i * 0.7) % 5,
    duration: 4 + (i % 3) * 2,
    size: 3 + (i % 3) * 2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#f0d97a]"
          style={{
            left: `${p.left}%`,
            bottom: '0%',
            width: p.size,
            height: p.size,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.6, 0], y: -300 }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
