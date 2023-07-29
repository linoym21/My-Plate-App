import { Text } from "react-native";

const SubText = ({ borderWidth, minWidth, paddingVertical, borderRadius, height, backgroundColor, borderColor, text, padding, size, color, family, letterSpacing, align = 'left', leading }) => {

    return (
        <Text
            style={{
                letterSpacing: letterSpacing ? letterSpacing : -0.02,
                textAlign: align,
                lineHeight: leading,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                padding: padding,
                color: color,
                fontSize: size,
                borderWidth: borderWidth,
                borderColor: borderColor,
                height: height,
                transform: [{ scale: 1.02 }],
                paddingVertical: paddingVertical,
                borderRadius: borderRadius,
                backgroundColor: backgroundColor,
                minWidth: minWidth,
            }}>
            {text}
        </Text>
    )
}
export default SubText;
