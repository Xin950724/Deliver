import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import KeyImage from '../../assets/images/user/keyhand/key.svg'

// import Dropdown from 'react-native-material-dropdown'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const KeyHandScreen = ({ route, navigation }) => {

    const missHandle = () => {
        Keyboard.dismiss()
    }
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.main_content}>
                    <View style={styles.header_view}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Key Handover and Return</Text>
                    </View>
                    <ScrollView style={styles.content_view}>
                        <TouchableOpacity style={styles.content_item} onPress={()=>navigation.navigate("InitiateRequestScreen")}>
                            <KeyImage />
                            <Text style={styles.content_item_text}>Initiate Key Handover</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.content_item} onPress={()=>navigation.navigate("SpecifyDetailScreen")}>
                            <KeyImage />
                            <Text style={styles.content_item_text}>Initiate Key Return</Text>
                        </TouchableOpacity>
                    </ScrollView>
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
    content_view: {
        marginTop: 25 * scaleFactor
    },
    content_header_text: {
        marginTop: 37 * scaleFactor,
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },

    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    content_item: {
        marginTop: 20 * scaleFactor,
        backgroundColor: 'rgba(0,168,107,0.15)',
        borderRadius: 18 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 31 * scaleFactor,
        height: 61 * scaleFactor
    },
    content_item_text: {
        color: 'rgba(0,0,0,0.80)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 24.30 * scaleFactor,
        marginLeft: 28 * scaleFactor
    }

})

export default KeyHandScreen
