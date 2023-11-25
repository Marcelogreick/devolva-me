import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Edit } from "../pages/Edit";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Register" component={Register} />
      <Screen name="Edit" component={Edit} />
    </Navigator>
  );
}
