import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import CloseImage from '../../assets/images/user/timer/close.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const InspectionReportScreen = ({ route, navigation }) => {
    const type = route.params && route.params.type
    const [modalVisible, setModalVisible] = useState(false)
    const missHandle = () => {
        // setModalVisible(false)
        Keyboard.dismiss()
    }
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header_view}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.navigate("HomeScreen")}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>Inspection Report</Text>
                            <CloseImage />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.report_header_text}>Here is the inspection report.</Text>
                            <View style={styles.footer_content}>
                                <View style={styles.footer_item}>
                                    <Text style={styles.footer_left_text}>Service Cost</Text>
                                    <Text style={styles.footer_right_text}>$ 400.00</Text>
                                </View>
                                <View style={styles.footer_item}>
                                    <Text style={styles.footer_left_text}>Taxes & Fees</Text>
                                    <Text style={styles.footer_right_text}>$ 20.00</Text>
                                </View>
                                <View style={styles.footer_last_item}>
                                    <Text style={styles.footer_last_left_text}>Total</Text>
                                    <Text style={styles.footer_last_right_text}>$ 420.00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("PersonalFeedbackScreen")}>
                        <Text style={styles.footer_text}>Confirm Payment</Text>
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
    content: {
        marginTop: 41 * scaleFactor,
        width: '100%',
    },
    report_header_text: {
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24.30 * scaleFactor
    },
    footer_content: {
        marginTop: 30 * scaleFactor,
        paddingHorizontal: 20 * scaleFactor
    },
    footer_item: {
        marginTop: 15 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer_left_text: {
        color: 'rgba(0,0,0,0.50)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor
    },
    footer_right_text: {
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    footer_last_item: {
        marginTop: 29 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer_last_left_text: {
        color: 'rgba(0,0,0,0.50)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '900',
        lineHeight: 24 * scaleFactor
    },
    footer_last_right_text: {
        color: '#00A86B',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '900',
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
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700'
    },


})
export default InspectionReportScreen
