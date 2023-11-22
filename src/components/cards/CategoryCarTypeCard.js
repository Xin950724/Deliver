import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const CategoryCarTypeCard = ({ ChildComponent, text, number,selected }) => {
    return (
        <TouchableOpacity style={{ marginRight: 9 * scaleFactor }}>
            <View style={selected == true ? styles.selected_card_content : styles.card_content}>
                <ChildComponent />
                <View style={styles.card_content_text}>
                    <Text style={selected == true ? styles.selected_card_text : styles.card_text}>{text}</Text>
                    <Text style={selected == true ? styles.selected_card_number : styles.card_number}>{number}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card_content: {
        padding: 7 * scaleFactor,
        paddingLeft: 7 * scaleFactor,
        paddingRight: 7 * scaleFactor,
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 11,
        elevation: 4,
        borderRadius: 20
    },
    card_content_text: {
        marginTop: 10 * scaleFactor,
    },
    card_text: {
        color: '#1D224B',
        fontSize: 14,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    card_number: {
        marginTop: 3 * scaleFactor,
        color: 'rgba(0,0,0,0.49)',
        fontSize: 14,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        textAlign: 'center'
    },
    selected_card_content: {
        padding: 7 * scaleFactor,
        paddingLeft: 7 * scaleFactor,
        paddingRight: 7 * scaleFactor,
        alignItems: 'center',
        backgroundColor: '#00A86B',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 11,
        elevation: 4,
        borderRadius: 20
    },
    selected_card_text: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    selected_card_number: {
        marginTop: 3 * scaleFactor,
        color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        textAlign: 'center'
    },
});

export default CategoryCarTypeCard
