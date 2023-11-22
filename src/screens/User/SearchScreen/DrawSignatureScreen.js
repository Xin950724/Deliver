import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableWithoutFeedback,KeyboardAvoidingView, Keyboard,ScrollView, TouchableOpacity, SafeAreaView, Text } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import CheckBox from '@react-native-community/checkbox';

import { launchImageLibrary } from 'react-native-image-picker';
import DrawSignView from "../../../components/views/DrawSignView"
import TypeSignView from "../../../components/views/TypeSignView";

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const DrawSignatureScreen = ({ navigation }) => {
    const [checked, setChecked] = useState(false)
    const [visible, setVisible] = useState(false)
    const [type, setType] = useState('license')
    const [selectedImage, setSelectedImage] = useState('')

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
                navigation.navigate("ScanScreen", {
                    navigation: navigation,
                    selectedImage: selectedImage
                })
            }
        });
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={{ flex: 1 , marginBottom: 20 * scaleFactor}}>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>Contact</Text>
                        </View>
                        <ScrollView style={styles.content}>
                            <View style={styles.content_header} >
                                <TouchableOpacity style={type == 'license' ? styles.license_header : styles.disabled_license_header} onPress={() => setType('license')}>
                                    <Text style={type == 'license' ? styles.content_header_text : styles.disabled_content_header_text}>Draw Sign</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={type == 'selfie' ? styles.selfie_header : styles.disabled_selfie_header} onPress={() => setType('selfie')}>
                                    <Text style={type == 'selfie' ? styles.content_header_text : styles.disabled_content_header_text}>Type Sign</Text>
                                </TouchableOpacity>
                            </View>
                            {type == "license" ? (<DrawSignView />) :
                                (<TypeSignView />)}
                        </ScrollView>
                    </View>
                    <KeyboardAvoidingView style={styles.footer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <View style={styles.agree_field}>
                            <CheckBox
                                disabled={false}
                                value={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <Text style={styles.agree_text}>
                                I agree to
                                <Text style={styles.agree_bold_text}> Terms & Conditions</Text>
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.agree_button} onPress={() => navigation.navigate("SelectPaymentMethodScreen", { type: "beforeadd" })} >
                            <Text style={styles.button_text}>Confirm & Submit</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    body:{
        flex : 1,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
    },
    header: {
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
        marginLeft: -12 * scaleFactor,
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34,
    },
    content_text: {
        marginTop: 22 * scaleFactor,
        color: 'rgba(27.63,27.63,27.63,0.70)',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '600',
    },
    content: {
        width: '100%',
        marginTop: 38 * scaleFactor,
    },
    content_header: {
        flexDirection: 'row',
    },
    license_header: {
        backgroundColor: '#00A86B',
        borderRadius: 18 * scaleFactor,
        height: 43 * scaleFactor,
        width: 180 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    disabled_license_header: {
        backgroundColor: 'rgba(0, 168, 107, 0.15)',
        borderRadius: 18 * scaleFactor,
        height: 43 * scaleFactor,
        width: 180 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    content_header_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    disabled_selfie_header: {
        width: 200 * scaleFactor,
        height: 42 * scaleFactor,
        backgroundColor: 'rgba(0, 168, 107, 0.15)',
        borderRadius: 18 * scaleFactor,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 160 * scaleFactor
    },
    selfie_card: {
        backgroundColor: 'white',
        padding: 22 * scaleFactor,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 14,
        elevation: 5,
        marginTop: 48 * scaleFactor,
        marginBottom: 32 * scaleFactor,
        borderRadius: 40 * scaleFactor

    },
    selfie_header: {
        backgroundColor: '#00A86B',
        width: 200 * scaleFactor,
        height: 42 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 160 * scaleFactor,
    },
    disabled_content_header_text: {
        color: '#7E6161',
        fontSize: 18 * scaleFactor, 
        fontFamily: 'Montserrat',
        fontWeight: '500',
    },
    footer: {
        width: '100%',
        marginBottom: 46 * scaleFactor,
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
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34 * scaleFactor,
    },

    button_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700'
    },
    agree_field: {
        marginTop: 20 * scaleFactor,
        marginBottom: 32 * scaleFactor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    agree_text: {
        marginLeft: 10 * scaleFactor,
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',

    },
    agree_bold_text: {
        color: '#00A86B',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
})

export default DrawSignatureScreen
