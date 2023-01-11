import { createStackNavigator } from "@react-navigation/stack";

import Home from "@screens/Home";
import NewMeal from "@screens/NewMeal";
import Statistics from "@screens/Statistics";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {

    return (
        <Navigator screenOptions = {{headerShown: false}} initialRouteName = 'newMeal'>
            <Screen name = 'home' component = {Home}/>
            <Screen name = 'statistics' component = {Statistics}/>
            <Screen name = 'newMeal' component = {NewMeal}/>
        </Navigator>
    )
}

export default AppRoutes;