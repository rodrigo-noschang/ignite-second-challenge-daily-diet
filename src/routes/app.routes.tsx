import { createStackNavigator } from "@react-navigation/stack";

import Home from "@screens/Home";
import NewMeal from "@screens/NewMeal";
import Statistics from "@screens/Statistics";
import NewMealFeedback from "@screens/NewMealFeedback";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {

    return (
        <Navigator screenOptions = {{headerShown: false}}>
            <Screen name = 'home' component = {Home}/>
            <Screen name = 'statistics' component = {Statistics}/>
            <Screen name = 'newMeal' component = {NewMeal}/>
            <Screen name = 'newMealFeedback' component = {NewMealFeedback}/>
        </Navigator>
    )
}

export default AppRoutes;