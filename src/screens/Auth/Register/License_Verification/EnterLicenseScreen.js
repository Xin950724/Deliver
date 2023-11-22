import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet,KeyboardAvoidingView, TouchableOpacity,ScrollView, SafeAreaView, TouchableWithoutFeedback, Text, TextInput, Keyboard } from "react-native"
import ArrowLeftImage from '../../../../assets/images/auth/register/arrow-left.svg'
import EnterOTPImage from '../../../../assets/images/auth/register/Enter-OTP.svg'
import UserImage from '../../../../assets/images/auth/login/user.svg'
import CheckImage from '../../../../assets/images/auth/register/check.svg'
import CalendarImage from '../../../../assets/images/auth/register/calendar.svg'



const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const EnterLicenseScreen = ({ navigation }) => {
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
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.navigate('RegisterScreen')}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView contentContainerStyle={styles.content} scrollEnabled = {Platform.OS === "ios" ? true : false}>
                            <EnterOTPImage width={260 * scaleFactor} height={260 * scaleFactor} style={keyboardVisible == false ? styles.avatar_image : styles.disabled_avatar_image} />
                            <Text style={styles.content_header_text}>"Enter License Details"</Text>
                            <View style={styles.content_main}>
                                <View style={styles.content_main_item}>
                                    <View style={styles.input_content}>
                                        <Text style={styles.email_text}>Name on license</Text>
                                        <View style={styles.email_input}>
                                            <UserImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                            <TextInput style={styles.email_text_input} ></TextInput>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.content_main_item}>
                                    <View style={styles.input_content}>
                                        <Text style={styles.email_text}>License Number</Text>
                                        <View style={styles.email_input}>
                                            <CheckImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                            <TextInput style={styles.email_text_input} keyboardType="numeric"></TextInput>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.date_cvv}>
                                    <View style={styles.date_input}>
                                        <Text style={styles.email_text}>Issue Date</Text>
                                        <View style={styles.email_input}>
                                            <CalendarImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                            <TextInput style={styles.email_text_input} keyboardType="numeric" ></TextInput>
                                        </View>
                                    </View>
                                    <View style={styles.cvv_input}>
                                        <Text style={styles.email_text}>Expiry Date</Text>
                                        <View style={styles.email_input}>
                                            <CalendarImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                            <TextInput style={styles.email_text_input} keyboardType="numeric" ></TextInput>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <KeyboardAvoidingView style={styles.footer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <TouchableOpacity style={styles.agree_button} onPress={() => navigation.navigate("LicenseVerifyScreen")}>
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
    body:{
        flex: 1,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
    },
    header: {
        marginTop: 38 * scaleFactor,
        flexDirection: 'row',
        width: '100%',
    },
    content: {
        width: '100%',
        alignItems: 'center',
        marginTop: 12 * scaleFactor,
        paddingBottom: 50 * scaleFactor
    },
    avatar_image: {
        display: 'block',
        marginBottom: 16 * scaleFactor,
    },
    disabled_avatar_image: {
        display: 'none'
    },
    content_header_text: {
        // Add Phone Number
        color: 'black',
        fontSize: 24,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        // lineHeight: 24,
    },
    content_main: {
        width: '100%',
        marginTop: 21 * scaleFactor,
    },
    content_main_item: {
        marginBottom: 25 * scaleFactor,
    },
    email_text: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        // wordWrap: 'break-word'
    },
    email_input: {
        flexDirection: 'row',
        marginTop: 8 * scaleFactor,
        width: '100%',
        borderRadius: 18 * scaleFactor,
        borderColor: "rgba(0, 0, 0, 0.20)",
        borderWidth: 1.5,
        borderStyle: "solid",
        height: 58 * scaleFactor,
        alignItems: 'center'
    },
    email_text_input: {
        width: 266 * scaleFactor,
        // Email or username
        color: 'black',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        // wordWrap: 'break-word'
    },
    date_cvv: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date_input: {
        width: 183 * scaleFactor
    },
    cvv_input: {
        width: 172 * scaleFactor
    },
    user_image: {
        marginLeft: 23 * scaleFactor,
        marginRight: 18 * scaleFactor
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
        marginBottom: 27 * scaleFactor,
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

export default EnterLicenseScreen
