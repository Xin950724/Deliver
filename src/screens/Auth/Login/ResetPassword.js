import React, { useEffect, useState } from "react"
import { Dimensions, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback } from "react-native"
import OTPModal from "../../../components/modals/OTPModal"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import LockImage from '../../../assets/images/auth/login/lock.svg'


const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const ResetPasswordScreen = ({ navigation }) => {
    const [type, setType] = useState('new');
    const [visible, setVisible] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => navigation.navigate('ForgetPasswordScreen')}>
                                <ArrowLeftImage style={styles.header_icon} width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.content_topic}>Change Password</Text>
                            <Text style={styles.content_text}>Enter  your new password to change old password.</Text>
                            <View style={styles.input_field}>
                                <View style={styles.password_field}>
                                    <Text style={type == "news" ? styles.selected_password_text : styles.password_text}> New Password </Text>
                                    <View style={type == "news" ? styles.selected_password_input : styles.password_input}>
                                        <LockImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.lock_image} />
                                        <TextInput style={styles.password_text_input} secureTextEntry={true} onFocus={() => setType('news')} />
                                    </View>
                                </View>
                                <View style={styles.password_field}>
                                    <Text style={type == "password" ? styles.selected_password_text : styles.password_text}> Confirm Password </Text>
                                    <View style={type == "password" ? styles.selected_password_input : styles.password_input}>
                                        <LockImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.lock_image} />
                                        <TextInput style={styles.password_text_input} secureTextEntry={true} onFocus={() => setType('password')} />
                                    </View>
                                    <OTPModal navigation={navigation} contentText="Your account is ready to use" buttonText="Go to homepage" modalVisible={visible} setModalVisible={setVisible} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.login_button} onPress={() => setVisible(true)}>
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
    body: {
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
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34 * scaleFactor,
        wordWrap: 'break-word',
        textAlign: 'center',
        marginLeft: -38.7 * scaleFactor / 2
    },
    content: {
        marginTop: 42 * scaleFactor,
    },
    content_topic: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 30 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        // lineHeight: 24,
        textAlign: 'center',
        marginBottom: 25 * scaleFactor,

    },
    content_text: {
        alignSelf: 'center',
        // Enter your new password to change old password.
        color: 'rgba(0,0,0,0.40)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24,
        wordWrap: 'break-word',
        width: 329 * scaleFactor,
        textAlign: 'center'
    },
    input_field: {
        marginTop: 12 * scaleFactor
    },
    password_field: {
        marginBottom: 25 * scaleFactor
    },
    selected_password_text: {
        color: '#00A86B',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        wordWrap: 'break-word',
        marginBottom: 8 * scaleFactor
    },
    password_text: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        wordWrap: 'break-word',
        marginBottom: 8 * scaleFactor
    },
    password_input: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 58 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        borderColor: 'rgba(0,0,0,0.20)',
        borderWidth: 1.5 * scaleFactor,
        borderStyle: 'solid'
    },
    selected_password_input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 168, 107, 0.10)',
        width: '100%',
        height: 58 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        borderColor: '#00A86B',
        borderWidth: 1.5 * scaleFactor,
        borderStyle: 'solid'
    },
    lock_image: {
        marginLeft: 23 * scaleFactor
    },
    password_text_input: {
        marginLeft: 16 * scaleFactor,
        width: 300 * scaleFactor,
        fontSize: 18 * scaleFactor,
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
        wordWrap: 'break-word'
    },


})

export default ResetPasswordScreen
