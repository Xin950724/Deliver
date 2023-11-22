import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"

import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import SearchImage from '../../assets/images/user/category/search-normal.svg'
import VectorImage from '../../assets/images/user/category/vector.svg'
import DocumentImage from '../../assets/images/user/category/document-filter-hide.svg'
import SearchResultCard from "../../components/cards/SearchResultCard"
import SearchCarCard from "../../components/cards/SearchCarCard"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const SearchResultScreen = ({ navigation }) => {

    const [searchText, setSearchText] = useState('')
    const missHandle = () => {
        Keyboard.dismiss()

    }
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.header}>
                        <View style={styles.header_view}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.navigate('HomeScreen')}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>Category</Text>
                            <TouchableOpacity style={styles.header_search_icon} onPress={() => navigation.navigate('HomeScreen')}>
                                <SearchImage />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.search_view}>
                            <VectorImage />
                            <TextInput style={styles.search_text} placeholder="Search results" placeholderTextColor="black" onChangeText={(e) => setSearchText(e)} />
                            <DocumentImage />
                        </View>
                    </View>
                    <ScrollView style={styles.content}>
                        <View style={styles.result_content}>
                            <View style={styles.result_header}>
                                <Text style={styles.result_text}>Search results</Text>
                                <Text style={styles.show_text}>Show on Map</Text>
                            </View>
                            <View style={styles.result_content}>
                                <SearchResultCard />
                                <SearchResultCard />
                            </View>
                        </View>
                        <View style={styles.car_view}>
                            <View style={styles.car_header}>
                                <Text style={styles.car_text}>Cars Found!</Text>
                            </View>
                            <View style={styles.car_content}>
                                <SearchCarCard />
                                <SearchCarCard />
                                <SearchCarCard />
                                <SearchCarCard />
                                <SearchCarCard />
                                <SearchCarCard />
                            </View>
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
    body:{
        marginTop: 32 * scaleFactor,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor
    },
    header_view: {
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
        lineHeight: 27.34 * scaleFactor,
    },
    search_text: {
        marginLeft: 8 * scaleFactor,
        height: 50 * scaleFactor,
        width: 280 * scaleFactor,
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor
    },
    search_view: {
        flexDirection: 'row',
        marginTop: 36 * scaleFactor,
        paddingLeft: 15 * scaleFactor,
        paddingRight: 15 * scaleFactor,
        width: '100%',
        borderColor: '#00A86B',
        borderWidth: 1 * scaleFactor,
        borderStyle: 'solid',
        height: 50 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 26 * scaleFactor
    },
    result_header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    result_text: {
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    show_text: {
        color: '#00A86B',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        textDecoration: 'underline',
        lineHeight: 24 * scaleFactor
    },
    car_view: {
        marginTop: 32 * scaleFactor
    },
    car_text: {
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor,
        marginBottom: 25 * scaleFactor
    }
})

export default SearchResultScreen
