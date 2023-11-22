import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"

import EllipseImage from '../../assets/images/user/payment/Ellipse.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const CreaditCard = ({ name, cardNumber, date, cvv }) => {
    return (
        <TouchableOpacity style={styles.card_view}>
            <View style={styles.card_header}>
                <Text style={styles.header_text}>HBL</Text>
                <EllipseImage />
            </View>
            <View style={styles.card_content}>
                <Text style={styles.card_number}>{cardNumber}</Text>
            </View>
            <View style={styles.card_footer}>
                <View style={styles.card_name_view}>
                    <Text style={styles.card_name_header}>Card Name</Text>
                    <Text style={styles.card_name_content}>{name}</Text>
                </View>
                <View style={styles.date_view}>
                    <Text style={styles.card_name_header}>Expiry Date</Text>
                    <Text style={styles.date_content}>{date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card_view: {
        height: 214 * scaleFactor,
        backgroundColor: '#00A86B',
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.07,
        shadowRadius: 14,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        borderWidth: 1,
        paddingLeft: 28 * scaleFactor
    },

    card_header: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        alignItems : 'center',
        paddingTop: 10 * scaleFactor,
        paddingRight: 10 * scaleFactor
    },
    header_text: {
        color: 'white',
        fontSize: 29,
        fontFamily: 'Urbanist',
        fontStyle: 'italic',
        fontWeight: '900',
        letterSpacing: 4,
    },
    bank_name: {
        color: 'white',
        fontSize: 29,
        fontFamily: 'Urbanist',
        fontStyle: 'italic',
        fontWeight: '900',
        lineHeight: 24,
        letterSpacing: 4
    },
    card_content: {
        marginTop: 25 * scaleFactor,
    },
    card_number: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24
    },
    card_footer: {
        marginTop: 36 * scaleFactor,
        flexDirection: 'row'
    },
    card_name_header: {
        color: 'white',
        fontSize: 8,
        fontFamily: 'Urbanist',
        fontWeight: '400',
        lineHeight: 24
    },
    card_name_content: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24,
    },
    date_view: {
        marginLeft: 57 * scaleFactor,
    },
    date_content: {
        color: 'white',
        fontSize: 8,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24
    }

});

export default CreaditCard
