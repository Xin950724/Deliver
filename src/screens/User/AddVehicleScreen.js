import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import VectorImage from '../../assets/images/user/vehicle/vector.svg'
import LocationImage from '../../assets/images/user/vehicle/location.svg'
import MoneyImage from '../../assets/images/user/vehicle/money.svg'


import UserImage from '../../assets/images/auth/login/user.svg'
import CategoryFilterButton from "../../components/buttons/CategoryFilterButton"
import CategoryDateButton from "../../components/buttons/CategoryDateButton"
import PriceButton from "../../components/buttons/PriceButton"
import Slider from '@react-native-community/slider';
import CheckBox from 'react-native-check-box'
// import Dropdown from 'react-native-material-dropdown'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const AddVehicleScreen = ({ route, navigation }) => {

    const missHandle = () => {
        Keyboard.dismiss()
    }
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const [checked, setChecked] = useState(false)
    const [duration, setDuration] = useState("")
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.main_content}>
                    <View style={styles.header_view}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Add Car Details</Text>
                    </View>
                    <ScrollView style={styles.content_view}>
                        <View style={styles.input_content}>
                            <Text style={styles.email_text}>Car Name</Text>
                            <View style={styles.email_input}>
                                <UserImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                <TextInput style={styles.email_text_input} ></TextInput>
                            </View>
                        </View>
                        <View style={styles.input_content}>
                            <Text style={styles.email_text}>Car Price</Text>
                            <View style={styles.email_input}>
                                <LocationImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                <TextInput style={styles.email_text_input} ></TextInput>
                            </View>
                        </View>
                        <View style={styles.input_content}>
                            <Text style={styles.email_text}>Adress</Text>
                            <View style={styles.email_input}>
                                <MoneyImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                <TextInput style={styles.email_text_input} ></TextInput>
                            </View>
                        </View>
                        <View style={styles.car_type_view}>
                            <Text style={styles.car_type_header}>Car Type</Text>
                            <View style={styles.car_type_content}>
                                <CategoryFilterButton selected={true} value="Utility" />
                                <CategoryFilterButton selected={false} value="Compact" />
                                <CategoryFilterButton selected={false} value="Sedan" />
                                <CategoryFilterButton selected={false} value="Family" />
                                <CategoryFilterButton selected={false} value="Minibus" />
                                <CategoryFilterButton selected={false} value="4*4" />
                                <CategoryFilterButton selected={false} value="Convertible" />
                                <CategoryFilterButton selected={false} value="Coupe" />
                                <CategoryFilterButton selected={false} value="Vintage" />
                                <CategoryFilterButton selected={false} value="Van" />
                                <CategoryFilterButton selected={false} value="SUV" />
                            </View>
                        </View>
                        <View style={styles.car_type_view}>
                            <Text style={styles.car_type_header}>Fuel Type</Text>
                            <View style={styles.car_type_content}>
                                <CategoryFilterButton selected={true} value="Gasoline" />
                                <CategoryFilterButton selected={false} value="Diesel" />
                                <CategoryFilterButton selected={false} value="Hybrid" />
                                <CategoryFilterButton selected={false} value="Electric" />
                            </View>
                        </View>
                        <View style={styles.car_type_view}>
                            <Text style={styles.car_type_header}>Gearbox Type</Text>
                            <View style={styles.car_type_content}>
                                <CategoryFilterButton selected={true} value="Automatic" />
                                <CategoryFilterButton selected={false} value="Manual" />
                                <CategoryFilterButton selected={false} value="Hybrids" />
                            </View>
                        </View>
                        <View style={styles.car_type_view}>
                            <Text style={styles.car_type_header}>Booking Type</Text>
                            <View style={styles.car_type_content}>
                                <CategoryFilterButton selected={true} value="Instant" />
                                <CategoryFilterButton selected={false} value="Schedule" />
                            </View>
                        </View>
                        <View style={styles.car_type_view}>
                            <Text style={styles.car_type_header}>Date Availability</Text>
                            <View style={styles.date_content}>
                                <CategoryDateButton selected={true} value="Start Date" />
                                <CategoryDateButton selected={true} value="End Date" />
                            </View>
                        </View>
                        <View style={styles.car_type_view}>
                            <Text style={styles.car_type_header}>Enter price</Text>
                            <View style={styles.date_content}>
                                <PriceButton selected={true} value="Maximum" />
                                <PriceButton selected={true} value="Minimum" />
                            </View>
                        </View>
                        <View style={styles.car_type_view}>
                            <Text style={styles.car_type_header}>Distance</Text>
                            <View style={styles.date_content}>
                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={24}
                                    minimumTrackTintColor="#00A86B"
                                    maximumTrackTintColor="#CCCCCC"
                                    step={1}
                                    onValueChange={e => setDuration(e)}
                                />
                            </View>
                        </View>
                        <View style={styles.location}>
                            <Text style={styles.car_type_header}>Geolocation</Text>
                            <View style={styles.date_content}>
                                <CheckBox
                                    style={styles.check_box}
                                    checkBoxColor = {"#00A86B"}
                                    onClick = {()=>setChecked(!checked)}
                                    isChecked={checked}
                                />
                            </View>
                        </View>
                        <View style={styles.car_type_view}>
                            <Text style={styles.car_type_header}>Add Description</Text>
                            <View style={styles.description_view}>
                                <TextInput style={styles.description_input} />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.add_image_view}>
                            <VectorImage />
                            <Text style={styles.add_text}>Add Images</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footer_button} onPress={() => navigation.navigate("RatingScreen")}>
                        <Text style={styles.footer_text}>Add Vehicle</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    main_content: {
        flex: 1,
        paddingTop: 37 * scaleFactor,
        paddingHorizontal: 25 * scaleFactor,
        backgroundColor: 'white'
    },
    header_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    content_view: {
        marginTop: 6 * scaleFactor
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },

    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    content: { flex: 1 },
    input_content: {
        marginTop: 26 * scaleFactor
    },
    email_text: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500'
        // wordWrap: 'break-word'
    },
    email_input: {
        flexDirection: 'row',
        marginTop: 8 * scaleFactor,
        width: '100%',
        borderRadius: 20 * scaleFactor,
        backgroundColor: 'rgba(0, 168, 107, 0.03)',
        borderColor: "#00A86B",
        borderWidth: 1 * scaleFactor,
        borderStyle: "solid",
        height: 58 * scaleFactor,
        alignItems: 'center'
    },
    user_image: {
        marginLeft: 23 * scaleFactor,
        marginRight: 18 * scaleFactor
    },
    email_text_input: {
        width: 266 * scaleFactor,
        // Email or username
        color: 'rgba(0,0,0, 0.40)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        // wordWrap: 'break-word'
    },
    date_content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        paddingHorizontal: 25 * scaleFactor,
    },
    footer_button: {
        backgroundColor: '#00A86B',
        shadowColor: "#00A86B", // rgba(0, 168, 107, 0.20)
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.20,
        shadowRadius: 8.5, // Adjust this to achieve the desired blur
        elevation: 5, // This is for Android to simulate shadow
        borderRadius: 20,
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 34 * scaleFactor
    },
    footer_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700'
    },
    car_type_view: {
        marginTop: 32 * scaleFactor,
    },
    car_type_header: {
        color: 'rgba(0,0,0,0.90)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    car_type_content: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 35 * scaleFactor
    },
    slider: {
        width: '100%',
        height: 10 * scaleFactor,
        marginTop: 20 * scaleFactor
    },
    description_view: {
        width: '100%',
        marginTop: 23 * scaleFactor,
        paddingHorizontal: 27 * scaleFactor,
        paddingVertical: 13 * scaleFactor,
        height: 225 * scaleFactor,
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 1 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.20)'
    },
    description_input: {
        width: '100%',
        height: '100%',
    },
    add_image_view: {
        marginTop: 35 * scaleFactor,
        width: '100%',
        height: 120 * scaleFactor,
        borderStyle: 'dotted',
        borderWidth: 2 * scaleFactor,
        borderColor: 'black',
        backgroundColor: ' rgba(255, 206, 31, 0.13)',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20 * scaleFactor
    },
    add_text: {
        marginLeft: 9 * scaleFactor,
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '500'
    },
    check_box: {
        height: 20 * scaleFactor,
    }
})

export default AddVehicleScreen
