/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: { none: "0", sm: "0.3rem" },
      boxShadow: {
        "3xl": "6px 24px 48px rgba(12, 15, 31, 0.2)",
        filter: "inset -30px 0px 10px -15px rgba(12, 15, 31, 0.2)",
      },
      rotate: { 270: "270deg" },
      width: { "10xl": "1440px", "95/100": "95%" },
      maxWidth: { "10xl": "1440px" },
      minWidth: { xl: "8rem" },
      minHeight: { md: "6rem" },
      fontSize: {
        xxsm: "0.7rem",
        xsm: "0.8rem",
        mdl: "1.1rem",
        "10xl": "6.6rem",
      },
      lineHeight: {
        12: "1.2",
      },
      colors: {
        primary: {
          100: "#F8F8F9",
          200: "#F3F4F6",
          300: "#E6E9EC",
          400: "#CDD3DA",
          500: "#9BA6B3",
          600: "#6A7A8D",
          700: "#435970",
          750: "#435870",
          800: "#052141",
          900: "#1E3754",
        },
        secondary: {
          100: "#EFF5F4",
          200: "#DFEAE9",
          300: "#BED7D2",
          400: "#9EC1BC",
          500: "#86B2AB",
          600: "#6C63FF",
          700: "#4a45a8",
        },
        crablue: {
          50: "#F9FBFD",
          100: "#FAFBFD",
          200: "#F5F9FC",
          300: "#F1F6FB",
          400: "#EAF3FA",
          500: "#D6E6F3",
          600: "#ACCEE8",
          700: "#83B5DD",
          800: "#3084C5",
        },
        colublue: {
          100: "#FBFCFC",
          200: "#F4F8F9",
          300: "#EBF1F3",
          400: "#DEEBEE",
          500: "#CADDE2",
        },
        warning: {
          300: "#FEFBFC",
          400: "#FFCEB2",
          500: "#F9E8EE",
          600: "#D62061",
          700: "#C11D57",
        },
        disabled: {
          300: "#F6F6F6",
          500: "#DBDBDB",
          600: "#B9B9B9",
          700: "#9D9D9D",
        },
        cultured: "#F6F4F3",
        main: "#0D0F1F",
        form: "#eaf1f3",
        attention: "#EFC42B",
        filter: "#0B5FFF88",
        "primary-transparent": "#CDD3D9",
        "filter-bg": "#D9D9D9",
      },
      backgroundPosition: {
        select: "right .8rem bottom 50%",
      },
      backgroundImage: {
        login: "url('/src/static/login.svg')",
        listing: "url('/src/static/listing.svg')",
        thesis: "url('/src/static/thesisbg.svg')",
        "hero-footer": "url('/img/footer.png')",
        "main-gradient":
          "linear-gradient(180deg, #0C0F1F, #0C0F1F, #0C0F1F, #0C0F1F, #0C0F1F,#0C0F1F, #052141, #052141, #052141, #0C0F1F, #0C0F1F, #0C0F1F,  #0C0F1F,  #0C0F1F, #0C0F1F, #0C0F1F)",
        "main-gradient-mobile":
          "linear-gradient(180deg, #0C0F1F, #0C0F1F, #0C0F1F, #0C0F1F, #0C0F1F, #052141, #052141, #052141,  #0C0F1F,  #0C0F1F,  #0C0F1F)",
        "header-gradient":
          "linear-gradient(90deg, #0A142D, #0C0F1F, #0C0F1F ,#0C0F1F, #0C0F1F, #0A142D)",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            transform: "translateY(-20px)",
          },
          "50%": {
            transform: "translateY(5px)",
          },
          "70%": {
            transform: "translateY(-5px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "menu-mobile-in": {
          "0%": {
            transform: "translateX(5rem)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "menu-mobile-out": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(5rem)",
          },
        },
      },

      animation: {
        "fade-in": "fade-in .5s ease-in-out",
        "menu-mobile-in": "menu-mobile-in .5s ease-in-out",
        "menu-mobile-out": "menu-mobile-out .5s ease-in-out",
      },
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1060px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Untitled", "sans-serif"],
      baskerville: ["Baskerville", "sans-serif"],
      libre: ["Libre Baskerville", "sans-serif"],
    },
  },
  variants: {
    display: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
  },
  plugins: [require("tailwind-children")],
};
