import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'

import { Home } from '../screens/home'


type AppRoutes = {
    home: undefined;
}

export type RoutesAuthenticatedProps = NativeStackNavigationProp<AppRoutes>

const {Navigator, Screen} = createNativeStackNavigator<AppRoutes>()

export function AppRoutes() {
    return (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen name='home' component={Home}/>
        
    </Navigator>
    )

}
