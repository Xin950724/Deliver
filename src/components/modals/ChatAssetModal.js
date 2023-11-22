import React, { useEffect, useState } from "react"
import { Dimensions, Modal, View, StyleSheet, TouchableOpacity, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback } from "react-native"
import ImageSVG from '../../assets/images/user/chat/image.svg'
import DocumentSVG from '../../assets/images/user/chat/document.svg'
import KeySVG from '../../assets/images/user/chat/key.svg'



const { width,height } = Dimensions.get('window')
const scaleFactor = width / 414

const ChatAssetModal = ({ modalVisible, setModalVisible }) => {
    const [modalType, setModalType] = useState("asset");
    const modalHandler = () => {
        setModalVisible(false);
        setModalType("asset");
    }
    return (
        <TouchableWithoutFeedback style={styles.centeredView} >
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                }}>
                <TouchableOpacity style={styles.centerdModalView} onPress={() => modalHandler()}>
                    <View style={styles.modalView}>
                        {modalType == "asset" ? (
                            <View style={{marginTop: 20 * scaleFactor}}>
                                <TouchableOpacity style={styles.asset_item}>
                                    <ImageSVG />
                                    <Text style={styles.item_text}>Picture & video</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.asset_item}>
                                    <DocumentSVG />
                                    <Text style={styles.item_text}>Document</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.asset_last_item} onPress={() => setModalType("key")}>
                                    <KeySVG />
                                    <Text style={styles.item_text}>Key Option</Text>
                                </TouchableOpacity>
                            </View>
                        ) :
                            (
                                <View style={{ marginTop: 20 * scaleFactor }}>
                                    <TouchableOpacity style={styles.asset_item}>
                                        <KeySVG />
                                        <Text style={styles.item_text}>Key Handed Over</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.asset_last_item}>
                                        <KeySVG />
                                        <Text style={styles.item_text}>Key Returned</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </View>
                </TouchableOpacity>
            </Modal>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerdModalView: {
        flex: 1,
        paddingLeft: 21 * scaleFactor,
        paddingRight: 21 * scaleFactor,
        paddingTop: 11 * scaleFactor,
        paddingBottom: 20 * scaleFactor,
        backgroundColor: 'rgba(0, 0, 0, 0.70)',
    },
    modalView: {
        marginTop: height * scaleFactor * 0.67,
        width: 304 * scaleFactor,
        paddingLeft: 21 * scaleFactor,
        paddingRight: 21 * scaleFactor,
        backgroundColor: 'white',
        paddingBottom: 20 * scaleFactor,
        borderRadius: 20 * scaleFactor,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    asset_item: {
        paddingTop: 10 * scaleFactor,
        paddingBottom: 10 * scaleFactor,
        alignItems: 'center',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.20)",
        borderStyle: 'solid',
        flexDirection: 'row'
    },
    asset_last_item: {
        paddingTop: 10 * scaleFactor,
        paddingBottom: 10 * scaleFactor,
        alignItems: 'center',
        flexDirection: 'row'
    },
    item_text: {
        marginLeft: 20 * scaleFactor,
        color: 'black',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '700'
    },
    upwardTriangle: {
        width: 0,
        height: 0,
        borderWidth: 10,
        borderStyle: 'solid',
        borderTopColor: 'red',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',  // Color of the triangle
        borderLeftColor: 'transparent',

    }

});

export default ChatAssetModal
