import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import EllipseImage from '../../assets/images/user/home/ellipse.svg'
import ElementImage from '../../assets/images/user/home/element.svg'
import LocationImage from '../../assets/images/user/home/location.svg'
import VecotorImage from '../../assets/images/user/home/vector.svg'
import DocumentImage from '../../assets/images/user/home/document-filter.svg'
import HomeCarImage from '../../assets/images/user/category/home_car_image.svg'

import CardImage1 from '../../assets/images/user/home/card_28'
import ArrowImage from '../../assets/images/user/home/arrow.svg'
import MapImage from '../../assets/images/user/home/map_icon.svg'

import HomeButton from '../../components/buttons/HomeButton'
import HomeCard from '../../components/cards/HomeCard'
import HomeCarCard from "../../components/cards/HomeCarCard";
import FooterMenu from "../../components/menus/FooterMenu";


const { width,height } = Dimensions.get('window')
const scaleFactor = width / 414

const HomeScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const missHandle = () => {
        // setModalVisible(false)
        Keyboard.dismiss()
    }
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    <LinearGradient
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        colors={['#1BD994', '#0F704D']}
                        style={styles.header}
                    >
                        <View style={styles.header_menu}>
                            <TouchableOpacity>
                                <ElementImage />
                            </TouchableOpacity>
                            <View style={styles.location_header}>
                                <LocationImage />
                                <Text style={styles.location_header_text}>28 rue Gontier-Patin</Text>
                            </View>
                            <EllipseImage />
                        </View>
                        <View style={styles.search_menu}>
                            <VecotorImage />
                            <TextInput style={styles.search_text} placeholder="Search here" placeholderTextColor="white" />
                            <DocumentImage />
                        </View>
                        <TouchableOpacity style={styles.map_icon}>
                            <MapImage />
                            <Text style={styles.map_text}>Map</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <ScrollView style={styles.content}>
                        <ScrollView style={styles.car_type_content} horizontal={true} >
                            <HomeButton selected={true} value="Luxury Car" />
                            <HomeButton selected={false} value="Family Car" />
                            <HomeButton selected={false} value="Comprevan" />
                            <HomeButton selected={false} value="Comprevan" />
                        </ScrollView>
                        <TouchableOpacity>
                            <HomeCarImage width='100%' />
                        </TouchableOpacity>
                        <View style={styles.category}>
                            <View style={styles.category_header}>
                                <Text style={styles.category_header_text}>Best Categories</Text>
                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                    <Text style={styles.category_header_see}>See all</Text>
                                    <ArrowImage style={{ marginLeft: 10 * scaleFactor }} />
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={styles.category_content} horizontal={true}>
                                <HomeCard navigation = {navigation} ChildComponent={CardImage1} text="SUV's"/>
                                <HomeCard ChildComponent={CardImage1} text="SUV's" navigation={navigation} />
                                <HomeCard ChildComponent={CardImage1} text="SUV's" navigation={navigation} />
                                <HomeCard ChildComponent={CardImage1} text="SUV's" navigation={navigation} />
                                <HomeCard ChildComponent={CardImage1} text="SUV's" navigation={navigation} />
                            </ScrollView>
                        </View>
                        <View style={styles.recommendations}>
                            <Text style={styles.rec_topic}>Recommendations</Text>
                            <ScrollView style={styles.recommendations_header} horizontal={true} >
                                <HomeButton selected={true} value="Pervious Searched" />
                                <HomeButton value="5 Star" />
                                <HomeButton value="Campervan" />
                            </ScrollView>
                            <View style={styles.recommendations_content}>
                                <HomeCarCard navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                                <HomeCarCard navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                                <HomeCarCard navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <FooterMenu navigation={navigation}/>
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
    header: {
        zIndex: 3,
        width: '100%',
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        borderBottomLeftRadius: 20 * scaleFactor,
        borderBottomRightRadius: 20 * scaleFactor
    },
    header_menu: {
        zIndex: 3,
        marginTop: 33 * scaleFactor,
        position: 'relative',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    location_header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    location_header_text: {
        marginLeft: 8 * scaleFactor,
        color: 'white',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Inter',
        fontWeight: '500',
    },
    search_menu: {
        marginBottom: 21 * scaleFactor,
        marginTop: 40 * scaleFactor,
        paddingLeft: 15 * scaleFactor,
        paddingRight: 15 * scaleFactor,
        width: '100%',
        borderColor: 'white',
        borderWidth: 1 * scaleFactor,
        borderStyle: 'solid',
        height: 50 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search_text: {
        marginLeft: 8 * scaleFactor,
        height: 50 * scaleFactor,
        width: 286 * scaleFactor,
        color: 'white',
        fontSize: 13 * scaleFactor,
        fontFamily: 'Mulish',
        fontWeight: '400',
        letterSpacing: 0.26,
    },
    content: {
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        zIndex: 2
    },
    car_type_content: {
        marginTop: 21 * scaleFactor,
        marginBottom: 22 * scaleFactor,
        flexDirection: 'row'
    },
    category_header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 21 * scaleFactor
    },
    category_header_text: {
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    category_header_see: {
        color: '#00A86B',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 15,
    },
    category_content: {
        // flexDirection: 'row'
    },
    recommendations: {
        marginTop: 35 * scaleFactor,
    },
    rec_topic: {
        color: '#1E2022',
        fontSize: 19 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '600',
        letterSpacing: 1
    },
    recommendations_header: {
        marginTop: 17 * scaleFactor,
    },
    recommendations_content: {
        width: "100%",
        marginTop: 21 * scaleFactor,
        flexDirection: 'column',
    },
    footer: {
        zIndex: 0,
    },
    map_icon: {
        zIndex: 3,
        position: 'absolute',
        top: height * 0.7 * scaleFactor,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25 * scaleFactor,
        left: width * scaleFactor - 66 - 25,
        width: 66 * scaleFactor,
        height: 66 * scaleFactor,
        backgroundColor: '#00A86B',
        boxShadow: '0px 15px 13px rgba(0, 0, 0, 0.04)',
        borderRadius: 9999,
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: 'solid'
    },
    map_text: {
        marginTop: 4 * scaleFactor,
        color: 'white',
        fontSize: 10 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '500'
    }

})

export default HomeScreen
