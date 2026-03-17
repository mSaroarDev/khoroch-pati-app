import useFontConfigs from '@/configs/fonts';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash until root resources are ready, but don't let failures block startup.
SplashScreen.preventAutoHideAsync().catch(() => {
  // no-op: preventAutoHideAsync may reject during fast refresh or if already handled.
});

export default function RootLayout() {
  const { fontsLoaded, fontError } = useFontConfigs();

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {
        // no-op: if hiding fails once, rendering still proceeds.
      });
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    const splashFallback = setTimeout(() => {
      SplashScreen.hideAsync().catch(() => {
        // no-op: best effort fallback for stuck splash in development builds.
      });
    }, 3500);

    return () => clearTimeout(splashFallback);
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(screens)/login/index" options={{ headerShown: false }} />
          <Stack.Screen name="(screens)/dashboard/index" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
