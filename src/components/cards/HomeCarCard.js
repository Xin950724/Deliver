import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import MaskImage from '../../assets/images/user/home/Mask.svg'
import SmallVector from '../../assets/images/user/home/small_vector.svg'
import CarCount from '../../assets/images/user/home/car_count.svg'
import StarImage from '../../assets/images/user/home/stars.svg'
import CarModal from "../modals/CarModal"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const HomeCarCard = ({ navigation,modalVisible,setModalVisible }) => {
    return (
        <TouchableOpacity style={styles.rec_item} onPress={()=>navigation.navigate('CarDetailScreen')}>
            <View style={styles.rec_content_left}>
                <MaskImage />
            </View>
            <View style={styles.rec_content_right}>
                <View style={styles.rec_content_right_header}>
                    <Text style={styles.rec_car_name}>Blue Sedan Car</Text>
                </View>
                <View style={styles.rec_content_right_location}>
                    <View style={styles.rec_location}>
                        <SmallVector />
                        <Text style={styles.rec_location_text}>United States</Text>
                    </View>
                </View>
                <View style={styles.rec_content_right_data}>
                    <View style={styles.rec_data}>
                        <Text style={styles.rec_distance}>
                            35 km's away from you
                        </Text>
                        <Text style={styles.rec_type}>
                            Automatic
                        </Text>
                        <Text style={styles.rec_state}>
                            Available
                        </Text>
                    </View>
                    <View style={styles.rec_data_image}>

                    </View>
                </View>
            </View>
            <CarModal navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />

            <View style={styles.rec_content_comment}>
                <Text style={styles.rec_car_pay}>$670 / Per day</Text>
                <StarImage style={styles.star_image} />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <CarCount style={styles.car_count_image} />
                </TouchableOpacity>
            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    rec_item: {
        wdith: '100%',
        marginBottom: 21 * scaleFactor,
        background: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.09,
        shadowRadius: 14,
        elevation: 0.5,
        flexDirection: 'row',
    },
    rec_content_right: {
        marginLeft: 10 * scaleFactor
    },
    rec_content_right_header: {
        flexDirection: 'row',
    },
    rec_car_name: {
        marginRight: 40 * scaleFactor,
        color: '#1E2022',
        fontSize: 13 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        letterSpacing: 1
    },
    rec_car_pay: {
        color: 'black',
        fontSize: 11 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '600',
        letterSpacing: 1,
        marginLeft: 4 * scaleFactor
    },
    rec_location: {
        flexDirection: 'row',
        marginTop: 2 * scaleFactor
    },
    rec_location_text: {
        marginLeft: 2 * scaleFactor,
        color: 'rgba(0,0,0,0.39)',
        fontSize: 10,
        fontFamily: 'Poppins',
        fontWeight: '600',
        letterSpacing: 1
    },
    rec_content_right_data: {
        flexDirection: 'row'
    },
    rec_distance: {
        marginTop: 2 * scaleFactor,
        color: 'rgba(0,0,0,0.80)',
        fontSize: 11 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '400'
    },
    star_image: {
        marginLeft: 5 * scaleFactor,
        marginTop: 6 * scaleFactor
    },
    car_count_image: {
        marginLeft: -28 * scaleFactor,
        marginTop: 26 * scaleFactor
    },
    rec_type: {
        color: 'rgba(0,0,0,0.59)',
        fontSize: 11 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '500',
        letterSpacing: 1
    },
    rec_state: {
        color: '#00A86B',
        fontSize: 11 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '700',
        letterSpacing: 1
    },

});

export default HomeCarCard
