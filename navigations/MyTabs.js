import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Calls from "../components/Calls";
import Status from "../components/Status";
import Chats from "../components/Chats";
import Colors from "../constants/Colors";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { backgroundColor: Colors.primary },
        tabBarIndicatorStyle: {
          backgroundColor: Colors.white,
        },
      }}
    >
      <Tab.Screen name="Calls" component={Calls} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Chats" component={Chats} />
    </Tab.Navigator>
  );
}
