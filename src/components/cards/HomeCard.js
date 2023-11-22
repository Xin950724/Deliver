import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const HomeCard = ({ ChildComponent, text, navigation }) => {
    return (
        <TouchableOpacity style={{marginRight: 15 * scaleFactor}} onPress={()=>navigation.navigate("CategoryScreen")}>
            <View style={styles.card_content}>
                <ChildComponent />
                <View style={styles.card_content_text}>
                    {/* <Text style={styles.card_text}>{text}</Text> */}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card_content: {
        flex: 1,
        position: 'relative',
        width: 131 * scaleFactor,
        height: 114 * scaleFactor,
    },
    card_content_text: {
        position: 'absolute',
        bottom: 8 * scaleFactor,
        width: 131 * scaleFactor,
        alignItems: 'center'
    },
    card_text: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 15,
    },
    card_image: {
        // alignItems: 'center'
    },
    card_content: {

    }

});

export default HomeCard
