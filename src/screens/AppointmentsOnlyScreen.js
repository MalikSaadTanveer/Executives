//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView,SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
// create a component
const AppointmentsOnlyScreen = ({ navigation }) => {


    const [OrientationStatus, setorientationStatus] = useState('PortraitMode');
    useEffect(() => {
        const d = Dimensions.addEventListener('change', getOrientation);
        return () => {
            d.remove();
        }
    }, []);
    getOrientation = () => {
        if (Dimensions.get('window').width < Dimensions.get('window').height) {
            setorientationStatus('PortraitMode')
            console.log(OrientationStatus)
        } else {
            setorientationStatus('LandscapeMode')
            console.log(OrientationStatus)
        }
    };

    const upcoming = [
        {
            image: require('../images/kids.jpg'),
            status: 'Upcoming',
            title: 'Addictive Beauty',
            desc: "West minister Business Road, UK",
            time: '16,April 2020-05:00 pm',
        },
        {
            image: require('../images/complete.jpg'),
            status: 'Upcoming',
            title: 'Addictive Beauty',
            desc: "West minister Business Road, UK",
            time: '16,April 2020-05:00 pm',
        },
        {
            image: require('../images/executive.jpg'),
            status: 'Upcoming',
            title: 'Addictive Beauty',
            desc: "West minister Business Road, UK",
            time: '16,April 2020-05:00 pm',
        },
    ]


    return (
        <SafeAreaView style={styles.container}>

            {
                OrientationStatus == 'PortraitMode' ?
                    <>
                        <View style={{ backgroundColor: '#D20909', padding: 12, alignItems: 'center', position: 'relative' }}>
                            <Ionicons name="arrow-back" size={25} style={styles.header_icon} onPress={() => navigation.goBack()} />
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Appointments</Text>
                        </View>

                        {
                            upcoming.map((item, index) => (
                                <View style={styles.card} key={index}>
                                    <View style={styles.topContainer}>
                                        <View style={styles.imageContainer}>
                                            <Image source={item.image} style={styles.topImage} />
                                        </View>
                                        <Text style={[styles.topText, { color: 'purple' }]}>{item.status}</Text>
                                    </View>

                                    <View>
                                        <Text style={styles.bottomTitle}>{item.title}</Text>
                                        <Text style={styles.bottomDesc}>{item.desc}</Text>
                                        <Text style={styles.bottomDesc}>{item.time}</Text>

                                        <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                            <Entypo name="star" color="#FDCC0D" size={18} />
                                            <Entypo name="star" color="#FDCC0D" size={18} />
                                            <Entypo name="star" color="#FDCC0D" size={18} />
                                            <Entypo name="star" color="#FDCC0D" size={18} />
                                            <Entypo name="star" color="#FDCC0D" size={18} />
                                        </View>
                                    </View>
                                    <Text style={styles.cardPrice}>( $45 )</Text>
                                </View>
                            ))
                        }
                    </>
                    :


                    <ScrollView>
                        <View style={{ backgroundColor: '#D20909', padding: 12, alignItems: 'center', position: 'relative' }}>
                            <Ionicons name="arrow-back" size={25} style={[styles.header_icon,]} onPress={() => navigation.goBack()} />
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Appointments</Text>
                        </View>

                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '90%', marginLeft: '5%' }}>

                            {
                                upcoming.map((item, index) => (
                                    <View style={[styles.card, { width: '48%', marginLeft: 0, }]} key={index}>
                                        <View style={styles.topContainer}>
                                            <View style={styles.imageContainer}>
                                                <Image source={item.image} style={styles.topImage} />
                                            </View>
                                            <Text style={[styles.topText, { color: 'purple' }]}>{item.status}</Text>
                                        </View>

                                        <View>
                                            <Text style={styles.bottomTitle}>{item.title}</Text>
                                            <Text style={styles.bottomDesc}>{item.desc}</Text>
                                            <Text style={styles.bottomDesc}>{item.time}</Text>

                                            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                                <Entypo name="star" color="#FDCC0D" size={18} />
                                                <Entypo name="star" color="#FDCC0D" size={18} />
                                                <Entypo name="star" color="#FDCC0D" size={18} />
                                                <Entypo name="star" color="#FDCC0D" size={18} />
                                                <Entypo name="star" color="#FDCC0D" size={18} />
                                            </View>
                                        </View>
                                        <Text style={styles.cardPrice}>( $45 )</Text>
                                    </View>
                                ))
                            }


                        </View>
                    </ScrollView>

            }

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header_icon: {
        fontSize: 30,
        // marginLeft: '7%',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        top: 14,
        left: 20,
    },
    card: {
        width: '90%',
        marginLeft: '5%',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        margin: 5,
        shadowColor: '#D20909',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: '#fff',
        padding: 12,
        opacity: 1,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    imageContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 2,
        elevation: 40,
        backgroundColor: '#fff',
        // padding: 12,
    },
    topText: {
        color: '#D20909',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.4,
    },
    bottomTitle: {
        color: 'black',
        fontSize: 18,

    },
    bottomDesc: {
        color: 'grey',
        fontSize: 12,
    },
    cardPrice: {
        opacity: 0.4,
        color: '#D20909',
        fontSize: 20,
        textAlign: 'right',
        marginTop: -20,
    }
});

//make this component available to the app
export default AppointmentsOnlyScreen;
