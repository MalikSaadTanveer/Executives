import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity,Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
export default function SalonBranchScreen({navigation, navigation: { goBack } }) {
  
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
            {OrientationStatus == 'PortraitMode' ?
            <>
            <View style={styles.header_container}>
                <View style={{flexDirection:'row'}}>
                    <Ionicons name="arrow-back" size={25} color="#ffffff" style={styles.header_icon} onPress={() => navigation.goBack()}/>
                    <Text style={styles.header_Text}>Beauty Salon</Text>
                </View>

                <View style={styles.search_container}>
                <View style={styles.searchSection}>
                    {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
                    <TextInput style={styles.search_Text} placeholder='Search for a service or venue'
                    placeholderTextColor='grey'></TextInput>
                </View>
            </View>
            </View>
            
            <View style={styles.buttom_container}>
                <ScrollView>
                <Text style={styles.text_search_result}>4 Result for Beauty Salon in UK</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SelectService')}>

                <View  style={{marginBottom:20,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#D20909',width:'90%',borderRadius:10 }}>
                        <Image
                            style={styles.Image_style}
                            source={require('../images/hair1.jpg')}
                            resizeMode="cover"
                        />
                    <View style={{paddingVertical:'2%'}}>
                        <Text style={styles.text1_style}>Addictive Beauty</Text>
                        <Text style={styles.text2_style}>West minister Business Road ,UK</Text>
                        <Text style={styles.text3_style}><Entypo name="star" color="#FDCC0D" size={16}/> 5.0 - 31 Ratings</Text>
                    </View>
                    </View>
                    

                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SelectService')}>
                <View  style={{marginBottom:20,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#D20909',width:'90%',borderRadius:10 }}>
                        <Image
                            style={styles.Image_style}
                            source={require('../images/hair1.jpg')}
                            resizeMode="cover"
                        />
                    <View style={{paddingVertical:'2%'}}>
                        <Text style={styles.text1_style}>Addictive Beauty</Text>
                        <Text style={styles.text2_style}>West minister Business Road ,UK</Text>
                        <Text style={styles.text3_style}><Entypo name="star" color="#FDCC0D" size={16}/> 5.0 - 31 Ratings</Text>
                    </View>
                    </View>
                    

                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SelectService')}>

                <View  style={{marginBottom:20,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#D20909',width:'90%',borderRadius:10 }}>
                        <Image
                            style={styles.Image_style}
                            source={require('../images/hair1.jpg')}
                            resizeMode="cover"
                        />
                    <View style={{paddingVertical:'2%'}}>
                        <Text style={styles.text1_style}>Addictive Beauty</Text>
                        <Text style={styles.text2_style}>West minister Business Road ,UK</Text>
                        <Text style={styles.text3_style}><Entypo name="star" color="#FDCC0D" size={16}/> 5.0 - 31 Ratings</Text>
                    </View>
                    </View>
                    

                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SelectService')}>

                <View  style={{marginBottom:20,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#D20909',width:'90%',borderRadius:10 }}>
                        <Image
                            style={styles.Image_style}
                            source={require('../images/hair1.jpg')}
                            resizeMode="cover"
                        />
                    <View style={{paddingVertical:'2%'}}>
                        <Text style={styles.text1_style}>Addictive Beauty</Text>
                        <Text style={styles.text2_style}>West minister Business Road ,UK</Text>
                        <Text style={styles.text3_style}><Entypo name="star" color="#FDCC0D" size={16}/> 5.0 - 31 Ratings</Text>
                    </View>
                    </View>
                    

                </View>
</TouchableOpacity>
                </ScrollView>
            </View>
            </>
            :
            <ScrollView>
            <>
            <View style={styles.header_container}>
                <View style={{flexDirection:'row'}}>
                    <Ionicons name="arrow-back" size={25} color="#ffffff" style={styles.header_icon} onPress={() => navigation.goBack()}/>
                    <Text style={styles.header_Text}>Beauty Salon</Text>
                </View>

                <View style={[styles.search_container,{marginTop:'5%'}]}>
                <View style={styles.searchSection}>
                    {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
                    <TextInput style={styles.search_Text} placeholder='Search for a service or venue'
                    placeholderTextColor='grey'></TextInput>
                </View>
            </View>
            </View>
            
            <View style={styles.buttom_container}>
                <ScrollView>
                <Text style={styles.text_search_result}>4 Result for Beauty Salon in UK</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap',width:'90%',marginLeft:'5%'}}>
                <TouchableOpacity style={{width:'50%',}}
                onPress={() => navigation.navigate('SelectService')}>

                <View  style={{marginBottom:20,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#D20909',width:'90%',borderRadius:10 }}>
                        <Image
                            style={styles.Image_style}
                            source={require('../images/hair1.jpg')}
                            resizeMode="cover"
                        />
                    <View style={{paddingVertical:'2%'}}>
                        <Text style={styles.text1_style}>Addictive Beauty</Text>
                        <Text style={styles.text2_style}>West minister Business Road ,UK</Text>
                        <Text style={styles.text3_style}><Entypo name="star" color="#FDCC0D" size={16}/> 5.0 - 31 Ratings</Text>
                    </View>
                    </View>
                    

                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'50%',}}
                onPress={() => navigation.navigate('SelectService')}>
                <View  style={{marginBottom:20,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#D20909',width:'90%',borderRadius:10 }}>
                        <Image
                            style={styles.Image_style}
                            source={require('../images/hair1.jpg')}
                            resizeMode="cover"
                        />
                    <View style={{paddingVertical:'2%'}}>
                        <Text style={styles.text1_style}>Addictive Beauty</Text>
                        <Text style={styles.text2_style}>West minister Business Road ,UK</Text>
                        <Text style={styles.text3_style}><Entypo name="star" color="#FDCC0D" size={16}/> 5.0 - 31 Ratings</Text>
                    </View>
                    </View>
                    

                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'50%',}}
                onPress={() => navigation.navigate('SelectService')}>

                <View  style={{marginBottom:20,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#D20909',width:'90%',borderRadius:10 }}>
                        <Image
                            style={styles.Image_style}
                            source={require('../images/hair1.jpg')}
                            resizeMode="cover"
                        />
                    <View style={{paddingVertical:'2%'}}>
                        <Text style={styles.text1_style}>Addictive Beauty</Text>
                        <Text style={styles.text2_style}>West minister Business Road ,UK</Text>
                        <Text style={styles.text3_style}><Entypo name="star" color="#FDCC0D" size={16}/> 5.0 - 31 Ratings</Text>
                    </View>
                    </View>
                    

                </View>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'50%',}}
                onPress={() => navigation.navigate('SelectService')}>

                <View  style={{marginBottom:20,justifyContent:'center',alignItems:'center'}}>
                    <View style={{backgroundColor:'#D20909',width:'90%',borderRadius:10 }}>
                        <Image
                            style={styles.Image_style}
                            source={require('../images/hair1.jpg')}
                            resizeMode="cover"
                        />
                    <View style={{paddingVertical:'2%'}}>
                        <Text style={styles.text1_style}>Addictive Beauty</Text>
                        <Text style={styles.text2_style}>West minister Business Road ,UK</Text>
                        <Text style={styles.text3_style}><Entypo name="star" color="#FDCC0D" size={16}/> 5.0 - 31 Ratings</Text>
                    </View>
                    </View>
                    

                </View>
                </TouchableOpacity>
             </View>
                </ScrollView>
            </View>
            </>
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
    header_container: {
        // flex: 0.1,
        position:'relative',
        height:windowHeight * 0.20,
        backgroundColor: '#D20909',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    header_container_landscape: {
        flex: 0.1,
        backgroundColor: '#FF0000',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        width:'100%',
        paddingBottom:60
    },
    header_Text: {
        fontSize: 20,
        // marginLeft: '18%',
        marginTop: '4%',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        width: windowWidth,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: 'blue',

    },
    header_icon: {
        fontSize: 30,
        // marginLeft: '7%',
        marginTop: '4%',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position:'absolute',
        left:20,
        
    },
    header_Text1: {
        fontSize: 20,
        marginLeft: '5%',
        color: 'black'

    },
    search_container: {
        marginTop: '13%',
        // flex: 0.04,
        backgroundColor: 'white',
        height:50,
        width: '90%',
        marginLeft: '5%',
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
    search_Text: {
        fontSize: 16,
        //borderWidth: 1,
        borderRadius: 10,
        paddingLeft:10,
        color:'black'
    },
    search_Text1: {
        fontSize: 10,
        color:'black'
    },
    buttom_container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text_search_result: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%',
        width:'90%',
        color: 'black',
        marginTop: 10,
        marginBottom: 10
    },
    Image_style: {
        width: '100%',
        // marginLeft: '5%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height:180
    },
    text1_style: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '5%',
        color: 'white'
    },
    text2_style: {
        fontSize: 12,
        marginLeft: '5%',
        color: 'white'

    },
    text3_style: {
        fontSize: 15,
        marginLeft: '5%',
        color: 'white'

    }
});