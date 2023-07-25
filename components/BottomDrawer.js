import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal, Dimensions,
} from "react-native";

import { useState } from 'react';
import SubText from "./SubText";
import Icon from 'react-native-vector-icons/Ionicons';

function BottomDrawer({ Calories, weight, protein, sugar, cholesterol, foodName }) {
    // This is because height of phones vary
    const windowHeight = Dimensions.get('window').height;

    // This state would determine if the drawer sheet is visible or not
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    // Function to open the bottom sheet 
    const handleOpenBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    // Function to close the bottom sheet
    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.bottom}>
                <SubText borderWidth={3} borderColor={"#C0C5ED"} text={foodName} color={"black"} size={25} minWidth={'80%'} padding={20} bottom={4} align={"center"} borderRadius={6} height={58} paddingVertical={6} backgroundColor={'#D6DAF7'} />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                // We use the state here to toggle visibility of Bottom Sheet 
                visible={isBottomSheetOpen}
                // We pass our function as default function to close the Modal
                onRequestClose={handleCloseBottomSheet} >

                <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
                    {/* //  First Section of Bottom sheet with Header and close button */}

                    <View style={{ flex: 0, width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <SubText text="Nutritional Values" size={16} color={'#6A74C1'} />
                        <TouchableOpacity onPress={handleCloseBottomSheet}>
                            <Icon name="close-circle" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                    {/* // First Section of Bottom sheet with Header and close button */}

                    {/* // Section with Information  */}
                    <View >
                        <SubText text={foodName} color={'#374088'} size={22} />
                        <Text style={{ width: "100%" }}>                                                                                          </Text>
                        <View style={{ opacity: .4, height: 1, textAlign: 5, borderWidth: 1, borderColor: '#86827e', marginVertical: 2 }} />
                        <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                            <SubText text="Calories:  " color={"#5A65BF"} size={22} />
                            <SubText text={Calories + " kcal"} color={'#86827e'} size={22} />

                        </View>
                        <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                            <SubText text="Weight:  " color={"#5A65BF"} size={22} />
                            <SubText text={weight + " g"} color={'#86827e'} size={22} />

                        </View>
                        <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                            <SubText text="Protein:  " color={"#5A65BF"} size={22} />
                            <SubText text={protein + " g"} color={'#86827e'} size={22} />

                        </View>
                        <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                            <SubText text="Sugar:  " color={"#5A65BF"} size={22} />
                            <SubText text={sugar + " g"} color={'#86827e'} size={22} />

                        </View>
                        <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                            <SubText text="Cholesterol:  " color={"#5A65BF"} size={22} />
                            <SubText text={cholesterol + " mg"} color={'#86827e'} size={22} />

                        </View>
                    </View>
                    {/* // Section with Information */}
                </View>
            </Modal>
        </View>
    )

}
export default BottomDrawer;

const styles = StyleSheet.create({
    buttonText: {
        color: 'black',
        fontSize: 20,
    },
    container: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 23,
        paddingHorizontal: 25,
        bottom: 0,
        borderWidth: 7,
        borderColor: '#6E7EF0'
    },
    button1: {
        width: '130%',
        alignItems: 'center',
        backgroundColor: "white",
        justifyContent: 'center',
        borderWidth: 1,
        marginBottom: "120%",
        borderColor: '#86827e',
        paddingVertical: 22,
        borderRadius: 8,


    }
}
);