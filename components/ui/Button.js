import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constanst/colors";

function Button({ children, onPress }) {
    return (
        <View style={styles.outerContainer}>
            <Pressable android_ripple={{ color: Colors.primary200 }} style={styles.innerContainer} onPress={onPress}>
                <Text style={styles.btnLabel}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 8,
        overflow: 'hidden',
        marginVertical:8
    },
    innerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnLabel: {
        textAlign: 'center'
    }
})