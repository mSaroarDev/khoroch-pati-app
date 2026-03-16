import { Text, TextProps } from 'react-native';
import { FONTS } from '@/configs/fonts';

export function AppText({ style, ...props }: TextProps) {
  return (
    <Text
      style={[{ fontFamily: FONTS.Regular, fontSize: 20, color: "#000" }, style]}
      {...props}
    />
  );
}
