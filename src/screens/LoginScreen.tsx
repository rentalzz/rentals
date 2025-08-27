import {StyleSheet, Text, View} from 'react-native';

import {colors, spacing, typography} from '@theme/index';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
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

export default LoginScreen;
