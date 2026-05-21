export const HOTEL = {
  name: "Lewis Garden and Suites",
  shortName: "Lewis Garden",
  tagline: "Experience luxury & comfort in the heart of Nassarawa",
  location: "Karu, Nasarawa, Nigeria",
  address:
    "Mission Village, Auta Balefi, Karu 961105, Nasarawa, Nigeria",
  phone: "+234 803 000 0000",
  email: "info@lewisgardensuites.com",
  whatsapp: "2348030000000",
  rating: 4.0,
  reviewCount: 2,
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0!2d7.6!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTGV3aXMgR2FyZGVuIGFuZCBTdWl0ZXM!5e0!3m2!1sen!2sng!4v1",
  mapLink:
    "https://www.google.com/maps/search/Lewis+Garden+and+Suites+Mission+Village+Auta+Balefi+Karu+Nasarawa",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_FEATURES = [
  { icon: "wifi", title: "Free Wi-Fi", subtitle: "Stay Connected" },
  { icon: "utensils", title: "Restaurant", subtitle: "Delicious Meals" },
  { icon: "shield", title: "24/7 Security", subtitle: "Your Safety, Our Priority" },
  { icon: "bed", title: "Comfortable Rooms", subtitle: "Relax in Style" },
  { icon: "car", title: "Parking Space", subtitle: "Ample Parking" },
] as const;

export const ABOUT_STATS = [
  { value: "20+", label: "Luxury Rooms" },
  { value: "10K+", label: "Happy Guests" },
  { value: "5+", label: "Years of Excellence" },
] as const;

/**
 * ROOMS — edit names, prices, descriptions, and photos here.
 *
 * Photos: put your images in  public/images/rooms/
 *   e.g. standard.jpg, deluxe.jpg, executive.jpg
 * Then set image to: "/images/rooms/standard.jpg"
 *
 * price: number in Naira (no commas), shown as ₦35,000 / night
 */
export const ROOMS = [
  {
    id: "standard",
    name: "Standard Room",
    description:
      "Elegant comfort with premium bedding, ensuite bathroom, and city views.",
    price: 35000, // ← change price (Naira, number only)
    image: "/images/rooms/standard.jpg", // ← add photo OR use a full URL
    imageFallback:
      "https://images.unsplash.com/photo-1631049301164-daecafdbc225?w=800&q=75",
    amenities: ["wifi", "tv", "ac"],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    description:
      "Spacious sanctuary with refined finishes, work desk, and lounge area.",
    price: 55000,
    image: "/images/rooms/deluxe.jpg",
    imageFallback:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=75",
    amenities: ["wifi", "tv", "ac", "coffee"],
  },
  {
    id: "executive",
    name: "Executive Suite",
    description:
      "Our finest accommodation — separate living space, premium amenities, and VIP service.",
    price: 85000,
    image: "/images/rooms/executive.jpg",
    imageFallback:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=75",
    amenities: ["wifi", "tv", "ac", "coffee", "bath"],
  },
] as const;

export const AMENITIES = [
  { icon: "wifi", label: "Free Wi-Fi" },
  { icon: "utensils", label: "Restaurant" },
  { icon: "concierge", label: "Room Service" },
  { icon: "wind", label: "Air Conditioning" },
  { icon: "shield", label: "24/7 Security" },
  { icon: "car", label: "Free Parking" },
  { icon: "tv", label: "Smart TV" },
  { icon: "sparkles", label: "Daily Housekeeping" },
] as const;

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "rooms",
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&q=70",
    alt: "Luxury bedroom",
  },
  {
    id: 2,
    category: "rooms",
    src: "https://images.unsplash.com/photo-1591088397092-0509021401bf?w=500&q=70",
    alt: "Suite interior",
  },
  {
    id: 3,
    category: "amenities",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=70",
    alt: "Restaurant dining",
  },
  {
    id: 4,
    category: "amenities",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbbe23?w=500&q=70",
    alt: "Spa and wellness",
  },
  {
    id: 5,
    category: "events",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b0?w=500&q=70",
    alt: "Event space",
  },
  {
    id: 6,
    category: "rooms",
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&q=70",
    alt: "Hotel lobby",
  },
] as const;

export const PROXIMITY_DESTINATIONS = [
  {
    name: "Mewar University",
    distance: "2 km",
    angle: 100,
    radius: 26,
  },
  {
    name: "Bingham University, Karu",
    distance: "3.2 km",
    angle: -50,
    radius: 30,
  },
  {
    name: "Living Faith Church (Goshen City), Karu",
    distance: "6.8 km",
    angle: 35,
    radius: 40,
  },
  {
    name: "Abuja City Centre",
    distance: "28 km",
    angle: -145,
    radius: 48,
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "An exceptional stay — the rooms are immaculate, staff attentive, and the location near Bingham University is perfect for visiting families.",
    name: "Adaeze O.",
    title: "Business Traveler",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: 2,
    quote:
      "Lewis Garden and Suites exceeded our expectations. Premium comfort at a fair price, with easy access to Goshen City. We will definitely return.",
    name: "Emmanuel K.",
    title: "Weekend Guest",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
] as const;

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function whatsappUrl(message?: string): string {
  const text = encodeURIComponent(
    message ??
      `Hello ${HOTEL.name}, I would like to enquire about a stay at your hotel in ${HOTEL.location}.`
  );
  return `https://wa.me/${HOTEL.whatsapp}?text=${text}`;
}
