import React from 'react';

import {View, Text, ScrollView, StyleSheet} from 'react-native';

import {colors, spacing, fontStyles, createFontStyle} from '@theme/index';

/**
 * Typography Example Component
 *
 * This component demonstrates all available font styles and typography options.
 * Use this as a reference when implementing typography in your components.
 *
 * Usage examples:
 * - <Text style={fontStyles.heading.h1}>Heading 1</Text>
 * - <Text style={fontStyles.body.regular}>Regular body text</Text>
 * - <Text style={fontStyles.button.primary}>Button text</Text>
 * - <Text style={createFontStyle('bold', 'xl', 'bold', 'tight')}>Custom style</Text>
 */
const TypographyExample: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Display Styles */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Display Styles</Text>
        <Text style={[fontStyles.display.large, styles.text]}>
          Display Large - Rise Real Estate
        </Text>
        <Text style={[fontStyles.display.medium, styles.text]}>Display Medium - Main Title</Text>
        <Text style={[fontStyles.display.small, styles.text]}>Display Small - Section Title</Text>
      </View>

      {/* Heading Styles */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Heading Styles</Text>
        <Text style={[fontStyles.heading.h1, styles.text]}>Heading 1 - Page Title</Text>
        <Text style={[fontStyles.heading.h2, styles.text]}>Heading 2 - Section Title</Text>
        <Text style={[fontStyles.heading.h3, styles.text]}>Heading 3 - Subsection Title</Text>
        <Text style={[fontStyles.heading.h4, styles.text]}>Heading 4 - Card Title</Text>
      </View>

      {/* Body Text Styles */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Body Text Styles</Text>
        <Text style={[fontStyles.body.large, styles.text]}>
          Body Large - This is large body text for important content that needs to stand out.
        </Text>
        <Text style={[fontStyles.body.regular, styles.text]}>
          Body Regular - This is the standard body text used throughout the app for most content.
        </Text>
        <Text style={[fontStyles.body.small, styles.text]}>
          Body Small - This is smaller text for secondary information and details.
        </Text>
        <Text style={[fontStyles.body.caption, styles.text]}>
          Body Caption - This is caption text for metadata, timestamps, and small details.
        </Text>
      </View>

      {/* Button Styles */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button Styles</Text>
        <Text style={[fontStyles.button.primary, styles.text]}>
          Button Primary - Main action buttons
        </Text>
        <Text style={[fontStyles.button.secondary, styles.text]}>
          Button Secondary - Secondary action buttons
        </Text>
        <Text style={[fontStyles.button.small, styles.text]}>Button Small - Compact buttons</Text>
      </View>

      {/* Label Styles */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Label Styles</Text>
        <Text style={[fontStyles.label.large, styles.text]}>Label Large - Form field labels</Text>
        <Text style={[fontStyles.label.regular, styles.text]}>Label Regular - Standard labels</Text>
        <Text style={[fontStyles.label.small, styles.text]}>
          Label Small - Small labels and tags
        </Text>
      </View>

      {/* Special Styles */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Special Styles</Text>
        <Text style={[fontStyles.special.appVersion, styles.text]}>
          App Version - Version 1.0.0
        </Text>
        <Text style={[fontStyles.special.logo, styles.text]}>Logo - Rise Real Estate</Text>
      </View>

      {/* Custom Font Styles */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Custom Font Styles</Text>
        <Text style={[createFontStyle('light', 'xl', 'relaxed'), styles.text]}>
          Custom Light XL with Relaxed Line Height
        </Text>
        <Text style={[createFontStyle('bold', '2xl', 'tight'), styles.text]}>
          Custom Bold 2XL with Tight Line Height
        </Text>
        <Text style={[createFontStyle('black', 'lg', 'normal'), styles.text]}>
          Custom Black LG with Normal Line Height
        </Text>
      </View>

      {/* Font Family Examples */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Font Family Examples</Text>
        <Text style={[styles.text, {fontFamily: 'Lato-Thin', fontSize: 18}]}>
          Lato Thin - Lightweight text
        </Text>
        <Text style={[styles.text, {fontFamily: 'Lato-Light', fontSize: 18}]}>
          Lato Light - Light text
        </Text>
        <Text style={[styles.text, {fontFamily: 'Lato-Regular', fontSize: 18}]}>
          Lato Regular - Standard text
        </Text>
        <Text style={[styles.text, {fontFamily: 'Lato-Bold', fontSize: 18}]}>
          Lato Bold - Bold text
        </Text>
        <Text style={[styles.text, {fontFamily: 'Lato-Black', fontSize: 18}]}>
          Lato Black - Heavy text
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  section: {
    marginBottom: spacing.xl,
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: spacing.sm,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  sectionTitle: {
    ...fontStyles.heading.h3,
    color: colors.primary,
    marginBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    paddingBottom: spacing.sm,
  },
  text: {
    color: colors.text,
    marginBottom: spacing.sm,
  },
});

export default TypographyExample;
