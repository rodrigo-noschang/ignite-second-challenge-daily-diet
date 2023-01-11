import { createStackNavigator } from "@react-navigation/stack";
import Home from "@screens/Home";
import Statistics from "@screens/Statistics";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {

    return (
        <Navigator screenOptions = {{headerShown: false}}>
            <Screen name = 'home' component = {Home}/>
            <Screen name = 'statistics' component = {Statistics}/>
        </Navigator>
    )
}

export default AppRoutes;