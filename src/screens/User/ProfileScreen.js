import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../assets/images/auth/register/arrow-left.svg'
import SettingImage from '../../assets/images/user/profile/setting.svg'
import AvatarImage from '../../assets/images/user/profile/avatar.svg'
import EditImage from '../../assets/images/user/profile/edit.svg'
import UserImage from '../../assets/images/user/profile/user.svg'
import BookImage from '../../assets/images/user/profile/document.svg'
import LicenseImage from '../../assets/images/user/profile/cards.svg'
import VerifyImage from '../../assets/images/user/profile/verify.svg'
import AddImage from '../../assets/images/user/profile/add.svg'
import PaymentImage from '../../assets/images/user/profile/card.svg'
import KeyImage from '../../assets/images/user/profile/key.svg'

import FooterMenu from "../../components/menus/FooterMenu"
import ProfileCard from "../../components/cards/ProfileCard"
import ProfileLogoutCard from "../../components/cards/ProfileLogoutCard"
import ProfileSettingModal from "../../components/modals/ProfileSettingModal"


const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const ProfileScreen = ({ route, navigation }) => {
    const [modalVisible,setModalVisible] = useState(false)
    const missHandle = () => {
        Keyboard.dismiss()
        setModalVisible(false)
    }
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.main_content}>
                    <View style={styles.header_view}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Profile </Text>
                        <TouchableOpacity onPress={()=>setModalVisible(true)}><SettingImage /></TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.content_header}>
                            <View style={styles.avatar_view}>
                                <AvatarImage />
                                <TouchableOpacity style={styles.edit_image}><EditImage /></TouchableOpacity>
                            </View>
                            <Text style={styles.name_text}>Shakeel Ahmad</Text>
                            <Text style={styles.email_text}>shykiahmad@gmail.com</Text>
                        </View>
                        <ScrollView style={styles.content_view}>
                            <ProfileCard navigation = {navigation} Image={UserImage} text="Personal details" url="EditProfileScreen"/>
                            <ProfileCard navigation = {navigation} Image={BookImage} text="Booking History" url = "AllBookingScreen"/>
                            <ProfileCard navigation = {navigation} Image={LicenseImage} text="License Details" url="LicenseVerifyScreen"/>
                            <ProfileCard navigation = {navigation} Image={VerifyImage} text="Verify Profile" url="VerifyProfileScreen"/>
                            <ProfileCard navigation = {navigation} Image={AddImage} text="Add a Car" url="AddVehicleScreen"/>
                            <ProfileCard navigation = {navigation} Image={PaymentImage} text="Payment Methods" url="SelectPaymentMethodScreen"/>
                            <ProfileCard navigation = {navigation} Image={KeyImage} text="Key Handover and Return" url="KeyHandScreen"/>
                            <ProfileLogoutCard />
                            <ProfileSettingModal navigation = {navigation} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.footer}>
                    <FooterMenu navigation={navigation} />
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
        justifyContent: 'space-between',
        width: '100%',
    },
    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34 * scaleFactor

    },
    content: { flex: 1 },
    content_header: {
        marginTop: 32 * scaleFactor,
        alignItems: 'center'
    },
    avatar_view: {
        position: 'relative'
    },
    edit_image: {
        position: 'absolute',
        bottom: 7,
        right: 0,
    },
    name_text: {
        marginTop: 16 * scaleFactor,
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34 * scaleFactor
    },
    email_text: {
        color: 'rgba(0,0,0,0.60)',
        fontSize: 13 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        lineHeight: 19.75 * scaleFactor
    },
    content_view: {
        marginTop: 12 * scaleFactor,
        marginBottom: 20 * scaleFactor
    }
})

export default ProfileScreen
