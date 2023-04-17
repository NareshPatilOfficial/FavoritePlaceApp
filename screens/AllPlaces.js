import { View } from "react-native";

import PlaceList from "../components/places/PlaceList";
import PlaceModal from "../model/PlaceModel";

const DUMMY_PLACES = [
    new PlaceModal('p1', 'Maldiv', '', {}),
];

function AllPlaces() {
    return (
        <View>
            <PlaceList places={DUMMY_PLACES}/>
        </View>
    )
}

export default AllPlaces;