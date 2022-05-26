import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from '../../screens/login';
import {Signup} from '../../screens/sIgnUp';

const NavContainer =()=>{
// help to stack the screen in it 
    const Stack = createNativeStackNavigator();

return(

<NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen name="Login" component={Login} />
   <Stack.Screen name="Signup" component={Signup} />

    </Stack.Navigator>
</NavigationContainer>

)
}

export {NavContainer}