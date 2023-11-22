import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, TouchableOpacity,KeyboardAvoidingView, TextInput, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'

import CreaditCard from "../../../components/cards/CreditCard"
import UserImage from '../../../assets/images/auth/login/user.svg'


const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const AddPaymentScreen = ({ navigation }) => {

    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [name, setName] = useState("")
    const [cvv, setCvv] = useState("")
    const [date, setDate] = useState("")
    const [cardNumber, setCardNumber] = useState("")

    const missHandle = () => {
        Keyboard.dismiss()
    }
    useEffect(() => {
        // Keyboard will show event
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );

        // Keyboard will hide event
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header_view}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => { navigation.navigate('DrawSignatureScreen') }}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>Add New Card Details</Text>
                        </View>
                        <ScrollView style={styles.content}>
                            {keyboardVisible == false ? (
                                <View>
                                    <Text style={styles.content_text}>Select your payment method</Text>
                                    <CreaditCard name={name} cardNumber={cardNumber} date={date} cvv={cvv} />
                                </View>
                            ) : null}
                            <View style={styles.input_view}>
                                <View style={styles.name_input_view}>
                                    <Text style={styles.name_header_text}>
                                        Name on Card
                                    </Text>
                                    <View style={styles.email_input}>
                                        <UserImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                        <TextInput style={styles.email_text_input} onChangeText={e => setName(e)}></TextInput>
                                    </View>
                                </View>
                                <View style={styles.name_input_view}>
                                    <Text style={styles.name_header_text}>
                                        Card Number
                                    </Text>
                                    <View style={styles.email_input}>
                                        <TextInput style={styles.number_text_input} keyboardType="numeric" onChangeText={e => setCardNumber(e)}></TextInput>
                                    </View>
                                </View>
                                <View style={styles.date_ccv}>
                                    <View style={styles.date_view}>
                                        <Text style={styles.name_header_text}>
                                            Expiry Date
                                        </Text>
                                        <View style={styles.date_input}>
                                            <TextInput style={styles.date_input_view} keyboardType="numeric" onChangeText={e => setDate(e)}></TextInput>
                                        </View>
                                    </View>
                                    <View style={styles.cvv_view}>
                                        <Text style={styles.name_header_text}>
                                            CVV
                                        </Text>
                                        <View style={styles.cvv_input}>
                                            <TextInput style={styles.cvv_input_view} keyboardType="numeric" onChangeText={e => setCvv(e)}></TextInput>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("SelectPaymentMethodScreen", { type: "added" })}>
                            <Text style={styles.footer_text}>Add Card</Text>
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
    body: {
        flex: 1,
        paddingTop: 37 * scaleFactor,
        paddingHorizontal: 25 * scaleFactor
    },
    header_view: {
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
    header_search_icon: {
        position: 'absolute',
        right: 0
    },
    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor

    },
    content_text: {
        marginTop: 48 * scaleFactor,
        marginBottom: 27 * scaleFactor,
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    input_view: {
        width: '100%',
    },
    name_input_view: {
        marginTop: 29 * scaleFactor,
        width: '100%'
    },
    date_ccv: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 21 * scaleFactor,
        justifyContent: 'space-between'
    },
    name_header_text: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: '500'
    },
    email_text: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        // wordWrap: 'break-word'
    },
    email_input: {
        flexDirection: 'row',
        marginTop: 8 * scaleFactor,
        width: '100%',
        borderRadius: 18 * scaleFactor,
        borderColor: "rgba(0, 0, 0, 0.20)",
        borderWidth: 1.5,
        borderStyle: "solid",
        height: 58 * scaleFactor,
        alignItems: 'center'
    },
    date_input_view: {
        width: '100%',
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600'
    },
    user_image: {
        marginLeft: 23 * scaleFactor,
        marginRight: 19 * scaleFactor,
    },
    email_text_input: {
        width: 266 * scaleFactor,
        // Email or username
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        // wordWrap: 'break-word'
    },
    number_text_input: {
        marginLeft: 19 * scaleFactor,
        width: 266 * scaleFactor,
        // Email or username
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        // wordWrap: 'break-word'
    },
    cvv_input_view: {
        width: '100%',
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
    },
    date_input: {
        width: 196 * scaleFactor,
        paddingHorizontal: 19 * scaleFactor,
        marginTop: 8 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        borderColor: "rgba(0, 0, 0, 0.20)",
        borderWidth: 1.5,
        borderStyle: "solid",
        height: 58 * scaleFactor,
        alignItems: 'center'
    },
    cvv_input: {
        width: 156 * scaleFactor,
        paddingHorizontal: 19 * scaleFactor,
        marginTop: 8 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        borderColor: "rgba(0, 0, 0, 0.20)",
        borderWidth: 1.5,
        borderStyle: "solid",
        height: 58 * scaleFactor,
        alignItems: 'center'
    },
    add_button: {
        marginTop: 32 * scaleFactor,
        height: 72 * scaleFactor,
        width: '100%',
        background: 'rgba(0, 168, 107, 0.05)',
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 1 * scaleFactor,
        borderColor: 'rgba(0, 168, 107, 0.40)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    add_button_text: {
        marginLeft: 10 * scaleFactor,
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    footer: {
        width: '100%',
        backgroundColor: '#00A86B',
        shadowColor: "#00A86B", // rgba(0, 168, 107, 0.20)
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.20,
        shadowRadius: 8.5, // Adjust this to achieve the desired blur
        elevation: 5, // This is for Android to simulate shadow
        borderRadius: 20,
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 39 * scaleFactor
    },
    footer_text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700'
    },


})

export default AddPaymentScreen
