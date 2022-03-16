import { StyleSheet, View, Button, Text, TouchableOpacity, Image ,Dimensions, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function OfferScreen({ navigation, navigation: { goBack }}) {
    const windowWidth = Dimensions.get('screen').width;
    const windowHeight = Dimensions.get('screen').height;
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
                 <View style={{ backgroundColor: '#D20909', padding: 12, alignItems: 'center',marginBottom:12 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Offers</Text>
                </View>
            
            <ScrollView>
            <View style={{width:'90%',marginLeft:'5%',marginBottom:10,marginTop:10,flexDirection:'row',borderRadius:6,alignItems:'stretch',shadowColor: 'black',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 2,
                shadowRadius: 2,
                elevation: 4,
                backgroundColor: '#fff',}}>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#D20909',}}>
                    <Text style={{color:'white',fontSize:16,fontWeight:'bold', transform:[{rotate:'-90deg'}]}}>Discount</Text>
                </View>
                <View style={{padding:'2%',width:'80%'}}>
                    <Text style={{color:'#D20909',fontSize:16,marginBottom:'2%',fontWeight:'bold'}}>Beauty gives you 50% Discount on your first appointment</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'black',fontSize:16,}}>Beauty Brand</Text>
                            <Text style={{color:'black',fontSize:16,}}>03/03/2022</Text>
                        </View>
                    
                        <TouchableOpacity style={{backgroundColor:'#D20909',alignSelf:'flex-end',paddingVertical:'1%',paddingHorizontal:'6%',borderRadius:6 }}>
                            <Text style={{color:'white',fontSize:16,}}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{width:'90%',marginLeft:'5%',marginBottom:10,marginTop:10,flexDirection:'row',borderRadius:6,alignItems:'stretch',shadowColor: 'black',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 2,
                shadowRadius: 2,
                elevation: 4,
                backgroundColor: '#fff',}}>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#D20909',}}>
                    <Text style={{color:'white',fontSize:16,fontWeight:'bold', transform:[{rotate:'-90deg'}]}}>Discount</Text>
                </View>
                <View style={{padding:'2%',width:'80%'}}>
                    <Text style={{color:'#D20909',fontSize:16,marginBottom:'2%',fontWeight:'bold'}}>Beauty gives you 50% Discount on your first appointment</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'black',fontSize:16,}}>Beauty Brand</Text>
                            <Text style={{color:'black',fontSize:16,}}>03/03/2022</Text>
                        </View>
                    
                        <TouchableOpacity style={{backgroundColor:'#D20909',alignSelf:'flex-end',paddingVertical:'1%',paddingHorizontal:'6%',borderRadius:6 }}>
                            <Text style={{color:'white',fontSize:16,}}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <View style={{width:'90%',marginLeft:'5%',marginBottom:10,marginTop:10,flexDirection:'row',borderRadius:6,alignItems:'stretch',shadowColor: 'black',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 2,
                shadowRadius: 2,
                elevation: 4,
                backgroundColor: '#fff',}}>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#D20909',}}>
                    <Text style={{color:'white',fontSize:16,fontWeight:'bold', transform:[{rotate:'-90deg'}]}}>Discount</Text>
                </View>
                <View style={{padding:'2%',width:'80%'}}>
                    <Text style={{color:'#D20909',fontSize:16,marginBottom:'2%',fontWeight:'bold'}}>Beauty gives you 50% Discount on your first appointment</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'black',fontSize:16,}}>Beauty Brand</Text>
                            <Text style={{color:'black',fontSize:16,}}>03/03/2022</Text>
                        </View>
                    
                        <TouchableOpacity style={{backgroundColor:'#D20909',alignSelf:'flex-end',paddingVertical:'1%',paddingHorizontal:'6%',borderRadius:6 }}>
                            <Text style={{color:'white',fontSize:16,}}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
            </>
            :
            <ScrollView>
            <View style={{ backgroundColor: '#D20909', padding: 12, alignItems: 'center',marginBottom:12 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Offers</Text>
                </View>
            
            <View style={{width:'90%',marginLeft:'5%',marginBottom:10,flexDirection:'row',borderColor:'#D20909',borderWidth:1,borderRadius:6,alignItems:'stretch'}}>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#D20909',borderRadius:4}}>
                    <Text style={{color:'white',fontSize:16,fontWeight:'bold', transform:[{rotate:'-90deg'}]}}>Discount</Text>
                </View>
                <View style={{padding:'2%',width:'90%'}}>
                    <Text style={{color:'#D20909',fontSize:16,marginBottom:'2%',fontWeight:'bold'}}>Beauty gives you 50% Discount on your first appointment</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'black',fontSize:16,}}>Beauty Brand</Text>
                            <Text style={{color:'black',fontSize:16,}}>03/03/2022</Text>
                        </View>
                    
                        <TouchableOpacity style={{backgroundColor:'#D20909',alignSelf:'flex-end',paddingVertical:'1%',paddingHorizontal:'6%',borderRadius:6 }}>
                            <Text style={{color:'white',fontSize:16,}}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{width:'90%',marginLeft:'5%',marginBottom:10,flexDirection:'row',borderColor:'#D20909',borderWidth:1,borderRadius:6,alignItems:'stretch'}}>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#D20909',borderRadius:4}}>
                    <Text style={{color:'white',fontSize:16,fontWeight:'bold', transform:[{rotate:'-90deg'}]}}>Discount</Text>
                </View>
                <View style={{padding:'2%',width:'90%'}}>
                    <Text style={{color:'#D20909',fontSize:16,marginBottom:'2%',fontWeight:'bold'}}>Beauty gives you 50% Discount on your first appointment</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'black',fontSize:16,}}>Beauty Brand</Text>
                            <Text style={{color:'black',fontSize:16,}}>03/03/2022</Text>
                        </View>
                    
                        <TouchableOpacity style={{backgroundColor:'#D20909',alignSelf:'flex-end',paddingVertical:'1%',paddingHorizontal:'6%',borderRadius:6 }}>
                            <Text style={{color:'white',fontSize:16,}}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <View style={{width:'90%',marginLeft:'5%',marginBottom:10,flexDirection:'row',borderColor:'#D20909',borderWidth:1,borderRadius:6,alignItems:'stretch'}}>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#D20909',borderRadius:4}}>
                    <Text style={{color:'white',fontSize:16,fontWeight:'bold', transform:[{rotate:'-90deg'}]}}>Discount</Text>
                </View>
                <View style={{padding:'2%',width:'90%'}}>
                    <Text style={{color:'#D20909',fontSize:16,marginBottom:'2%',fontWeight:'bold'}}>Beauty gives you 50% Discount on your first appointment</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'black',fontSize:16,}}>Beauty Brand</Text>
                            <Text style={{color:'black',fontSize:16,}}>03/03/2022</Text>
                        </View>
                    
                        <TouchableOpacity style={{backgroundColor:'#D20909',alignSelf:'flex-end',paddingVertical:'1%',paddingHorizontal:'6%',borderRadius:6 }}>
                            <Text style={{color:'white',fontSize:16,}}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        
            </ScrollView>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // padding: 5,
        // paddingTop: 15,
       // backgroundColor: '#fff'
        //paddingTop: 300
    },
    header_container: {
        flex: 0.2,
        backgroundColor: '#D20909',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30

    },
    header_Text: {
        fontSize: 18,
        marginLeft: '18%',
        marginTop: '4%',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'

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
    text: {
        margin: 1,
        height: 40,
        marginLeft: 165,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000'
        //borderWidth: 1
    },
    submitButton3: {
        backgroundColor: '#D20909',
        padding: 10,
        margin: 15,
        height: 35,
        borderRadius:5,
        marginLeft:-70,
        marginTop:100,
        width:70
     },
     submitButton2: {
        backgroundColor: '#D20909',
        padding: 10,
        margin: 15,
        height: 35,
        borderRadius:5,
        marginLeft:-70,
        marginTop:100,
        width:70
     },
     submitButton1: {
        backgroundColor: '#D20909',
        padding: 10,
      //  margin: 15,
        height: 35,
        borderRadius:5,
        marginLeft:-66,
       marginTop:90,
        width:70
     },
   
    submitButtonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17
    }
})