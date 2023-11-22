import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import AvatarImage from '../../assets/images/user/booking/avatar.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const BookingCard = ({ name, detail, pay, type }) => {
    return (
        <TouchableOpacity>
            <View style={styles.card_view}>
                <AvatarImage />
                <View style={styles.card_right}>
                    <Text style={styles.name_text}>{name}</Text>
                    <Text style={styles.detail_text}>{detail}</Text>
                    <View style={styles.card_bottom_view}>
                        <Text style={styles.card_bottom_left_text}>
                            <Text style={styles.pay_text}>
                                {"$ " + pay + " "}
                            </Text>
                            / hr
                        </Text>
                        {
                            type == "Ongoing" ? (<TouchableOpacity style={styles.type_view}>
                                <Text style={styles.type_text}>{type}</Text>
                            </TouchableOpacity>) : (
                                type == "Cancelled" ? (
                                    <TouchableOpacity style={styles.cancel_type_view}>
                                        <Text style={styles.cancel_type_text}>{type}</Text>
                                    </TouchableOpacity>) : (
                                    <TouchableOpacity style={styles.complete_type_view}>
                                        <Text style={styles.complete_type_text}>{type}</Text>
                                    </TouchableOpacity>
                                )
                            )
                        }

                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card_view: {
        width: '100%',
        paddingHorizontal: 13 * scaleFactor,
        paddingVertical: 11 * scaleFactor,
        flexDirection: 'row',
        borderRadius: 20 * scaleFactor,
        marginTop: 17 * scaleFactor,
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 14,
        elevation: 4
    },
    card_right: {
        marginLeft: 25 * scaleFactor
    },
    name_text: {
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    detail_text: {
        marginTop: 2 * scaleFactor,
        color: 'rgba(0,0,0,0.60)',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        lineHeight: 24 * scaleFactor
    },
    card_bottom_view: {
        alignItems: 'center',
        marginTop: 2 * scaleFactor,
        flexDirection: 'row'
    },
    card_bottom_left_text: {
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        lineHeight: 24 * scaleFactor
    },
    pay_text: {
        color: '#00A86B',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    type_view: {
        marginLeft: 16 * scaleFactor,
        width: 82 * scaleFactor,
        height: 22 * scaleFactor,
        borderRadius: 8 * scaleFactor,
        backgroundColor: '#00A86B'
    },
    type_text: {
        color: 'white',
        fontSize: 10 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        lineHeight: 24 * scaleFactor,
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    cancel_type_view: {
        marginLeft: 16 * scaleFactor,
        width: 82 * scaleFactor,
        height: 22 * scaleFactor,
        borderRadius: 8 * scaleFactor,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#9F0000',
        borderStyle: 'solid',
    },
    cancel_type_text: {
        color: '#9F0000',
        fontSize: 10 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        lineHeight: 24 * scaleFactor,
        textAlign: 'center'
    },
    complete_type_view: {
        marginLeft: 16 * scaleFactor,
        width: 82 * scaleFactor,
        height: 22 * scaleFactor,
        borderRadius: 8 * scaleFactor,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#009F06',
        borderStyle: 'solid',
    },
    complete_type_text: {
        color: '#009F06',
        fontSize: 10 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        lineHeight: 24 * scaleFactor
        ,
        textAlign: 'center'
    }
});

export default BookingCard
