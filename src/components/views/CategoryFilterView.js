import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button, ScrollView } from "react-native"
import CategoryFilterButton from "../buttons/CategoryFilterButton"
import CategoryDateButton from "../buttons/CategoryDateButton"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const CategoryFilterView = () => {
    return (
        <ScrollView style={styles.filter_view}>
            <View style={styles.filter_view_header}>
                <Text style={styles.filter_header_sort}>Sort By</Text>
                <TouchableOpacity>
                    <Text style={styles.filter_header_results}>All results</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.filter_view_content}>
                <View style={styles.car_type}>
                    <View >
                        <Text style={styles.car_type_header}>Car Type</Text>
                    </View>
                    <View style={styles.car_type_content}>
                        <CategoryFilterButton selected={true} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                    </View>
                </View>
                <View style={styles.distance}>
                    <View >
                        <Text style={styles.car_type_header}>Distance (away from)</Text>
                    </View>
                    <View style={styles.car_type_content}>
                        <CategoryFilterButton selected={true} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                    </View>
                </View>
                <View style={styles.distance}>
                    <View >
                        <Text style={styles.car_type_header}>Features</Text>
                    </View>
                    <View style={styles.car_type_content}>
                        <CategoryFilterButton selected={true} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                    </View>
                </View>
                <View style={styles.distance}>
                    <View >
                        <Text style={styles.car_type_header}>Gearbox Type</Text>
                    </View>
                    <View style={styles.car_type_content}>
                        <CategoryFilterButton selected={true} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                    </View>
                </View>
                <View style={styles.date_view}>
                    <CategoryDateButton selected={true} value="Start Date" />
                    <CategoryDateButton selected={false} value="End Date" />
                </View>
                <View style={styles.distance}>
                    <View >
                        <Text style={styles.car_type_header}>Distance</Text>
                    </View>
                    <View style={styles.car_type_content}>
                        <CategoryFilterButton selected={true} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                    </View>
                </View>
                <View style={styles.distance}>
                    <View >
                        <Text style={styles.car_type_header}>Price Range</Text>
                    </View>
                    <View style={styles.car_type_content}>
                        <CategoryFilterButton selected={true} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                    </View>
                </View>
                <View style={styles.distance}>
                    <View >
                        <Text style={styles.car_type_header}>Gelocation</Text>
                    </View>
                    <View style={styles.car_type_content}>
                        <CategoryFilterButton selected={true} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                        <CategoryFilterButton selected={false} value="Utility" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    filter_view: {
        borderWidth: 0,
        borderTopWidth: 1 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.10)',
        borderStyle: 'solid'
    },
    filter_view_header: {
        marginTop: 16 * scaleFactor,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    filter_header_sort: {
        color: 'rgba(0,0,0,0.70)',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24
    },
    filter_header_results: {
        color: '#00A86B',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    car_type: {
        marginTop: 28 * scaleFactor
    },
    car_type_header: {
        color: 'rgba(0,0,0,0.90)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    car_type_content: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    distance: {
        marginTop: 17 * scaleFactor
    },
    date_view: {
        flexDirection: 'row'
    }
});

export default CategoryFilterView
