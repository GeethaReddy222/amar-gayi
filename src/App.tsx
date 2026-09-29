import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { GaneshaWelcome } from '@/components/GaneshaWelcome';
import { WeddingHero } from '@/components/WeddingHero';
import { InvitationMessage } from '@/components/InvitationMessage';
import { WeddingDateReveal } from '@/components/WeddingDateReveal';
import { WeddingCountdown } from '@/components/WeddingCountdown';
import { WeddingEvents } from '@/components/WeddingEvents';
import { WeddingVenue } from '@/components/WeddingVenue';
import { WeddingFooter } from '@/components/WeddingFooter';
import { MusicToggle } from '@/components/MusicToggle';

function App() {
  const [entered, setEntered] = useState(false);

  const handleEnter = useCallback(() => {
    setEntered(true);
  }, []);

  // Lock scroll until the guest enters
  useEffect(() => {
    if (!entered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      window.scrollTo({ top: 0 });
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [entered]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!entered && <GaneshaWelcome key="welcome" onEnter={handleEnter} />}
      </AnimatePresence>

      {entered && (
        <main>
          <WeddingHero />
          <InvitationMessage />
          <WeddingDateReveal />
          <WeddingCountdown />
          <WeddingEvents />
          <WeddingVenue />
          <WeddingFooter />
        </main>
      )}

      <MusicToggle showHint={entered} />
    </>
  );
}

export default App;
