import {TextStyle} from 'react-native';

// Import typography directly to avoid circular dependency
const typography = {
  fontFamily: {
    // Lato font family - these names must match the actual font file names
    thin: 'Lato-Thin',
    thinItalic: 'Lato-ThinItalic',
    light: 'Lato-Light',
    lightItalic: 'Lato-LightItalic',
    regular: 'Lato-Regular',
    italic: 'Lato-Italic',
    medium: 'Lato-Regular', // Lato doesn't have Medium, using Regular
    mediumItalic: 'Lato-Italic',
    semibold: 'Lato-Regular', // Lato doesn't have Semibold, using Regular
    semiboldItalic: 'Lato-Italic',
    bold: 'Lato-Bold',
    boldItalic: 'Lato-BoldItalic',
    black: 'Lato-Black',
    blackItalic: 'Lato-BlackItalic',
  },
  fontSize: {
    xs: 10,
    sm: 12,
    base: 14,
    lg: 16,
    xl: 18,
    '2xl': 20,
    '3xl': 24,
    '4xl': 30,
    '5xl': 36,
    '6xl': 48,
  },
  // Note: fontWeight is not used with custom fonts as it overrides fontFamily
  // Font weight comes from the font file itself (Lato-Bold.ttf = bold weight)
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
  },
  letterSpacing: {
    tight: -0.03,
    normal: 0,
    wide: 0.03,
  },
};

// Font style presets for common use cases
export const fontStyles = {
  // Display styles for large headings
  display: {
    large: {
      fontFamily: typography.fontFamily.black,
      fontSize: typography.fontSize['5xl'],
      lineHeight: typography.fontSize['5xl'] * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.tight,
    } as TextStyle,
    medium: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize['4xl'],
      lineHeight: typography.fontSize['4xl'] * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.tight,
    } as TextStyle,
    small: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize['3xl'],
      lineHeight: typography.fontSize['3xl'] * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.normal,
    } as TextStyle,
  },

  // Heading styles
  heading: {
    h1: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize['3xl'],
      lineHeight: typography.fontSize['3xl'] * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.normal,
    } as TextStyle,
    h2: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize['2xl'],
      lineHeight: typography.fontSize['2xl'] * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.normal,
    } as TextStyle,
    h3: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize.xl,
      lineHeight: typography.fontSize.xl * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.normal,
    } as TextStyle,
    h4: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize.lg,
      lineHeight: typography.fontSize.lg * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.normal,
    } as TextStyle,
  },

  // Body text styles
  body: {
    large: {
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.lg,
      lineHeight: typography.fontSize.lg * typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.normal,
    } as TextStyle,
    regular: {
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.base,
      lineHeight: typography.fontSize.base * typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.normal,
    } as TextStyle,
    small: {
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.sm,
      lineHeight: typography.fontSize.sm * typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.normal,
    } as TextStyle,
    caption: {
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.xs,
      lineHeight: typography.fontSize.xs * typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.wide,
    } as TextStyle,
  },

  // Button styles
  button: {
    primary: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize.lg,
      lineHeight: typography.fontSize.lg * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.wide,
    } as TextStyle,
    secondary: {
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.lg,
      lineHeight: typography.fontSize.lg * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.wide,
    } as TextStyle,
    small: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize.base,
      lineHeight: typography.fontSize.base * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.wide,
    } as TextStyle,
  },

  // Label styles
  label: {
    large: {
      fontFamily: typography.fontFamily.bold,
      fontSize: typography.fontSize.base,
      lineHeight: typography.fontSize.base * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.normal,
    } as TextStyle,
    regular: {
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.sm,
      lineHeight: typography.fontSize.sm * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.normal,
    } as TextStyle,
    small: {
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.xs,
      lineHeight: typography.fontSize.xs * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.normal,
    } as TextStyle,
  },

  // Special styles for specific use cases
  special: {
    appVersion: {
      fontFamily: typography.fontFamily.regular,
      fontSize: typography.fontSize.xs,
      lineHeight: typography.fontSize.xs * typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.wide,
    } as TextStyle,
    logo: {
      fontFamily: typography.fontFamily.black,
      fontSize: typography.fontSize['5xl'],
      lineHeight: typography.fontSize['5xl'] * typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.tight,
    } as TextStyle,
  },
};

// Helper function to create custom font styles
export const createFontStyle = (
  family: keyof typeof typography.fontFamily,
  size: keyof typeof typography.fontSize,
  lineHeight?: keyof typeof typography.lineHeight,
  letterSpacing?: keyof typeof typography.letterSpacing,
): TextStyle => {
  const fontFamily = typography.fontFamily[family];
  const fontSize = typography.fontSize[size];
  const lineHeightMultiplier = lineHeight
    ? typography.lineHeight[lineHeight]
    : typography.lineHeight.normal;
  const letterSpacingValue = letterSpacing
    ? typography.letterSpacing[letterSpacing]
    : typography.letterSpacing.normal;

  return {
    fontFamily,
    fontSize,
    lineHeight: fontSize * lineHeightMultiplier,
    letterSpacing: letterSpacingValue,
  };
};

// Helper function to get font family by weight
export const getFontFamilyByWeight = (
  weight: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black',
): string => {
  const weightMap: Record<string, keyof typeof typography.fontFamily> = {
    thin: 'thin',
    light: 'light',
    normal: 'regular',
    medium: 'medium',
    semibold: 'semibold',
    bold: 'bold',
    black: 'black',
  };

  return typography.fontFamily[weightMap[weight]];
};

// Export typography for direct access
export {typography};
