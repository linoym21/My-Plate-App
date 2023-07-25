import { View, Button, Alert } from "react-native";
import { launchImageLibraryAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";

function ImageUpload({ text, onImageTaken }) {
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    async function verifyPremissions() {
        if (cameraPermissionInformation.status == PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if (cameraPermissionInformation.status == PermissionStatus.DENIED) {
            Alert.alert('Insufficient Permissions!', 'You need to grant camera permissions to use this app');
            return false;
        }
        return true;
    }
    async function takeImageHandler() {
        const hasPermission = await verifyPremissions();
        if (!hasPermission) {
            return;
        }
        const image = await launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
            exif: true,
            outputFormat: "PNG",
        });
        onImageTaken(image);
    }
    return (<View>
        <Button title={text} onPress={takeImageHandler} />
    </View>);

}
export default ImageUpload;

