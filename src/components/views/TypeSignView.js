import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button, ScrollView } from "react-native"
import { TextInput } from "react-native-paper";

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const TypeSignView = () => {
    
    return (
        <View style={styles.draw_view}>
            <Text style={styles.draw_text}>Type Signature Here!</Text>
            <View style={styles.draw_content}>
                <View style={styles.input_view}>
                    <TextInput style={styles.input_field}></TextInput>
                </View>
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
    },
    input_view: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 56 * scaleFactor,
        paddingHorizontal: 25 * scaleFactor,
        borderRadius: 19 * scaleFactor,
        backgroundColor: '#E2F4ED',
        borderWidth: 1 * scaleFactor,
        borderStyle: 'solid'
    },
    input_field: {
        width: '100%',
        color: 'black',
        fontSize: 15,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        lineHeight: 22.79,
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },
    
});

export default TypeSignView
