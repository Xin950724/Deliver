import React, { useEffect, useState } from "react"
import { Dimensions, Modal, View, StyleSheet, TouchableOpacity, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback } from "react-native"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const ProfileSettingModal = ({ navigation,modalVisible, setModalVisible }) => {

    return (

        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            }}>
            <TouchableWithoutFeedback style={styles.centeredView} onPress={() => setModalVisible(false)} >
                <View style={styles.centerdModalView} >
                    <View style={styles.modalView}>
                        <View style={{ marginTop: 20 * scaleFactor }}>
                            <TouchableOpacity style={styles.asset_item}>
                                <Text style={styles.item_text}>Account Settings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.asset_item}>
                                <Text style={styles.item_text}>Contact Support</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.asset_item} onPress={()=>{navigation.navigate("AboutScreen"),setModalVisible(false)}}>
                                <Text style={styles.item_text}>About</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.asset_item} onPress={()=>{navigation.navigate("LanguageScreen"),setModalVisible(false)}}>
                                <Text style={styles.item_text}>Languages Settings</Text>
                            </TouchableOpacity><TouchableOpacity style={styles.asset_last_item}>
                                <Text style={styles.item_last_text}>Delete Acccount</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
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
        marginTop: 25 * scaleFactor,
        marginLeft: 70 * scaleFactor,
        width: 270 * scaleFactor,
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
        fontWeight: '500'
    },
    item_last_text: {
        marginLeft: 20 * scaleFactor,
        color: '#FF1515',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '500'
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

export default ProfileSettingModal
