import React, { useEffect, useState, useRef } from "react"
import { Dimensions, View, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import MyAvatarImage from '../../../assets/images/user/chat/Ellipse.svg'
import CallImage from '../../../assets/images/user/chat/call.svg'
import MoreImage from '../../../assets/images/user/chat/more.svg'
import SendImage from '../../../assets/images/user/chat/send.svg'
import HappyImage from '../../../assets/images/user/chat/happyemoji.svg'
import PaperImage from '../../../assets/images/user/chat/paperclip.svg'

import ReplyChatCard from "../../../components/cards/ReplyChatCard";
import ReceivedChatCard from "../../../components/cards/ReceivedChatCard";
import ChatAssetModal from "../../../components/modals/ChatAssetModal";
import KeyHandedModal from "../../../components/modals/KeyHandedModal";

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const ChatScreen = ({ navigation }) => {
    const scrollViewRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false)
    const [keyModalVisible, setKeyModalVisible] = useState(false)
    const [text, setText] = useState("")

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.header_left}></View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <ArrowLeftImage />
                        </TouchableOpacity>
                        <View style={styles.my_avatar}>
                            <MyAvatarImage />
                            <View style={styles.online}></View>
                        </View>
                        <View>
                            <Text style={styles.name}>Kathryn Murphy</Text>
                            <Text style={styles.status}>Online</Text>
                        </View>
                    </View>
                    <View style={styles.header_right}>
                        <TouchableOpacity>
                            <CallImage style={styles.call_image} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MoreImage />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView ref={scrollViewRef} style={{ flex: 1 }}>
                    <View style={styles.content}>
                        <ReceivedChatCard />
                        <ReplyChatCard />
                        <ReceivedChatCard />
                        <ReceivedChatCard />
                        <ReceivedChatCard />
                        <ReplyChatCard />
                        <ReplyChatCard />
                    </View>
                    <KeyHandedModal navigation={navigation} modalVisible={keyModalVisible} setModalVisible={setKeyModalVisible} />

                </ScrollView>
                <ChatAssetModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <KeyboardAvoidingView style={styles.footer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <View style={styles.input_view}>
                        <TouchableOpacity><PaperImage style={styles.paper_image} onPress={() => setModalVisible(true)} /></TouchableOpacity>
                        <TextInput style={styles.footer_input} onChangeText={(e) => setText(e)} placeholder="Type something..." placeholderTextColor="rgba(0,0,0,0.50)" />
                        <TouchableOpacity><HappyImage /></TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.send_button} onPress={() => setKeyModalVisible(true)}>
                        <SendImage />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
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
        paddingTop: 35 * scaleFactor,
        paddingHorizontal: 25 * scaleFactor,
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    my_avatar: {
        marginLeft: 41 * scaleFactor,
        marginRight: 14 * scaleFactor,
        position: 'relative'
    },
    name: {
        color: '#151B33',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Outfit',
        fontWeight: '500',
        lineHeight: 18.20
    },
    status: {
        color: '#A7AEC1',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Outfit',
        fontWeight: '400',
        lineHeight: 25.20
    },
    header_right: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    call_image: {
        marginRight: 20 * scaleFactor
    },
    online: {
        width: 10 * scaleFactor,
        height: 10 * scaleFactor,
        backgroundColor: '#00D261',
        borderWidth: 1.50 * scaleFactor,
        borderColor: "white",
        borderStyle: 'solid',
        borderRadius: 20 * scaleFactor,
        right: 0,
        position: "absolute"
    },
    footer_input: {
        width: 200 * scaleFactor,
        color: 'black',
        fontSize: 15 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '400',
    },
    content: {
        width: '100%'
    },
    footer: {
        width: '100%',
        marginTop: 20 * scaleFactor,
        marginBottom: 25 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input_view: {
        width: 300 * scaleFactor,
        backgroundColor: '#E2F4ED',
        borderRadius: 19 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        height: 56 * scaleFactor
    },
    send_button: {
        width: 56 * scaleFactor,
        height: 56 * scaleFactor,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A86B',
        borderRadius: 19
    },
    paper_image: {
        marginLeft: 16 * scaleFactor,
        marginRight: 16 * scaleFactor
    }
})

export default ChatScreen
