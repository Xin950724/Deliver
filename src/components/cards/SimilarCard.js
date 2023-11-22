import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"

import CarImage from '../../assets/images/user/category/similar_car.svg'
import VecotrImage from '../../assets/images/user/category/similar_vector.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const SimilarCard = () => {
    return (
        <TouchableOpacity style={styles.similar_card}>
            <CarImage />
            <View style={styles.similar_card_content}>
                <View style={styles.car_header}>
                    <Text style={styles.car_name}>Seden</Text>
                    <Text style={styles.car_type}>BMW</Text>
                </View>
                <View style={styles.car_location}>
                    <VecotrImage style={{marginRight: 4*scaleFactor}}/>
                    <Text style={styles.car_type}>United States</Text>
                </View>
                <View style={styles.car_header}>
                    <Text style={styles.car_type}>3 Series</Text>
                    <Text style={styles.car_type}>4 Seats</Text>
                </View>
                <View style={styles.car_header}>
                    <Text style={styles.car_type}>Petrol</Text>
                    <Text style={styles.car_type}>GPS</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    similar_card: {
        paddingTop: 7 * scaleFactor,
        paddingHorizontal: 11 * scaleFactor,
        paddingTop: 12 * scaleFactor,
        marginRight: 10 * scaleFactor,
        backgroundColor: 'white',
        shadowColor: "#000", // rgba(0, 0, 0, 0.04)
        shadowOffset: {
            width: 0,
            height: 20
        },
        shadowOpacity: 0.04,
        shadowRadius: 6.5, // Adjust to achieve the desired blur
        elevation: 8, // For Android shadow effect
        borderRadius: 14
    },
    similar_card_content: {
        marginTop: 6 * scaleFactor,
        paddingHorizontal: 9 * scaleFactor
    },
    car_header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    car_name: {
        color: 'black',
        fontSize: 13,
        fontFamily: 'Poppins',
        fontWeight: '500',
        letterSpacing: 1
    },
    car_type: {
        color: 'rgba(0,0,0,0.54)',
        fontSize: 11,
        fontFamily: 'Poppins',
        fontWeight: '400',
        letterSpacing: 1
    },
    car_location: {
        flexDirection: 'row',
        alignItems : 'center'
    }
});

export default SimilarCard
