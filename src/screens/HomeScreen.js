import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, Dimensions,SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

//import { Icon } from 'react-native-vector-icons/icon';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import servicesData from '../constants/servicesData'
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
    return (
        <SafeAreaView style={styles.container}>

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
                    <Feather name='bell' color={'white'} size={30} style={styles.bell} />
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
                        {/* <View style={{width:'94%',marginLeft:'3%'}} > */}
                            <Text style={styles.category_Text}>Popular Categories</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('SelectService',{data:servicesData.kidsHaircuts})}style={styles.ViewContainer} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/kids.jpg')}
                                            />
                                        </View>
                                        <View >

                                            <Text style={styles.category_textInput}>Kids Haircuts</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SelectService',{data:servicesData.hardAndFast})} style={styles.ViewContainer}>

                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair2.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Hard & Fast Haircuts</Text>
                                        </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('SelectService',{data:servicesData.BeardAndDetails})}style={styles.ViewContainer} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/beard.jpg')}
                                            />
                                        </View>
                                        <View >

                                            <Text style={styles.category_textInput}>Beards & Details</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SelectService',{data:servicesData.theCompleteLook})} style={styles.ViewContainer}>

                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/complete.jpg')}
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>The Complete Look</Text>
                                        </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row',paddingLeft:'2%'  }}>
                                <TouchableOpacity onPress={() => navigation.navigate('SelectService',{data:servicesData.executiveExperience})}style={styles.ViewContainer} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/executive.jpg')}
                                            />
                                        </View>
                                        <View >

                                            <Text style={styles.category_textInput}>Executive Experience</Text>
                                        </View>
                                </TouchableOpacity>
                                
                            </View>
                            
                        {/* </View> */}
                        <View>
                            <Text style={styles.category_Text}>Barbers</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <ScrollView horizontal={true} >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('BarbersDetails',{barberName:'ZEE THE BARBER'})}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={{uri:'https://app.gettimely.com/azure/timely-images/4e814cf8-ff36-482f-914a-abe7f66d7fd1.jpg?width=180&height=180&quality=100&mode=crop'}}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>ZEE THE BARBER</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('BarbersDetails',{barberName:'ALEX MOROZ'})}>

                                            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={{uri:'https://app.gettimely.com/azure/timely-images/f86288ba-d803-4738-9507-a264b0b6d0e3.jpg?width=180&height=180&quality=100&mode=crop'}}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>ALEX MOROZ</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        
                                        <TouchableOpacity onPress={() => navigation.navigate('BarbersDetails',{barberName:'SEBASTIAN MAKATA'})}>

                                            <View style={{ flexDirection: 'column', marginLeft: 20,marginRight: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={{uri:'https://app.gettimely.com/azure/timely-images/be24d776-90ea-4352-b75c-f77f48d1e6ce.jpg?width=180&height=180&quality=100&mode=crop'}}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>SEBASTIAN MAKATA</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>




                            <Text style={styles.category_Text}>Testimonials</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <ScrollView 
                                // ref={(scrollView) => { this.scrollView = scrollView; }}
                                
                                style={styles.container1}
                                pagingEnabled={true}
                                horizontal= {true}
                                decelerationRate={0}
                                showsHorizontalScrollIndicator={false}
                                snapToInterval={windowWidth - 60}
                                snapToAlignment={"center"}
                                contentInset={{
                                top: 0,
                                left: 30,
                                bottom: 0,
                                right: 30,
                                }}>
                                <View style={styles.testCard} >
                                    <View style={styles.testImageContainer}>
                                        <Image source={require('../images/hair3.jpg')} style={styles.testImage}/>
                                    </View>
                                    <Text style={styles.testName}>Malik Saad</Text>
                                    <View style={{ flexDirection: 'row',marginVertical:3}}>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                    </View>
                                    
                                    <View style={{position:'relative'}}>
                                        <Image source={require('../images/q1.png')} style={styles.q1Image}
                                        resizeMode='contain'
                                        />
                                        <Text style={styles.textDescription}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ea tenetur sint ab exercitationem deserunt a ex magni odit sunt.
                                        </Text>
                                        <Image source={require('../images/q2.png')} style={styles.q2Image}
                                        resizeMode='contain'
                                        />
                                    </View>
                                </View>
                                
                                
                                <View style={styles.testCard} >
                                    <View style={styles.testImageContainer}>
                                        <Image source={require('../images/bg1.jpg')} style={styles.testImage}/>
                                    </View>
                                    <Text style={styles.testName}>Malik Saad</Text>
                                    <View style={{ flexDirection: 'row',marginVertical:3}}>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                    </View>
                                    
                                    <View style={{position:'relative'}}>
                                        <Image source={require('../images/q1.png')} style={styles.q1Image}
                                        resizeMode='contain'
                                        />
                                        <Text style={styles.textDescription}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ea tenetur sint ab exercitationem deserunt a ex magni odit sunt.
                                        </Text>
                                        <Image source={require('../images/q2.png')} style={styles.q2Image}
                                        resizeMode='contain'
                                        />
                                    </View>
                                </View>


                                <View style={styles.testCard} >
                                    <View style={styles.testImageContainer}>
                                        <Image source={require('../images/hair3.jpg')} style={styles.testImage}/>
                                    </View>
                                    <Text style={styles.testName}>Malik Saad</Text>
                                    <View style={{ flexDirection: 'row',marginVertical:3}}>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                    </View>
                                    
                                    <View style={{position:'relative'}}>
                                        <Image source={require('../images/q1.png')} style={styles.q1Image}
                                        resizeMode='contain'
                                        />
                                        <Text style={styles.textDescription}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ea tenetur sint ab exercitationem deserunt a ex magni odit sunt.
                                        </Text>
                                        <Image source={require('../images/q2.png')} style={styles.q2Image}
                                        resizeMode='contain'
                                        />
                                    </View>
                                </View>


                                <View style={styles.testCard} >
                                    <View style={styles.testImageContainer}>
                                        <Image source={require('../images/bg1.jpg')} style={styles.testImage}/>
                                    </View>
                                    <Text style={styles.testName}>Malik Saad</Text>
                                    <View style={{ flexDirection: 'row',marginVertical:3}}>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                    </View>
                                    
                                    <View style={{position:'relative'}}>
                                        <Image source={require('../images/q1.png')} style={styles.q1Image}
                                        resizeMode='contain'
                                        />
                                        <Text style={styles.textDescription}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ea tenetur sint ab exercitationem deserunt a ex magni odit sunt.
                                        </Text>
                                        <Image source={require('../images/q2.png')} style={styles.q2Image}
                                        resizeMode='contain'
                                        />
                                    </View>
                                </View>
                            </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </>
               
                :
                <ScrollView style={styles.bottom_container}>

                    <View style={styles.header_container}>
                    <Feather name='bell' color={'white'} size={30} style={[styles.bell,{marginTop:'4%'}]} />
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
                                <TouchableOpacity onPress={() => navigation.navigate('SelectService',{data:servicesData.kidsHaircuts})}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/kids.jpg')}
                                            />
                                        </View>
                                        <View >

                                            <Text style={styles.category_textInput}>Kids Haircuts</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SelectService',{data:servicesData.hardAndFast})}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/hair2.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Hard & Fast Haircuts</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SelectService',{data:servicesData.BeardAndDetails})}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/beard.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>Beards & Details</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SelectService',{data:servicesData.theCompleteLook})}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/complete.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View>

                                            <Text style={styles.category_textInput}>The Complete Look</Text>
                                        </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft:'2%' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('SelectService',{data:servicesData.executiveExperience})}style={[styles.ViewContainer,{width:'22%'}]} >
                                        <View>
                                            <Image
                                                style={styles.Image}
                                                source={require('../images/executive.jpg')}
                                            />
                                        </View>
                                        <View >

                                            <Text style={styles.category_textInput}>Executive Experience</Text>
                                        </View>
                                </TouchableOpacity>
                               
                            </View>
                            
                          
                        </View>
                        <View>
                            <Text style={styles.category_Text}>Barbers</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <ScrollView horizontal={true} >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('BarbersDetails',{barberName:'ZEE THE BARBER'})}>

                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={{uri:'https://app.gettimely.com/azure/timely-images/4e814cf8-ff36-482f-914a-abe7f66d7fd1.jpg?width=180&height=180&quality=100&mode=crop'}}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>ZEE THE BARBER</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() =>  navigation.navigate('BarbersDetails',{barberName:'ALEX MOROZ'})}>

                                            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={{uri:'https://app.gettimely.com/azure/timely-images/f86288ba-d803-4738-9507-a264b0b6d0e3.jpg?width=180&height=180&quality=100&mode=crop'}}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>ALEX MOROZ</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        
                                        <TouchableOpacity onPress={() =>  navigation.navigate('BarbersDetails',{barberName:'SEBASTIAN MAKATA'})}>

                                            <View style={{ flexDirection: 'column', marginLeft: 20,marginRight: 10 }}>
                                                <View>
                                                    <Image
                                                        style={styles.more_category_Image}
                                                        source={{uri:'https://app.gettimely.com/azure/timely-images/be24d776-90ea-4352-b75c-f77f48d1e6ce.jpg?width=180&height=180&quality=100&mode=crop'}}
                                                    />
                                                </View>
                                                <View>

                                                    <Text style={styles.category_textInput}>SEBASTIAN MAKATA</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>




                            <Text style={styles.category_Text}>Testimonials</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <ScrollView 
                                // ref={(scrollView) => { this.scrollView = scrollView; }}
                                
                                style={styles.container1}
                                pagingEnabled={true}
                                horizontal= {true}
                                decelerationRate={0}
                                showsHorizontalScrollIndicator={false}
                                snapToInterval={windowWidth +10}
                                snapToAlignment={"center"}
                                contentInset={{
                                top: 0,
                                left: 30,
                                bottom: 0,
                                right: 30,
                                }}>
                                <View style={styles.testCard} >
                                    <View style={styles.testImageContainer}>
                                        <Image source={require('../images/hair3.jpg')} style={styles.testImage}/>
                                    </View>
                                    <Text style={styles.testName}>Malik Saad</Text>
                                    <View style={{ flexDirection: 'row',marginVertical:3}}>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                    </View>
                                    
                                    <View style={{position:'relative'}}>
                                        <Image source={require('../images/q1.png')} style={styles.q1Image}
                                        resizeMode='contain'
                                        />
                                        <Text style={styles.textDescription}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ea tenetur sint ab exercitationem deserunt a ex magni odit sunt.
                                        </Text>
                                        <Image source={require('../images/q2.png')} style={styles.q2Image}
                                        resizeMode='contain'
                                        />
                                    </View>
                                </View>
                                
                                
                                <View style={styles.testCard} >
                                    <View style={styles.testImageContainer}>
                                        <Image source={require('../images/bg1.jpg')} style={styles.testImage}/>
                                    </View>
                                    <Text style={styles.testName}>Malik Saad</Text>
                                    <View style={{ flexDirection: 'row',marginVertical:3}}>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                    </View>
                                    
                                    <View style={{position:'relative'}}>
                                        <Image source={require('../images/q1.png')} style={styles.q1Image}
                                        resizeMode='contain'
                                        />
                                        <Text style={styles.textDescription}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ea tenetur sint ab exercitationem deserunt a ex magni odit sunt.
                                        </Text>
                                        <Image source={require('../images/q2.png')} style={styles.q2Image}
                                        resizeMode='contain'
                                        />
                                    </View>
                                </View>


                                <View style={styles.testCard} >
                                    <View style={styles.testImageContainer}>
                                        <Image source={require('../images/hair3.jpg')} style={styles.testImage}/>
                                    </View>
                                    <Text style={styles.testName}>Malik Saad</Text>
                                    <View style={{ flexDirection: 'row',marginVertical:3}}>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                    </View>
                                    
                                    <View style={{position:'relative'}}>
                                        <Image source={require('../images/q1.png')} style={styles.q1Image}
                                        resizeMode='contain'
                                        />
                                        <Text style={styles.textDescription}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ea tenetur sint ab exercitationem deserunt a ex magni odit sunt.
                                        </Text>
                                        <Image source={require('../images/q2.png')} style={styles.q2Image}
                                        resizeMode='contain'
                                        />
                                    </View>
                                </View>


                                <View style={styles.testCard} >
                                    <View style={styles.testImageContainer}>
                                        <Image source={require('../images/bg1.jpg')} style={styles.testImage}/>
                                    </View>
                                    <Text style={styles.testName}>Malik Saad</Text>
                                    <View style={{ flexDirection: 'row',marginVertical:3}}>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                        <Entypo name="star" color="#FDCC0D" size={18}/>
                                    </View>
                                    
                                    <View style={{position:'relative'}}>
                                        <Image source={require('../images/q1.png')} style={styles.q1Image}
                                        resizeMode='contain'
                                        />
                                        <Text style={styles.textDescription}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ea tenetur sint ab exercitationem deserunt a ex magni odit sunt.
                                        </Text>
                                        <Image source={require('../images/q2.png')} style={styles.q2Image}
                                        resizeMode='contain'
                                        />
                                    </View>
                                </View>
                            </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    container1:{
        // backgroundColor:'green'
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
        position:'relative',
        // backgroundColor:'white'
    },
    header_container_landscape: {
        flex: 0.3,
        backgroundColor: '#D20909',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40

    },
    bell:{
        position:'absolute',
        marginTop: '6%',
        right:'3%',
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
        marginLeft: '3%',
        marginTop: '2%',
        marginBottom: '1%',
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
        fontSize: 14,
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
    },
    testCard: {
        marginTop: 46,
        backgroundColor: 'white',
        width: windowWidth - 80,
        margin: 10,
        height: 200,
        borderRadius: 10,
        padding:10,
        alignItems:'center',
        position:'relative',
        // borderWidth:1,
        // borderColor:'#D20909',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,

      },
      testImageContainer:{
        width:80,
        height:80,
        borderRadius:40,
        position:'absolute',
        top:-40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 10,
      },
      testImage:{
          width:80,
          height:80,
          borderRadius:40,
      },
      testName:{
          fontSize:18,
          color:'black',
          marginTop:34,
      },
      textDescription:{
          color:'black',
          textAlign: 'center',
          marginTop:4,
          marginHorizontal:2,
          fontSize:14,
      },
      q1Image:{
        width:50,
        height:50,
        position:'absolute',
        left:0,
        top:-20,
        opacity:0.2,
      },
      q2Image:{
        width:50,
        height:50,
        position:'absolute',
        bottom:-10,
        right:10,
        opacity:0.2,

      }
});