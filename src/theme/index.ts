import {Dimensions} from 'react-native';

import {scale} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

// Custom scaling functions for @s, @vs, @ms syntax

export const colors = {
  // Figma Design Colors from Real Estate App UI Kit
  primary: '#234F68', // Main blue color from Figma
  primaryDark: '#1A3D52', // Darker blue
  primaryLight: '#2D5F7A', // Lighter blue

  // Accent colors from Figma
  accent: '#8BC83F', // Green accent color from Figma
  accentLight: '#9ED44A', // Lighter green
  accentDark: '#7AB339', // Darker green

  // Overlay colors from Figma
  overlay: 'rgba(33, 98, 138, 0.8)', // Blue overlay from Figma
  gradientStart: 'rgba(139, 200, 61, 1)', // Green gradient start
  gradientEnd: 'rgba(141, 255, 0, 1)', // Green gradient end

  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Semantic colors
  success: '#34D399',
  warning: '#FBBF24',
  error: '#F87171',
  info: '#60A5FA',

  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F8F9FA',
  surface: '#FFFFFF',
  surfaceSecondary: '#F8F9FA',

  // Text colors
  text: '#1F2937',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  textInverse: '#FFFFFF',
};

export const typography = {
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

    // Fallback fonts for better cross-platform support
    fallback: {
      thin: 'System',
      light: 'System',
      regular: 'System',
      medium: 'System',
      semibold: 'System',
      bold: 'System',
      black: 'System',
    },
  },
  fontSize: {
    // Exact Figma specifications using scale() function
    xs: scale(10), // App version text
    sm: scale(12), // Small text
    base: scale(14), // Body text
    lg: scale(16), // Button text, subtitle
    xl: scale(18), // Medium text
    '2xl': scale(20), // Large text
    '3xl': scale(24), // Heading
    '4xl': scale(30), // Large heading
    '5xl': scale(36), // Main title "Rise Real Estate"
    '6xl': scale(48), // Extra large
  },
  // Note: fontWeight is not used with custom fonts as it overrides fontFamily
  // Font weight comes from the font file itself (Lato-Bold.ttf = bold weight)
  lineHeight: {
    // Figma specifications
    tight: 1.2, // Main title
    normal: 1.4, // Body text
    relaxed: 1.6, // Subtitle
    loose: 1.8, // Large text
  },
  letterSpacing: {
    // Figma specifications - converted to numbers for React Native
    tight: -0.03, // Main title (-3%)
    normal: 0,
    wide: 0.03, // Button text, app version (3%)
  },
};

export const spacing = {
  // Exact Figma measurements using scale() function
  xs: scale(4),
  sm: scale(8),
  md: scale(16),
  lg: scale(24),
  xl: scale(32),
  '2xl': scale(48),
  '3xl': scale(64),
  '4xl': scale(80),

  // Figma-specific spacing
  buttonHeight: scale(54), // Button height from Figma
  buttonPadding: scale(20), // Button horizontal padding
  titleMargin: scale(92), // Title horizontal positioning
  contentPadding: scale(76), // Content area padding
};

export const borderRadius = {
  none: 0,
  sm: scale(4),
  md: scale(8),
  lg: scale(10), // Button border radius from Figma
  xl: scale(16),
  '2xl': scale(20),
  '3xl': scale(24),
  '4xl': scale(50), // Main container border radius from Figma
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: scale(1)},
    shadowOpacity: 0.05,
    shadowRadius: scale(2),
    elevation: 1,
  },
  md: {
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: scale(2)},
    shadowOpacity: 0.1,
    shadowRadius: scale(4),
    elevation: 3,
  },
  lg: {
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: scale(4)},
    shadowOpacity: 0.15,
    shadowRadius: scale(8),
    elevation: 5,
  },
  xl: {
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: scale(6)},
    shadowOpacity: 0.2,
    shadowRadius: scale(12),
    elevation: 8,
  },
};

// Screen dimensions
export const screenDimensions = {
  width,
  height,
  isSmallDevice: width < 375,
  isMediumDevice: width >= 375 && width < 414,
  isLargeDevice: width >= 414,
};

// Figma-specific layout constants
export const layout = {
  // From Figma design
  containerWidth: 375,
  containerHeight: 812,
  imageWidth: 447, // Background image width
  imageHeight: 812, // Background image height
  logoWidth: 223, // Logo mask group width
  logoHeight: 210, // Logo mask group height
  buttonWidth: 190, // Button width
  buttonHeight: 54, // Button height
  titleWidth: 190, // Title text width
  titleHeight: 101, // Title text height
};

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  screenDimensions,
  layout,
  scale,
};

// Export fonts utility for easy access
export * from './fonts';
