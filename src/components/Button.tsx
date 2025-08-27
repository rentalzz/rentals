import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {borderRadius, colors, spacing, typography} from '@theme/index';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({title, onPress, variant = 'primary', disabled = false}) => {
  const buttonStyle = [
    styles.button,
    variant === 'secondary' && styles.buttonSecondary,
    disabled && styles.buttonDisabled,
  ];

  const textStyle = [
    styles.buttonText,
    variant === 'secondary' && styles.buttonTextSecondary,
    disabled && styles.buttonTextDisabled,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled} activeOpacity={0.8}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonDisabled: {
    backgroundColor: colors.gray[400],
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.fontSize.lg,
    fontWeight: '600' as const,
  },
  buttonTextSecondary: {
    color: colors.white,
  },
  buttonTextDisabled: {
    color: colors.gray[600],
  },
});

export default Button;
