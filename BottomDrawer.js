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
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import SubText from "./SubText";
import Icon from 'react-native-vector-icons/Ionicons';

function BottomDrawer({ text }) {
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
            <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.button1} >
                {/* <SubText text={text} color={'#86827e'} size={16} family="PoppinsSBold" /> */}
                <Text style={styles.buttonText}> "ll"</Text>
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

                    <View style={{ flex: 0, width: '100%', justifyContent: 'space-between', flexDirection: 'row', }}>
                        <SubText text="Preview" family={'Poppins-med'} size={16} color={"black"} />
                        <TouchableOpacity onPress={handleCloseBottomSheet} >
                            <Icon name="close-circle" size={30} color="black" />

                        </TouchableOpacity>
                    </View>
                    {/* // First Section of Bottom sheet with Header and close button */}

                    {/* // Section with Information */}
                    <View style={{ paddingVertical: 16 }}>
                        <SubText text="chicken breast" family={'PoppinsSBold'} color={'#292929'} size={18} />

                        <View style={{ opacity: .2, height: 1, borderWidth: 1, borderColor: '#86827e', marginVertical: 16 }} />
                        <View style={{ paddingTop: 16 }}>
                            <SubText text="Calories" color={'#86827e'} size={22} family={'Poppins-med'} />
                            <SubText text="4,904" color={'#292929'} family={'PoppinsSBold'} size={18} />
                        </View>

                        <View style={{ paddingTop: 16 }}>
                            <SubText text="serving_size_g" color={'#86827e'} size={12} family={'Poppins-med'} />
                            <SubText text="4,904" color={'#292929'} family={'PoppinsSBold'} size={18} />
                        </View>

                        <View style={{ paddingTop: 16 }}>
                            <SubText text="fat_total_g" color={'#86827e'} size={12} family={'Poppins-med'} />
                            <SubText text="4,904" color={'#292929'} family={'PoppinsSBold'} size={18} />
                        </View>

                        <View style={{ paddingTop: 16 }}>
                            <SubText text="protein_g" color={'#86827e'} size={12} family={'Poppins-med'} />
                            <SubText text="3038" color={'#292929'} family={'PoppinsSBold'} size={18} />
                        </View>
                        <View style={{ paddingTop: 16 }}>
                            <SubText text="sugar_g" color={'#86827e'} size={12} family={'Poppins-med'} />
                            <SubText text="3038" color={'#292929'} family={'PoppinsSBold'} size={18} />
                        </View>

                        <View style={{ paddingTop: 16, flex: 0, flexDirection: 'row' }}>
                            <View style={{ paddingLeft: 12 }} />
                            <SubText text="Medium" color={'#86827e'} size={14} family={'Poppins-med'} />
                        </View>
                    </View>
                    {/* //Section with Information */}
                </View>
            </Modal>
        </View >
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
        borderWidth: 1,
        borderColor: 'red'
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