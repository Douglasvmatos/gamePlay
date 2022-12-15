import React, { useCallback, useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani"
import { Inter_500Medium, Inter_400Regular } from "@expo-google-fonts/inter"

// import { SignIn } from './src/screens/SignIn';
import { Routes } from "./src/routes"

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Rajdhani_500Medium,
          Rajdhani_700Bold,
          Inter_500Medium,
          Inter_400Regular
        })
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent />
        <Routes />
    </View>
  );
}
