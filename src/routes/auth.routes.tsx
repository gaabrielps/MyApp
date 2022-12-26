import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'

import { SignUp } from '../screens/signUp'
import { Login } from '../screens/login'
import { ConfirmSign } from '../screens/confirmSign'


type AuthRoutes = {
    signup: undefined;
    login: undefined;
    confirmsign: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>()
//rotas publicas, para quem ainda nao esta autenticado
export function AuthRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
            name="login"
            component={Login}
            />
            
            <Screen
            name="signup"
            component={SignUp}
            />

            <Screen
            name="confirmsign"
            component={ConfirmSign}
            />
        </Navigator>
    )
}

/*
            <Screen
            name="confirmsign"
            component={confirmSign}
            />
*/