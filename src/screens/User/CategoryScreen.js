import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"

import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import SearchImage from '../../assets/images/user/category/search-normal.svg'
import VectorImage from '../../assets/images/user/category/vector.svg'
import DocumentImage from '../../assets/images/user/category/document-filter.svg'
import DocumentHideImage from '../../assets/images/user/category/document-filter-hide.svg'

import TypeImage from '../../assets/images/user/category/Rectangle.svg'
import PlaceImage from '../../assets/images/user/category/Placeholder.svg'


import CategoryCarTypeCard from '../../components/cards/CategoryCarTypeCard'
import CategoryAvailableCarCard from "../../components/cards/CategoryAvailableCarCard"
import CategorySearchView from "../../components/views/CategorySearchView"
import CategoryFilterView from "../../components/views/CategoryFilterView"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const CategoryScreen = ({ navigation }) => {

    const [searchText, setSearchText] = useState('')
    const [filter, setFilter] = useState(false)

    const missHandle = () => {
        Keyboard.dismiss()

    }
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.header}>
                        <View style={styles.header_view}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>Category</Text>
                            <TouchableOpacity style={styles.header_search_icon} onPress={() => navigation.navigate('HomeScreen')}>
                                <SearchImage />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.search_view}>
                            <VectorImage />
                            <TextInput style={styles.search_text} placeholder="" placeholderTextColor="white" onChangeText={(e) => setSearchText(e)} />
                            <TouchableOpacity onPress={() => setFilter(!filter)}>
                                {filter == true ? <DocumentImage /> : <DocumentHideImage />}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={styles.content}>
                        {searchText == "" ? (
                            <View style={styles.main_content}>
                                <View style={styles.car_type}>
                                    <Text style={styles.car_type_text}>Car Type</Text>
                                    <ScrollView style={styles.card_type_items} horizontal={true}>
                                        <CategoryCarTypeCard ChildComponent={TypeImage} text="Vokswagen" number="8" selected={true} />
                                        <CategoryCarTypeCard ChildComponent={TypeImage} text="Vokswagen" number="8" selected={false} />
                                        <CategoryCarTypeCard ChildComponent={TypeImage} text="Vokswagen" number="8" selected={false} />
                                        <CategoryCarTypeCard ChildComponent={TypeImage} text="Vokswagen" number="8" selected={false} />
                                    </ScrollView>
                                </View>
                                <View style={styles.available_cars}>
                                    <Text style={styles.available_text}>BMW Available Cars</Text>
                                    <View style={styles.available_cars_view}>
                                        <CategoryAvailableCarCard ChildComponent={PlaceImage} />
                                        <CategoryAvailableCarCard ChildComponent={PlaceImage} />
                                        <CategoryAvailableCarCard ChildComponent={PlaceImage} />
                                        <CategoryAvailableCarCard ChildComponent={PlaceImage} />
                                    </View>
                                </View>
                            </View>
                        ) : (
                            filter == false ? <CategorySearchView /> : <CategoryFilterView />
                        )}
                    </ScrollView>
                    {filter == true ? <View style={styles.footer}>
                        <TouchableOpacity style={styles.cancel_button}>
                            <Text style={styles.cancel_text}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.apply_button} onPress={()=>navigation.navigate("SearchResultScreen")}>
                            <Text style={styles.apply_text}>Apply</Text>
                        </TouchableOpacity>
                    </View> : (<></>)}
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
        flex: 1,
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
        lineHeight: 27.34,
    },
    search_text: {
        marginLeft: 8 * scaleFactor,
        width: 280 * scaleFactor,
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
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
    car_type_text: {
        color: 'rgba(0,0,0,0.90)',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24,
        marginBottom: 10 * scaleFactor
    },
    card_type_items: {
        flexDirection: 'row',
    },

    available_text: {
        marginTop: 27 * scaleFactor,
        color: 'rgba(0,0,0,0.90)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24
    },
    available_cars_view: {
        marginTop: 18 * scaleFactor
    },
    footer: {
        marginBottom: 56 * scaleFactor,
        marginTop: 43 * scaleFactor,
        flexDirection: 'row'
    },
    cancel_button: {
        backgroundColor: 'rgba(217, 217, 217, 0.43)',
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100 * scaleFactor,
        height: 48 * scaleFactor
    },
    cancel_text: {
        color: '#E93535',
        fontSize: 14 * scaleFactor,
        fontFamily: 'SF Pro Text',
        fontWeight: '700'
    },
    apply_button: {
        backgroundColor: '#00A86B',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 260 * scaleFactor,
        height: 48 * scaleFactor,
        marginLeft: 8 * scaleFactor
    },
    apply_text: {
        color: 'white',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '700'
    }
})

export default CategoryScreen
