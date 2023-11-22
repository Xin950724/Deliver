import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Text, TextInput, Keyboard } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import EnterOTPImage from '../../../assets/images/auth/register/Enter-OTP.svg'
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
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ flex: 1, marginBottom: 20 * scaleFactor }} scrollEnabled = {Platform.OS === "ios" ? true : false}>
                        <View style={styles.content}>
                            <EnterOTPImage width={260 * scaleFactor} height={260 * scaleFactor} style={keyboardVisible == false ? styles.avatar_image : styles.disabled_avatar_image} />
                            <Text style={styles.content_header_text}>"OTP Verification"</Text>
                            <Text style={styles.content_main_text}>Please enter a OTP we sent you on your given email.</Text>
                            <View style={styles.verify_number_field}>
                                <View style={styles.verify_number}>
                                    <TextInput style={styles.verify_number_input} maxLength={1} />
                                </View>
                                <View style={styles.verify_number}>
                                    <TextInput style={styles.verify_number_input} maxLength={1} />
                                </View>
                                <View style={styles.verify_number}>
                                    <TextInput style={styles.verify_number_input} maxLength={1} />
                                </View>
                                <View style={styles.verify_number}>
                                    <TextInput style={styles.verify_number_input} maxLength={1} />
                                </View>
                                <View style={styles.verify_number}>
                                    <TextInput style={styles.verify_number_input} maxLength={1} />
                                </View>
                            </View>
                            <Text style={styles.resend_text}>Resend Code</Text>
                        </View>
                    </ScrollView>
                    <KeyboardAvoidingView style={styles.footer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <TouchableOpacity style={styles.agree_button} onPress={() => navigation.navigate("SuccessOTPScreen")}>
                            <Text style={styles.button_text}>Verify</Text>
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
    },
    header: {
        marginTop: 38 * scaleFactor,
        flexDirection: 'row',
        width: '100%',
    },
    body: {
        flex: 1,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
    },
    content: {
        width: '100%',
        alignItems: 'center',
        marginTop: 12 * scaleFactor
    },
    avatar_image: {
        display: 'block',
        marginBottom: 29 * scaleFactor,
    },
    disabled_avatar_image: {
        display: 'none'
    },
    content_header_text: {
        // Add Phone Number
        color: 'black',
        fontSize: 24 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        // lineHeight: 24,
    },
    content_main_text: {
        width: 316 * scaleFactor,
        marginTop: 11 * scaleFactor,
        color: 'rgba(0,0,0,0.40)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor,
        textAlign: 'center'
    },
    verify_number_field: {
        marginTop: 36 * scaleFactor,
        paddingLeft: 20 * scaleFactor,
        paddingRight: 20 * scaleFactor,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    verify_number: {
        width: 52 * scaleFactor,
        height: 56 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 168, 107, 0.20)',
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        borderColor: '#00A86B',
        borderWidth: 0,
        borderBottomWidth: 6,
        borderStyle: 'solid',
    },
    verify_number_input: {
        color: 'black',
        fontSize: 26,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        textAlign: 'center'
    },
    resend_text: {
        marginTop: 107 * scaleFactor,
        textDecorationLine: 'underline',
        color: '#00A86B',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    footer: {
        width: '100%',
        marginBottom: 30 * scaleFactor,
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
    button_text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        // wordWrap: 'break-word'
    },
    term_text: {
        color: '#00A86B',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '600',
    }
})

export default AddPhoneNumberScreen
