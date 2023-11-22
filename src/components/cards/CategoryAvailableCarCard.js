import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"

import StarImage from '../../assets/images/user/category/star.svg'
import MarkImage from '../../assets/images/user/category/mark_icon.svg'


const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const CategoryAvailableCarCard = ({ ChildComponent }) => {
    return (
        <TouchableOpacity style={{ marginBottom: 18 * scaleFactor }}>
            <View style={styles.card_view}>
                <ChildComponent width="100%"/>
                <View style={styles.card_content}>
                    <View style={styles.card_content_left}>
                        <Text style={styles.car_name}>BMW X5</Text>
                        <View style={styles.car_price_view}>
                            <Text style={styles.car_price}>$250/day</Text>
                        </View>
                    </View>
                    <View style={styles.card_content_right}>
                        <View style={styles.car_attributes}>
                            <Text style={styles.car_attribute}>5 Seater</Text>
                            <Text style={styles.car_attribute}>Automatic</Text>
                            <Text style={styles.car_attribute}>Diesell</Text>
                        </View>
                        <View style={styles.car_marks}>
                            <View style={styles.car_mark}>
                                <Text style={styles.car_review_text}>Reviews</Text>
                                <StarImage />
                            </View>
                            <TouchableOpacity style={styles.car_mark_icon}>
                                <MarkImage />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card_view: {
        padding: 8 * scaleFactor,
        paddingBottom: 15 * scaleFactor,
        backgroundColor: 'white', // background
        shadowColor: '#000', // boxShadow
        shadowOffset: { width: 0, height: 4 }, // boxShadow
        shadowOpacity: 0.1, // boxShadow
        shadowRadius: 17, // boxShadow
        elevation: 5, // for Android shadow
        borderRadius: 20, // borderRadius
        borderColor: 'rgba(0, 0, 0, 0.05)', // border
        borderWidth: 1, // border
    },
    card_content: {
        flexDirection: 'row',
        marginTop: 19 * scaleFactor,
    },
    card_content_left: {
        justifyContent: 'center'
    },
    car_name: {
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    car_price_view: {
        marginTop: 10 * scaleFactor,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 6,
        paddingBottom: 6,
        backgroundColor: '#00A86B',
        borderRadius: 10 * scaleFactor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    car_price: {
        color: 'white',
        fontSize: 13 * scaleFactor,
        fontFamily: 'DM Sans',
        fontWeight: '500'
    },
    card_content_right: {
        marginLeft: 25 * scaleFactor
    },
    car_attributes: {
        flexDirection: 'row'
    },
    car_attribute: {
        color: '#545454',
        fontSize: 14 * scaleFactor,
        fontFamily: 'DM Sans',
        fontWeight: '400',
        marginRight: 25 * scaleFactor
    },
    car_marks: {
        flexDirection: 'row',
        marginTop: 13 * scaleFactor
    },
    car_mark_icon: {
        marginLeft: 13.5 * scaleFactor,
    },
    car_review_text: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 8 * scaleFactor,
        fontFamily: 'Inter',
        fontWeight: '700',
        marginBottom: 5 * scaleFactor
    }
});

export default CategoryAvailableCarCard
