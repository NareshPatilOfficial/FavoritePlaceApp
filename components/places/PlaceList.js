import { FlatList } from "react-native";
import { Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

function PlaceList({ places }) {
    console.log('places', places);
    return (
        <View>
            <FlatList
                data={places}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <PlaceItem {...item} />}
            />
        </View>
    )
}

export default PlaceList;