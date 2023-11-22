import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/Splash"
import OnBoardingScreen_1 from "../screens/OnBoarding/OnBoarding1"
import OnBoardingScreen_2 from "../screens/OnBoarding/OnBoarding2"
import Login_RegisterScreen from "../screens/Auth";
import LoginScreen from "../screens/Auth/Login";
import Register_Screen from "../screens/Auth/Register";
import OTPScreen from "../screens/Auth/Register/OTPScreen";
import OTPResetScreen from "../screens/Auth/Register/OTPResetScreen";
import ForgetPasswordScreen from "../screens/Auth/Login/ForgetPassword";
import ResetPasswordScreen from "../screens/Auth/Login/ResetPassword";
import TermScreen from "../screens/Auth/Login/TermScreen";
import LocationOnScreen from "../screens/Auth/Login/LocationOnScreen";
import LocationScreen from "../screens/Auth/Login/LocationScreen";
import AddPhoneNumberScreen from "../screens/Auth/Register/AddPhoneNumberScreen";
import OTPVerificationScreen from "../screens/Auth/Register/OTPVerificationScreen";
import SuccessOTPScreen from "../screens/Auth/Register/SuccessOTPScreen";
import EnterLicenseScreen from "../screens/Auth/Register/License_Verification/EnterLicenseScreen";
import LicenseVerifyScreen from "../screens/Auth/Register/License_Verification/LicenseVerifyScreen";
import ScanScreen from "../screens/Auth/Register/License_Verification/ScanScreen";
import SuccessVerifyScreen from "../screens/Auth/Register/License_Verification/SuccessVerifyScreen";
import HomeScreen from "../screens/User/HomeScreen";
import CategoryScreen from "../screens/User/CategoryScreen";
import SearchResultScreen from "../screens/User/SearchResultScreen";
import CarDetailScreen from "../screens/User/CarDetailScreen";
import BookingDetailScreen from "../screens/User/SearchScreen/BookingDetailScreen";
import SummaryScreen from "../screens/User/SearchScreen/SummaryScreen";
import DrawSignatureScreen from "../screens/User/SearchScreen/DrawSignatureScreen";
import SelectPaymentMethodScreen from "../screens/User/SearchScreen/SelectPaymentMethodScreen";
import AddPaymentScreen from "../screens/User/SearchScreen/AddPaymentScreen";
import ChatScreen from "../screens/User/SearchScreen/ChatScreen";
import TimerScreen from "../screens/User/TimerScreen";
import ExtendBookingScreen from "../screens/User/ExtendBookingScreen";
import InspectionReportScreen from "../screens/User/InspectionReportScreen";
import PersonalFeedbackScreen from "../screens/User/PersonalFeedbackScreen";
import RatingScreen from "../screens/User/RatingScreen";
import MessageScreen from "../screens/User/MessageScreen";
import NotificationScreen from "../screens/User/NotificationScreen";
import ProfileScreen from "../screens/User/ProfileScreen";
import EditProfileScreen from "../screens/User/EditProfileScreen";
import AllBookingScreen from "../screens/User/AllBookingScreen";
import VerifyProfileScreen from "../screens/User/VerifyProfileScreen";
import AboutScreen from "../screens/User/AboutScreen";
import LanguageScreen from "../screens/User/LanguageScreen";
import AddVehicleScreen from "../screens/User/AddVehicleScreen";
import ExtendDurationScreen from "../screens/User/ExtendDurationScreen";
import SpecifyDetailScreen from "../screens/User/SpecifyDetailScreen";
import KeyHandScreen from "../screens/User/KeyHandScreen";
import InitiateRequestScreen from "../screens/User/InitiateRequestScreen";
import LocationTrackingComponent from "../screens/LocationTracking";


const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "SplashScreen" screenOptions = {{headerShown: false}}>
                <Stack.Screen name = "SplashScreen" component = {SplashScreen} />
                <Stack.Screen name = "OnBoardingScreen_1" component = {OnBoardingScreen_1} />
                <Stack.Screen name = "OnBoardingScreen_2" component = {OnBoardingScreen_2} />
                <Stack.Screen name = "Login-Register" component = {Login_RegisterScreen} />
                <Stack.Screen name = "LoginScreen" component = {LoginScreen} />
                <Stack.Screen name = "RegisterScreen" component = {Register_Screen} />
                <Stack.Screen name = "OTPScreen" component = {OTPScreen} />
                <Stack.Screen name = "OTPResetScreen" component = {OTPResetScreen} />
                <Stack.Screen name = "ForgetPasswordScreen" component = {ForgetPasswordScreen} />
                <Stack.Screen name = "ResetPasswordScreen" component = {ResetPasswordScreen} />
                <Stack.Screen name = "TermScreen" component = {TermScreen} />
                <Stack.Screen name = "LocationOnScreen" component = {LocationOnScreen} />
                <Stack.Screen name = "LocationScreen" component = {LocationScreen} />
                <Stack.Screen name = "AddPhoneNumberScreen" component = {AddPhoneNumberScreen} />
                <Stack.Screen name = "OTPVerificationScreen" component = {OTPVerificationScreen} />
                <Stack.Screen name = "SuccessOTPScreen" component = {SuccessOTPScreen} />
                <Stack.Screen name = "LocationTracking" component = {LocationTrackingComponent} />
                


                <Stack.Screen name = "EnterLicenseScreen" component = {EnterLicenseScreen} />
                <Stack.Screen name = "LicenseVerifyScreen" component = {LicenseVerifyScreen} />
                <Stack.Screen name = "ScanScreen" component = {ScanScreen} />
                <Stack.Screen name = "SuccessVerifyScreen" component = {SuccessVerifyScreen} />

                <Stack.Screen name = "HomeScreen" component = {HomeScreen} />
                <Stack.Screen name = "CategoryScreen" component = {CategoryScreen} />
                <Stack.Screen name = "SearchResultScreen" component = {SearchResultScreen} />
                <Stack.Screen name = "CarDetailScreen" component = {CarDetailScreen} />
                <Stack.Screen name = "BookingDetailScreen" component = {BookingDetailScreen} />
                <Stack.Screen name = "SummaryScreen" component = {SummaryScreen} />
                <Stack.Screen name = "DrawSignatureScreen" component = {DrawSignatureScreen} />
                <Stack.Screen name = "SelectPaymentMethodScreen" component = {SelectPaymentMethodScreen} />
                <Stack.Screen name = "AddPaymentScreen" component = {AddPaymentScreen} />
                <Stack.Screen name = "ChatScreen" component = {ChatScreen} />

                <Stack.Screen name = "TimerScreen" component = {TimerScreen} />
                <Stack.Screen name = "ExtendBookingScreen" component = {ExtendBookingScreen} />
                <Stack.Screen name = "InspectionReportScreen" component = {InspectionReportScreen} />
                <Stack.Screen name = "PersonalFeedbackScreen" component = {PersonalFeedbackScreen} />
                <Stack.Screen name = "RatingScreen" component = {RatingScreen} />
                <Stack.Screen name = "MessageScreen" component = {MessageScreen} />
                <Stack.Screen name = "NotificationScreen" component = {NotificationScreen} />
                <Stack.Screen name = "ProfileScreen" component = {ProfileScreen} />
                <Stack.Screen name = "EditProfileScreen" component = {EditProfileScreen} />
                <Stack.Screen name = "AllBookingScreen" component = {AllBookingScreen} />
                <Stack.Screen name = "VerifyProfileScreen" component = {VerifyProfileScreen} />
                <Stack.Screen name = "AboutScreen" component = {AboutScreen} />
                <Stack.Screen name = "LanguageScreen" component = {LanguageScreen} />
                <Stack.Screen name = "AddVehicleScreen" component = {AddVehicleScreen} />
                <Stack.Screen name = "ExtendDurationScreen" component = {ExtendDurationScreen} />
                <Stack.Screen name = "SpecifyDetailScreen" component = {SpecifyDetailScreen} />
                <Stack.Screen name = "KeyHandScreen" component = {KeyHandScreen} />
                <Stack.Screen name = "InitiateRequestScreen" component = {InitiateRequestScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes