//import liraries
import React, { Component } from 'react';
import { View, Text, Image, ScrollView,SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

// create a component
const Ratings = ({ navigation }) => {
    let reviews = [
        {
            img: require('../images/kids.jpg'),
            name: 'Customer',
            date: '24 Dec 2021',
            rating: 5,
        },
        {
            img: require('../images/kids.jpg'),
            name: 'Customer',
            date: '18 Nov 2021',
            rating: 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adip'
        },
        {
            img: require('../images/kids.jpg'),
            name: 'Customer',
            date: '21 Jan 2021',
            rating: 4,

        },
        {
            img: require('../images/kids.jpg'),
            name: 'Customer',
            date: '10 Jan 2021',
            rating: 5,
        },
        {
            img: require('../images/kids.jpg'),
            name: 'Customer',
            date: '2 Jan 2021',
            rating: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adip'

        },
    ];
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: '#D20909', padding: 12, alignItems: 'center' }}>
                <Ionicons name="arrow-back" size={25} style={[styles.header_icon,]}
                    onPress={() => navigation.goBack()} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Ratings</Text>
            </View>
            <ScrollView>
                <View style={styles.inner}>

                    <View style={styles.reviewsContainer}>
                        <Entypo name="star" style={styles.ratingStars1} />
                        <Entypo name="star" style={styles.ratingStars1} />
                        <Entypo name="star" style={styles.ratingStars1} />
                        <Entypo name="star" style={styles.ratingStars1} />
                        <Entypo name="star-outlined" style={styles.ratingStars1} />
                        <Text style={styles.reviewsText}>4.1 out of 5</Text>
                    </View>
                    {
                        reviews.map((item, index) => (
                            <View key={index} style={styles.card}>
                                <View style={styles.cardTop}>
                                    <View style={styles.cardTopInner}>
                                        <Image
                                            source={item.img}
                                            style={styles.avatar}
                                        />
                                        <View>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <Text style={styles.date}>{item.date}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.ratingContainer}>
                                        {[1, 2, 3, 4, 5].map((count, index) => (
                                            count <= item.rating ?
                                                <Entypo key={index} name="star" style={styles.ratingStars} /> :
                                                <Entypo key={index} name="star-outlined" style={styles.ratingStars} />

                                        ))}
                                    </View>
                                </View>
                                {item.description &&
                                    <Text style={styles.description}>
                                        {item.description}
                                    </Text>
                                }
                            </View>
                        ))
                    }
                </View>

            </ScrollView>

        </SafeAreaView>
    );
};

// define your styles
const styles = ScaledSheet.create({
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
    inner: {
        width: '90%',
        marginLeft: '5%',
    },
    reviewsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%',
        paddingVertical: '3%',
        backgroundColor: 'rgb(244,244,244)',
        marginVertical: '5%',
        borderRadius:6,
        
        shadowColor: '#D20909',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: '#fff',
    },
    ratingStars1: {
        color: '#D20909',
        fontSize: '22@s'
    },
    reviewsText: {
        color: '#D20909',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: '4%',
    },
    card: {
        backgroundColor: 'white',
        padding: '8@s',
        borderRadius: '8@s',
        marginBottom: '2@s',
        borderBottomColor: 'rgb(244,244,244)',
        borderBottomWidth: 1,
    },
    cardTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2@s'
    },
    avatar: {
        width: '40@s',
        height: '40@s',
        borderRadius: '20@s',
        marginRight: '8@s',
    },
    cardTopInner: {
        flexDirection: 'row',
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    name: {
        // fontFamily: fonts.GothamBold,
        fontSize: '14@s',
        marginBottom: '2@s',
        color: 'black',
    },
    date: {
        // fontFamily: fonts.GothamMedium_1,
        fontSize: '12@s',
        color: 'grey',
    },
    description: {
        // fontFamily: fonts.GothamBook,
        fontSize: '12@s',
        color: 'black',
        marginTop: '4@s',
        lineHeight: '13@s'
    },
    ratingStars: {
        color: '#D20909',
        fontSize: '16@s'
    }
});

//make this component available to the app
export default Ratings;
