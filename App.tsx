import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Redux Toolkit
import { Provider as ReduxProvider } from "react-redux";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

import store from './src/redux/store';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
          <ReduxProvider store={store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
       </ReduxProvider>
        </SafeAreaProvider>
    );
  }
};
export default App;
