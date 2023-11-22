import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import OTPModal from "../../../components/modals/OTPModal"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const OTPResetScreen = ({ navigation }) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [value3, setValue3] = useState("")
    const [value4, setValue4] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
    const [keyboardVisible, setKeyboardVisible] = useState(false)

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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <SafeAreaView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={styles.main_content}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <Text style={keyboardVisible == false ? styles.content_topic : styles.disabled_content_topic}>Enter OTP</Text>
                            <Text style={styles.content_text}>Enter the 4 digit OTP verification Code</Text>
                            <Text style={styles.content_text}>we sent to loremipsum@gmail.com</Text>
                            <View style={styles.input_field}>
                                <TextInput style={value1 == "" ? styles.input_number : styles.input_specific_number} keyboardType="numeric" maxLength={1} onChangeText={(e) => setValue1(e)} />
                                <TextInput style={value2 == "" ? styles.input_number : styles.input_specific_number} keyboardType="numeric" maxLength={1} onChangeText={(e) => setValue2(e)} />
                                <TextInput style={value3 == "" ? styles.input_number : styles.input_specific_number} keyboardType="numeric" maxLength={1} onChangeText={(e) => setValue3(e)} />
                                <TextInput style={value4 == "" ? styles.input_number : styles.input_specific_number} keyboardType="numeric" maxLength={1} onChangeText={(e) => setValue4(e)} />
                            </View>
                            <Text style={styles.footer_text}>Did not get the code? <Text style={styles.resend_text}>Resend</Text></Text>
                            <OTPModal navigation={navigation}  contentText = "Your E-mail is verified now" buttonText = "Continue"  modalVisible={modalVisible} setModalVisible={setModalVisible} />

                        </View>
                    </View>
                    <KeyboardAvoidingView style={styles.buttons} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <TouchableOpacity style={styles.login_button} onPress={() => setModalVisible(true)}>
                            <Text style={styles.login_text}>Verify</Text>
                        </TouchableOpacity>
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
        alignItems: 'center',

    },

    main_content: {
        flex: 1,
        width: '100%',
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        paddingTop: 40 * scaleFactor
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    disabled_content_topic: {
        display: 'none'
    },
    header_text: {
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34 * scaleFactor,
        textAlign: 'center'
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },
    content: {
        marginTop: 61 * scaleFactor,
    },
    content_topic: {
        color: 'black',
        fontSize: 34 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        // lineHeight: 24,
        textAlign: 'center',
        marginBottom: 45 * scaleFactor,

    },
    content_text: {
        color: 'rgba(0,0,0, 0.40)',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 24,
        textAlign: 'center'
    },
    input_field: {
        marginLeft: 40 * scaleFactor,
        marginRight: 40 * scaleFactor,
        marginTop: 45 * scaleFactor,
        width: 292 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input_number: {
        width: 52 * scaleFactor,
        height: 52 * scaleFactor,
        backgroundColor: 'rgba(217, 217, 217, 0.30)',
        borderRadius: 6,
        textAlign: 'center',
        color: '#00A86B',
        fontSize: 27 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        lineHeight: 24 * scaleFactor
    },
    input_specific_number: {
        width: 52 * scaleFactor,
        height: 52 * scaleFactor,
        backgroundColor: 'rgba(217, 217, 217, 0.30)',
        borderRadius: 6,
        borderColor: '#00A86B',
        borderWidth: 2,
        borderStyle: 'solid',
        textAlign: 'center',
        color: '#00A86B',
        fontSize: 27 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        lineHeight: 24 * scaleFactor,
    },
    footer_text: {
        textAlign: 'center',
        marginTop: 45 * scaleFactor,
        color: 'rgba(0, 0, 0, 0.80)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',

    },
    resend_text: {
        color: '#00A86B',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '600',
    },
    buttons: {
        width: '100%',
        marginBottom: 40 * scaleFactor,
    },
    login_button: {
        height: 58 * scaleFactor,
        width: '100%',
        backgroundColor: '#00A86B',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',

    },
    login_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
    },


})

export default OTPResetScreen
