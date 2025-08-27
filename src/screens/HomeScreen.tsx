import {Text, View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {colors, spacing, fontStyles} from '@theme/index';
import {ScaledSheet} from 'react-native-size-matters';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>Real Estate App</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TypographyExample' as never)}>
        <Text style={styles.buttonText}>View Typography Examples</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center',
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
    marginBottom: spacing.xl,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: spacing.sm,
  },
  buttonText: {
    color: colors.white,
    ...fontStyles.button.primary,
  },
});

export default HomeScreen;
