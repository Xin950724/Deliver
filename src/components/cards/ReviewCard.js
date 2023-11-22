import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import ReviewImage from '../../assets/images/user/category/review_photo.svg'
import StarImage from '../../assets/images/user/category/one_star.svg'
import LikeImage from '../../assets/images/user/category/like.svg'
import DisLikeImage from '../../assets/images/user/category/dislike.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const ReviewCard = () => {
    return (
        <TouchableOpacity style={styles.review_item}>
            <View style={styles.review_header}>
                <ReviewImage style={styles.review_image} />
                <View style={styles.review_profile}>
                    <Text style={styles.review_header_text}>Guy Hawkins</Text>
                    <View style={styles.review_date}>
                        <StarImage width={10 * scaleFactor} height={10 * scaleFactor} style={styles.star_image} />
                        <StarImage width={10 * scaleFactor} height={10 * scaleFactor} style={styles.star_image} />
                        <StarImage width={10 * scaleFactor} height={10 * scaleFactor} style={styles.star_image} />
                        <StarImage width={10 * scaleFactor} height={10 * scaleFactor} style={styles.star_image} />
                        <StarImage width={10 * scaleFactor} height={10 * scaleFactor} style={styles.star_image} />
                        <Text style={styles.review_date_text}>21st September, 2023</Text>
                    </View>
                </View>
            </View>
            <View >
                <Text style={styles.review_content}>
                    Aliqua id fugiat nostrud irure ex duis
                    ea quis id quis ad et. Sunt qui esse pariatur duis
                    deserunt mollit dolore cillum minim tempor enim. Elit
                    aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
                    deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                </Text>
            </View>
            <View style={styles.review_footer}>
                <TouchableOpacity>
                    <LikeImage style={styles.like_image} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <DisLikeImage />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    review_item: {
        width: 314 * scaleFactor,
        marginRight: 27 * scaleFactor,
        paddingTop: 11 * scaleFactor,
        paddingRight: 14 * scaleFactor,
        paddingLeft: 11 * scaleFactor,
        paddingBottom: 17 * scaleFactor,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.19)',
        borderWidth: 1 * scaleFactor
    },
    review_header: {
        flexDirection: 'row'
    },
    review_image: {
        marginTop: 3.5 * scaleFactor,
        marginRight: 19 * scaleFactor
    },
    review_header_text: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 20
    },
    review_date: {
        flexDirection: 'row',
        marginTop: 5 * scaleFactor,
        alignItems: 'center'
    },
    review_date_text: {
        marginLeft: 5 * scaleFactor,
        color: 'rgba(0,0,0,0.64)',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '300'
    },
    star_image: {
        marginRight: 3 * scaleFactor
    },
    review_content: {
        marginTop: 12 * scaleFactor,
        color: 'black',
        fontSize: 11,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        lineHeight: 20
    },
    review_footer: {
        marginTop: 5 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    like_image: {
        marginRight: 20 * scaleFactor
    }
});

export default ReviewCard
