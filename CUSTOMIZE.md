# How to customize Lewis Garden website

## Room photos and prices

**File:** `src/lib/constants.ts`  
**Search for:** `export const ROOMS`

Each room has:

| Field | What to change |
|--------|----------------|
| `name` | Room title on the card |
| `description` | Short text under the title |
| `price` | Nightly rate in Naira (number only, e.g. `35000`) |
| `image` | Path to your photo |

### Add your room photos

1. Save images in: `public/images/rooms/`
   - `standard.jpg`
   - `deluxe.jpg`
   - `executive.jpg`
2. In `constants.ts`, set e.g. `image: "/images/rooms/standard.jpg"`
3. Recommended: 1200×900 px, JPG, under 300 KB each

Until you add files, placeholder photos load automatically from `imageFallback`.

### Example

```ts
{
  id: "deluxe",
  name: "Deluxe Room",
  description: "Your text here.",
  price: 55000,  // ← ₦55,000 per night
  image: "/images/rooms/deluxe.jpg",
  imageFallback: "https://...", // keep or remove after you add deluxe.jpg
  amenities: ["wifi", "tv", "ac", "coffee"],
},
```

---

## Hero hotel photo

**File:** `public/images/hotel-hero.png`  
Replace this file with your own (compress to under 500 KB for faster loading).

---

## Phone, WhatsApp, email

**File:** `src/lib/constants.ts`  
**Search for:** `export const HOTEL`

- `phone`
- `whatsapp` — format `234XXXXXXXXXX` (no + or spaces)
- `email`
