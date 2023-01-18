import { createStackNavigator } from "@react-navigation/stack";

import Home from "@screens/Home";
import NewMeal from "@screens/NewMeal";
import Statistics from "@screens/Statistics";
import NewMealFeedback from "@screens/NewMealFeedback";
import FoodOverview from "@screens/FoodOverview";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {

    return (
        <Navigator screenOptions = {{headerShown: false}}>
            <Screen name = 'home' component = {Home}/>
            <Screen name = 'statistics' component = {Statistics}/>
            <Screen name = 'newMeal' component = {NewMeal}/>
            <Screen name = 'newMealFeedback' component = {NewMealFeedback}/>
            <Screen name = 'foodOverview' component = {FoodOverview} />
        </Navigator>
    )
}

export default AppRoutes;