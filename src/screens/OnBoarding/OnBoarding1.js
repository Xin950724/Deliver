import React, { useEffect } from "react"
import { Dimensions, View, ScrollView, StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native"
import OnBoardingImage_1 from '../../assets/images/onboarding/onboarding_1.svg'
import SliderImage_1 from '../../assets/images/onboarding/slider_1.svg'
import Geolocation from '@react-native-community/geolocation';


const { width } = Dimensions.get('window')
const scaleFactor = width / 430



const OnBoardingScreen_1 = ({ navigation }) => {
    // // useEffect(() => {
    // //     const backAction = () => {
    // //         Alert.alert("Hold on!", "Are you sure you want to exit?", [
    // //            {
    // //                 text: "Cancel",
    // //                 onPress: () => null,
    // //                 style: "cancel"
    // //             },
    // //             { text: "YES", onPress: () => BackHandler.exitApp() }
    // //         ]);
    // //         return true;
    // //     };

    //     const backHandler = BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         backAction
    //     );

    //     return () => backHandler.remove();
    // }, [navigation]);
    const requestLocationPermission = async () => {
        try {
            const granted = await Geolocation.requestAuthorization('whenInUse');
            console.log("hello")
            // if (granted === 'granted') {
            //     // Permission granted, start tracking location
            //     Geolocation.watchPosition(
            //         (position) => {
            //             // Handle the received location data
            //             console.log(position);
            //         },
            //         (error) => {
            //             console.log(error);
            //         },
            //         {
            //             enableHighAccuracy: true,
            //             distanceFilter: 10, // Minimum distance between updates in meters
            //         }
            //     );
            // } else {
            //     // Permission denied
            // }
        } catch (error) {
            console.error('Error requesting location permission:', error);
        }
    };
    const handleLocationOn = () => {
        // requestLocationPermission();
        navigation.navigate("LocationTracking");
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <ScrollView style={{ flex: 1 }} scrollEnabled={Platform.OS === "ios" ? true : false}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.skip_button}>Skip</Text>
                        </View>
                        <OnBoardingImage_1 width={397.5 * scaleFactor} height={265 * scaleFactor} style={{ marginTop: 55 * scaleFactor }} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.headerText}>Owner can rent out their vehicles to individual in need</Text>
                        <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac magna non.</Text>
                        <SliderImage_1 width={46 * scaleFactor} height={10 * scaleFactor} style={styles.slider_image} />
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button_container} onPress={() => handleLocationOn()}>
                        <Text style={styles.button_text}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: "white"
    },
    body: {
        flex: 1,
        paddingTop: 41 * scaleFactor,
        paddingLeft: 16 * scaleFactor,
        paddingRight: 16 * scaleFactor,
    },
    headerText: {
        marginTop: 103 * scaleFactor,
        color: 'black',
        fontSize: 22 * scaleFactor,
        // fontFamily: 'Montserrat',
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 33 * scaleFactor,
        // wordWrap: 'break-word'
    },
    contentText: {
        marginTop: 20 * scaleFactor,
        color: 'rgba(0,0,0,0.50)',
        fontSize: 17,
        // fontFamily: 'Urbanist',
        fontWeight: '400',
        lineHeight: 24,
        // wordWrap: 'break-word',
        textAlign: 'center'
    },
    skip_button: {
        textAlign: 'right',
        marginRight: 4 * scaleFactor,
        color: '#00A86B',
        fontSize: 18 * scaleFactor,
        // fontFamily: 'Montserrat',
        fontWeight: '500',
        // wordWrap: 'break-word'
    },
    content: {
        alignItems: 'center',
        marginBottom: 70 * scaleFactor
    },
    slider_image: {
        marginTop: 70 * scaleFactor
    },
    button_container: {
        width: '100%',
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A86B',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderRadius: 20,
        overflow: 'hidden',
        gap: 10,
        display: 'inline-flex',
    },
    footer: {
        paddingLeft: 8.5 * scaleFactor,
        paddingRight: 8.5 * scaleFactor,
        marginBottom: 40 * scaleFactor,

    },
    button_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        // fontFamily: 'Urbanist',
        fontWeight: '700',
        // wordWrap: 'break-word'
    }
}

)

export default OnBoardingScreen_1
