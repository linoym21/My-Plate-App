import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Image,
    Text,
    View,
    Button,
    TouchableOpacity,
    ScrollView,
    Picker,
} from "react-native";
import ImagePicker from "./ImagePicker";
import ImageUpload from "./ImageUpload";
import { useContext, useState } from "react";
import ResultPage from "./ResultPage";
import { Ionicons } from "@expo/vector-icons";
import {
    Item,
    HeaderButton,
    HeaderButtons,
} from "react-navigation-header-buttons";
import SubText from "./SubText";

function HomePage({ navigation }) {
    const [selectedImage, setSelectedImage] = useState(null);

    function takeImageHandler(image) {
        console.log("we in");
        setSelectedImage(image);
        console.log(image);
    }

    function navigateToResultPage() {

        navigation.navigate("My Plate", { image: selectedImage }, { m: 10 });
    }
    return (<View style={styles.container}>
        <View style={styles.upperContainer}>
            <View>
                <Image source={require("./assets/logo.png")} style={styles.stretch} />
            </View>
            <View>
                <Text style={styles.textCon}>What would you like to use? </Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <View style={styles.containerImage1}>
                <View style={styles.comIm1}>
                    <Image
                        source={require("./assets/imageUpload.png")}
                        style={styles.imageAction}
                    />
                </View>
                <ImageUpload text="Upload Side Image" onImageTaken={takeImageHandler} />
                <ImageUpload text="Upload Top Image" onImageTaken={takeImageHandler} />

            </View>
            <View style={styles.containerImage2}>
                <View style={styles.comIm1}>
                    <Image
                        source={require("./assets/imageTakeAPhoto.png")}
                        style={styles.imageAction}
                    />
                </View>
                <ImagePicker text="Take Side Image" onImageTaken={takeImageHandler} />
                <ImagePicker text="Take Top Image" onImageTaken={takeImageHandler} />


            </View>

        </View>
        <View style={styles.bottonGo} >
            <TouchableOpacity onPress={navigateToResultPage} style={styles.bottom}>
                <SubText text="Go to Result Page" color={"#172CD7"} size={16} />
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
        // backgroundColor: "green",
        //flex: 2,
        height: 210,
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
    },
    containerImage1: {
        // backgroundColor: "red",
    },
    containerImage2: {
        // backgroundColor: "blue",
        paddingBottom: 50,
    },
    stretch: {
        width: 300,
        height: 200,
        resizeMode: "stretch",
    },
    upperContainer: {
        padding: "4%",
        // backgroundColor: "pink",
        alignItems: "center",
        //flex: 2,
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
        // backgroundColor: "yellow",
        height: "20%",
        flexDirection: "column",

    },
    imageAction: {
        width: 150,
        height: 100,
        resizeMode: "stretch",
    },
    comIm1: { paddingBottom: "2%", backgroundColor: "#ffffff", },
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
        // backgroundColor: "yellow",


    },
    bottom: {
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
        backgroundColor: 'oldlace',
        marginHorizontal: '5%',
        marginBottom: 3,
        minWidth: '48%',
        textAlign: 'center',
    },
});
export default HomePage;
