import {Text, TouchableOpacity} from 'react-native';

import {borderRadius, colors, spacing, fontStyles} from '@theme/index';
import {ScaledSheet} from 'react-native-size-matters';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({title, onPress, variant = 'primary', disabled = false}) => {
  const buttonStyle = [
    styles.button,
    variant === 'secondary' && styles.buttonSecondary,
    variant === 'accent' && styles.buttonAccent,
    disabled && styles.buttonDisabled,
  ];

  const textStyle = [
    styles.buttonText,
    variant === 'secondary' && styles.buttonTextSecondary,
    variant === 'accent' && styles.buttonTextAccent,
    disabled && styles.buttonTextDisabled,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled} activeOpacity={0.8}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  button: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.lg, // 10px from Figma
    paddingHorizontal: spacing.buttonPadding, // 20px from Figma
    paddingVertical: spacing.md,
    height: spacing.buttonHeight, // 54px from Figma
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonSecondary: {
    backgroundColor: colors.gray[600],
  },
  buttonAccent: {
    backgroundColor: colors.accent, // Green from Figma
  },
  buttonDisabled: {
    backgroundColor: colors.gray[400],
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: colors.white,
    ...fontStyles.button.primary, // Using the new font system
  },
  buttonTextSecondary: {
    color: colors.white,
    ...fontStyles.button.secondary, // Using secondary button font style
  },
  buttonTextAccent: {
    color: colors.white,
    ...fontStyles.button.primary, // Using primary button font style for accent
  },
  buttonTextDisabled: {
    color: colors.gray[600],
    ...fontStyles.button.primary, // Keeping same font style but different color
  },
});

export default Button;
