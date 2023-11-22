import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import SearchImage from '../../assets/images/user/message/search.svg'
import USImage from '../../assets/images/user/language/US.svg'
import FRImage from '../../assets/images/user/language/FR.svg'

import { RadioButton } from "react-native-paper"


// import Dropdown from 'react-native-material-dropdown'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const LanguageScreen = ({ route, navigation }) => {

    const missHandle = () => {
        Keyboard.dismiss()
    }
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const [method, setMethod] = useState("US")

    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.main_content}>
                    <View style={styles.header_view}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Select Language</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.content_header}>
                            <View style={styles.search_view}>
                                <SearchImage />
                                <TextInput style={styles.search_text} placeholder="Search" placeholderTextColor="black" onChangeText={(e) => setSearchText(e)} />
                            </View>
                        </View>
                        <ScrollView style={styles.content_view}>
                            <TouchableOpacity style={styles.language_item} onPress={()=>setMethod("US")}>
                                <View style={{ flexDirection: 'row' }}>
                                    <USImage />
                                    <Text style={styles.item_text}>English</Text>
                                </View>
                                <RadioButton value={"US"}
                                    status={method === "US" ?
                                        'checked' : 'unchecked'}
                                    onPress={() => setMethod("US")}
                                    color="#007BFF"
                                    borderColor="#00A86B" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.language_item} onPress={()=>setMethod("FR")}>
                                <View style={{ flexDirection: 'row' }}>
                                    <FRImage />
                                    <Text style={styles.item_text}>French</Text>
                                </View>
                                <RadioButton value={"FR"}
                                    status={method === "FR" ?
                                        'checked' : 'unchecked'}
                                    onPress={() => setMethod("FR")}
                                    color="#007BFF"
                                    borderColor="#00A86B" />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    main_content: {
        flex: 1,
        paddingTop: 37 * scaleFactor,
        paddingHorizontal: 25 * scaleFactor,
        backgroundColor: 'white'
    },
    header_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },

    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    content: { flex: 1 },

    content_header: {
        marginTop: 39 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    search_view: {
        flexDirection: 'row',
        paddingLeft: 14 * scaleFactor,
        paddingRight: 14 * scaleFactor,
        backgroundColor: 'rgba(0, 168, 107, 0.07)',
        width: '100%',
        height: 48 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
    },
    search_text: {
        marginLeft: 16 * scaleFactor,
        height: 50 * scaleFactor,
        width: 280 * scaleFactor,
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor
    },
    content_view: {
        marginTop: 22 * scaleFactor
    },
    language_item: {
        marginTop: 18 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 65 * scaleFactor,
        alignItems: 'center',
        paddingHorizontal: 18 * scaleFactor,
        borderWidth: 1.16 * scaleFactor,
        borderStyle: 'solid',
        borderColor: 'rgba(25,53,144,0.1)',
        borderRadius: 18.6 * scaleFactor
    },
    item_text: {
        marginLeft: 15 * scaleFactor,
        color: '#121826',
        fontSize: 18.59 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
    }
})

export default LanguageScreen
