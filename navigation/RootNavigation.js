import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "../screens/AllPlaces";
import ManagePlace from "../screens/ManagePlace";
import PlaceDetails from "../screens/PlaceDetails";
import Map from "../screens/Map";

const Stack = createNativeStackNavigator();

function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AllPlaces" component={AllPlaces} />
                <Stack.Screen name="ManagePlace" component={ManagePlace} />
                <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
                <Stack.Screen name="Map" component={Map} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;