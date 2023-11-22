import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import CloseImage from '../../assets/images/user/timer/close.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const TimerScreen = ({ route, navigation }) => {
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
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>Booking Details</Text>
                            <CloseImage />
                        </View>
                        <View style={styles.time_view}>
                            <View style={styles.hour_view}>
                                <Text style={styles.hour_header}>03</Text>
                                <Text style={styles.hour_text}>Hours</Text>
                            </View>
                            <Text style={styles.hour_header}> : </Text>
                            <View style={styles.hour_view}>
                                <Text style={styles.hour_header}>24</Text>
                                <Text style={styles.hour_text}>Minutes</Text>
                            </View>
                            <Text style={styles.hour_header}> : </Text>
                            <View style={styles.hour_view}>
                                <Text style={styles.hour_header}>59</Text>
                                <Text style={styles.hour_text}>Seconds</Text>
                            </View>
                        </View>
                        <ScrollView style={styles.content}>
                            <View style={styles.review_detail_header}>
                                <Text style={styles.review_detail_header_text}>Booking Details</Text>

                                <TouchableOpacity style={styles.review_detail_header_content}>
                                    <View style={styles.review_detail_item}>
                                        <Text style={styles.review_detail_left}>Customer Name</Text>
                                        <Text style={styles.review_detail_right}>Kristin Watson</Text>
                                    </View>
                                    <View style={styles.review_detail_item}>
                                        <Text style={styles.review_detail_left}>Address</Text>
                                        <Text style={styles.review_detail_right}>Sahiwal, 57000</Text>
                                    </View>
                                    <View style={styles.review_detail_item}>
                                        <Text style={styles.review_detail_left}>Vehicle</Text>
                                        <Text style={styles.review_detail_right}>LEE-772</Text>
                                    </View>
                                    <View style={styles.review_detail_item}>
                                        <Text style={styles.review_detail_left}>Pick-up Spot</Text>
                                        <Text style={styles.review_detail_right}>C 13(1st floor)</Text>
                                    </View>
                                    <View style={styles.review_detail_item}>
                                        <Text style={styles.review_detail_left}>Booking Date</Text>
                                        <Text style={styles.review_detail_right}>August 28, 2023</Text>
                                    </View>
                                    <View style={styles.review_detail_item}>
                                        <Text style={styles.review_detail_left}>Duration</Text>
                                        <Text style={styles.review_detail_right}>4 hours</Text>
                                    </View>
                                    <View style={styles.review_detail_item}>
                                        <Text style={styles.review_detail_left}>Hours</Text>
                                        <Text style={styles.review_detail_right}>08:00 AM - 12:00 PM</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </ScrollView>
                    </View>
                    <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("ExtendDurationScreen")}>
                        <Text style={styles.footer_text}>Extend Parking Time</Text>
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
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34

    },
    time_view: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 120 * scaleFactor,
    },
    hour_text: {
        textAlign: 'center',
        color: '#707070',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '400',
    },
    hour_header: {
        textAlign: 'center',
        color: 'black',
        fontSize: 36 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
    },
    content: {
        marginTop: 130 * scaleFactor,
        width: '100%',
    },
    review_detail_header: {
        alignItems: 'center',
    },
    review_detail_header_text: {
        color: '#00A86B',
        fontSize: 24 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    review_detail_header_content: {
        marginTop: 31 * scaleFactor,
        width: '100%'
    },
    review_detail_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15 * scaleFactor
    },
    review_detail_left: {
        color: 'rgba(0,0,0,0.50)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor
    },
    review_detail_right: {
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    review_detail_footer: {
        marginTop: 30 * scaleFactor
    },
    review_detail_footer_item: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    review_detail_content: {
        marginTop: 90 * scaleFactor
    },
    review_detail_footer_left: {
        color: 'rgba(0,0,0,0.50)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '900',
        lineHeight: 24 * scaleFactor
    },
    review_detail_footer_right: {
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
export default TimerScreen
