import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import AvatarImage from '../../assets/images/user/keyhand/avatar.svg'
import ChatImage from '../../assets/images/user/keyhand/chat.svg'
import VideoImage from '../../assets/images/user/keyhand/video.svg'
import CategoryFilterButton from "../../components/buttons/CategoryFilterButton"
import HomeButton from "../../components/buttons/HomeButton"

// import Dropdown from 'react-native-material-dropdown'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const InitiateRequestScreen = ({ route, navigation }) => {

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
                        <Text style={styles.header_text}>Key Handover and Return</Text>
                    </View>
                    <ScrollView style={styles.content_view}>
                        <ScrollView style={styles.content_header} horizontal={true}>
                            <HomeButton selected={true} value="All" />
                            <HomeButton selected={false} value="Pending" />
                            <HomeButton selected={false} value="Completed" />
                            <HomeButton selected={false} value="Handover" />
                        </ScrollView>
                        <View style={styles.content_item}>
                            <View style={styles.item_content}>
                                <AvatarImage />
                                <View style={styles.item_left}>
                                    <Text style={styles.name}>Theresa Webb</Text>
                                    <View style={styles.status_view}>
                                        <Text style={styles.message}>messaging  -</Text>
                                        <TouchableOpacity style={styles.status_bar}>
                                            <Text style={styles.status_text}>Pending</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ChatImage />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.time_view}>
                                        <Text style={styles.date_text}>Today  |  </Text>
                                        <Text style={styles.time_text}>16:00 PM</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.item_footer}>
                                <TouchableOpacity style={styles.cancel_button}>
                                    <Text style={styles.cancel_text}>Cancel Handover</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.active_button}>
                                    <Text style={styles.active_text}>Reschedule</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.content_item}>
                            <View style={styles.item_content}>
                                <AvatarImage />
                                <View style={styles.item_left}>
                                    <Text style={styles.name}>Theresa Webb</Text>
                                    <View style={styles.status_view}>
                                        <Text style={styles.message}>messaging  -</Text>
                                        <TouchableOpacity style={styles.status_bar}>
                                            <Text style={styles.status_text}>Pending</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <ChatImage />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.time_view}>
                                        <Text style={styles.date_text}>8/21/15  |  </Text>
                                        <Text style={styles.time_text}>16:00 PM</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.item_footer}>
                                <TouchableOpacity style={styles.cancel_button}>
                                    <Text style={styles.cancel_text}>Book again</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.active_button}>
                                    <Text style={styles.active_text}>Leave a Review</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
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
        marginTop: 25 * scaleFactor
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
    content_header: {
        flexDirection: 'row'
    },
    content_item: {
        marginTop: 49 * scaleFactor,
    },
    item_content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item_left: {
        marginLeft: 16 * scaleFactor
    },
    name: {
        color: '#212121',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 21.60 * scaleFactor
    },
    status_view: {
        marginTop: 19 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center'
    },
    message: {
        color: '#424242',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        letterSpacing: 0.20
    },
    status_bar: {
        paddingHorizontal: 10 * scaleFactor,
        paddingVertical: 6 * scaleFactor,
        borderRadius: 6 * scaleFactor,
        borderWidth: 1 * scaleFactor,
        borderStyle: 'solid',
        borderColor: '#00A86B',
        marginLeft: 10 * scaleFactor,
        marginRight: 48 * scaleFactor,

    },
    status_text: {
        color: '#00A86B',
        fontSize: 10 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        letterSpacing: 0.20
    },
    time_view: {
        flexDirection: 'row',
        marginTop: 10 * scaleFactor
    },
    time_text: {
        color: '#424242',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        letterSpacing: 0.20
    },
    date_text: {
        color: '#424242',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        letterSpacing: 0.20,
    },
    item_footer: {
        paddingHorizontal: 16 * scaleFactor,
        marginTop: 32 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cancel_button: {
        width: 160 * scaleFactor,
        height: 32 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2 * scaleFactor,
        borderColor: '#00A86B',
        borderRadius: 100 * scaleFactor,
        borderStyle: 'solid'
    },
    cancel_text: {
        color: '#00A86B',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        lineHeight: 19.60 * scaleFactor,
        letterSpacing: 0.20
    },
    active_button: {
        width: 160 * scaleFactor,
        height: 32 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A86B',
        borderWidth: 2 * scaleFactor,
        borderColor: 'transparent',
        borderRadius: 100 * scaleFactor,
        borderStyle: 'solid'
    },
    active_text: {
        color: 'white',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        lineHeight: 19.60,
        letterSpacing: 0.20
    },

})

export default InitiateRequestScreen
