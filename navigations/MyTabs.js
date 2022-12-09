import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Calls from "../components/Calls";
import Status from "../components/Status";
import Chats from "../components/Chats";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calls" component={Calls} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Chats" component={Chats} />
    </Tab.Navigator>
  );
}
