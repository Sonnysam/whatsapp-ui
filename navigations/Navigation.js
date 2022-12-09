import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/Home";
import HomeScreen from "../navigations/MyTabs";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Home />
      <HomeScreen />
    </NavigationContainer>
  );
}
