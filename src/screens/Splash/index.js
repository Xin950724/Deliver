import React, { useEffect } from "react"
import { Dimensions, View, StyleSheet, ActivityIndicator, SafeAreaView } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import SplashAvatar from '../../assets/images/avatar/splash_avatar.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("LoginScreen")
        }, 2000)
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#75DDDD', '#84C7D0']}
                start={{ x: 0.5, y: 0.0 }} // These are approximations
                end={{ x: 1.0, y: 1.0 }}   // You'll need to adjust to match the 168.21 degrees
                locations={[0.0171, 0.9766]}
                style={styles.boxWithShadow}
            >
                <View style={styles.splash_avatar}>
                    <SplashAvatar width={148 * scaleFactor} height={126 * scaleFactor} />
                </View>
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            </LinearGradient>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxWithShadow: {
        // For iOS
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        shadowColor: '#0000001F',
        shadowOffset: {
            width: 20,
            height: 20,
        },
        shadowOpacity: 0.12,  // The '1F' in the color translates to opacity of around 0.12 (1F/FF)
        shadowRadius: 50,
        // For Android
        elevation: 5,
    },
    splash_avatar: {
        alignSelf: 'center',
        paddingLeft: 14 * scaleFactor,
        paddingRight: 14 * scaleFactor,
        paddingTop: 25 * scaleFactor,
        paddingBottom: 25 * scaleFactor,
        borderRadius: 27 * scaleFactor,
        backgroundColor: "rgba(255, 255, 255, 0.80)",
        backdroFilter: "blur(64.5)",
    },
    loading: {
        marginTop: 215 * scaleFactor
    }
})

export default SplashScreen