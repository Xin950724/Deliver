import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import MaskImage from '../../assets/images/user/home/Mask.svg'
import SmallVector from '../../assets/images/user/home/small_vector.svg'
import CarCount from '../../assets/images/user/home/car_count.svg'
import StarImage from '../../assets/images/user/home/stars.svg'
import CarModal from "../modals/CarModal"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const SearchCarCard = () => {
    return (
        <TouchableOpacity style={styles.rec_item}>
            <View style={styles.car_card}>
                <View style={styles.rec_content_left}>
                    <MaskImage />
                </View>
                <View style={styles.rec_content_right}>
                    <View style={styles.rec_content_right_header}>
                        <Text style={styles.rec_car_name}>Blue Sedan Car</Text>
                        <StarImage style={styles.star_image} />
                    </View>
                    <View style={styles.rec_content_right_location}>
                        <SmallVector />
                        <Text style={styles.location_text}>4517 Washington, Kentucky 39495</Text>
                    </View>
                    <View style={styles.rec_content_right_day}>
                        <Text style={styles.day_text}>10
                            <Text style={styles.days_text}> / days</Text>
                        </Text>
                        <TouchableOpacity style={styles.car_button}></TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    rec_item: {
        width: '100%',
        paddingHorizontal: 11 * scaleFactor,
        paddingVertical: 13 * scaleFactor,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 14,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        borderStyle: 'solid',
        marginBottom: 20 * scaleFactor
    },
    car_card: {
        flexDirection: 'row'
    },
    rec_content_right: {
        marginLeft: 20 * scaleFactor
    },
    rec_content_right_header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rec_car_name: {
        marginRight: 20 * scaleFactor,
        color: '#1E2022',
        fontSize: 13 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        letterSpacing: 1
    },
    rec_content_right_location: {
        marginTop: 13 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center'
    },
    location_text: {
        marginLeft: 8 * scaleFactor,
        color: 'rgba(0,0,0,0.60)',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400'
    },
    rec_content_right_day: {
        marginTop: 13 * scaleFactor,
        flexDirection: 'row'
    },
    day_text: {
        color: '#00A86B',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    days_text: {
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        lineHeight: 24 * scaleFactor
    },
    car_button: {
        marginLeft: 30 * scaleFactor,
        backgroundColor: '#00A86B',
        borderRadius: 10,
        width: 120 * scaleFactor,
        height: 27 * scaleFactor
    }
});

export default SearchCarCard
