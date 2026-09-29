import { useState, useEffect, useMemo } from 'react';

export interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
  isValid: boolean;
}

export function useCountdown(targetDateISO: string): CountdownValues {
  const target = useMemo(() => {
    const parsed = new Date(targetDateISO);
    return parsed;
  }, [targetDateISO]);

  const isValid = useMemo(() => !isNaN(target.getTime()), [target]);

  const [timeLeft, setTimeLeft] = useState<CountdownValues>(() => {
    if (!isValid) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: false, isValid: false };
    }
    return calculateTimeLeft(target);
  });

  useEffect(() => {
    if (!isValid) return;

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target, isValid]);

  return timeLeft;
}

function calculateTimeLeft(target: Date): CountdownValues {
  const now = new Date().getTime();
  const diff = target.getTime() - now;

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
      isValid: true,
    };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isComplete: false,
    isValid: true,
  };
}
