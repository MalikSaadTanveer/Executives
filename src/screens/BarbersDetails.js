//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Pressable, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import servicesData from '../constants/servicesData'
import Entypo from 'react-native-vector-icons/Entypo'

// create a component
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const listData = [
    {
        image: require('../images/kids.jpg'),
        catName: 'Kids Haircuts',
        data: { data: servicesData.kidsHaircuts }
    },
    {
        image: require('../images/hair2.jpg'),
        catName: 'Hard & Fast Haircuts',
        data: { data: servicesData.hardAndFast }

    },
    {
        image: require('../images/beard.jpg'),
        catName: 'Beards & Details',
        data: { data: servicesData.BeardAndDetails }

    },
    {
        image: require('../images/complete.jpg'),
        catName: 'The Complete Look',
        data: { data: servicesData.theCompleteLook }

    },
    {
        image: require('../images/executive.jpg'),
        catName: 'Executive Experience',
        data: { data: servicesData.executiveExperience }

    },

]

const BarbersDetails = ({ navigation, route }) => {
    const barberName = route.params?.barberName;
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: '#D20909', padding: 12, alignItems: 'center' }}>
            {barberName &&  <Ionicons name="arrow-back" size={25} style={styles.header_icon} onPress={() => navigation.goBack()} />}
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Categories</Text>
            </View>


            <View style={styles.inner} >
                <ScrollView style={{ marginBottom: 60, marginTop: 12 }}>
                    {barberName && <Text style={styles.barberName}>{barberName}</Text>}
                    {
                        listData.map((item, index) => (
                            <Pressable key={index} onPress={() => navigation.navigate('SelectService', item.data)}>
                                <View style={styles.list} >
                                    <View style={styles.listLeft}>
                                        <View style={styles.imageContainer}>
                                            <Image source={item.image} style={styles.image} />
                                        </View>
                                        <Text style={styles.catName}>{item.catName}</Text>
                                    </View>

                                    <Ionicons name="md-chevron-forward-circle-outline" style={styles.next} />
                                </View>
                            </Pressable>

                        ))
                    }

                </ScrollView>
            </View>

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
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        top: 14,
        left: 20,

    },
    inner: {
        width: '90%',
        marginHorizontal: '5%',
    },
    barberName: {
        color: '#D20909',
        paddingTop: 12,
        fontSize: 20,
        fontWeight: 'bold',
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        borderBottomColor: 'rgb(244,244,244)',
        borderBottomWidth: 1,
    },
    listLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        shadowColor: "#D20909",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,

    },
    catName: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold',
        marginLeft: 10,
        width: '60%',

    },
    next: {
        color: '#D20909',
        fontSize: 20,
        marginTop: 6,

    },

    // card: {
    //   borderRadius: 10,
    //   margin: 5,
    //   shadowColor: '#D20909',
    //   shadowOffset: {width: 0, height: 5},
    //   shadowOpacity: 2,
    //   shadowRadius: 2,
    //   elevation: 4,
    //   backgroundColor: '#fff',
    //   padding: 12,
    // },
    // topContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    // topImage: {
    //     width: 80,
    //     height: 80,
    //     borderRadius: 40,
    // },
    // topText: {
    //     color: '#D20909',
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //     opacity: 0.4,
    // },
    // bottomTitle: {
    //     color: 'black',
    //     fontSize: 20,

    // },
    // bottomDesc: {
    //     color: 'grey',
    //     fontSize: 14,
    // },
    // cardPrice: {
    //     opacity: 0.4,
    //     color:'#D20909',
    //     fontSize: 20,
    //     textAlign: 'right',
    // }

});

//make this component available to the app
export default BarbersDetails;
