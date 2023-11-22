import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Text, TextInput, Keyboard } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import VerifyImage from '../../../assets/images/auth/register/verify.svg'


const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const SuccessOTPScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <VerifyImage width={246 * scaleFactor} height={246 * scaleFactor} />
                        <Text style={styles.content_header_text}>Phone Number verified successfully</Text>
                        <Text style={styles.content_main_text}>Your phone number is verified Now. Click continue to proceed further</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.agree_button} onPress={() => navigation.navigate("EnterLicenseScreen")}>
                        <Text style={styles.button_text}>Finish</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
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
        fontSize: 28 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 39 * scaleFactor,
        textAlign: 'center'
        // lineHeight: 24,
    },
    content_main_text: {
        width: 316 * scaleFactor,
        marginTop: 32 * scaleFactor,
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
        fontSize: 26 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        textAlign: 'center'
    },
    resend_text: {
        marginTop: 107 * scaleFactor,
        textDecorationLine: 'underline',
        color: '#00A86B',
        fontSize: 16 * scaleFactor,
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
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        // wordWrap: 'break-word'
    },
    term_text: {
        color: '#00A86B',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
    }
})

export default SuccessOTPScreen