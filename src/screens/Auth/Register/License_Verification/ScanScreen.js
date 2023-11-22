import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, SafeAreaView, Text, Image } from "react-native"
import ArrowLeftImage from '../../../../assets/images/auth/register/arrow-left.svg'
import InfoImage from '../../../../assets/images/auth/register/info-circle.svg'

// import { RNCamera } from 'react-native-camera';
// import RNTesseractOcr from 'react-native-tesseract-ocr';


const { width,height } = Dimensions.get('window')
const scaleFactor = width / 414

const ScanScreen = ({ navigation,route }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.header_icon} onPress={() => navigation.navigate('LicenseVerifyScreen')}>
                        <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                    </TouchableOpacity>
                    <Text style={styles.header_text}>Scan Now</Text>
                </View>
                <View style={styles.content}>
                    <View style = {styles.main_image}>
                        {route.params.selectedImage && (
                            console.log(route.params.selectedImage),
                            <Image
                                source={{ uri: route.params.selectedImage }}
                                style={styles.driver_image}
                                // resizeMode="contain"
                            />
                        )}
                    </View>
                    <TouchableOpacity style={styles.info_image} onPress={() => navigation.navigate('SuccessVerifyScreen')} >
                        <InfoImage width = {42 * scaleFactor} height = {42 * scaleFactor} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footer_text}>Hold camera to scan</Text>
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
        marginLeft: 25 * scaleFactor,
        marginRight: 25 * scaleFactor,
        marginTop: 31 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative'
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },
    header_text: {
        textAlign: 'center',
        marginLeft: -49 * scaleFactor,
        color: 'black',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34,
    },
    driver_image: {
        width: "100%",
        height: height * 0.72 * scaleFactor,
        position: 'relative'
    },
    info_image: {
        position: 'absolute',
        bottom: -31 * scaleFactor,
        padding: 10 * scaleFactor,
        backgroundColor: 'white',
        width: 62 * scaleFactor,
        height: 62 * scaleFactor,
        borderRadius: 100 * scaleFactor,
        left: (width / 2 - 30 ) * scaleFactor
    },
    content: {
        width: '100%',
        marginTop: 27 * scaleFactor,
    },
    content_header: {
        flexDirection: 'row',
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 32 * scaleFactor
    },
    footer_text: {
        color: '#191D31',
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        lineHeight: 26,
    },
})

export default ScanScreen
