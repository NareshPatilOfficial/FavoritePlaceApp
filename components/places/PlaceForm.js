import { ScrollView, StyleSheet, TextInput, View, Text } from "react-native";
import { Colors } from "../../constanst/colors";
import ImagePicker from "./ImagePicker";

function PlaceForm() {
    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>asas</Text>
                <TextInput style={styles.textInput} />
                <ImagePicker />
            </View>
        </ScrollView>
    )
}

export default PlaceForm;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        color: Colors.primary100,
        fontWeight: 'bold',
        marginBottom: 4
    },
    textInput: {
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 4,
        borderBottomWidth: 2,
        fontSize: 16,
        borderBottomColor: Colors.primary800,
        backgroundColor: Colors.primary100,
        borderRadius: 8
    }
})