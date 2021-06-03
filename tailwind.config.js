module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
      customForms: (theme) => ({
        default: {
          checkbox: {
            icon:
              '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" fill="#0F0A0A"/></svg>',
          },
        },
      }),
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      extend: {
        colors: {
          primaryGreen: '#49A347',
          primaryBlack: '#231F1F',
          primaryFontColor: '#231F1F'
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("@tailwindcss/custom-forms")],
  };
  