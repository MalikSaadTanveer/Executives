import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import Icon from 'react-native-vector-icons/Ionicons';

export default function MapScreen({navigation}) {
  
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 33.6844,
                    longitude: 73.0479,
                    latitudeDelta: 0.085,
                    longitudeDelta: 0.0521,
                }}
                showsUserLocation={true}>
            </MapView>

            <ScrollView style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 250 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate('SalonBranchDetail')}>
                    <BottomCard />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate('SalonBranchDetail')}>
                    <BottomCard />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate('SalonBranchDetail')}>
                    <BottomCard />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate('SalonBranchDetail')}>
                    <BottomCard />
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        top: 2,
        right: 2,
        bottom: 2,
        left: 2
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
});

const BottomCard = () => {
    return (
        <View style={{ width: '100%', height: '95%', backgroundColor: '#fff', borderRadius: 10, margin: 10 }} >
            <Image source={require('../assets/images/img.jpeg')} style={styles.image} />

            <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                <Text style={{ color: '#0a059e', fontSize: 20, fontWeight: 'bold' }}>Addictive Beauty</Text>
                <Text>West Minister Business Road, UK</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Icon name='md-location-sharp' size={20} color='#0a059e' />
                    <Text style={{ color: '#0a059e', fontWeight: 'bold' }}>1 Km</Text>
                </View>

            </View>
        </View>
    )
}


