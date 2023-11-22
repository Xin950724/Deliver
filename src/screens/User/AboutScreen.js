import React, { useEffect, useState } from "react"
import {
    Dimensions, View, StyleSheet, TouchableOpacity, SafeAreaView, Text, TextInput, TouchableWithoutFeedback,
    Keyboard, ScrollView
} from "react-native"
import SplashAvatar from '../../assets/images/avatar/splash_avatar.svg'
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'



const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const AboutScreen = ({ navigation }) => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        // Keyboard will show event
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );

        // Keyboard will hide event
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ flex: 1 }}>
                    <View style={styles.header_view}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>About</Text>
                    </View>
                    {keyboardVisible == false ? (
                        <View style={styles.header}>
                            <View style={styles.splash_avatar}>
                                <SplashAvatar width={108 * scaleFactor} height={92 * scaleFactor} />
                            </View>
                        </View>) : null}
                    <ScrollView style={{ flex: 1 }}>
                        <TouchableOpacity style={styles.content}>
                            <View style={styles.over_view}>
                                <Text style={styles.over_header_text}>Overview</Text>
                                <Text style={styles.over_content_text}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor.</Text>
                            </View>
                            <View style={styles.over_view}>
                                <Text style={styles.over_header_text}>Mission</Text>
                                <Text style={styles.over_content_text}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical.</Text>
                            </View>
                            <View style={styles.over_view}>
                                <Text style={styles.over_header_text}>Background</Text>
                                <Text style={styles.over_content_text}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                </View>
            </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },
    body:{
        flex: 1,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        paddingTop: 30 * scaleFactor,
        marginBottom: 30 * scaleFactor
    },
    header_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
        marginBottom: 24 * scaleFactor
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },
    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34

    },
    header: {
        alignItems: 'center',
    },
    content: {
        marginTop: 31 * scaleFactor
    },
    over_header_text: {
        color: '#00A86B',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.50
    },
    over_content_text: {
        color: 'rgba(0,0,0,0.60)',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        lineHeight: 27.50,
        marginTop: 10 * scaleFactor
    },
    over_view: {
        marginTop: 10 * scaleFactor
    }
})

export default AboutScreen
