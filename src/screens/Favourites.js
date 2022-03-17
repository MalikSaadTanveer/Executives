//import liraries
import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet,ScrollView,Pressable,Image ,Dimensions,SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
// create a component
const Favourites = ({navigation, route}) => {
    // const barberName = route.params?.barberName;
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
    const listData = [
        {
            image: 'https://app.gettimely.com/azure/timely-images/4e814cf8-ff36-482f-914a-abe7f66d7fd1.jpg?width=180&height=180&quality=100&mode=crop',
            catName: 'ZEE THE BARBER',
            // data: { data: servicesData.kidsHaircuts }
        },
        {
            image: 'https://app.gettimely.com/azure/timely-images/f86288ba-d803-4738-9507-a264b0b6d0e3.jpg?width=180&height=180&quality=100&mode=crop',
            catName: 'ALEX MOROZ',
            // data: { data: servicesData.hardAndFast }
    
        },
        {
            image: 'https://app.gettimely.com/azure/timely-images/be24d776-90ea-4352-b75c-f77f48d1e6ce.jpg?width=180&height=180&quality=100&mode=crop',
            catName: 'SEBASTIAN MAKATA',
            // data: { data: servicesData.BeardAndDetails }
    
        },
    
    ]
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: '#D20909', padding: 12, alignItems: 'center' }}>
                <Ionicons name="arrow-back" size={25} style={[styles.header_icon,]} 
                onPress={() => navigation.goBack()} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Favourites</Text>
            </View>



            <View style={styles.inner} >
                <ScrollView style={{ marginBottom: 60, marginTop: 12 }}>
                     <Text style={styles.barberName}>Barbers</Text>
                    {
                        listData.map((item, index) => (
                            <Pressable key={index} onPress={() => navigation.navigate('BarbersDetails',{barberName:item.catName})}>
                                <View style={styles.list} >
                                    <View style={styles.listLeft}>
                                        <View style={styles.imageContainer}>
                                            <Image source={{uri:item.image}} style={styles.image} />
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
        position:'relative',
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


});

//make this component available to the app
export default Favourites;
