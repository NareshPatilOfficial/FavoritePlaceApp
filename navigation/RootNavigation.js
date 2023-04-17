import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "../screens/AllPlaces";
import AddPlace from "../screens/AddPlace";
import PlaceDetails from "../screens/PlaceDetails";
import Map from "../screens/Map";
import IconButton from "../components/ui/IconButton";

const Stack = createNativeStackNavigator();

function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="AllPlaces"
                    component={AllPlaces}
                    options={{
                        headerRight:({tintColor}) => <IconButton name={'add'} color={tintColor} size={22}/>
                    }}
                />
                <Stack.Screen name="AddPlace" component={AddPlace} />
                <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
                <Stack.Screen name="Map" component={Map} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;