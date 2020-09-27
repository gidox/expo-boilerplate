export * from "./screens";
import { AppLoading, registerRootComponent } from "expo";

import { setConsole } from "react-query";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import MainTabNavigator from "./navigation/MainTabNavigator";

type BaseProps = {
  skipLoadingScreen?: boolean;
};

export const App: React.FC<BaseProps> = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <MainTabNavigator />
    </View>
  );
};

export default registerRootComponent(App);

async function loadResourcesAsync() {
  setConsole({
    log: console.log,
    warn: console.warn,
    error: console.warn,
  });
  // await Promise.all([
  //   Asset.loadAsync([
  //     require("./src/assets/images/robot-dev.png"),
  //     require("./src/assets/images/robot-prod.png"),
  //   ]),
  //   Font.loadAsync({
  //     // This is the font that we are using for our tab bar
  //     ...Ionicons.font,
  //     // We include SpaceMono because we use it in HomeScreen.js. Feel free to
  //     // remove this if you are not using it in your app
  //     "space-mono": require("./src/assets/fonts/SpaceMono-Regular.ttf"),
  //   }),
  // ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete: Function) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
