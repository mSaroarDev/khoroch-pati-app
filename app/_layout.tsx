import useFontConfigs from '@/configs/fonts';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { fontsLoaded, fontError } = useFontConfigs();

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(screens)/login/index" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
