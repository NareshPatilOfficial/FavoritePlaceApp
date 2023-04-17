import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "../screens/AllPlaces";
import AddPlace from "../screens/AddPlace";
import PlaceDetails from "../screens/PlaceDetails";
import Map from "../screens/Map";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../constanst/colors";

const Stack = createNativeStackNavigator();

function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: Colors.primary100 },
                    headerTintColor: Colors.primary800,
                    contentStyle: { backgroundColor: Colors.primary800 }
                }}
            >
                <Stack.Screen
                    name="AllPlaces"
                    component={AllPlaces}
                    options={({ navigation }) => ({
                        title: 'Your Favourite Places',
                        headerRight: ({ tintColor }) =>
                            <IconButton name={'add'}
                                color={tintColor} size={22}
                                onPress={() => navigation.navigate('AddPlace')}
                            />
                    })}
                />
                <Stack.Screen
                    name="AddPlace"
                    component={AddPlace}
                    options={{
                        title: 'Add a new place'
                    }}
                />
                <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
                <Stack.Screen name="Map" component={Map} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;