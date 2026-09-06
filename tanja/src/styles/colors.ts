export const colors = {
  // Core background shades
  black: "#0A0A0A",            // main background
  dark: "#141414",             // alternating/section background
  // Common semantic aliases (for theming convenience)
  background: "#0A0A0A",
  text: "#EDEDED",

  // Text colors
  textPrimary: "#EDEDED",      // main content
  textSecondary: "#AAAAAA",    // muted/secondary text

  // Accents (used sparingly)
  neonMagenta: "#ff1975",      // primary accent
  cyan: "#00FFFF",             // secondary accent

  // Utilities
  white: "#ffffff",
  transparentBlack: "rgba(10,10,10,0.6)",

  // Legacy mapped to new scheme for compatibility
  gray900: "#141414",
  testimonialsBg: "#141414",
} as const;

export type ColorName = keyof typeof colors;


