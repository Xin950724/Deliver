import React, { useEffect, useState } from "react"
import { Dimensions, Modal, View, StyleSheet, Pressable, TextInput, TouchableOpacity, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback } from "react-native"
import ClipboardImage from '../../assets/images/auth/register/clipboard-tick.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const OTPModal = ({ navigation, contentText, buttonText, modalVisible, setModalVisible }) => {
    const continueHandler = () => {
        setModalVisible(false)
        if (buttonText == "Continue")
            navigation.navigate('TermScreen')
        else
            navigation.navigate("LoginScreen")
    }

    return (

        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                }}>
                <View style={styles.centerdModalView}>
                    <View style={styles.modalView}>
                        <ClipboardImage width={143 * scaleFactor} height={143 * scaleFactor} />
                        <Text style={styles.modalText}>Congratulations!</Text>
                        <Text style={styles.modalContent}>{contentText}</Text>

                        <TouchableOpacity style={styles.login_button} onPress={() => continueHandler()}>
                            <Text style={styles.login_text}>{buttonText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.70)',
    },
    centerdModalView: {
        flex: 1,
        paddingLeft: 45 * scaleFactor,
        paddingRight: 45 * scaleFactor,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.70)',

    },
    modalView: {
        width: '100%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginTop: 41 * scaleFactor,
        marginBottom: 41 * scaleFactor,
        textAlign: 'center',
        color: '#00A86B',
        fontSize: 26 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        // wordWrap: 'break-word'
    },
    modalContent: {
        marginBottom: 41 * scaleFactor,
        textAlign: 'center',
        color: 'rgba(0,0,0,0.60)',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        // wordWrap: 'break-word'
    },
    login_button: {
        width: 215 * scaleFactor,
        height: 56 * scaleFactor,
        backgroundColor: '#00A86B',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderRadius: 18,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
        marginBottom: 45 * scaleFactor

    },
    login_text: {
        color: 'white',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        // wordWrap: 'break-word'
    },
});

export default OTPModal
