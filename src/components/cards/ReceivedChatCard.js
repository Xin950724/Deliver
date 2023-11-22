import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
const { width } = Dimensions.get('window')
import ChatAvatarImage from '../../assets/images/user/chat/chat_avatar.svg'

const scaleFactor = width / 414

const ReceivedChatCard = ({ name, method, setMethod }) => {

    return (
        <View style={styles.card_view}>
            <View style={styles.header}>
                <Text style={styles.date_text}>11:50 pm</Text>
            </View>
            <View style={styles.content}>
                <ChatAvatarImage />
                <View style={styles.card_content}>
                    <Text style={styles.card_text}>I am fine and how are you? From where I can Pick up?</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card_view: {
        marginTop: 26 * scaleFactor
    },
    header: {
        marginBottom: 27 * scaleFactor,
        alignItems: 'center'
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
        marginLeft: 14 * scaleFactor,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 5
        // React Native doesn't have th
    },
    content: {
        flexDirection: 'row'
    },
    card_text: {
        color: 'rgba(0,0,0,0.80)',
        fontSize: 14,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 21.27
    },
    date_text: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 10,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 15.19
    }
});

export default ReceivedChatCard
