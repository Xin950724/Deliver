import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import PayPalImage from '../../assets/images/user/payment/paypal.svg'
import { RadioButton } from "react-native-paper"
const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const PaymentCard = ({ name, method,setMethod }) => {
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <View>
            <TouchableOpacity style={styles.card_content} onPress={() => setMethod(name)}>
                <View style={{ flexDirection: 'row' }}>
                    <PayPalImage />
                    <Text style={styles.card_text}>{name}</Text>
                </View>
                <RadioButton value={name}
                    status={method === name ?
                        'checked' : 'unchecked'}
                    onPress={() => setMethod(name)}
                    color="#007BFF"
                    borderColor="#00A86B" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card_content: {
        width: '100%',
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, 0.07)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.07,
        shadowRadius: 14,
        borderRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        borderWidth: 1,
        paddingHorizontal: 30 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 82 * scaleFactor,
        marginTop: 27 * scaleFactor
    },
    card_text: {
        color: 'black',
        fontSize: 19,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24,
        marginLeft: 21 * scaleFactor
    }
});

export default PaymentCard
