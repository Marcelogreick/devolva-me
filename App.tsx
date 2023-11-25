import "./src/libs/dayjs";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";
import { PaperProvider } from "react-native-paper";

import theme from "./src/theme";
import { WifiSlash } from "phosphor-react-native";
import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Routes } from "./src/routes";
import Toast from "react-native-toast-message";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={{ backgroundColor: theme.COLORS.GRAY_800 }}>
        <StatusBar barStyle="dark-content" translucent />
        <PaperProvider>
          <Routes />
          <Toast />
        </PaperProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
