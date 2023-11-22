import React, { useEffect, useState } from "react"
import { Dimensions, View,  StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { Calendar, LocaleConfig } from 'react-native-calendars'
import DateTimePicker from '@react-native-community/datetimepicker'
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import ClockImage from '../../../assets/images/user/category/clock.svg'
import ArrowSwapImage from '../../../assets/images/user/category/arrow-swap-horizontal.svg'


const { width } = Dimensions.get('window')
const scaleFactor = width / 414
import Slider from '@react-native-community/slider';

const BookingDetailScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const missHandle = () => {
        // setModalVisible(false)
        Keyboard.dismiss()
    }
    LocaleConfig.locales['fr'] = {
        monthNames: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Agu',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sta'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sta'],
        today: "Aujourd'hui"
    };

    LocaleConfig.defaultLocale = 'fr';
    const [selected, setSelected] = useState('');
    const [mydate, setDate] = useState(new Date());
    const [myenddate, setEndDate] = useState(new Date());
    const [isDisplayDate, setShow] = useState(false);
    const [duration, setDuration] = useState(0)
    const changeSelectedDate = (event, selectedDate, type) => {
        const currentDate = selectedDate || mydate;
        if (event.type == "set") {
            setShow(false);
            if (type == "start")
                setDate(currentDate);
            else
                setEndDate(currentDate)
        }
        setShow(false)
    };
    const displayTimepicker = () => {
        setShow(true)
    };
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.header_view}>
                            <TouchableOpacity style={styles.header_icon} onPress={() => navigation.navigate('CarDetailScreen')}>
                                <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                            </TouchableOpacity>
                            <Text style={styles.header_text}>Booking Detail</Text>
                        </View>
                        <ScrollView style={styles.content}>
                            <View style={styles.calendar_view}>
                                <Calendar

                                    onDayPress={day => {
                                        setSelected(day.dateString);
                                    }}
                                    markedDates={{
                                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                    }}
                                />
                            </View>
                            <View style={styles.duration_view}>
                                <View style={styles.duration_header}>
                                    <Text style={styles.duration_text}>Duration</Text>
                                    <View style={styles.slider_range}>
                                        <Text style={styles.slider_range_text}>{duration} Hour</Text>
                                    </View>
                                </View>

                                <Slider
                                    style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={24}
                                    minimumTrackTintColor="#00A86B"
                                    maximumTrackTintColor="#CCCCCC"
                                    step={1}
                                    onValueChange={e => setDuration(e)}
                                />
                            </View>
                            <View style={styles.start_end_view}>
                                <View style={styles.start_view}>
                                    <Text style={styles.start_text}>Start</Text>
                                    <View style={styles.start_time}>
                                        <Text style={styles.start_time_text}>{mydate.getHours() + ":" + mydate.getMinutes()}</Text>
                                        <TouchableOpacity onPress={() => displayTimepicker()}>
                                            <ClockImage />
                                        </TouchableOpacity>
                                        {
                                            isDisplayDate == true ? (
                                                <DateTimePicker
                                                    value={mydate}
                                                    mode="time"
                                                    is24Hour={false}
                                                    display="default"
                                                    onChange={(event, date) => changeSelectedDate(event, date, "start")}
                                                />
                                            ) : (<></>)
                                        }

                                    </View>
                                </View>
                                <View style={styles.swap_image}>
                                    <ArrowSwapImage />
                                </View>
                                <View style={styles.end_view}>
                                    <Text style={styles.start_text}>End</Text>
                                    <View style={styles.start_time}>
                                        <Text style={styles.start_time_text}>{myenddate.getHours() + ":" + myenddate.getMinutes()}</Text>
                                        <TouchableOpacity onPress={() => displayTimepicker()}>
                                            <ClockImage />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                            <View style={styles.amount_view}>
                                <Text style={styles.amount_text}>Total Amount</Text>
                                <Text style={styles.amount_value}>$ 400.00</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("SummaryScreen", { type: "beforeadded" })}>
                        <Text style={styles.footer_text}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative'
    },
    body:{
        flex: 1,
        paddingTop: 37 * scaleFactor,
        paddingHorizontal: 25 * scaleFactor
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },
    header_search_icon: {
        position: 'absolute',
        right: 0
    },
    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor

    },
    content: {
        marginTop: 56 * scaleFactor,
        marginBottom: 20 * scaleFactor,
        width: '100%'
    },
    calendar_view: {
        width: '100%'
    },
    duration_view: {
        marginTop: 31 * scaleFactor,
    },
    duration_text: {
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600'
    },
    slider: {
        width: '100%',
        height: 10 * scaleFactor,
        marginTop: 20 * scaleFactor
    },
    footer: {
        width: '100%',
        backgroundColor: '#00A86B',
        shadowColor: "#00A86B", // rgba(0, 168, 107, 0.20)
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.20,
        shadowRadius: 8.5, // Adjust this to achieve the desired blur
        elevation: 5, // This is for Android to simulate shadow
        borderRadius: 20,
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 39 * scaleFactor
    },
    footer_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700'
    },
    slider_range: {
        marginLeft: 20 * scaleFactor,
        width: 84 * scaleFactor,
        height: 30 * scaleFactor,
        backgroundColor: '#00A86B',
        borderRadius: 5 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    slider_range_text: {
        color: 'white',
        fontSize: 15 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24 * scaleFactor
    },
    duration_header: {
        flexDirection: 'row'
    },
    start_end_view: {
        marginTop: 39 * scaleFactor,
        flexDirection: 'row',
        marginBottom: 25 * scaleFactor
    },
    start_text: {
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600'
    },
    start_time: {
        flexDirection: 'row',
        marginTop: 22.5 * scaleFactor,
        marginLeft: 15 * scaleFactor,

    },
    start_time_text: {
        marginRight: 38 * scaleFactor,
        color: 'rgba(0,0,0,0.80)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600'
    },
    swap_image: {
        marginTop: 50 * scaleFactor,
        marginLeft: 30 * scaleFactor,
        marginRight: 30 * scaleFactor
    },
    amount_view: {
        paddingTop: 22 * scaleFactor,
        borderStyle: 'solid',
        borderWidth: 0 * scaleFactor,
        borderTopWidth: 1 * scaleFactor,
        borderColor: 'rgba(0, 0, 0, 0.10)',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    amount_text: {
        // Total Amount
        color: 'black',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '400'
    },
    amount_value: {
        // Total Amount
        color: '#00A86B',
        fontSize: 20 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '800'
    }

})

export default BookingDetailScreen
