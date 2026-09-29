// ============================================================================
// WEDDING INVITATION CONFIGURATION
// ============================================================================
// This is the SINGLE file to edit for all wedding details.
// Replace all placeholder text with the real couple's information.
// ============================================================================

export interface WeddingEvent {
  id: string;
  name: string;
  date: string;       // ISO format: "2026-12-15"
  time: string;       // "6:00 PM"
  venue: string;
  description: string;
  icon: string;       // lucide-react icon name
  mapQuery?: string;  // Google Maps search query for directions
}

export const weddingDetails = {
  // ---------------------------------------------------------------------------
  // COUPLE NAMES
  // ---------------------------------------------------------------------------
  bride: {
    firstName: "Aanya",
    lastName: "Sharma",
    parents: "Mr. Rajesh Sharma & Mrs. Sunita Sharma",
    familyName: "The Sharma Family",
  },
  groom: {
    firstName: "Arjun",
    lastName: "Verma",
    parents: "Mr. Vikram Verma & Mrs. Meera Verma",
    familyName: "The Verma Family",
  },

  // ---------------------------------------------------------------------------
  // WEDDING DATE & TIME
  // ---------------------------------------------------------------------------
  // Format: "YYYY-MM-DDTHH:MM:SS" in the local wedding timezone.
  // The countdown and calendar use this value.
  // ---------------------------------------------------------------------------
  weddingDate: "2026-12-15T19:30:00",
  timezone: "Asia/Kolkata",
  muhurthamTime: "7:30 PM",

  // ---------------------------------------------------------------------------
  // VENUE
  // ---------------------------------------------------------------------------
  venue: {
    name: "Grand Palace Convention Hall",
    address: "123 Temple Road, MG Nagar",
    city: "Bengaluru",
    state: "Karnataka 560001",
    // This query string is used for the Google Maps embed and directions link.
    mapQuery: "Bengaluru Karnataka 560001",
  },

  // ---------------------------------------------------------------------------
  // IMAGES (Pexels stock photos — replace with the couple's own photos)
  // ---------------------------------------------------------------------------
  images: {
    heroBackground:
      "https://images.pexels.com/photos/30184678/pexels-photo-30184678.jpeg?auto=compress&cs=tinysrgb&w=1920",
    mandap:
      "https://images.pexels.com/photos/39797467/pexels-photo-39797467.jpeg?auto=compress&cs=tinysrgb&w=1920",
    sacredFire:
      "https://images.pexels.com/photos/38773207/pexels-photo-38773207.jpeg?auto=compress&cs=tinysrgb&w=1920",
    marigoldGarland:
      "https://images.pexels.com/photos/36652869/pexels-photo-36652869.jpeg?auto=compress&cs=tinysrgb&w=1920",
    diya:
      "https://images.pexels.com/photos/33360798/pexels-photo-33360798.jpeg?auto=compress&cs=tinysrgb&w=1920",
    rangoli:
      "https://images.pexels.com/photos/8818623/pexels-photo-8818623.jpeg?auto=compress&cs=tinysrgb&w=1920",
    woodenDoor:
      "https://images.pexels.com/photos/19195948/pexels-photo-19195948.jpeg?auto=compress&cs=tinysrgb&w=1080",
    parchment:
      "https://images.pexels.com/photos/5102219/pexels-photo-5102219.jpeg?auto=compress&cs=tinysrgb&w=1920",
    venueHall:
      "https://images.pexels.com/photos/33417234/pexels-photo-33417234.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },

  // ---------------------------------------------------------------------------
  // AUDIO (optional — provide a URL to an instrumental track)
  // Leave as empty string to disable music gracefully.
  // ---------------------------------------------------------------------------
  audioUrl: "",

  // ---------------------------------------------------------------------------
  // WEDDING EVENTS
  // Remove or add events as needed for the actual wedding.
  // ---------------------------------------------------------------------------
  events: [
    {
      id: "haldi",
      name: "Haldi",
      date: "2026-12-13",
      time: "10:00 AM",
      venue: "Bride's Residence",
      description:
        "A joyful morning ritual where turmeric paste is applied to the bride and groom, blessing them with radiant glow for the wedding day.",
      icon: "Sparkles",
      mapQuery: "Bengaluru Karnataka",
    },
    {
      id: "mehendi",
      name: "Mehendi",
      date: "2026-12-14",
      time: "4:00 PM",
      venue: "Bride's Residence",
      description:
        "An evening of intricate henna artistry, music, and celebration as the bride's hands are adorned with beautiful mehendi designs.",
      icon: "Flower2",
      mapQuery: "Bengaluru Karnataka",
    },
    {
      id: "sangeet",
      name: "Sangeet",
      date: "2026-12-14",
      time: "8:00 PM",
      venue: "Grand Palace Convention Hall",
      description:
        "A night of music, dance, and festive celebrations as both families come together to perform and rejoice before the wedding.",
      icon: "Music",
      mapQuery: "Bengaluru Karnataka 560001",
    },
    {
      id: "wedding",
      name: "Wedding Ceremony",
      date: "2026-12-15",
      time: "7:30 PM",
      venue: "Grand Palace Convention Hall",
      description:
        "The sacred union of two souls as the bride and groom take their vows around the holy fire, beginning their journey of togetherness.",
      icon: "Flame",
      mapQuery: "Bengaluru Karnataka 560001",
    },
    {
      id: "reception",
      name: "Reception",
      date: "2026-12-16",
      time: "7:00 PM",
      venue: "Grand Palace Convention Hall",
      description:
        "A grand celebration to welcome the newlyweds, filled with dinner, music, and the blessings of all our loved ones.",
      icon: "PartyPopper",
      mapQuery: "Bengaluru Karnataka 560001",
    },
  ] as WeddingEvent[],
};

export type WeddingDetails = typeof weddingDetails;
