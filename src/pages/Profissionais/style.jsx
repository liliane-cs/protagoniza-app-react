const style = {

  colors: {
    surface: "#fcf8f9",
    surfaceDim: "#ddd9da",
    surfaceBright: "#fcf8f9",

    surfaceContainerLowest: "#ffffff",
    surfaceContainerLow: "#f6f3f4",
    surfaceContainer: "#f1edee",
    surfaceContainerHigh: "#ebe7e8",
    surfaceContainerHighest: "#e5e1e2",

    background: "#fcf8f9",
    onBackground: "#1c1b1c",

    onSurface: "#1c1b1c",
    onSurfaceVariant: "#504445",
    inverseSurface: "#313031",
    inverseOnSurface: "#f4f0f1",

    outline: "#837375",
    outlineVariant: "#d5c2c4",

    primary: "#8c5b65",
    primaryDark: "#71444d",
    onPrimary: "#ffffff",
    primaryContainer: "#8c5b65",
    onPrimaryContainer: "#ffe2e6",
    inversePrimary: "#f3b7c2",

    secondary: "#d4a7b0",
    secondaryDark: "#79545c",
    onSecondary: "#ffffff",
    secondaryContainer: "#feced7",
    onSecondaryContainer: "#7a555d",

    tertiary: "#6b4950",
    tertiaryDark: "#69474e",
    onTertiary: "#ffffff",
    tertiaryContainer: "#835f66",
    onTertiaryContainer: "#ffe2e6",

    accent: "#db91a0",
    accentLight: "#ffcfd9",

    error: "#ba1a1a",
    onError: "#ffffff",
    errorContainer: "#ffdad6",
    onErrorContainer: "#93000a",

    surfaceVariant: "#e5e1e2",
  },

  //
  typography: {
    headlineLg: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px",
      letterSpacing: "-0.02em",
    },


    headlineMd: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "32px",
      letterSpacing: "-0.01em",
    },

    headlineSm: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
    },

    bodyLg: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },

    bodyMd: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },

    labelMd: {
      fontFamily: "Manrope, sans-serif",
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "16px",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
  },

  spacing: {
    base: "4px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",

    gutter: "16px",
    mobileMargin: "20px",
  },

  radius: {
    sm: "4px",
    default: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    full: "9999px",
  },

  shadows: {
    ambient:
      "0 4px 16px rgba(140, 91, 101, 0.08)",
    ambientLg:
      "0 8px 24px rgba(140, 91, 101, 0.10)",
    pressed:
      "inset 0 2px 4px rgba(140, 91, 101, 0.12)",
  },

  layout: {
    mobileMargin: "20px",
    sectionGap: "32px",
    cardGap: "16px",
    baselineGrid: 4,
  },

  components: {
    button: {
      primary: {
        background: "#8c5b65",
        color: "#ffffff",
        borderRadius: "8px",
      },

      secondary: {
        background: "transparent",
        color: "#8c5b65",
        border: "1px solid #d4a7b0",
        borderRadius: "8px",
      },
    },

    input: {
      background: "#f9f5f6",
      border: "1px solid transparent",
      borderRadius: "8px",

      focus: {
        border: "1px solid #8c5b65",
      },
    },

    chip: {
      background: "#ffcfd9",
      color: "#6b4950",
      borderRadius: "9999px",
      padding: "6px 12px",
    },

    card: {
      background: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 4px 16px rgba(140, 91, 101, 0.08)",
      border: "1px solid rgba(212, 167, 176, 0.3)",
    },

    list: {
      divider: "1px solid rgba(212, 167, 176, 0.3)",
    },
  },

  brand: {
    aesthetic: "Soft Corporate",
    principles: [
      "Minimalism",
      "Modern Professional",
      "Human-Centered",
      "Mobile First",
      "Elegant",
      "Trustworthy",
    ],
  },
};

export default style;