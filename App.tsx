import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet} from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { HomeScreen } from "./src/screens/Home";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
