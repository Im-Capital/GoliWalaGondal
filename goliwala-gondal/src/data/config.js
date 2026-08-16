// ============================================
// GoliWala Gondal - Central Configuration
// ============================================
// All branch details, menu items, and content can be edited here.
// This is the single source of truth for all business information.
// ============================================

export const branchConfig = {
  // Branch Information
  name: "GoliWala Gondal",
  tagline: "Relive the magic of the 90s in every fizz.",
  owner: "Sujal Sappa",
  
  // Contact Details
  phone: "+91 63554 77668",
  phoneFormatted: "+91 63554 77668",
  whatsapp: "https://wa.me/916355477668",
  email: "", // EDITABLE: Add email if available
  
  // Address
  address: {
    street: "Bhuvneshwari Road, Opp. Shri Ram Deri Farm",
    city: "Gondal",
    state: "Gujarat",
    pincode: "360311",
    country: "India",
    fullAddress: "Bhuvneshwari Road, Opp. Shri Ram Deri Farm, Gondal, Gujarat – 360311"
  },
  
  // Google Maps Link (EDITABLE: Replace with exact Google Maps Place URL)
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Bhuvneshwari+Road+Opp+Shri+Ram+Deri+Farm+Gondal+Gujarat+360311",
  
  // Opening Hours
  hours: {
    open: "10:00 AM",
    close: "12:00 AM",
    display: "10:00 AM to 12:00 AM",
    days: "Every day"
  },
  
  // Social Media (EDITABLE: Add actual Instagram profile URL)
  social: {
    instagram: "", // EDITABLE: Add Instagram profile URL
    facebook: "",
    twitter: ""
  },
  
  // Hashtags for social media
  hashtags: [
    "#GoliWalaGondal",
    "#GoliWala",
    "#GoliSoda",
    "#GondalFoodies",
    "#SipTheNostalgia"
  ]
};

// ============================================
// Menu Categories
// ============================================
export const menuCategories = [
  { id: "all", name: "All", icon: "🥤" },
  { id: "goli-soda", name: "Goli Soda", icon: "🫧" },
  { id: "flavoured-soda", name: "Flavoured Soda", icon: "🍋" },
  { id: "bubble-soda", name: "Bubble Soda", icon: "🔵" },
  { id: "mojitos", name: "Mojitos", icon: "🌿" },
  { id: "mocktails", name: "Mocktails", icon: "🍹" },
  { id: "specials", name: "Specials", icon: "⭐" }
];

// ============================================
// Menu Items (EDITABLE: Update with actual menu)
// ============================================
// NOTE: These are placeholder items. Please update with confirmed menu items and prices.
export const menuItems = [
  {
    id: 1,
    name: "Classic Lemon Goli Soda",
    category: "goli-soda",
    description: "The original marble-pop experience with refreshing lemon fizz.",
    price: null, // EDITABLE: Add price or keep null for "Ask at outlet"
    priceDisplay: "Ask at outlet",
    image: "/images/classic-lemon-goli.jpg", // EDITABLE: Add actual image path
    accentColor: "#B7F34A",
    tags: ["refreshing", "tangy", "bestseller"],
    availability: true,
    featured: true,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 2,
    name: "Jeera Masala Soda",
    category: "goli-soda",
    description: "Spiced cumin soda with a traditional twist.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/jeera-masala.jpg",
    accentColor: "#F5B942",
    tags: ["spicy", "traditional"],
    availability: true,
    featured: false,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 3,
    name: "Kala Khatta Fizz",
    category: "flavoured-soda",
    description: "Sweet and tangy blackberry flavoured soda.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/kala-khatta.jpg",
    accentColor: "#FF6B4A",
    tags: ["sweet", "tangy", "popular"],
    availability: true,
    featured: true,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 4,
    name: "Green Apple Pop",
    category: "flavoured-soda",
    description: "Crisp green apple flavour with extra fizz.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/green-apple.jpg",
    accentColor: "#D8FFD1",
    tags: ["refreshing", "fruity"],
    availability: true,
    featured: false,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 5,
    name: "Orange Blast",
    category: "flavoured-soda",
    description: "Bright orange flavour that energizes your mood.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/orange-blast.jpg",
    accentColor: "#F5B942",
    tags: ["citrusy", "energetic"],
    availability: true,
    featured: false,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 6,
    name: "Blue Lagoon Bubble Soda",
    category: "bubble-soda",
    description: "Playful blue bubbles with a fun twist.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/blue-lagoon.jpg",
    accentColor: "#0B6B4F",
    tags: ["playful", "colourful"],
    availability: true,
    featured: true,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 7,
    name: "Mint Mojito",
    category: "mojitos",
    description: "Cool mint with citrusy freshness and lively finish.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/mint-mojito.jpg",
    accentColor: "#D8FFD1",
    tags: ["refreshing", "classic", "bestseller"],
    availability: true,
    featured: true,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 8,
    name: "Blue Lagoon Mocktail",
    category: "mocktails",
    description: "Colourful, creative, alcohol-free refreshment.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/blue-lagoon-mocktail.jpg",
    accentColor: "#0B6B4F",
    tags: ["colourful", "creative"],
    availability: true,
    featured: true,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 9,
    name: "Mango Fizz",
    category: "mocktails",
    description: "Royal mango flavour with fizzy excitement.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/mango-fizz.jpg",
    accentColor: "#F5B942",
    tags: ["fruity", "sweet", "summer"],
    availability: true,
    featured: false,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 10,
    name: "Rose Refresh",
    category: "mocktails",
    description: "Delicate rose flavour with a cooling effect.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/rose-refresh.jpg",
    accentColor: "#FF6B4A",
    tags: ["floral", "cooling"],
    availability: true,
    featured: false,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 11,
    name: "Pineapple Spark",
    category: "flavoured-soda",
    description: "Tropical pineapple with sparkling energy.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/pineapple-spark.jpg",
    accentColor: "#F5B942",
    tags: ["tropical", "sweet"],
    availability: true,
    featured: false,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 12,
    name: "Jamun Twist",
    category: "flavoured-soda",
    description: "Traditional jamun flavour with a modern fizz.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/jamun-twist.jpg",
    accentColor: "#FF6B4A",
    tags: ["traditional", "tangy"],
    availability: true,
    featured: false,
    vegetarian: true,
    alcoholic: false
  },
  {
    id: 13,
    name: "Special GoliWala Mix",
    category: "specials",
    description: "Our signature blend of flavours for a unique experience.",
    price: null,
    priceDisplay: "Ask at outlet",
    image: "/images/special-mix.jpg",
    accentColor: "#B7F34A",
    tags: ["signature", "unique", "bestseller"],
    availability: true,
    featured: true,
    vegetarian: true,
    alcoholic: false
  }
];

// ============================================
// Gallery Images (EDITABLE: Add actual images)
// ============================================
export const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/goli-soda-1.jpg",
    alt: "Classic Goli Soda bottle with marble closure",
    category: "goli-soda",
    caption: "The iconic marble-pop moment"
  },
  {
    id: 2,
    src: "/images/gallery/mojito-1.jpg",
    alt: "Fresh Mint Mojito with ice and lime",
    category: "mojitos",
    caption: "Cool mint freshness"
  },
  {
    id: 3,
    src: "/images/gallery/mocktail-1.jpg",
    alt: "Colourful mocktail presentation",
    category: "mocktails",
    caption: "Vibrant colours, refreshing taste"
  },
  {
    id: 4,
    src: "/images/gallery/outlet-1.jpg",
    alt: "GoliWala Gondal outlet interior",
    category: "outlet",
    caption: "Your new favourite hangout"
  },
  {
    id: 5,
    src: "/images/gallery/friends-1.jpg",
    alt: "Friends enjoying drinks together",
    category: "friends",
    caption: "Made for sharing moments"
  },
  {
    id: 6,
    src: "/images/gallery/family-1.jpg",
    alt: "Family enjoying beverages",
    category: "family",
    caption: "Perfect for all ages"
  },
  {
    id: 7,
    src: "/images/gallery/party-1.jpg",
    alt: "Party celebration with GoliWala drinks",
    category: "parties",
    caption: "Bring the fizz to your celebration"
  },
  {
    id: 8,
    src: "/images/gallery/bubble-soda-1.jpg",
    alt: "Bubble soda with vibrant colours",
    category: "bubble-soda",
    caption: "Playful bubbles, fun twist"
  }
];

// ============================================
// Experience Steps
// ============================================
export const experienceSteps = [
  {
    step: 1,
    title: "Choose Your Flavour",
    description: "Pick from our wide range of classic and modern flavours.",
    icon: "🎯"
  },
  {
    step: 2,
    title: "Pop Open the Bottle",
    description: "Experience the satisfying crack of the marble opening.",
    icon: "🫧"
  },
  {
    step: 3,
    title: "Sip & Share",
    description: "Enjoy the fizz and capture the moment with friends.",
    icon: "📸"
  }
];

// ============================================
// FAQ Items (EDITABLE: Add or modify questions)
// ============================================
export const faqItems = [
  {
    question: "What is GoliWala Gondal?",
    answer: "GoliWala Gondal is a premium beverage destination on Bhuvneshwari Road, offering classic goli soda, flavoured sodas, mojitos, and mocktails in a nostalgic 90s-inspired atmosphere."
  },
  {
    question: "Where is the Gondal branch located?",
    answer: "We're located at Bhuvneshwari Road, Opp. Shri Ram Deri Farm, Gondal, Gujarat – 360311."
  },
  {
    question: "What are the opening hours?",
    answer: "We're open every day from 10:00 AM to 12:00 AM (midnight)."
  },
  {
    question: "Does GoliWala serve classic goli soda?",
    answer: "Yes! Classic goli soda with the marble-opening experience is our specialty."
  },
  {
    question: "What other drinks are available?",
    answer: "Besides goli soda, we offer flavoured sodas, bubble sodas, mojitos, and mocktails. Check our menu page for the full list."
  },
  {
    question: "Are mocktails alcohol-free?",
    answer: "Yes, all our mocktails are completely alcohol-free and suitable for all ages."
  },
  {
    question: "Can I order drinks for a party?",
    answer: "Absolutely! We accept event enquiries for birthday parties, gatherings, and celebrations. Visit our Parties page to send an enquiry."
  },
  {
    question: "Do you accept event enquiries?",
    answer: "Yes, we'd love to be part of your celebration. Send us an enquiry through our website or contact us directly."
  },
  {
    question: "Can I contact the branch on WhatsApp?",
    answer: "Yes! You can reach us on WhatsApp at +91 63554 77668."
  },
  {
    question: "Are menu prices fixed?",
    answer: "Menu items, prices, and availability may change. Please confirm with the Gondal outlet before ordering."
  },
  {
    question: "Is takeaway available?",
    answer: "Please contact the Gondal branch directly for the latest details on takeaway availability."
  },
  {
    question: "Is seating available?",
    answer: "Yes, we have seating arrangements for customers to enjoy their drinks at the outlet."
  },
  {
    question: "Is delivery available?",
    answer: "Please contact the Gondal branch directly for the latest details on delivery options."
  },
  {
    question: "Can I request a particular flavour?",
    answer: "We welcome flavour requests! Please speak with our staff or contact us on WhatsApp."
  },
  {
    question: "How can I reach the branch?",
    answer: "We're located on Bhuvneshwari Road, opposite Shri Ram Deri Farm. Use the 'Get Directions' button on our website for navigation."
  }
];

// ============================================
// Event Packages (EDITABLE: Add confirmed packages)
// ============================================
// NOTE: These are placeholder packages. Prices and details need confirmation.
export const eventPackages = [
  {
    id: 1,
    title: "Starter Fizz Package",
    description: "Perfect for small gatherings and casual celebrations.",
    includes: [
      "Assorted goli sodas",
      "Basic mocktail selection",
      "Serving for up to 20 guests"
    ],
    price: null,
    priceDisplay: "Contact for pricing",
    availability: true
  },
  {
    id: 2,
    title: "Celebration Package",
    description: "Ideal for birthday parties and family functions.",
    includes: [
      "Full menu access",
      "Custom mocktail bar",
      "Serving for up to 50 guests",
      "Basic decoration support"
    ],
    price: null,
    priceDisplay: "Contact for pricing",
    availability: true
  },
  {
    id: 3,
    title: "Premium Mocktail Bar",
    description: "Elevate your event with our premium beverage service.",
    includes: [
      "Live mocktail counter",
      "Premium ingredients",
      "Skilled bartender",
      "Serving for up to 100 guests"
    ],
    price: null,
    priceDisplay: "Contact for pricing",
    availability: true
  },
  {
    id: 4,
    title: "Custom Event Counter",
    description: "Tailored beverage solution for your specific needs.",
    includes: [
      "Customized menu",
      "Flexible guest count",
      "On-site setup",
      "Professional service"
    ],
    price: null,
    priceDisplay: "Contact for pricing",
    availability: true
  }
];

// ============================================
// Reviews (PLACEHOLDER - Add verified reviews only)
// ============================================
// IMPORTANT: Do not add fake reviews. Only add verified customer testimonials.
export const reviews = []; // Empty array - add verified reviews here when available

// ============================================
// Offers (PLACEHOLDER - Add confirmed offers only)
// ============================================
// IMPORTANT: Do not add fake offers. Only add verified promotions.
export const offers = []; // Empty array - add verified offers here when available

// ============================================
// Brand Information
// ============================================
export const brandInfo = {
  name: "GoliWala",
  tagline: "Relive the magic of the 90s in every fizz.",
  description: "GoliWala brings the timeless charm of goli soda into a bright, modern, and flavour-packed experience. Every bottle carries a little nostalgia, every fizz starts a conversation, and every visit is made for sharing.",
  coreValues: [
    "Nostalgic 90s experience",
    "Fresh and refreshing beverages",
    "Family-friendly atmosphere",
    "Quality ingredients",
    "Memorable moments"
  ]
};

// ============================================
// Website Navigation
// ============================================
export const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Experience", path: "/experience" },
  { name: "Gallery", path: "/gallery" },
  { name: "Parties", path: "/parties" },
  { name: "Visit Us", path: "/visit-us" }
];

// ============================================
// Utility Functions
// ============================================

// Check if branch is currently open
export const isBranchOpen = () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;
  
  const openTime = 10 * 60; // 10:00 AM
  const closeTime = 24 * 60; // 12:00 AM (midnight)
  
  return currentTime >= openTime && currentTime < closeTime;
};

// Format phone number for tel: link
export const getTelLink = (phone) => {
  return `tel:${phone.replace(/\s+/g, '')}`;
};

// Generate WhatsApp message
export const generateWhatsAppMessage = (name, enquiryType, message) => {
  const text = `Hello GoliWala Gondal, my name is ${name}. I would like to enquire about ${enquiryType}. My message is: ${message}`;
  return `https://wa.me/916355477668?text=${encodeURIComponent(text)}`;
};

// Get today's hours display
export const getTodaysHours = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];
  return `${today}: ${branchConfig.hours.display}`;
};
