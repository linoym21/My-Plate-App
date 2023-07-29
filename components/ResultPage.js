import {
    StyleSheet,
    Image,
    View,
} from "react-native";
import { useRoute } from '@react-navigation/native';
import BottomDrawer from "./BottomDrawer";

function ResultPage({ data }) {
    const route = useRoute();

    return <View>
        <View>
            <Image source={{ uri: route.params.image.assets[0].uri }} style={styles.image} />
        </View>
        <View style={styles.container1}>
            if (data[0]!==null) {
                <BottomDrawer foodName={data[0].name} Calories={data[0].calories} weight={data[0].serving_size_g} protein={data[0].protein_g}
                    sugar={data[0].sugar_g} cholesterol={data[0].cholesterol_mg} />}
            if (data[1]!==null){
                <BottomDrawer foodName={data[1].name} Calories={data[1].calories} weight={data[1].serving_size_g}
                    protein={data[1].protein_g} sugar={data[1].sugar_g} cholesterol={data[1].cholesterol_mg} />}
        </View>
    </View>
}
export default ResultPage;
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
        backgroundColor: 'orange',
        borderRadius: 20,
    },
    container1: {
        paddingTop: 30,
        flex: 1,
        marginTop: 5,
        minHeight: 350,
    },
});