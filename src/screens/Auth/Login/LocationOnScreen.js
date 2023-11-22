import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, SafeAreaView, Text } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import AddressImage from '../../../assets/images/auth/register/Address-amico 1.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const LocationScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Permission</Text>
                    </View>
                    <View style={styles.content}>
                        <AddressImage width={343.7 * scaleFactor} height={346 * scaleFactor} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.agree_button} onPress={() => navigation.navigate("LocationScreen")}>
                        <Text style={styles.button_text}>Turn on location</Text>
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
    body: {
        flex: 1,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor
    },
    header: {
        marginTop: 40 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },
    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34 * scaleFactor
    },
    content: {
        width: '100%',
        alignItems: 'center',
        marginTop: 123 * scaleFactor
    },
    content_header_text: {
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
    content_main_text: {
        marginTop: 10 * scaleFactor,
        color: 'rgba(0,0,0,0.60)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 32 * scaleFactor,
    },
    learn_text: {
        color: 'rgb(0,0,0)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 32 * scaleFactor,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    footer: {
        width: '100%',
        marginBottom: 28 * scaleFactor,
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
    decline_button: {
        marginTop: 25 * scaleFactor,
        width: '100%',
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E43D3D',
        borderRadius: 20
    },
    button_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700'
    }
})

export default LocationScreen
