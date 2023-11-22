import React, { useEffect, useState } from "react"
import { Dimensions, Modal, View, StyleSheet, Pressable, TextInput, TouchableOpacity, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback } from "react-native"
import LocationTicketModalImage from '../../assets/images/auth/register/location-tick-modal.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const LocationModal = ({ navigation, modalVisible, setModalVisible }) => {
    // const goToHomePage = () => {
    //     setModalVisible(false)
    //     navigation.navigate('SplashScreen')
    // }
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
                        <LocationTicketModalImage style={styles.modal_image} width={89 * scaleFactor} height={89 * scaleFactor} />
                        <View style={styles.button_fields}>
                            <TouchableOpacity style={styles.button_field} onPress={() => {setModalVisible(false),navigation.navigate('AddPhoneNumberScreen')}}>
                                <Text style={styles.button_text}>WHILE USING THE APP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button_field}>
                                <Text style={styles.button_text}>ONLY THIS TIME</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button_field}>
                                <Text style={styles.button_text}>DENY</Text>
                            </TouchableOpacity>
                        </View>
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
        paddingLeft: 48 * scaleFactor,
        paddingRight: 48 * scaleFactor,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.70)',

    },
    modalView: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 41 * scaleFactor,
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
    modal_image: {
        marginTop: 30 * scaleFactor
    },
    button_fields: {
        marginTop: 40 * scaleFactor
    },
    button_field: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 58 * scaleFactor,
        borderWidth: 0,
        borderTopWidth: 2,
        borderColor: 'rgba(156.19, 156.19, 156.19, 0.15)',
        borderStyle: 'solid'
    },
    button_text: {
        color: 'rgba(0,0,0,0.80)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '600',
    }
});

export default LocationModal
