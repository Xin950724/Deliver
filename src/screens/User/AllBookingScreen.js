import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"

import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import SearchImage from '../../assets/images/user/category/search-normal.svg'
import BookingCard from "../../components/cards/BookingCard"
import HomeButton from "../../components/buttons/HomeButton"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const AllBookingScreen = ({ navigation }) => {

    const missHandle = () => {
        Keyboard.dismiss()

    }
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.header}>
                        <View style={styles.header_view}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>All Bookings</Text>
                            <TouchableOpacity style={styles.header_search_icon} onPress={() => navigation.navigate('HomeScreen')}>
                                <SearchImage />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <ScrollView style={styles.type_view} horizontal={true}>
                            <HomeButton selected={true} value="All" />
                            <HomeButton selected={false} value="Ongoing" />
                            <HomeButton selected={false} value="Completed" />
                            <HomeButton selected={false} value="Cancel" />
                        </ScrollView>
                        <ScrollView style={{marginBottom: 60 * scaleFactor}}>
                            <BookingCard name="BMW 7 Seater" detail="2464 Royal Ln, New Jersey 45463" pay="10" type="Ongoing" />
                            <BookingCard name="BMW 7 Seater" detail="2464 Royal Ln, New Jersey 45463" pay="10" type="Cancelled" />
                            <BookingCard name="BMW 7 Seater" detail="2464 Royal Ln, New Jersey 45463" pay="10" type="Completed" />
                            <BookingCard name="BMW 7 Seater" detail="2464 Royal Ln, New Jersey 45463" pay="10" type="Ongoing" />
                            <BookingCard name="BMW 7 Seater" detail="2464 Royal Ln, New Jersey 45463" pay="10" type="Ongoing" />
                            <BookingCard name="BMW 7 Seater" detail="2464 Royal Ln, New Jersey 45463" pay="10" type="Ongoing" />
                            <BookingCard name="BMW 7 Seater" detail="2464 Royal Ln, New Jersey 45463" pay="10" type="Ongoing" />
                        </ScrollView>
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
        marginTop: 32 * scaleFactor,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor

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
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34 * scaleFactor,
    },
    content: {
        marginTop: 35 * scaleFactor,
        height: '100%',
    },
    type_view: {
        flexDirection: 'row',
        marginBottom: 20 * scaleFactor
    }
})

export default AllBookingScreen
