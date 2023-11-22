import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, SafeAreaView, Text } from "react-native"
import ArrowLeftImage from '../../../../assets/images/auth/register/arrow-left.svg'
import AvatarImage from '../../../../assets/images/auth/register/archive-tick.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const SuccessVerifyScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.navigate('LicenseVerifyScreen')}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <AvatarImage style={styles.avatar_image} width={246 * scaleFactor} height={246 * scaleFactor} />
                        <Text style={styles.content_header_text}>License verified successfully</Text>
                        <Text style={styles.content_main_text}>Your license is verified. Now, Click continue to proceed further.</Text>

                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.agree_button} onPress={() => navigation.navigate("HomeScreen")}>
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
    body:{
        flex: 1,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
    },
    header: {
        marginTop: 38 * scaleFactor,
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
    content: {
        width: '100%',
        alignItems: 'center'
    },
    avatar_image: {
        marginTop: 42 * scaleFactor
    },
    content_header_text: {
        marginTop: 16 * scaleFactor,
        color: 'black',
        fontSize: 28,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 39,
        textAlign: 'center'
    },
    content_main_text: {
        marginTop: 32 * scaleFactor,
        textAlign: 'center',
        color: 'rgba(0,0,0, 0.40)',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24,
    },
    footer: {
        width: '100%',
        marginBottom: 30 * scaleFactor,
        alignItems: 'center'
    },
    agree_button: {
        flexDirection: 'row',
        width: '100%',
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A86B',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderRadius: 20 * scaleFactor
    },
    footer_text: {
        textAlign: 'center',
        marginTop: 43 * scaleFactor,
        color: '#00A86B',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34,
    },

    button_text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700',
    }
})

export default SuccessVerifyScreen
