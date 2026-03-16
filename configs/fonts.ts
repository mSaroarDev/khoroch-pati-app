import { useFonts } from '@expo-google-fonts/hind-siliguri/useFonts';
import { HindSiliguri_300Light } from '@expo-google-fonts/hind-siliguri/300Light';
import { HindSiliguri_400Regular } from '@expo-google-fonts/hind-siliguri/400Regular';
import { HindSiliguri_500Medium } from '@expo-google-fonts/hind-siliguri/500Medium';
import { HindSiliguri_600SemiBold } from '@expo-google-fonts/hind-siliguri/600SemiBold';
import { HindSiliguri_700Bold } from '@expo-google-fonts/hind-siliguri/700Bold';

export const FONTS = {
  Light: 'HindSiliguri_300Light',
  Regular: 'HindSiliguri_400Regular',
  Medium: 'HindSiliguri_500Medium',
  SemiBold: 'HindSiliguri_600SemiBold',
  Bold: 'HindSiliguri_700Bold',
};

export default function useFontConfigs() {
  const [fontsLoaded, fontError] = useFonts({
    HindSiliguri_300Light, 
    HindSiliguri_400Regular, 
    HindSiliguri_500Medium, 
    HindSiliguri_600SemiBold, 
    HindSiliguri_700Bold
  });

  return { fontsLoaded, fontError };
}