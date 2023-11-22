import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import LogOutImage from '../../assets/images/user/profile/logout.svg'
const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const ProfileLogoutCard = () => {

    return (
        <TouchableOpacity style={styles.card_content}>
            <LogOutImage />
            <Text style={styles.card_text}>Log Out</Text>
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
        backgroundColor: 'rgba(189,93,93,0.1)',
    },
    card_text: {
        color: 'rgba(255,56.31,56.31,0.80)',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 24.30,
        marginLeft: 29 * scaleFactor
    }
});

export default ProfileLogoutCard
