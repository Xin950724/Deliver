import React, { useEffect, useState } from "react"
import { Dimensions, Modal, View, StyleSheet, Pressable, TextInput, TouchableOpacity, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback } from "react-native"
import LocationTicketModalImage from '../../assets/images/auth/register/location-tick-modal.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const CarModal = ({ navigation, modalVisible, setModalVisible }) => {
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
                        <Text style={styles.modalText}>
                            <Text style ={{fontWeight: '700'}}>The cars rating system</Text> for vehicle access, based on the make, daily rental price, and the vehicle's year of manufacture, aims to provide users with a visual
                            assessment of the quality of each car listed on the platform.
                        </Text>
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
        borderRadius: 10 * scaleFactor,
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
    modalText: {
        paddingHorizontal: 31 * scaleFactor,
        paddingVertical: 21 * scaleFactor,
        color: 'black',
        fontSize: 14,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 20.57,
    }

});

export default CarModal
