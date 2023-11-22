import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"

import MoreImage from '../../assets/images/user/category/more.svg'
const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const CategorySearchItem = ({text}) => {
    return (
        <TouchableOpacity style={styles.search_item}>
            <Text style={styles.search_item_text}>{text}</Text>
            <TouchableOpacity>
                <MoreImage />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    search_item: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 16 * scaleFactor
    },
    search_item_text: {
        color: 'rgba(0,0,0,0.50)',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 24
    }
});

export default CategorySearchItem
