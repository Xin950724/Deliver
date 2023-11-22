import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import MessageImage from '../../../assets/images/auth/login/message-notif.svg'
import SmsImage from '../../../assets/images/auth/login/sms-notification.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const ForgetPasswordScreen = ({ navigation }) => {
    const [type, setType] = useState("sms")

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <ArrowLeftImage style={styles.header_icon} width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.content_topic}>Forget Password</Text>
                            <Text style={styles.content_text}>Select which contact details we should use to reset your password.</Text>
                            <TouchableOpacity style={type == "sms" ? styles.via_selected_type : styles.via_type} onPress={() => setType("sms")}>
                                <View style={styles.via_image}>
                                    <MessageImage width={42 * scaleFactor} height={42 * scaleFactor} />
                                </View>

                                <View style={styles.via_text}>
                                    <Text style={styles.via_header}>via SMS:</Text>
                                    <Text style={styles.via_content}>+1 2********99</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={type == "email" ? styles.via_selected_type : styles.via_type} onPress={() => setType("email")}>
                                <View style={styles.via_image}>
                                    <SmsImage width={42 * scaleFactor} height={42 * scaleFactor} />
                                </View>

                                <View style={styles.via_text}>
                                    <Text style={styles.via_header}>via Email:</Text>
                                    <Text style={styles.via_content}>shakeel*****53@gmail.com</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate('OTPScreen')}>
                            <Text style={styles.login_text}>Continue</Text>
                        </TouchableOpacity>
                    </View>
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
    body:{
        flex: 1,
        width: '100%',
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        paddingTop: 40 * scaleFactor
    },
    header: {
        flexDirection: 'row',
        width: '100%',

    },
    header_text: {
        width: '100%',
        color: 'black',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34 * scaleFactor,
        textAlign: 'center'
    },
    content: {
        width: '100%',
        marginTop: 30 * scaleFactor,
    },
    content_topic: {
        color: 'black',
        fontSize: 30 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        // lineHeight: 24 * scaleFactor,
        textAlign: 'center',
        marginBottom: 21 * scaleFactor,

    },
    content_text: {
        color: 'rgba(0,0,0, 0.40)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor,
        textAlign: 'center'
    },
    via_type: {
        width: 360 * scaleFactor,
        marginTop: 25 * scaleFactor,
        height: 148 * scaleFactor,
        borderRadius: 18,
        borderWidth: 3,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        borderStyle: 'solid',
        flexDirection: 'row',
        alignItems: 'center',
    },
    via_selected_type: {
        width: 360 * scaleFactor,
        marginTop: 25 * scaleFactor,
        height: 148 * scaleFactor,
        backgroundColor: 'rgba(0, 168, 107, 0.10)',
        borderRadius: 18,
        borderWidth: 3,
        borderColor: '#00A86B',
        borderStyle: 'solid',
        flexDirection: 'row',
        alignItems: 'center',
    },
    via_image: {
        marginLeft: 26 * scaleFactor,
        width: 92 * scaleFactor,
        height: 92 * scaleFactor,
        backgroundColor: 'rgba(0, 168, 107, 0.20)',
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20 * scaleFactor
    },
    via_header: {
        color: 'rgba(0,0,0,0.50)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor,
        // wordWrap: 'break-word'
    },
    via_content: {
        color: 'black',
        fontSize: 15 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor,
    },
    buttons: {
        width: '100%'
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
        marginBottom: 30 * scaleFactor

    },
    login_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
    },


})

export default ForgetPasswordScreen
