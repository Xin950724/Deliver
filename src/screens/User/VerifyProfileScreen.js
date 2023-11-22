import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import SuccessImage from '../../assets/images/user/verifyprofile/success.svg'
import FailImage from '../../assets/images/user/verifyprofile/failed.svg'

// import Dropdown from 'react-native-material-dropdown'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const VerifyProfileScreen = ({ navigation }) => {

    const missHandle = () => {
        Keyboard.dismiss()
    }
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];


    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.main_content}>
                    <View style={styles.header_view}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Verify Profile</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.content_header_text}>Profile License_Verification</Text>
                        <Text style={styles.content_header_detail_text}>Your profile is verified,
                            please verify your license also.</Text>
                        <View style={styles.content_view}>
                            <TouchableOpacity style={styles.content_item}>
                                <SuccessImage />
                                <Text style={styles.content_item_text}>Phone Number</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.content_item}>
                                <SuccessImage />
                                <Text style={styles.content_item_text}>Email</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.content_item}>
                                <FailImage />
                                <Text style={styles.content_item_text}>License Number</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    main_content: {
        flex: 1,
        paddingTop: 37 * scaleFactor,
        paddingHorizontal: 25 * scaleFactor,
        backgroundColor: 'white'
    },
    header_view: {
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
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    content: { flex: 1 },
    content_header_text: {
        marginTop: 44 * scaleFactor,
        color: '#00A86B',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    content_header_detail_text: {
        opacity: 0.6,
        marginTop: 10 * scaleFactor,
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserra',
        fontWeight: '400',
        lineHeight: 24 * scaleFactor
    },
    content_header: {
        marginTop: 39 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content_view: {
        marginTop: 32 * scaleFactor,
    },
    content_item: {
        height: 56 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 19 * scaleFactor,
        backgroundColor: 'rgba(0,168,107,0.15)',
        borderRadius: 18 * scaleFactor,
        marginBottom: 19 * scaleFactor
    },
    content_item_text: {
        marginLeft: 16 * scaleFactor,
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    }

})

export default VerifyProfileScreen
