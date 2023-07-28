
import {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
    Alert,
} from "react-native";
import ImagePicker from "./ImagePicker";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import SubText from "./SubText";
import axios from "axios";

function HomePage({ navigation }) {
    const [selectedImageSide, setSelectedImageSide] = useState(null);
    const [selectedImageTop, setSelectedImageTop] = useState(null);
    const [data, setData] = useState(null);

    function takeImageHandlerSide(image) {

        try {
            setSelectedImageSide(image);
            if (selectedImageTop !== null) {
                passImages();
            }
        } catch (error) {
            Alert.alert("YOU NEED 2 PHOTO!",)
        }

    }

    function takeImageHandlerTop(image) {
        try {
            setSelectedImageTop(image);
            if (selectedImageSide !== null) {
                passImages();
            }
        } catch (error) {
            Alert.alert("YOU NEED 2 PHOTO!",)
        }

    }
    async function passImages() {

        if (selectedImageSide && selectedImageSide.assets && selectedImageSide.assets.length > 0) {
            const uriImageSide = selectedImageSide.assets[0].uri;
            console.log("selectedImageSide.assets[0].uri" + uriImageSide);
            const uriImageTop = selectedImageTop.assets[0].uri;
            console.log("selectedImageTop.assets[0].uri" + uriImageTop);

        } else {
            console.log("Invalid JSON data or 'assets' array is empty.");
        }
        // Create a FormData object to store the image data
        const formData = new FormData();
        formData.append('imageSide', { uri: selectedImageSide.assets[0].uri, name: 'image.png', type: 'image/png' });
        formData.append('imageTop', { uri: selectedImageTop.assets[0].uri, name: 'image.png', type: 'image/png' });
        try {
            const response = await axios.post("https://3be0-46-210-46-131.ngrok-free.app/process_images", formData)
            const jsonData = response.data;
            setData(jsonData);
        } catch (error) {
            console.log("cant send images")
        }
    }
    function navigateToResultPage() {
        if (selectedImageSide !== null && selectedImageTop !== null) {
            navigation.navigate("My Plate", { image: selectedImageTop }, { data: data });
        } else {
            Alert.alert("YOU NEED 2 PHOTO!",)
        }
    }
    return (<View style={styles.container}>
        <View style={styles.upperContainer}>
            <View>
                <Image source={require("C:/Users/55dvi/AwesomeProject2/assets/logo.png")} style={styles.stretch} />
            </View>
            <View>
                <Text style={styles.textCon}>What would you like to use? </Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <View style={styles.containerImage1}>
                <View style={styles.comIm1}>
                    <Image
                        source={require("C:/Users/55dvi/AwesomeProject2/assets/imageUpload.png")}
                        style={styles.imageAction}
                    />
                </View>
                <ImageUpload text="Upload Side Image" onImageTaken={takeImageHandlerSide} />
                <ImageUpload text="Upload Top Image" onImageTaken={takeImageHandlerTop} />
            </View>
            <View style={styles.containerImage2}>
                <View style={styles.comIm1}>
                    <Image
                        source={require("C:/Users/55dvi/AwesomeProject2/assets/imageTakeAPhoto.png")}
                        style={styles.imageAction}
                    />
                </View>
                <ImagePicker text="Take Side Image" onImageTaken={takeImageHandlerSide} />
                <ImagePicker text="Take Top Image" onImageTaken={takeImageHandlerTop} />
            </View>
        </View>
        <View style={styles.bottonGo} >
            <TouchableOpacity onPress={navigateToResultPage} style={styles.botton}>
                <SubText text="Go to result page" color={'black'} size={16} />
            </TouchableOpacity>
        </View>
        <View style={styles.downLine}>
            <Text>THE WAY TO YOUR GOALS!</Text>
        </View>
    </View>);
}
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        padding: "6%",
        height: 210,
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
    },
    containerImage2: {
        paddingBottom: 50,
    },
    stretch: {
        width: 300,
        height: 200,
        resizeMode: "stretch",
    },
    upperContainer: {
        padding: "4%",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    textCon: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        width: 300,
        paddingTop: 0,
        fontFamily: "Cochin",
        textAlign: "center",
    },
    container: {
        flex: 1,
        height: "20%",
        flexDirection: "column",
        backgroundColor: "#ffffff",
    },
    imageAction: {
        width: 150,
        height: 100,
        resizeMode: "stretch",
    },
    comIm1: {
        paddingBottom: "2%",
        backgroundColor: "#ffffff",
    },
    downLine: {
        flex: 0.5,
        alignItems: "center",
        padding: 10,
        backgroundColor: "#ffffff",
    },
    bottonGo:
    {
        padding: 10,
        backgroundColor: "#ffffff",
    },
    botton: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 2,
        borderColor: '#172CD7',
        height: 60,
        borderRadius: 8,
        transform: [{ scale: 1.01 }],
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#E3E5FA',
        marginHorizontal: '5%',
        marginBottom: 3,
        minWidth: '48%',
        textAlign: 'center',
    },
});
export default HomePage;
