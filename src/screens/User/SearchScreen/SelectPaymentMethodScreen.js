import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import AddImage from '../../../assets/images/user/payment/add-article.svg'

import PaymentCard from "../../../components/cards/PaymentCard"


const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const SelectPaymentScreen = ({ route, navigation }) => {
    const [method, setMethod] = useState("Paypal")
    const type = route.params && route.params.type
    const missHandle = () => {
        Keyboard.dismiss()
    }
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header_view}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>Payment Method</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.content_text}>Select your payment method</Text>
                            <PaymentCard name="Paypal" method={method} setMethod={setMethod} />
                            <PaymentCard name="Google" method={method} setMethod={setMethod} />
                            <PaymentCard name="Apple pay" method={method} setMethod={setMethod} />
                            <TouchableOpacity style={styles.add_button}>
                                <AddImage />
                                <Text style={styles.add_button_text}>Add New Card</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.footer} onPress={() => { type == "added" ? navigation.navigate("SummaryScreen", { type: "added" }) : navigation.navigate("AddPaymentScreen", { type: "added" }) }}>
                        <Text style={styles.footer_text}>Continue</Text>
                    </TouchableOpacity>
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
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
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

export default SelectPaymentScreen
