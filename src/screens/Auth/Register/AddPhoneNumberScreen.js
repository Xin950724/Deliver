import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity,ScrollView, KeyboardAvoidingView,SafeAreaView, TouchableWithoutFeedback, Text, TextInput, Keyboard } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import EnterOTPImage from '../../../assets/images/auth/register/Enter-OTP.svg'
import CountryImage from '../../../assets/images/auth/register/country-image.svg'
import TicketCircleImage from '../../../assets/images/auth/register/tick-circle.svg'


const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const AddPhoneNumberScreen = ({ navigation }) => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        // Keyboard will show event
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );

        // Keyboard will hide event
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView contentContainerStyle={styles.content} scrollEnabled = {Platform.OS === "ios" ? true : false}>
                            <EnterOTPImage width={260 * scaleFactor} height={260 * scaleFactor} style={keyboardVisible == false ? styles.avatar_image : styles.disabled_avatar_image} />
                            <Text style={styles.content_header_text}>Add Phone Number</Text>
                            <Text style={styles.content_main_text}>Enter your phone number in order to send you OTP security code</Text>
                            <View style={styles.phone_number_field}>
                                <View style={styles.country_code}>
                                    <CountryImage width={38 * scaleFactor} height={23 * scaleFactor} />
                                    <Text style={styles.country_text}>+1</Text>
                                </View>
                                <TextInput style={styles.phone_number} />
                            </View>
                            <View style={styles.phone_number_marker}>
                                <Text style={styles.phone_number_marker_header}>Phone Number must contain</Text>
                                <View style={styles.phone_number_marker_item}>
                                    <TicketCircleImage />
                                    <Text style={styles.phone_number_mark_text}>An area code</Text>
                                </View>
                                <View style={styles.phone_number_marker_item}>
                                    <TicketCircleImage />
                                    <Text style={styles.phone_number_mark_text}>A 11 digit phone number for OTP Verification</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <KeyboardAvoidingView style={styles.footer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <TouchableOpacity style={styles.agree_button} onPress={() => navigation.navigate("OTPVerificationScreen")}>
                            <Text style={styles.button_text}>Continue</Text>
                        </TouchableOpacity>
                        <Text style={styles.footer_text}>I accept <Text style={styles.term_text}>Terms & Conditions</Text></Text>
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        marginTop: 40 * scaleFactor,
        flexDirection: 'row',
        width: '100%',
    },
    body: {
        flex: 1,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        justifyContent: 'center'
    },
    content: {
        flexGrow: 1,
        width: '100%',
        marginTop: 12 * scaleFactor,
        alignItems: 'center',
        paddingBottom: 20 * scaleFactor,

    },
    avatar_image: {
        display: 'block',
        marginBottom: 61 * scaleFactor,
    },
    disabled_avatar_image: {
        display: 'none'
    },
    content_header_text: {
        // Add Phone Number
        color: 'black',
        fontSize: 34 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        // lineHeight: 24,
    },
    content_main_text: {
        width: 316 * scaleFactor,
        marginTop: 25 * scaleFactor,
        color: 'rgba(0,0,0,0.40)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor,
        textAlign: 'center'
    },
    phone_number_field: {
        marginTop: 25 * scaleFactor,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    country_code: {
        flexDirection: 'row',
        paddingLeft: 15 * scaleFactor,
        width: 100 * scaleFactor,
        height: 58 * scaleFactor,
        borderWidth: 1.5 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.20)',
        borderStyle: 'solid',
        borderRadius: 18 * scaleFactor,
        alignItems: 'center'
    },
    country_text: {
        marginLeft: 11 * scaleFactor,
        color: 'rgba(0,0,0,0.90)',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        // wordWrap: 'break-word'
    },
    phone_number: {
        width: 250 * scaleFactor,
        height: 58 * scaleFactor,
        paddingLeft: 22 * scaleFactor,
        borderWidth: 1.5 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.20)',
        borderStyle: 'solid',
        borderRadius: 18 * scaleFactor,
        color: '#00A86B',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        letterSpacing: 4,
    },
    phone_number_marker: {
        marginLeft: 16 * scaleFactor,
        width: '100%',
        marginTop: 28 * scaleFactor,
        marginBottom: 7 * scaleFactor
    },
    phone_number_marker_header: {
        color: 'rgba(0, 0, 0,0.30)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor,
    },
    phone_number_marker_item: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    phone_number_mark_text: {
        marginLeft: 8 * scaleFactor,
        color: 'rgba(0,0,0,0.20)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor,
    },
    footer: {
        width: '100%',
        marginTop: 10 * scaleFactor,
        marginBottom: 25 * scaleFactor,
    },
    agree_button: {
        width: '100%',
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A86B',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderRadius: 20
    },
    decline_button: {
        marginTop: 25 * scaleFactor,
        width: '100%',
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E43D3D',
        borderRadius: 20
    },
    button_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        // wordWrap: 'break-word'
    },
    footer_text: {
        color: 'rgba(0,0,0,0.80)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '400',
        // wordWrap: 'break-word',
        textAlign: 'center',
        marginTop: 25 * scaleFactor
    },
    term_text: {
        color: '#00A86B',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
    }
})

export default AddPhoneNumberScreen
