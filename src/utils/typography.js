import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

const blue = "#18E3F3"

const typography = new Typography({
  ...kirkhamTheme,
  baseFontSize: "22px",
  baseLineHeight: 1.66,
  googleFonts: [
    {
      name: "Source Sans Pro",
      styles: ["200"],
    },
  ],
  headerWeight: 200,
  headerFontFamily: ["Source Sans Pro", "sans-serif"],
  bodyFontFamily: ["Source Sans Pro", "sans-serif"],
  headerColor: blue,
  bodyColor: "white",
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      color: "white",
    },
    h1: {
      letterSpacing: "0.125rem",
    },
    h2: {
      letterSpacing: "0.125rem",
    },
    h3: {
      letterSpacing: "0.125rem",
    },
    h4: {
      letterSpacing: "0.125rem",
    },
    h5: {
      letterSpacing: "0.125rem",
    },
    h6: {
      letterSpacing: "0.125rem",
    },
  }),
})

export default typography
