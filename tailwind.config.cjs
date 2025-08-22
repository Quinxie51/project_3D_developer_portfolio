/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0b0f14", // Dark space background
        secondary: "#1a1f2e", // Slightly lighter space
        tertiary: "#2a2f3e", // Card backgrounds
        "black-100": "#0a0e13",
        "black-200": "#050a0f",
        "white-100": "#f3f3f3",
        // Sci-fi theme colors
        space: {
          bg: "#0b0f14",
          dark: "#050a0f",
          light: "#1a1f2e",
          card: "#2a2f3e",
        },
        glow: {
          cyan: "#00ffff",
          teal: "#00d4aa",
          gold: "#ffd700",
          blue: "#0066ff",
        },
        accent: {
          muted: "#8b7355",
          bright: "#ffd700",
        }
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glow: "0 0 20px rgba(0, 255, 255, 0.5)",
        "glow-gold": "0 0 20px rgba(255, 215, 0, 0.3)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "none",
        "space-gradient": "linear-gradient(135deg, #0b0f14 0%, #1a1f2e 50%, #2a2f3e 100%)",
        "nebula": "radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)",
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'sway': 'sway 8s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
};
