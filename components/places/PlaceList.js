import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

function PlaceList({ places }) {

    if (places.length <= 0) {
        return (
            <View style={styles.container}>
                <Text>No places added yet, start adding some!</Text>
            </View>
        )
    }

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})