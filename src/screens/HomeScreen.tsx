import {StyleSheet, Text, View} from 'react-native';

import {colors, spacing, typography} from '@theme/index';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  title: {
    color: colors.text,
    fontSize: typography.fontSize['3xl'],
    fontWeight: '700' as const,
    textAlign: 'center',
  },
});

export default HomeScreen;
