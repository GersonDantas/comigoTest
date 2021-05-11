import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View, Button, StyleSheet, Text, Dimensions, Platform } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import { useAuth } from '../../contexts/auth';

const Dashboard: React.FC = () => {
    const { user, signOut } = useAuth();
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [region, setRegion] = useState<object>();

    function handleSignOut() {
        signOut();

    }

    useEffect(() => {
        async function loadLocations() {
            if (Platform.OS === 'android' && !Constants.isDevice) {
                setErrorMsg(
                    'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
                );
                return;
            }
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setRegion(location.coords);
            setLocation(location);

        }

        loadLocations();
    }, []);

    const {latitude, longitude} = region

    return (
        <View style={styles.container}>
            <Text>{user?.name}</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
            <MapView
                style={styles.map}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});