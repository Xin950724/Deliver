import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'

import RatingCard from "../../components/cards/RatingCard"

// import Dropdown from 'react-native-material-dropdown'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const RatingScreen = ({ route, navigation }) => {

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
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.main_content}>
                        <View style={styles.header_view}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.navigate("PersonalFeedbackScreen")}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>Ratings</Text>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.content_header}>
                                <Text style={styles.content_header_text}>Owner Reviews</Text>
                                {/* <TouchableOpacity style={styles.content_right_view}>
                                <Dropdown
                                    value={value}
                                    onChangeText={setValue}
                                    data={options}
                                    multiple
                                />
                            </TouchableOpacity> */}
                            </View>
                            <ScrollView style={styles.content_view}>
                                <RatingCard navigation={navigation}/>
                                <RatingCard />
                                <RatingCard />
                                <RatingCard />
                                <RatingCard />
                                <RatingCard />
                            </ScrollView>
                        </View>
                    </View>
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
    content_header: {
        marginTop: 36 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content_header_text: {
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    content_view: {
        flex: 1,
        marginTop: 16 * scaleFactor,
        backgroundColor: 'white',
        marginBottom: 20 * scaleFactor
    },
    content_item: {
        paddingTop: 20 * scaleFactor,
        paddingBottom: 17 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.12)',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    content_item_header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content_item_header_left: {
        flexDirection: 'row'
    },
    profile_view: {
        marginLeft: 23 * scaleFactor
    },
    content_item_header_right: {
        flexDirection: 'row',
        marginTop: 13 * scaleFactor
    },
    down_image: {
        marginLeft: 20 * scaleFactor,
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

export default RatingScreen
