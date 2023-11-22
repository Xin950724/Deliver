import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import AvatarImage from '../../assets/images/user/feedback/avatar.svg'
import StarImage from '../../assets/images/user/feedback/stars.svg'
import ThumbsDownImage from '../../assets/images/user/feedback/thumbs-down.svg'
import ThumbsUpImage from '../../assets/images/user/feedback/thumbs-up.svg'
import { NavigationContainer } from "@react-navigation/native"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const RatingCard = ({ navigation,name, method, setMethod }) => {

    return (
        <TouchableOpacity style={styles.content_item} onPress={()=>navigation.navigate("HomeScreen")}>
            <View style={styles.content_item_header}>
                <View style={styles.content_item_header_left}>
                    <AvatarImage width={52 * scaleFactor} height={52 * scaleFactor} style={{marginTop: 5 * scaleFactor}} />
                    <View style={styles.profile_view}>
                        <Text style={styles.name_text}>Eleanor Pena</Text>
                        <StarImage width={78 * scaleFactor} height={12 * scaleFactor}/>
                        <Text style={styles.date_text}>Posted on: 13 May, 2023</Text>
                    </View>
                </View>
                <View style={styles.content_item_header_right}>
                    <TouchableOpacity>
                        <ThumbsUpImage />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.down_image}>
                        <ThumbsDownImage />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.content_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae non id interdum massa enim posuere.
                Tempus, risus varius rhoncus ipsum, sed egestas nisi pellentesque
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    content_item: {
        paddingTop: 20 * scaleFactor,
        paddingBottom: 17 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.12)',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    content_item_header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content_item_header_left: {
        flexDirection: 'row'
    },
    profile_view: {
        marginLeft: 23 * scaleFactor
    },
    content_item_header_right: {
        flexDirection: 'row',
        marginTop: 13 * scaleFactor
    },
    down_image: {
        marginLeft: 20 * scaleFactor,
    },
    content_profile: {
        marginTop: 26 * scaleFactor,
        alignItems: 'center'
    },
    content_text: {
        color: '#808080',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        lineHeight: 23 * scaleFactor,
        marginTop: 18 * scaleFactor
    },
    name_text: {
        color: 'black',
        fontSize: 15 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        lineHeight: 25 * scaleFactor
    },
    date_text: {
        color: '#808080',
        fontSize: 11 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        marginTop: 6 * scaleFactor
    }
});

export default RatingCard
