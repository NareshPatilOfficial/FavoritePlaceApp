import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../../constanst/colors";

function OutlineButton({ iconName, children, onPress }) {
    return (
        <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={onPress}
        >
            <View style={styles.innerContainer}>
                <Ionicons
                    name={iconName}
                    size={18}
                    color={Colors.primary500}
                    style={styles.icon}
                />
                <Text style={styles.btnLabel}>{children}</Text>
            </View>
        </Pressable>
    )

}

export default OutlineButton;

const styles = StyleSheet.create({
    button: {
        marginVertical: 8
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: Colors.primary100,
        borderRadius: 8
    },
    btnLabel: {
        fontSize: 16,
        color: Colors.primary500
    },
    icon: {
        marginRight: 10
    },
    pressed: {
        opacity: 0.25
    }
});