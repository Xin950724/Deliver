import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"

import CalendarImage from '../../assets/images/user/category/calendar.svg'
import CalendarHideImage from '../../assets/images/user/category/calendar_hide.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const CategoryDateButton = ({ selected, value }) => {
    const [select, setSelected] = useState(false);
    useEffect(() => {
        setSelected(selected)
    }, [])
    return (
        <TouchableOpacity style={select == true ? styles.selected_button : styles.button} onPress={() => setSelected(!select)}>
            <View style={styles.calendar_image}>
                {select == true ? <CalendarImage /> : <CalendarHideImage />}
            </View>
            <Text style={select == true ? styles.selected_button_text : styles.button_text}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 26 * scaleFactor,
        paddingVertical: 16 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        borderWidth: 1 * scaleFactor,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.60)",
        marginRight: 27 * scaleFactor,
        marginTop: 16 * scaleFactor
    },
    button_text: {
        color: 'rgba(0,0,0,0.60)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    selected_button_text: {
        color: 'white',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
       
    },
    selected_button: {
        paddingHorizontal: 20 * scaleFactor,
        paddingVertical: 16 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00A86B',
        borderRadius: 18 * scaleFactor,
        justifyContent: 'center',
        marginRight: 27 * scaleFactor,
        borderStyle: "solid",
        borderColor: "transparent",
        borderWidth: 1 * scaleFactor,
        marginTop: 16 * scaleFactor
    },
    calendar_image: {
        marginRight: 20 * scaleFactor
    }

});

export default CategoryDateButton
