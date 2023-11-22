import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import AvatarImage from '../../assets/images/user/notification/avatar.svg'
import { ScreenContext } from "react-native-screens"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const NotifcationCard = () => {
    const [type,setType] = useState("accept")
    return (
        <TouchableOpacity style={styles.content_item}>
            <AvatarImage />
            <View style={styles.right_view}>
                <View style={styles.profile_view}>
                    <Text style={styles.content_text}><Text style={styles.name_text}>William Jones</Text> just requested to reserve your car.</Text>
                    <Text style={styles.type_text}>2m go</Text>
                </View>
                <Text style={styles.detail_text}>Tap to see the details</Text>
                <View style={styles.button_view}>
                    <TouchableOpacity style={type == "accept" ? styles.accept_button: styles.decline_button} onPress={()=>setType("accept")}>
                        <Text style={type == "accept" ? styles.accept_text : styles.decline_text}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={type == "decline" ? styles.accept_button: styles.decline_button} onPress={()=>setType("decline")}>
                        <Text style={type == "accept" ? styles.accept_text : styles.decline_text}>Decline</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content_item: {
        alignItems: 'center',
        marginTop: 18 * scaleFactor,
        marginBottom: 18 * scaleFactor,
        paddingTop: 19 * scaleFactor,
        paddingBottom: 16 * scaleFactor,
        paddingLeft: 14 * scaleFactor,
        paddingRight: 15 * scaleFactor,
        borderRadius: 18,
        borderStyle: 'solid',
        borderWidth: 1 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.05) ',
        flexDirection: 'row',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 14,
        elevation: 4,
        backgroundColor: 'white'

    },
    right_view: {
        paddingLeft: 15 * scaleFactor
    },
    profile_view: {
        flexDirection: 'row'
    },
    name_text: {
        color: '#00A86B',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 20 * scaleFactor,
    },
    content_text: {
        color: 'black',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 20 * scaleFactor,
        width: 200 * scaleFactor
    },
    type_text: {
        marginTop: 4 * scaleFactor,
        color: '#A7A9B7',
        fontSize: 10 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
    },
    detail_text: {
        color: '#A7A9B7',
        fontSize: 10 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400'
    },
    button_view: {
        flexDirection: 'row',
        marginTop: 11 * scaleFactor
    },
    accept_button: {
        width: 101 * scaleFactor,
        height: 28 * scaleFactor,
        backgroundColor: '#00A86B',
        marginRight: 12 * scaleFactor,
        borderRadius: 10 * scaleFactor
    },
    accept_text: {
        textAlign: 'center',
        lineHeight: 28 * scaleFactor,
        color: 'white',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    decline_button: {
        marginRight: 12 * scaleFactor,
        width: 101 * scaleFactor,
        height: 28 * scaleFactor,
        backgroundColor: 'rgba(255, 0, 0, 0.07)',
        borderRadius: 10 * scaleFactor
    },
    decline_text: {
        textAlign: 'center',
        lineHeight: 28 * scaleFactor,
        color: 'rgba(0,0,0,0.80)',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400'
    },
});

export default NotifcationCard

