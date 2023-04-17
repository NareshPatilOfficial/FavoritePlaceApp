import { Alert, Image, StyleSheet, Text, View } from "react-native";
import Button from "../ui/Button";
import { PermissionStatus, launchCameraAsync, launchImageLibraryAsync, useCameraPermissions } from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constanst/colors";
// import { PermissionsAndroid } from "react-native";
// import * as Permissions from 'expo-permissions'

function ImagePicker() {
    const [pickedImage, setPickedImage] = useState();

    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

    const verifyPermission = async () => {
        console.log('cameraPermissionInfo', cameraPermissionInfo);
        if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            console.log('permissionResponse', permissionResponse);
            return permissionResponse.granted;
        }

        if (cameraPermissionInfo.status === PermissionStatus.GRANTED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permission!',
                'You need to grant camera permission to use this app.'
            );
            return false;
        }
    }

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermission();
        console.log('hasPermission', hasPermission);
        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            // allowsEditing: true,
            // aspect: [16, 9],
            quality: 0.5
        });
        console.log('image', image.assets[0].uri);

        setPickedImage(image.assets[0].uri);
    }

    const renderPickedImage = () => {
        return pickedImage ? <Image style={styles.image} source={{ uri: pickedImage }} />
            : <Text style={styles.noImage}>No image taken yet</Text>
    }

    return (
        <View style={styles.form}>
            <View style={styles.imageContainer}>
                {renderPickedImage()}
            </View>
            <Button onPress={takeImageHandler}>Take photo</Button>
        </View>
    )
}

export default ImagePicker;

const styles = StyleSheet.create({
    form: {

    },
    noImage: {
        color: Colors.primary800,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '100%',
        height: 200,
        backgroundColor: Colors.primary100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})