import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

//import { Icon } from 'react-native-vector-icons/icon';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
export default function HomeScreen({ navigation }) {
    
    const [OrientationStatus, setorientationStatus] = useState('PortraitMode');
    useEffect(() => {
        // if(windowHeight>windowWidth){
        //     setorientationStatus('PortraitMode')
        //     console.log("height is greater ")
        // }else{
        //     setorientationStatus('LandscapeMode')

        //     console.log("width is greater")
        // }
        Dimensions.addEventListener('change', getOrientation);
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
    return (
        <View style={styles.container}>

            <View>
                <StatusBar backgroundColor="#D20909"
                //barStyle="light-content"
                />
            </View>

            {/* <Text>{OrientationStatus}</Text> */}
            {OrientationStatus == 'PortraitMode' ?
            
                <>
                <ScrollView style={styles.bottom_container}>

                    <View style={styles.header_container}>
                        <Text style={styles.header_Text}>Hi,Sutan Hussain</Text>
                        <Text style={styles.header_Text1}>Book what do u love</Text>
                        <View style={styles.search_container}>
                        <View style={styles.searchSection}>
                            {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
                            <TextInput style={styles.search_Text} placeholderTextColor={'grey'} placeholder='Search for a service or venue' ></TextInput>
                        </View>
                    </View>
                    </View>
                    

                    {/* <ScrollView style={styles.bottom_container}> */}
                        <View>
                            <Text style={styles.category_Text}>Popular Categories</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={styles.ViewContainer} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair1.jpg')}
                                            />
                                        </View>
                                        <View >

                                            <Text style={styles.category_textInput}>Beauty Salon</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')} style={styles.ViewContainer}>

                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair2.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Hair Salon</Text>
                                        </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={styles.ViewContainer} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/bg1.jpg')}
                                            />
                                        </View>
                                        <View >

                                            <Text style={styles.category_textInput}>Spa</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')} style={styles.ViewContainer}>

                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair1.jpg')}
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Massage</Text>
                                        </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={styles.ViewContainer} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair2.jpg')}
                                            />
                                        </View>
                                        <View >

                                            <Text style={styles.category_textInput}>Beauty Salon</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')} style={styles.ViewContainer}>

                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/bg1.jpg')}
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Hair Salon</Text>
                                        </View>
                               </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={styles.ViewContainer} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair1.jpg')}
                                            />
                                        </View>
                                        <View >

                                            <Text style={styles.category_textInput}>Beauty Salon</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')} style={styles.ViewContainer}>

                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair1.jpg')}
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Hair Salon</Text>
                                        </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.category_Text}>Barbers</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <ScrollView horizontal={true} >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair1.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Beauty Salon</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair1.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Hair Salon</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 20 }}>

                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair1.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Spa</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 20,marginRight: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair1.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Massage</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>




                            <Text style={styles.category_Text}>Testimonials</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <ScrollView horizontal={true} >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair2.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Beauty Salon</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair2.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Hair Salon</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>

                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair2.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Spa</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10,marginRight: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair2.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Massage</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </>
               
                :
                <ScrollView style={styles.bottom_container}>

                    <View style={styles.header_container}>
                        <Text style={styles.header_Text}>Hi,Sutan Hussain</Text>
                        <Text style={styles.header_Text1}>Book what do u love</Text>
                        <View style={[styles.search_container,{marginTop:'3%'}]}>
                        <View style={styles.searchSection}>
                            {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
                            <TextInput style={styles.search_Text} placeholderTextColor={'grey'} placeholder='Search for a service or venue' ></TextInput>
                        </View>
                    </View>
                    </View>
                    

                    {/* <ScrollView style={styles.bottom_container}> */}
                        <View>
                            <Text style={styles.category_Text}>Popular Categories</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair1.jpg')}
                                            />
                                        </View>
                                        <View >

                                            <Text style={styles.category_textInput}>Beauty Salon</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair2.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Hair Salon</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/bg1.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Hair Salon</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair1.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Hair Salon</Text>
                                        </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair2.jpg')}
                                            />
                                        </View>
                                        <View >

                                            <Text style={styles.category_textInput}>Beauty Salon</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/bg1.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Hair Salon</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair1.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Hair Salon</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair2.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Hair Salon</Text>
                                        </View>
                                </TouchableOpacity>
                            </View>
                            
                          
                        </View>
                        <View>
                            <Text style={styles.category_Text}>Barbers</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <ScrollView horizontal={true} >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair1.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Beauty Salon</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair1.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Hair Salon</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 20 }}>

                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair1.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Spa</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 20,marginRight: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair1.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Massage</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>




                            <Text style={styles.category_Text}>Testimonials</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <ScrollView horizontal={true} >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair2.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Beauty Salon</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair2.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Hair Salon</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>

                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair2.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Spa</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('SalonBranch')}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10,marginRight: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={require('../images/hair2.jpg')}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>Massage</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    searchIcon: {
        padding: 10,
    },
    ViewContainer: {
        //flexDirection: 'column', borderWidth: 1, borderBottomLeftRadius: 12, borderBottomEndRadius: 12
        // paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
        marginBottom: 10,
        borderRadius: 2,
        width:'46%',
        
    },


    header_container: {
        // flex: 0.15,
        height:windowHeight * 0.20,
        backgroundColor: '#D20909',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        // backgroundColor:'white'
    },
    header_container_landscape: {
        flex: 0.3,
        backgroundColor: '#D20909',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40

    },
    header_Text: {
        fontSize: 20,
        marginLeft: '5%',
        marginTop: '3%',
        fontWeight: 'bold',
        color: 'white'
    },
    header_Text1: {
        fontSize: 16,
        marginLeft: '5%',
        //marginTop: '5%',
        color: 'white',


    },
    bottom_container: {
        flex: 4,
        backgroundColor: 'white'
    },
    search_container: {
        marginTop: '8%',
        // flex: 0.07,
        backgroundColor: 'white',
        width: '93%',
        marginLeft: '4%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    category_Text: {
        fontSize: 20,
        marginLeft: '5%',
        marginTop: '2%',
        marginBottom: '2%',
        fontWeight: 'bold',
        color: 'black',
        //textAlign:'center'
        //justifyContent:'flex-start'
    },
    search_Text: {
        fontSize: 16,
        // borderWidth: 1,
        borderRadius: 30,
        // marginTop:10
        paddingLeft:10
    },
    search_Text1: {
        fontSize: 10,
    },
    category_textInput: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingTop: 7,
        paddingBottom: 7
        // paddingTop: 15
    },
    Image: {
        borderRadius: 10,
        width: '100%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        // width:'100%',
        // height:'70%'
        height: 130
    },
    more_category_Image: {
        borderRadius: 10,
        width: 200,
        // width:'100%',
        // height:'70%'
        height: 130
    }
});