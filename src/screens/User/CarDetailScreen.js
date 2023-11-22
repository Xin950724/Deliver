import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"

import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import CarImage from '../../assets/images/user/category/carimage.svg'
import NearImage from '../../assets/images/user/category/near_me.svg'
import CarDetailLocation from '../../assets/images/user/category/car_detail_location.svg'
import OwnerPhoto from '../../assets/images/user/category/owner_photo.svg'
import ArrowRightImage from '../../assets/images/user/category/arrow_right.svg'
import MapImage from '../../assets/images/user/category/category_map.svg'
import StarImage from '../../assets/images/user/category/one_star.svg'

import CategoryFilterButton from "../../components/buttons/CategoryFilterButton"
import ReviewCard from "../../components/cards/ReviewCard"
import SimilarCard from "../../components/cards/SimilarCard"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const CarDetailScreen = ({ navigation }) => {
    const missHandle = () => {
        Keyboard.dismiss()
    }
    return (

        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.heder}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Car Details</Text>
                    </View>
                    <ScrollView style={styles.content}>
                        <View style={styles.content_header}>
                            <CarImage width="100%"/>
                            <View style={styles.car_topic}>
                                <Text style={styles.car_topic_text}>The car <Text style={{ fontWeight: '700' }}>BMW X5</Text></Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <NearImage />
                                    <Text style={styles.car_speed}>4 KMs</Text>
                                </View>
                            </View>
                            <View style={styles.car_location}>
                                <CarDetailLocation />
                                <Text style={styles.car_location_text}>1901 Thornridge Cir. Shiloh, Hawaii 81063</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.content_detail}>
                            <Text style={styles.detail_text}>Detail</Text>
                            <View style={styles.car_type}>
                                <Text style={styles.car_type_text}>Car Type</Text>
                                <Text style={styles.car_type_text}>Sedan</Text>
                            </View>
                            <View style={styles.car_type}>
                                <Text style={styles.car_type_text}>Distance</Text>
                                <Text style={styles.car_type_text}>4 KMs</Text>
                            </View>
                            <View style={styles.car_type}>
                                <Text style={styles.car_type_text}>Fuel Type</Text>
                                <Text style={styles.car_type_text}>Gasoline</Text>
                            </View>
                            <View style={styles.car_type}>
                                <Text style={styles.car_type_text}>Gear-box Type</Text>
                                <Text style={styles.car_type_text}>Automatic</Text>
                            </View>
                            <View style={styles.car_type}>
                                <Text style={styles.car_type_text}>Date AVailability</Text>
                                <Text style={styles.car_type_text}>Instant</Text>
                            </View>
                            <View style={styles.car_price}>
                                <Text style={styles.car_type_text}>Price Range</Text>
                                <Text style={styles.car_type_text}>$20 / hr</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.content_feature}>
                            <Text style={styles.feature_text}>Features</Text>
                            <View style={styles.feature_view}>
                                <CategoryFilterButton selected={true} value="Air conditioning" />
                                <CategoryFilterButton selected={false} value="GPS" />
                                <CategoryFilterButton selected={false} value="Bluetooth" />
                                <CategoryFilterButton selected={false} value="cruise control" />
                                <CategoryFilterButton selected={false} value="sunroof" />
                                <CategoryFilterButton selected={false} value="body seat" />
                                <CategoryFilterButton selected={false} value="Air conditioning" />
                            </View>
                        </View>
                        <View style={styles.content_feature}>
                            <Text style={styles.description_header}>Description</Text>
                            <Text style={styles.description_text}>
                                Nulla Lorem mollit cupidatat irure.
                                magna nulla duis ullamco cillum dolor.
                                Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
                                Voluptate exercitation incididunt aliquip deserunt reprehenderit  <Text style={{ color: 'black' }}>Read more...</Text>
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.owner_profile}>
                            <View style={styles.owner_photo}>
                                <OwnerPhoto width="100%"/>
                            </View>
                            <View style={styles.owner_content}>
                                <Text style={styles.owner_name}>Jenny Wilson</Text>
                                <Text style={styles.user_role}>Car Owner</Text>
                                <Text style={styles.see_profile}>SEE PROFILE</Text>
                            </View>
                            <TouchableOpacity style={styles.arrow_right}>
                                <ArrowRightImage />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <View style={styles.content_post}>
                            <Text style={styles.post_header}>Posted at</Text>
                            <View style={styles.post_content}>
                                <MapImage width="100%"/>
                                <View style={styles.post_available}>
                                    <View style={styles.post_available_left}>
                                        <Text style={styles.post_available_state}>Available</Text>
                                        <Text style={styles.post_available_price}>$250 / day</Text>
                                    </View>
                                    <View style={styles.post_available_right}>
                                        <TouchableOpacity style={styles.book_button} onPress={() => navigation.navigate("BookingDetailScreen")}>
                                            <Text style={styles.book_button_text}>Book now</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.modify_text}>Modify Dates</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.content_review}>
                            <View style={styles.review_header}>
                                <Text style={styles.review_header_text}>Reviews <Text styl={styles.review_header_count}>(269)</Text></Text>
                                <View style={styles.review_star}>
                                    <StarImage style={styles.star_image} />
                                    <StarImage style={styles.star_image} />
                                    <StarImage style={styles.star_image} />
                                    <StarImage style={styles.star_image} />
                                    <StarImage style={styles.star_image} />
                                </View>
                            </View>
                            <ScrollView style={styles.review_content} horizontal={true}>
                                <ReviewCard />
                                <ReviewCard />
                            </ScrollView>
                        </View>
                        <View style={styles.content_review}>
                            <Text style={styles.review_header_text}>Similar Cars Available</Text>
                            <ScrollView style={styles.similar_content} horizontal={true}>
                                <SimilarCard />
                                <SimilarCard />
                                <SimilarCard />
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    body: {
        flex: 1,
        marginTop: 32 * scaleFactor,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor
    },
    heder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative'
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },
    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34

    },
    header_search_icon: {
        position: 'absolute',
        right: 0
    },
    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34,
    },
    content_header: {
        marginTop: 27 * scaleFactor
    },
    car_topic: {
        marginTop: 27 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    car_topic_text: {
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400'
    },
    car_speed: {
        color: '#5E5E5E',
        fontSize: 14 * scaleFactor,
        fontFamily: 'DM Sans',
        fontWeight: '500'
    },
    car_location: {
        marginTop: 6 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center'
    },
    car_location_text: {
        marginLeft: 10 * scaleFactor,
        color: 'rgba(0,0,0,0.64)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '300',
    },
    car_type: {
        flexDirection: 'row',
        paddingTop: 16 * scaleFactor,
        paddingBottom: 8 * scaleFactor,
        justifyContent: 'space-between',
        borderColor: 'rgba(0, 0, 0, 0.13)',
        borderBottomWidth: 1 * scaleFactor,
        borderWidth: 0,
        borderStyle: 'solid'
    },
    car_price: {
        flexDirection: 'row',
        paddingTop: 16 * scaleFactor,
        paddingBottom: 8 * scaleFactor,
        justifyContent: 'space-between',
    },
    car_type_text: {
        color: 'rgba(0,0,0,0.79)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '400'
    },
    content_detail: {
        marginTop: 27 * scaleFactor
    },
    detail_text: {
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    feature_text: {
        marginTop: 8 * scaleFactor,
        color: 'rgba(0,0,0,0.90)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    feature_view: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    description_header: {
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        marginTop: 17 * scaleFactor,
        marginBottom: 13 * scaleFactor
    },
    description_text: {
        color: 'rgba(0,0,0,0.64)',
        fontSize: 13 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '300',
        lineHeight: 24 * scaleFactor
    },
    owner_profile: {
        paddingTop: 17 * scaleFactor,
        paddingBottom: 9 * scaleFactor,
        paddingLeft: 14 * scaleFactor,
        backgroundColor: 'white',
        shadowColor: "#263238", // rgba(38, 50, 56, 0.17)
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.17,
        shadowRadius: 10, // You can adjust this as needed to achieve the desired blur
        elevation: 5, // This is for Android to simulate shadow
        borderRadius: 10,
        marginTop: 18 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
    },
    owner_content: {
        marginLeft: 11 * scaleFactor
    },
    owner_name: {
        color: 'black',
        fontSize: 17 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 20 * scaleFactor
    },
    user_role: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500'
    },
    see_profile: {
        color: '#00A86B',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Monterrat',
        fontWeight: '700',
        lineHeight: 20 * scaleFactor
    },
    arrow_right: {
        marginLeft: 120 * scaleFactor
    },
    content_post: {
        marginTop: 14 * scaleFactor,
    },
    post_header: {
        marginBottom: 15 * scaleFactor,
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    post_available: {
        marginTop: 19 * scaleFactor,
        flexDirection: 'row'
    },
    post_available_state: {
        color: '#1E2022',
        fontSize: 17 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        letterSpacing: 1
    },
    post_available_price: {
        marginTop: 7 * scaleFactor,
        color: '#77838F',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        letterSpacing: 1
    },
    post_available_left: {
        marginRight: 76 * scaleFactor
    },
    post_available_right: {
        alignItems: 'center'
    },
    book_button: {
        paddingHorizontal: 60 * scaleFactor,
        paddingVertical: 18 * scaleFactor,
        backgroundColor: '#00A86B',
        shadowColor: "#000", // rgba(0, 0, 0, 0.02)
        shadowOffset: {
            width: 20,
            height: 20
        },
        shadowOpacity: 0.02,
        shadowRadius: 25, // You can adjust this as needed to achieve the desired blur
        elevation: 10, // This is for Android to simulate shadow
        borderRadius: 7
    },
    book_button_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    modify_text: {
        marginTop: 14 * scaleFactor,
        color: '#00A86B',
        fontSize: 15 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    content_review: {
        marginTop: 35 * scaleFactor,
    },
    review_header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    review_header_text: {
        color: 'black',
        fontSize: 17 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        lineHeight: 20 * scaleFactor,
        marginRight: 8 * scaleFactor
    },
    review_header_count: {
        color: 'black',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 20 * scaleFactor, 
    },
    review_star: {
        flexDirection: 'row',
        marginLeft: 130 * scaleFactor
    },
    star_image: {
        marginRight: 5 * scaleFactor
    },
    review_content: {
        marginTop: 32 * scaleFactor,
        flexDirection: 'row'
    },
    similar_content: {
        marginTop: 21 * scaleFactor,
        flexDirection: 'row',
        marginBottom: 30 * scaleFactor
    }
})

export default CarDetailScreen
