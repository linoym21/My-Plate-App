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
import BottomDrawer from "./BottomDrawer";


function ResultPage({ m }) {
    const route = useRoute();
    const { image } = route.params.image;
    console.log("result page");
    console.log(route.params.image); // Check the value in the console



    // We need to get the height of the phone and use it relatively, 
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

    return <View>
        <View>
            <Image source={{ uri: route.params.image.assets[0].uri }} style={styles.image} />
        </View>
        <View style={styles.container1}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.bottom}>
                    <SubText text="Chicken Breast" color={"#86827e"} size={16} />
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
                            <SubText text="Nutritional Values" size={16} color={'#86827e'} />
                            <TouchableOpacity onPress={handleCloseBottomSheet}>
                                <Icon name="close-circle" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        {/* // First Section of Bottom sheet with Header and close button */}

                        {/* // Section with Information  */}
                        <View >
                            <SubText text="Chicken Breast" color={'#292929'} size={22} />

                            <Text style={{ width: "100%" }}>                                                                                          </Text>
                            <View style={{ opacity: .4, height: 1, borderWidth: 1, borderColor: '#86827e', marginVertical: 2 }} />




                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Calories:  " color={"black"} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>


                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Weight(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Protein(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Sugar(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Cholesterol(mg):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>




                        </View>
                        {/* // Section with Information */}
                    </View>
                </Modal>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.bottom}>
                    <SubText text="Rice" color={'#86827e'} size={16} />
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
                            <SubText text="Nutritional Values" size={16} color={'#86827e'} />
                            <TouchableOpacity onPress={handleCloseBottomSheet}>
                                <Icon name="close-circle" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        {/* // First Section of Bottom sheet with Header and close button */}

                        {/* // Section with Information  */}
                        <View >
                            <SubText text="Chicken Breast" color={'#292929'} size={22} />

                            <Text style={{ width: "100%" }}>                                                                                          </Text>
                            <View style={{ opacity: .4, height: 1, borderWidth: 1, borderColor: '#86827e', marginVertical: 2 }} />




                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Calories:  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>


                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Weight(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Protein(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Sugar(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Cholesterol(mg):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>




                        </View>
                        {/* // Section with Information */}
                    </View>
                </Modal>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.bottom}>
                    <SubText text="Salad" color={'#86827e'} size={16} />
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
                            <SubText text="Nutritional Values" size={16} color={'#86827e'} />
                            <TouchableOpacity onPress={handleCloseBottomSheet}>
                                <Icon name="close-circle" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        {/* // First Section of Bottom sheet with Header and close button */}

                        {/* // Section with Information  */}
                        <View >
                            <SubText text="Chicken Breast" color={'#292929'} size={22} />

                            <Text style={{ width: "100%" }}>                                                                                          </Text>
                            <View style={{ opacity: .4, height: 1, borderWidth: 1, borderColor: '#86827e', marginVertical: 2 }} />




                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Calories:  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>


                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Weight(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Protein(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Sugar(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Cholesterol(mg):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>




                        </View>
                        {/* // Section with Information */}
                    </View>
                </Modal>
            </View>

            <View style={styles.container}>
                <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.bottom}>
                    <SubText text="Total" color={'#86827e'} size={16} />
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
                            <SubText text="Nutritional Values" size={16} color={'#86827e'} />
                            <TouchableOpacity onPress={handleCloseBottomSheet}>
                                <Icon name="close-circle" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                        {/* // First Section of Bottom sheet with Header and close button */}

                        {/* // Section with Information  */}
                        <View >
                            <SubText text="Chicken Breast" color={'#292929'} size={22} />

                            <Text style={{ width: "100%" }}>                                                                                          </Text>
                            <View style={{ opacity: .4, height: 1, borderWidth: 1, borderColor: '#86827e', marginVertical: 2 }} />




                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Calories:  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>


                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Weight(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Protein(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Sugar(g):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>

                            <View style={{ paddingTop: 26, flexDirection: 'row' }}>
                                <SubText text="Cholesterol(mg):  " color={'#86827e'} size={22} />
                                <SubText text="22" color={'#86827e'} size={22} />

                            </View>




                        </View>
                        {/* // Section with Information */}
                    </View>
                </Modal>
            </View>
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
    container: {
        flex: 1,
        // backgroundColor: "yellow",



    },
    container1: {
        paddingTop: 30,
        flex: 1,
        marginTop: 5,
        minHeight: 350,


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
    bottom: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: '#86827e',
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