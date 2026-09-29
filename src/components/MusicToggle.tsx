import { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingDetails } from '@/config/weddingDetails';

interface MusicToggleProps {
  // If true, show a subtle hint to encourage enabling music
  showHint?: boolean;
}

export function MusicToggle({ showHint = false }: MusicToggleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!weddingDetails.audioUrl) {
      setAudioAvailable(false);
      return;
    }
    const audio = new Audio(weddingDetails.audioUrl);
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = 'none';
    audioRef.current = audio;
    setAudioAvailable(true);

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = useCallback(() => {
    if (!audioRef.current || !audioAvailable) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay blocked or file unavailable
        setAudioAvailable(false);
      });
    }
  }, [isPlaying, audioAvailable]);

  if (!audioAvailable && !weddingDetails.audioUrl) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {showHint && !isPlaying && audioAvailable && (
        <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-[#4a0e0e]/90 px-3 py-1.5 text-xs text-[#f0d97a] border border-[#c9a227]/40">
          Play wedding music
          <div className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 bg-[#4a0e0e] border-r border-b border-[#c9a227]/40" />
        </div>
      )}
      <button
        onClick={toggle}
        disabled={!audioAvailable}
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c9a227]/60 bg-[#4a0e0e]/90 backdrop-blur-sm transition-all hover:border-[#f0d97a] hover:bg-[#6b1d1d]/80 disabled:opacity-40"
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        aria-pressed={isPlaying}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-[#f0d97a]" />
        ) : (
          <VolumeX className="w-5 h-5 text-[#f0d97a]" />
        )}
        {isPlaying && (
          <span className="absolute inset-0 animate-ping rounded-full border-2 border-[#c9a227]/30" />
        )}
      </button>
    </div>
  );
}
