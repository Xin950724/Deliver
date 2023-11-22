import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, ScrollView } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import AddImage from '../../assets/images/user/payment/add-article.svg'
import CloseImage from '../../assets/images/user/timer/close.svg'

import PaymentCard from "../../components/cards/PaymentCard"

import Slider from '@react-native-community/slider';

import VehicleModal from "../../components/modals/VehicleModal"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const ExtendBookingScreen = ({ route, navigation }) => {
    const [method, setMethod] = useState("Paypal")
    const [modalVisible, setModalVisible] = useState(false)
    const [duration, setDuration] = useState(0)
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
                            <Text style={styles.header_text}>Booking Details</Text>
                            <CloseImage />
                        </View>
                        <View style={styles.duration_view}>
                            <View style={styles.duration_header}>
                                <Text style={styles.duration_text}>Duration</Text>
                                <View style={styles.slider_range}>
                                    <Text style={styles.slider_range_text}>{duration} Hour</Text>
                                </View>
                            </View>

                            <Slider
                                style={styles.slider}
                                minimumValue={0}
                                maximumValue={24}
                                minimumTrackTintColor="#00A86B"
                                maximumTrackTintColor="#CCCCCC"
                                step={1}
                                onValueChange={e => setDuration(e)}
                            />
                        </View>
                        <ScrollView style={styles.content}>
                            <Text style={styles.content_text}>Select your payment method</Text>
                            <PaymentCard name="Paypal" method={method} setMethod={setMethod} />
                            <PaymentCard name="Google" method={method} setMethod={setMethod} />
                            <PaymentCard name="Apple pay" method={method} setMethod={setMethod} />
                            <VehicleModal navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                        </ScrollView>
                    </View>
                    <View style={styles.amout_view}>
                        <Text style={styles.amount_header}>Total Amout</Text>
                        <Text style={styles.amount_content}>$ 500.00</Text>
                    </View>
                    <TouchableOpacity style={styles.footer} onPress={() => setModalVisible(true)}>
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
        justifyContent: 'space-between',
        width: '100%',
    },
    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34 * scaleFactor

    },
    header_icon: {
        left: 0,
    },
    header_search_icon: {
        right: 0
    },
    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor

    },
    duration_view: {
        marginTop: 31 * scaleFactor,
    },
    duration_text: {
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600'
    },
    slider: {
        width: '100%',
        height: 10 * scaleFactor,
        marginTop: 20 * scaleFactor
    },
    slider_range: {
        marginLeft: 20 * scaleFactor,
        width: 84 * scaleFactor,
        height: 30 * scaleFactor,
        backgroundColor: '#00A86B',
        borderRadius: 5 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    slider_range_text: {
        color: 'white',
        fontSize: 15 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    duration_header: {
        flexDirection: 'row'
    },
    content_text: {
        marginTop: 48 * scaleFactor,
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    amout_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 33 * scaleFactor,
        paddingBottom: 42 * scaleFactor,
        borderWidth: 0,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.10)'
    },
    amount_header: {
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '400'
    },
    amount_content: {
        color: '#00A86B',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '800',
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
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700'
    },

})

export default ExtendBookingScreen
