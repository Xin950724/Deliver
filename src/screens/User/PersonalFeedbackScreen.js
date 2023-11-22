import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import AvatarImage from '../../assets/images/user/feedback/avatar.svg'
import StarImage from '../../assets/images/user/feedback/stars.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const PersonalFeedbackScreen = ({ route, navigation }) => {

    const [keyboardVisible, setKeyboardVisible] = useState(false);
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
                    <View style={!keyboardVisible ? styles.main_content : styles.disabled_main_content}>
                        <View style={styles.header_view}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>Personal Feedback</Text>
                        </View>
                        <ScrollView style={styles.content}>
                            <View style={styles.content_profile}>
                                <AvatarImage width={116 * scaleFactor} height={116 * scaleFactor} />
                                <Text style={styles.user_type}>BMW & Seater</Text>
                                <Text style={styles.user_detail}>8502 Preston Rd. Inglewood, Maine 98380</Text>
                            </View>
                            <TouchableOpacity style={styles.content_view}>
                                <View style={styles.content_item}>
                                    <View style={styles.content_left_item}>
                                        <Text style={styles.content_left_text}>Service</Text>
                                        <StarImage />
                                    </View>
                                    <View style={styles.content_right_item}>
                                        <Text style={styles.content_left_text}>On-Time</Text>
                                        <StarImage />
                                    </View>
                                </View>
                                <View style={styles.content_bottom_item}>
                                    <View style={styles.content_left_item}>
                                        <Text style={styles.content_left_text}>Service</Text>
                                        <StarImage />
                                    </View>
                                    <View style={styles.content_right_item}>
                                        <Text style={styles.content_left_text}>On-Time</Text>
                                        <StarImage />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={styles.footer_content}>
                        <Text style={styles.footer_content_header_text}>Leave a comment</Text>
                        <View style={styles.footer_content_view}>
                            <TextInput style={styles.footer_content_input} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.footer_button} onPress={() => navigation.navigate("RatingScreen")}>
                        <Text style={styles.footer_text}>Leave a review</Text>
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
    main_content: {
        flex: 1
    },
    disabled_main_content: {
        flex: 1,
        display: 'none'
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
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor

    },
    content_profile: {
        marginTop: 26 * scaleFactor,
        alignItems: 'center'
    },
    user_type: {
        marginTop: 15 * scaleFactor,
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        letterSpacing: 0.50
    },
    user_detail: {
        marginTop: 5 * scaleFactor,
        color: 'rgba(0,0,0,0.60)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        letterSpacing: 0.50,
    },
    content_view: {
        marginTop: 34 * scaleFactor,
        marginBottom: 30 * scaleFactor,
        backgroundColor: 'white',
        boxShadow: '0px 4px 14px ',
        paddingVertical: 20 * scaleFactor,
        paddingHorizontal: 31 * scaleFactor,
        borderRadius: 20 * scaleFactor,
        shadowColor: "black", // rgba(0, 168, 107, 0.20)
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.20,
        shadowRadius: 8.5, // Adjust this to achieve the desired blur
        elevation: 5, // This is for Android to simulate shadow
    },
    content_item: {
        marginBottom: 25 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content_bottom_item: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content_left_text: {
        color: 'rgba(0,0,0,0.70)',
        fontSize: 13 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 23 * scaleFactor,
        letterSpacing: 0.50
    },
    footer_content: {
        marginBottom: 50 * scaleFactor
    },
    footer_content_view: {
        marginTop: 25 * scaleFactor,
        paddingTop: 21 * scaleFactor,
        paddingHorizontal: 24 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.20)',
        borderWidth: 2 * scaleFactor,
        borderStyle: 'solid',
        borderRadius: 20 * scaleFactor,
        width: '100%',
        height: 155 * scaleFactor,
    },
    footer_content_header_text: {
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        letterSpacing: 0.50
    },
    footer_content_input: {
        width: '100%',
        color: 'rgba(0,0,0,0.90)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
    },
    footer_button: {
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

export default PersonalFeedbackScreen
