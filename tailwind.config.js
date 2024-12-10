/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        /* PRIMARY */
        "moderate-violet": "hsl(263, 55%, 52%)",
        "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "very-dark-blackish-blue": "hsl(219, 29%, 14%)",
        white: "hsl(0, 0%, 100%)",

        /* NEUTRAL */
        "light-gray": "hsl(0, 0%, 81%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },
      fontSize: {
        body: "13px",
        "2xs": "11px",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      fontWeight: {
        medium: 500,
        semibold: 600,
      },
    },
  },
  plugins: [],
};

/* 

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

Note for text colors:

1. "Verified Graduate" has the same color as the person's name with 50% opacity
2. Review paragraphs inside the quotations have the same color as well, but are at 70% opacity

*/
