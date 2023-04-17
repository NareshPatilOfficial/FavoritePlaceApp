import { View, StyleSheet } from "react-native";

import PlaceList from "../components/places/PlaceList";
import PlaceModal from "../model/PlaceModel";

const DUMMY_PLACES = [
    // new PlaceModal('p1', 'Maldiv', '', {}),
];

function AllPlaces() {
    return (
        <View style={styles.container}>
            <PlaceList places={DUMMY_PLACES} />
        </View>
    )
}

export default AllPlaces;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})