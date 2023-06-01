import { View, Button, Alert, Image, Text } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { useState } from "react";


function ImagePicker({ text, onImageTaken }) {


  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

  async function verifyPremissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
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

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
      exif: true,
      outputFormat: "PNG",
    });

    console.log(image);
    onImageTaken(image);



  } return (<View>

    <Button title={text} onPress={takeImageHandler} />
  </View>);

} export default ImagePicker;