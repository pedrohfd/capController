import React from 'react'
import { Home } from './src/pages/Home'
import 'react-native-gesture-handler'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  })

  // if (!fontsLoaded) {
  //   return null
  // }

  return <Home />
}
