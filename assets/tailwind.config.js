tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ['"Poppins"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Poppins"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "rgb(var(--c-bg) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        surface2: "rgb(var(--c-surface2) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        inksoft: "rgb(var(--c-inksoft) / <alpha-value>)",
        head: "rgb(var(--c-head) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--c-primary) / <alpha-value>)",
          strong: "rgb(var(--c-primary-strong) / <alpha-value>)",
        },
        accent: "rgb(var(--c-accent) / <alpha-value>)",
        amber: "rgb(var(--c-amber-text) / <alpha-value>)",
      },
    },
  },
};
