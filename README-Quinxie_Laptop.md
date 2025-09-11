# Minimalist Futuristic Portfolio

A clean, modern portfolio built with React, Framer Motion, and Tailwind CSS. Features a minimalist black & white design with glassmorphism effects, smooth animations, and optional 3D elements.

## ✨ Features

- **Minimalist Design**: Strict black & white UI with subtle gray steps
- **Glassmorphism**: Blurred backgrounds with white/black tints and inner strokes
- **Custom Cursor**: Dot + ring design with magnetic hover effects
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Responsive Layout**: Mobile-first design with proper breakpoints
- **Optional 3D**: Lightweight Three.js orbs for visual interest
- **Noise Grain**: Subtle texture overlay (toggleable)
- **Accessibility**: Keyboard navigation and reduced motion support

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd project_3D_developer_portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🎨 Design System

### Colors
```css
/* Core palette */
black: #0A0A0A
white: #FAFAFA
gray-900: #111111
gray-800: #1A1A1A
gray-700: #222222
gray-600: #2A2A2A
gray-300: #D6D6D6
gray-200: #EAEAEA
gray-100: #F2F2F2
accent: #FFFFFF (strokes/glow only)
```

### Typography
- **Headings**: Space Grotesk (fallback: Sora)
- **Body**: Inter
- **Letter Spacing**: Tight (-0.02em to -0.04em)

### Components

#### GlassPanel
```jsx
<GlassPanel 
  variant="light" // or "dark"
  hasInnerStroke={true}
  padding="p-6"
  borderRadius="rounded-2xl"
  hover={true}
>
  Content here
</GlassPanel>
```

#### SectionHeader
```jsx
<SectionHeader
  title="Section Title"
  subtitle="Optional subtitle"
  align="center" // left, center, right
  showLine={true}
/>
```

#### Tag
```jsx
<Tag 
  variant="default" // default, primary, secondary
  size="md" // sm, md, lg
  interactive={true}
>
  Tag text
</Tag>
```

#### ProjectCard
```jsx
<ProjectCard
  project={{
    title: "Project Name",
    year: "2024",
    summary: "Project description...",
    cover: "/path/to/image.jpg",
    tags: ["React", "Node.js"],
    roles: ["Full Stack Developer"],
    tools: ["React", "Node.js", "MongoDB"]
  }}
  onClick={() => handleProjectClick()}
/>
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section
│   ├── Contact.jsx        # Contact form
│   ├── CustomCursor.jsx   # Custom cursor component
│   ├── Footer.jsx         # Footer component
│   ├── GlassPanel.jsx     # Glassmorphism panel
│   ├── GrainLayer.jsx     # Noise grain overlay
│   ├── Hero.jsx           # Hero section
│   ├── Navbar.jsx         # Navigation
│   ├── ProjectCard.jsx    # Project display card
│   ├── Projects.jsx       # Projects section
│   ├── SectionHeader.jsx  # Section titles
│   └── Tag.jsx            # Tag component
├── App.jsx                # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🔧 Customization

### Adding Projects

Update the `projects` array in `src/components/Projects.jsx`:

```jsx
const projects = [
  {
    title: "Your Project",
    year: "2024",
    summary: "Project description...",
    cover: "/path/to/cover-image.jpg",
    tags: ["React", "Node.js"],
    roles: ["Full Stack Developer"],
    tools: ["React", "Node.js", "MongoDB"]
  }
  // Add more projects...
];
```

### Updating Content

- **Hero**: Modify `src/components/Hero.jsx` for main messaging
- **About**: Update skills, awards, and bio in `src/components/About.jsx`
- **Contact**: Change contact info in `src/components/Contact.jsx`
- **Footer**: Update social links in `src/components/Footer.jsx`

### Styling

The design system uses Tailwind CSS with custom utilities:

- `.glass` - Light glassmorphism effect
- `.glass-dark` - Dark glassmorphism effect
- `.inner-stroke` - Inner border effect
- `.grain` - Noise texture overlay
- `.text-gradient` - Text gradient effect

### Toggling Features

- **3D Elements**: Use the toggle button in Hero section
- **Grain Effect**: Use the "G" button in top-right corner
- **Custom Cursor**: Automatically enabled (can be disabled in CustomCursor.jsx)

## 🎯 Performance

- **Lighthouse Score**: Target ≥95 for Performance and SEO
- **Bundle Size**: Optimized with Vite
- **Images**: Use WebP format when possible
- **Animations**: Respects `prefers-reduced-motion`

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind's responsive utilities
- **Touch Friendly**: Proper touch targets and interactions
- **Performance**: Optimized for mobile performance

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Reduced Motion**: Respects user preferences
- **Focus Management**: Clear focus indicators
- **Color Contrast**: Meets WCAG AA standards

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

### Deploy to Netlify

1. Build the project
```bash
npm run build
```

2. Drag `dist` folder to Netlify dashboard

## 🔮 Future Enhancements

- [ ] Command+K search functionality
- [ ] Project case study pages
- [ ] Blog integration
- [ ] Dark/light theme toggle
- [ ] Advanced 3D scenes
- [ ] CMS integration
- [ ] Analytics dashboard
- [ ] Performance monitoring

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help:

- Create an issue in this repository
- Contact: hello@example.com
- Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)

---

Built with ❤️ using React, Framer Motion, and Tailwind CSS
