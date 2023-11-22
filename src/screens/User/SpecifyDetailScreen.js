import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import LocationImage from '../../assets/images/user/specify/location.svg'
// import Dropdown from 'react-native-material-dropdown'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const SpecifyDetailScreen = ({ route, navigation }) => {

    const missHandle = () => {
        Keyboard.dismiss()
    }
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.main_content}>
                    <View style={styles.header_view}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Specify Details</Text>
                    </View>
                    <ScrollView style={styles.content_view}>
                        <Text style={styles.content_header_text}>Date and time of return</Text>
                        <View style={styles.date_time_view}>
                            <View style={styles.date_time_item_view}>
                                <Text style={styles.date_header_text}>
                                    Date
                                </Text>
                                <View style={styles.date_view}>

                                </View>
                            </View>
                            <View style={styles.date_time_item_view}>
                                <Text style={styles.date_header_text}>
                                    Time
                                </Text>
                                <View style={styles.time_view}>

                                </View>
                            </View>
                        </View>
                        <View style={styles.location_view}>
                            <Text style={styles.location_header_text}>Location or metting point</Text>
                            <View style={styles.locaiton_content}>
                                <LocationImage />
                            </View>
                        </View>
                        <View style={styles.note_view}>
                            <Text style={styles.location_header_text}>Any additional instructions notes(Optional)</Text>
                            <View style={styles.note_content}>
                                <TextInput style={styles.note_input}/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footer_button}>
                        <Text style={styles.footer_text}>Confirm Return</Text>
                    </TouchableOpacity>
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
    content_view: {
        marginTop: 6 * scaleFactor
    },
    content_header_text: {
        marginTop: 37 * scaleFactor,
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },

    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    content: { flex: 1 },
    location_view: {
        marginTop: 34 * scaleFactor
    },
    location_header_text: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
    },
    locaiton_content:{
        marginTop: 8 * scaleFactor,
        width: '100%',
        paddingHorizontal: 23 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.20)',
        borderWidth: 1.5 * scaleFactor,
        borderStyle: 'solid',
        height: 58 * scaleFactor

    },
    date_time_view: {
        marginTop: 10 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date_time_item_view: {
        marginTop: 30 * scaleFactor,
    },
    date_header_text: {
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        letterSpacing: 0.40
    },
    date_view: {
        marginTop: 7 * scaleFactor,
        width: 220 * scaleFactor,
        height: 58.5 * scaleFactor,
        borderRadius: 28 * scaleFactor,
        borderWidth: 2.32 * scaleFactor,
        borderColor: "#00A86B",
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center'
    },
    time_view: {
        marginTop: 7 * scaleFactor,
        width: 128 * scaleFactor,
        height: 58.5 * scaleFactor,
        borderRadius: 28 * scaleFactor,
        borderWidth: 1.16 * scaleFactor,
        borderColor: "#E2E5F2",
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center'
    },
    note_view: {
        marginTop: 26 * scaleFactor,
        marginBottom: 20 * scaleFactor,
    },
    note_content: {
        marginTop: 8 * scaleFactor,
        width: '100%',
        height: 305 * scaleFactor,
        paddingHorizontal: 20 * scaleFactor,
        paddingVertical: 20 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.20)',
        borderWidth: 1 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        borderStyle: 'solid'
    },
    note_input: {
        width: '100%',
        height: '100%'
    },
    footer: {
        paddingHorizontal: 25 * scaleFactor,
        backgroundColor: 'white',
    },
    footer_button: {
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
        marginBottom: 34 * scaleFactor
    },
    footer_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700'
    },
    amout_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 22 * scaleFactor,
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
    }
})

export default SpecifyDetailScreen
