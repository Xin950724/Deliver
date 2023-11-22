import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
const { width } = Dimensions.get('window')
import ChatAvatarImage from '../../assets/images/user/chat/chat_avatar.svg'

const scaleFactor = width / 414

const ReplyChatCard = () => {

    return (
        <View style={styles.card_view}>
            <View style={styles.card_content}>
                <Text style={styles.card_text}>I am fine </Text>
            </View>
            <View style={styles.avatar}>
                <ChatAvatarImage />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card_view: {
        width: '100%',
        marginTop: 26 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    card_text: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 21.27
    },
    card_content: {
        maxWidth: 300 * scaleFactor,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.09,
        shadowRadius: 37,
        paddingVertical: 12 * scaleFactor,
        paddingLeft: 26 * scaleFactor,
        paddingRight: 29 * scaleFactor,
        marginTop: 7 * scaleFactor,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginRight: 14 * scaleFactor,
        elevation: 5,
        backgroundColor: '#00A86B',
        // React Native doesn't have th
    },


});

export default ReplyChatCard
