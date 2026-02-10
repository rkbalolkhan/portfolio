# Portfolio

A modern, clean portfolio built with React + Vite, Tailwind CSS, and Framer Motion.

## Getting Started

### Prerequisites
- Node.js 16+ installed

### Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
client/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## Features

- ✨ Modern React 18 with Vite
- 🎨 Tailwind CSS for styling
- 🎬 Framer Motion for animations
- 📱 Fully responsive design
- ⚡ Fast development with Vite
- 🔧 Clean component structure

## Customization

### Colors
Edit the `tailwind.config.js` to change the color scheme:
- `primary` - Main text color (#111827)
- `secondary` - Accent color (#6366f1)

### Content
Update component content in `/src/components/` and `/src/pages/` to match your information.

### Images
Add your profile image to `/src/assets/` and reference it in the Hero component.

## Next Steps

1. Update hero section with your actual image
2. Replace placeholder content with your information
3. Add your actual projects
4. Update contact information
5. Set up backend for contact form
6. Deploy to production
