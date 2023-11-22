import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import AvatarImage from '../../assets/images/user/message/avatar.svg'
import { ScreenContext } from "react-native-screens"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const MessageCard = ({navigation}) => {

    return (
        <TouchableOpacity style={styles.content_item} onPress={()=>navigation.navigate("ChatScreen")}>
            <View style={styles.content_left}>
                <AvatarImage />
                <View style={styles.profile_view}>
                    <Text style={styles.name_text}>Devon Lane</Text>
                    <Text style={styles.type_text}>Wade Warren</Text>
                </View>
            </View>
            <View style={styles.content_right}>
                <View style={styles.message_count}>
                    <Text style={styles.count_text}>2</Text>
                </View>
                <Text style={styles.date_text}>11:50 pm</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content_item: {
        paddingTop: 7 * scaleFactor,
        paddingBottom: 7 * scaleFactor,
        paddingLeft: 7 * scaleFactor,
        paddingRight: 15 * scaleFactor,
        marginBottom: 14 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content_left: {
        flexDirection: 'row'
    },
    profile_view: {
        marginLeft: 28 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name_text: {
        color: 'black',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    type_text: {
        color: 'rgba(0,0,0,0.50)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
    },
    content_right: {
        alignItems: 'center'
    },
    message_count: {
        width: 24 * scaleFactor,
        height: 24 * scaleFactor,
        borderRadius: 24 * scaleFactor,
        backgroundColor: '#00A86B',
        marginBottom: 8 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    count_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    date_text: {
        textAlign: 'center',
        color: 'rgba(0,0,0,0.40)',
        fontSize: 10 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 15.19 * scaleFactor,
    }
});

export default MessageCard
