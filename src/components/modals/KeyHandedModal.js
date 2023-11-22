import React, { useEffect, useState } from "react"
import { Dimensions, Modal, View, StyleSheet, Pressable, TextInput, TouchableOpacity, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback } from "react-native"
import KeyModalImage from '../../assets/images/user/chat/keymodal.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const KeyHandedModal = ({ navigation, modalVisible, setModalVisible }) => {
    const goToHomePage = () => {
        setModalVisible(false)
        navigation.navigate("TimerScreen")
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
                        <KeyModalImage width={169 * scaleFactor} height={169 * scaleFactor} />
                        <Text style={styles.modalText}>Key Handed Over</Text>
                        <Text style={styles.modalContent}>Key has been successfully handed over to William</Text>

                        <TouchableOpacity style={styles.login_button} onPress={() => goToHomePage()}>
                            <Text style={styles.login_text}>Continue</Text>
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
        marginTop: 16 * scaleFactor,
        marginBottom: 14 * scaleFactor,
        textAlign: 'center',
        color: '#00A86B',
        fontSize: 26 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        // wordWrap: 'break-word'
    },
    modalContent: {
        marginBottom: 32 * scaleFactor,
        textAlign: 'center',
        color: 'rgba(0,0,0,0.60)',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        // wordWrap: 'break-word'
    },
    login_button: {
        width: 203 * scaleFactor,
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

export default KeyHandedModal
