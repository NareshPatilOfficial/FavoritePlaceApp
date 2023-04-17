import { Image, Text, View } from "react-native";

function PlaceItem({ id, title, imageUrl, location }) {
    return (
        <View>
            {/* <Image source={{ uri: imageUrl }} /> */}
            <Text>{title}</Text>
        </View>
    )
}

export default PlaceItem;