import React from "react";
import store from "./src/redux/store";
import { SafeAreaView, StyleSheet } from "react-native";
import HeaderComponent from "./src/components/HeaderComponent";
import TabBarComponent from "./src/components/TabBarComponent";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import "./src/translations/i18n";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <HeaderComponent />
          <Divider />
          <TabBarComponent />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default App;
