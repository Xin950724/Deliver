import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import PayPalImage from '../../assets/images/user/payment/paypal.svg'
import { RadioButton } from "react-native-paper"
const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const ProfileCard = ({navigation, Image, text, url }) => {

    return (
        <TouchableOpacity style={styles.card_content} onPress={()=>navigation.navigate(url)}>
            <Image />
            <Text style={styles.card_text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card_content: {
        height: 61 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        paddingLeft: 31 * scaleFactor,
        backgroundColor: 'rgba(0,168,107,0.15)',
    },
    card_text: {
        color: 'rgba(0,0,0,0.80)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 24.30 * scaleFactor,
        marginLeft: 29 * scaleFactor
    }
});

export default ProfileCard
