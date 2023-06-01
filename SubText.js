import {
    StyleSheet,
    Image,
    Text,
    View,
    Button,
    TouchableOpacity,
    ScrollView,
    Picker, Modal, Dimensions,
} from "react-native";
const SubText = ({ borderWidth, borderColor, text, size, color, family, letterSpacing, align = 'left', leading }) => {
    console.log(text);
    return (
        <Text
            style={{
                fontSize: size,
                color: "black",
                fontFamily: family,
                letterSpacing: letterSpacing ? letterSpacing : -0.02,
                textAlign: align,
                lineHeight: leading,
                borderWidth: borderWidth,
                borderColor: borderColor,
            }}>



            {text}

        </Text>
    )
}
export default SubText;
// The good thing is none of these values are required, so if you don't have all the values, the app will not break.
