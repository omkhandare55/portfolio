# Premium Minimalist Portfolio - Om Khandare

**🚀 Live Demo:** [omii.me](https://omii.me)

This is an elegant, typography-forward personal portfolio designed to convey a high-end, senior developer aesthetic. Deliberately avoiding the generic "AI neon/glassmorphism" tech style, this portfolio utilizes a sophisticated **Matte Black & Amber/Gold** palette, crisp geometry, and classic layout paradigms to make a lasting, professional impression.

## Tech Stack
- **React (Vite Base)**: Lightning fast build and dev environment.
- **Tailwind CSS**: Rapid styling with custom premium design tokens.
- **Framer Motion**: Subdued, highly polished scroll and entrance animations.
- **Lucide React & React Icons**: Crisp, modern iconography.

## Design Philosophy & Features 
- **Minimalist Hero Section**: A typography-centric, classic focal point avoiding overly busy graphics.
- **Subtle Visual Textures**: A heavily muted, elegant canvas background that avoids flashy network/AI nodes.
- **High-Contrast Monochrome Base**: Pure, solid structure augmented only by subtle amber accents.
- **Advanced Custom Cursor**: Smooth spotlight effect with `mix-blend-screen` integration.
- **Scroll Progress Indicator**: Unobtrusive progress tracking anchored to the top viewport.
- **Premium Animations**: Delicately staggered Framer Motion entrances.

## Customization & Content

### Resume Download Integration
To activate the "Download Resume" functionality for recruiters:
1. Ensure your resume document is named exactly `resume.pdf`.
2. Place or overwrite this file in the `public/` directory (so that its path is `public/resume.pdf`).
3. The download buttons across the Hero section and Navbar will now serve your actual resume automatically.

### Profile Picture
To replace the default placeholder:
1. Ensure your profile picture is named `profile.png`.
2. Place it entirely within the `public/` directory.
3. The Hero image automatically applies a highly professional grayscale-to-color hover transition to mesh flawlessly with the UI.

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

Built with ❤️ and robust engineering.