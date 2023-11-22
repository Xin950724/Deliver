import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import SearchImage from '../../assets/images/user/message/search.svg'

import RatingCard from "../../components/cards/RatingCard"
import MessageCard from "../../components/cards/MessageCard"
import FooterMenu from "../../components/menus/FooterMenu"

// import Dropdown from 'react-native-material-dropdown'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const MessageScreen = ({ route, navigation }) => {

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
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.body}>
                    <View style={styles.main_content}>
                        <View style={styles.header_view}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>Messages</Text>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.content_header}>
                                <View style={styles.search_view}>
                                    <SearchImage />
                                    <TextInput style={styles.search_text} placeholder="Search" placeholderTextColor="black" onChangeText={(e) => setSearchText(e)} />
                                </View>
                            </View>
                            <ScrollView style={styles.content_view}>
                                <MessageCard navigation={navigation} />
                                <MessageCard />
                                <MessageCard />
                                <MessageCard />
                                <MessageCard />
                                <MessageCard />
                                <MessageCard />
                                <MessageCard />
                                <MessageCard />
                                <MessageCard />
                                <MessageCard />
                            </ScrollView>
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                    <FooterMenu navigation={navigation} />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    main_content: {
        flex: 1,
        backgroundColor: 'white'
    },
    body: {
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
        marginTop: 39 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    search_view: {
        flexDirection: 'row',
        paddingLeft: 14 * scaleFactor,
        paddingRight: 14 * scaleFactor,
        backgroundColor: 'rgba(0, 168, 107, 0.07)',
        width: '100%',
        height: 48 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 34 * scaleFactor
    },
    search_text: {
        marginLeft: 16 * scaleFactor,
        height: 50 * scaleFactor,
        width: 280 * scaleFactor,
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor
    },
})

export default MessageScreen
