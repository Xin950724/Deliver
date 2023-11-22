import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform,PermissionsAndroid ,Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import io from 'socket.io-client';
// Initialize Geolocation



const Screen = ({ navigation }) => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [coordinates, setCoordinates] = useState([]);
    const requestLocationPermission = async () => {
        if (Platform.OS === 'ios') {
            Geolocation.requestAuthorization('always');
        } else {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
        }
    };
 
    useEffect(() => {
        requestLocationPermission();
        const socket = io('http://103.179.142.70:3000');
        const watchId = Geolocation.watchPosition(
            (position) => {
                console.log(position)
                // This function is called every time the location changes
                setCurrentLocation(position);
                setCoordinates((prevCoordinates) => [...prevCoordinates, position.coords]);
                socket.emit('updateLocation', { position});
                // console.log(position)
            },
            (error) => {
                console.error(error);
            },
            { enableHighAccuracy: true, distanceFilter: 0 }
        );
        return () => Geolocation.clearWatch();
    }, []);

    const renderDirectionMarkers = () => {
        if (coordinates.length > 1) {
          return coordinates.map((coord, index) => {
            // Display markers at every 5th coordinate
            if (index % 5 === 0) {
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: coord.latitude,
                    longitude: coord.longitude,
                  }}
                  anchor={{ x: 0.5, y: 0.5 }} // Center the marker on the coordinate
                  rotation={index === 0 ? currentLocation.coords.heading : null} // Rotate the marker based on the heading
                >
                  {/* Your custom marker icon (e.g., an arrow) */}
                  <View style={styles.customMarker}>
                    {/* You can use an image, icon, or any custom component here */}
                    <Text>↑</Text>
                  </View>
                </Marker>
              );
            }
            return null;
          });
        }
        return null;
      };
    
    return (
        <View style={styles.container}>
              <MapView
        style={styles.map}
        region={{
          latitude: currentLocation?.coords.latitude || 37.78825,
          longitude: currentLocation?.coords.longitude || -122.4324,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        apiKey="AIzaSyBlSOdSwkfDc5my-2gn5NxFs7sfc2hrfJc">
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
            }}
          />
        )}
        {coordinates.length > 1 && (
          <Polyline
            coordinates={coordinates}
            strokeColor="red"
            strokeWidth={2}
            geodesic={true}
          />
        )}
        {renderDirectionMarkers()}
      </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    customMarker: {
        backgroundColor: 'blue', // Adjust the background color or use an image
        width: 3,
        height: 3,
        borderRadius: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default Screen;