import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button, ScrollView } from "react-native"
import CheckBox from '@react-native-community/checkbox';
import PencilKitView from "./PencilKitView";

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const DrawSignView = () => {
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.draw_view}>
            <Text style={styles.draw_text}>Draw Signature Here!</Text>
            <View style={styles.draw_content}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    draw_view: {
        marginTop: 46 * scaleFactor
    },
    draw_text: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        textAlign: 'center'
    },
    draw_content: {
        marginTop: 27 * scaleFactor,
        height: 400 * scaleFactor,
        borderRadius: 20,
        borderWidth: 2 * scaleFactor,
        borderStyle: "dotted",
        borderColor: "rgba(0, 0, 0, 0.15)",
        alignContent: 'center'
    },
    agree_field: {
        marginTop: 20 * scaleFactor,
        marginBottom: 32 * scaleFactor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    agree_text: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '500',

    },
    agree_bold_text: {
        color: '#00A86B',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
});

export default DrawSignView
