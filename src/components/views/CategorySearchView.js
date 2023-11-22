import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import CategorySearchItem from "../cards/CatergorySearchItem"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const CategorySearchView = () => {
    return (
        <View style={styles.search_view}>
            <View style={styles.search_view_header}>
                <Text style={styles.search_header_recent}>Recent</Text>
                <Text style={styles.search_header_see}>See All</Text>
            </View>
            <View style={styles.search_view_content}>
                <CategorySearchItem text="BMW S Series" />
                <CategorySearchItem text="Contaray to popular belief" />
                <CategorySearchItem text="Contaray to popular belief" />
                <CategorySearchItem text="Contaray to popular belief" />
                <CategorySearchItem text="Contaray to popular belief" />
                <CategorySearchItem text="Contaray to popular belief" />
                <CategorySearchItem text="Contaray to popular belief" />
                <CategorySearchItem text="Contaray to popular belief" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search_view: {
        borderWidth: 0,
        borderTopWidth: 1 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.10)',
        borderStyle: 'solid'
    },
    search_view_header: {
        marginTop: 26 * scaleFactor,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    search_header_recent: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24
    },
    search_header_see: {
        color: '#00A86B',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        lineHeight: 24
    },
    
});

export default CategorySearchView
