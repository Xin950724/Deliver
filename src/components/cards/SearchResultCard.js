import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"

import SearchAvatar from '../../assets/images/user/category/car.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const SearchResultCard = () => {
    return (
        <TouchableOpacity style={styles.search_card}>
            <View style={styles.search_left}>
                <SearchAvatar />
            </View>
            <View style={styles.search_right}>
                <View style={styles.search_right_top}>
                    <Text style={styles.search_topic}>Contrary to popular belief</Text>
                    <Text style={styles.distance}>12km</Text>
                </View>
                <View style={styles.search_right_bottom}>
                    <Text style={styles.state}>Car is available now.</Text>
                    <Text style={styles.price}>25$ <Text style={styles.hour}>/hour</Text></Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    search_card: {
        width: '100%',
        paddingTop: 27 * scaleFactor,
        paddingBottom: 20 * scaleFactor,
        flexDirection: 'row',
        borderWidth: 0,
        borderBottomWidth: 1 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.10)',
        borderStyle: "solid"
    },
    search_left: {
        padding: 12 * scaleFactor,
        backgroundColor: '#E3E3E3',
        borderRadius: 40,
        marginRight: 14 * scaleFactor
    },
    search_topic: {
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    distance: {
        marginLeft: 50 * scaleFactor,
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    search_right_top: {
        flexDirection: 'row',
    },
    search_right_bottom: {
        flexDirection: 'row',
    },
    state: {
        color: 'rgba(0,0,0,0.50)',
        fontSize: 15 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        lineHeight: 24
    },
    price: {
        marginLeft: 85 * scaleFactor,
        color: '#00A86B',
        fontSize: 15 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor,
    },
    hour: {
        color: 'rgba(0,0,0,0.70)',
        fontSize: 15 * scaleFactor,
        fontFamily: 'Montserrat'
    }
});

export default SearchResultCard
