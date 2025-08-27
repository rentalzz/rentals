import {Text, View} from 'react-native';

import {colors, spacing, fontStyles} from '@theme/index';
import {ScaledSheet} from 'react-native-size-matters';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login Screen</Text>
        <Text style={styles.subtitle}>Welcome to Real Estate App</Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
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
    color: colors.primary,
    ...fontStyles.heading.h1,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  subtitle: {
    color: colors.textSecondary,
    ...fontStyles.body.large,
    textAlign: 'center',
  },
});

export default LoginScreen;
