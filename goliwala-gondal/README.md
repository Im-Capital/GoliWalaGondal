# GoliWala Gondal - Official Website

A premium, modern, high-converting website for the GoliWala Gondal beverage branch.

## 🥤 About

This website is built specifically for **GoliWala Gondal**, located at:
- **Address:** Bhuvneshwari Road, Opp. Shri Ram Deri Farm, Gondal, Gujarat – 360311
- **Owner:** Sujal Sappa
- **Phone:** +91 63554 77668
- **Hours:** 10:00 AM to 12:00 AM (Daily)

## 🚀 Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM

## 📁 Project Structure

```
goliwala-gondal/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── AnnouncementBar.jsx
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx
│   │   ├── MenuPage.jsx
│   │   ├── ExperiencePage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── PartiesPage.jsx
│   │   ├── VisitUsPage.jsx
│   │   ├── FAQPage.jsx
│   │   ├── PrivacyPolicyPage.jsx
│   │   └── TermsPage.jsx
│   ├── data/
│   │   └── config.js    # Central configuration (EDIT THIS!)
│   ├── utils/
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── images/          # Place your images here
└── package.json
```

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone or navigate to the project:
   ```bash
   cd goliwala-gondal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## ✏️ Editing Content

### Central Configuration (`src/data/config.js`)

All editable content is in one place. Update the following:

#### Branch Information
```javascript
export const branchConfig = {
  name: "GoliWala Gondal",
  owner: "Sujal Sappa",
  phone: "+91 63554 77668",
  address: { ... },
  hours: { ... }
};
```

#### Menu Items
Edit the `menuItems` array to add/update drinks:
```javascript
{
  id: 1,
  name: "Classic Lemon Goli Soda",
  category: "goli-soda",
  description: "...",
  price: 50, // or null for "Ask at outlet"
  priceDisplay: "₹50",
  image: "/images/classic-lemon.jpg",
  accentColor: "#B7F34A",
  tags: ["refreshing", "bestseller"],
  availability: true,
  featured: true
}
```

#### Gallery Images
Update `galleryImages` array with actual photos:
```javascript
{
  id: 1,
  src: "/images/gallery/photo1.jpg",
  alt: "Description",
  category: "goli-soda",
  caption: "Image caption"
}
```

#### Social Media Links
```javascript
social: {
  instagram: "https://instagram.com/goliwalagondal", // Add actual URL
  facebook: "",
  twitter: ""
}
```

#### Event Packages
Update `eventPackages` with confirmed offerings:
```javascript
{
  id: 1,
  title: "Starter Fizz Package",
  description: "...",
  includes: ["Item 1", "Item 2"],
  price: 5000, // or null
  priceDisplay: "₹5,000"
}
```

## 🖼️ Adding Images

1. Place images in `/public/images/` folder
2. Update paths in `src/data/config.js`
3. Recommended formats: WebP, AVIF, or optimized JPG/PNG
4. Suggested sizes:
   - Product images: 800x800px
   - Gallery images: 1200x800px
   - Hero/background: 1920x1080px

## 🎨 Color System

The website uses a dark green theme:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Deep Forest | #062E24 | Main background |
| Dark Emerald | #084C3A | Secondary bg |
| Rich Green | #0B6B4F | Cards, borders |
| Lime Green | #B7F34A | CTAs, highlights |
| Fresh Mint | #D8FFD1 | Text |
| Warm Cream | #FFF5D6 | Headings |
| Amber | #F5B942 | Accents |
| Coral | #FF6B4A | Alerts |

## 📱 Features

- ✅ Fully responsive (mobile-first)
- ✅ Sticky navigation with mobile menu
- ✅ Menu filtering by category
- ✅ Interactive gallery with lightbox
- ✅ Event enquiry form (WhatsApp integration)
- ✅ Google Maps integration
- ✅ Opening hours status indicator
- ✅ SEO optimized metadata
- ✅ Accessibility features
- ✅ Reduced motion support

## 🔗 Key Links

| Action | URL Format |
|--------|------------|
| Call | `tel:+916355477668` |
| WhatsApp | `https://wa.me/916355477668` |
| Maps | Editable placeholder in config |

## ⚠️ Important Notes

### Placeholder Content
The following items need confirmation from the branch:

1. **Menu Prices** - All items show "Ask at outlet" until confirmed
2. **Product Images** - Using placeholders; replace with actual photos
3. **Gallery Images** - Placeholder structure ready for real photos
4. **Instagram Profile** - Add actual profile URL when available
5. **Google Maps Link** - Replace with exact Google Maps Place URL
6. **Event Package Prices** - Contact for pricing until confirmed
7. **Reviews** - Empty array; add verified reviews only

### Do NOT Add
- Fake prices without confirmation
- Fake customer reviews
- Fake awards or certifications
- Unverified health claims
- Fake offers or discounts

## 📄 Pages Included

1. **Home** - Hero, brand intro, categories, featured products, benefits, experience, branch info
2. **Menu** - Full menu with category filters and sorting
3. **Experience** - How it works, detailed experiences
4. **Gallery** - Photo gallery with categories and lightbox
5. **Parties** - Event packages and enquiry form
6. **Visit Us** - Location, contact, map, hours
7. **FAQ** - Searchable FAQ accordion
8. **Privacy Policy** - Legal compliance
9. **Terms & Conditions** - Legal terms

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

Output will be in `/dist` folder.

### Deploy to Hosting
Upload the contents of `/dist` to your hosting provider (Netlify, Vercel, etc.)

## 📞 Support

For questions about this website, contact the development team.

---

**Built for GoliWala Gondal**  
*Relive the magic of the 90s in every fizz.*
