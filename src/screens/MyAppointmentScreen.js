import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SegmentedControlTab from "react-native-segmented-control-tab";

import Entypo from 'react-native-vector-icons/Entypo'
const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;
export default function MyAppointmentScreen({ navigation }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleIndexChange = index => {
    setSelectedIndex(index);
    console.log(index)
    //     this.setState({
    //       ...this.state,
    //       selectedIndex: index
    //     });
  }
  
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
    return ()=>{
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




    <View style={styles.container}>
      {OrientationStatus == 'PortraitMode' ?
        <>
          <View style={styles.header_container}>
            <View style={{ flexDirection: 'row',justifyContent:'center' }}>
              <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                <Text  >
                <Ionicons name="arrow-back" size={25} color="#ffffff" style={styles.header_icon} onPress={() => navigation.goBack()}/>
                </Text>
              </TouchableOpacity>
              <Text style={styles.header_Text}>Beauty Salon</Text>
            </View>
            <View style={{ width: '80%', marginLeft: '8%',position:'absolute',bottom:0 }}>
              <SegmentedControlTab
                values={["Upcoming", "Past", "Cancel"]}
                // selectedIndex={customStyleIndex}
                //onTabPress={this.handleCustomIndexSelect}
                borderRadius={10}
                // selectedIndex={0}
                //width={150}
                tabsContainerStyle={{
                  //  backgroundColor: 'gray', 
                  borderWidth: 0,
                  borderColor: 'transparent',
                  // marginTop:'5%'
                }}
                tabStyle={{
                  backgroundColor: '#D20909',
                  // color:'white',
                  borderWidth: 0,
                  borderColor: 'transparent',
                  // borderRadius:50,
                  marginTop: 12,
                }}
                activeTabStyle={{
                  backgroundColor: '#D20909',
                  //marginTop: 22, 
                  // textDecorationLine: 'underline'
                }}
                tabTextStyle={{
                  color: '#DCDCDC',
                  fontWeight: 'bold',
                  fontFamily: 'Handel Gothic',
                  fontSize: 18,
                  
                }}
                activeTabTextStyle={{
                  color: '#ffffff',
                  paddingBottom:6,
                  borderBottomColor: 'white',
                  borderBottomWidth:2,
                  // textDecorationLine: 'underline'
                }}
                // activeTabStyle={{ color: 'white', backgroundColor: 'white' }}
                selectedIndex={selectedIndex}
                onTabPress={handleIndexChange}

              />
            </View>

          </View>
          {selectedIndex == 0 ?
            <ScrollView style={{ flex: 1 }}>
              <View style={{ marginLeft: '5%', width: '90%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, marginTop: 60 }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>CONFIRM</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>

              <View style={{ marginLeft: '5%', width: '90%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>CONFIRM</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>
            </ScrollView>
            : selectedIndex == 1 ?
              <>
                <ScrollView style={{ flex: 1 }}>
                <View style={{ marginLeft: '5%', width: '90%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, marginTop: 60 }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>Completed</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>

              <View style={{ marginLeft: '5%', width: '90%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>Completed</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>
                </ScrollView>
              </>
              :
              <>
                <ScrollView style={{ flex: 1 }}>
                <View style={{ marginLeft: '5%', width: '90%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, marginTop: 60 }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>Cancelled</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>

              <View style={{ marginLeft: '5%', width: '90%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>Cancelled</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>
                </ScrollView>
              </>
          }
        </>
        :
        <ScrollView>
        <>
          <View style={styles.header_container}>
            <View style={{ flexDirection: 'row',justifyContent:'center' }}>
              <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                <Text  >
                <Ionicons name="arrow-back" size={25} color="#ffffff" style={styles.header_icon} onPress={() => navigation.goBack()}/>
                </Text>
              </TouchableOpacity>
              <Text style={styles.header_Text}>Beauty Salon</Text>
            </View>
            <View style={{ width: '80%', marginLeft: '8%', marginTop: '3%',position:'absolute',bottom:0 }}>
              <SegmentedControlTab
                values={["Upcoming", "Past", "Cancel"]}
                // selectedIndex={customStyleIndex}
                //onTabPress={this.handleCustomIndexSelect}
                borderRadius={10}
                // selectedIndex={0}
                //width={150}
                tabsContainerStyle={{
                  //  backgroundColor: 'gray', 
                  borderWidth: 0,
                  borderColor: 'transparent',
                  marginTop:'5%'
                }}
                tabStyle={{
                  backgroundColor: '#D20909',
                  // color:'white',
                  borderWidth: 0,
                  borderColor: 'transparent',
                  // borderRadius:50,
                  marginTop: 22,
                }}
                activeTabStyle={{
                  backgroundColor: '#D20909',
                  //marginTop: 22, 
                  // textDecorationLine: 'underline'
                }}
                tabTextStyle={{
                  color: '#DCDCDC',
                  fontWeight: 'bold',
                  fontFamily: 'Handel Gothic',
                  fontSize: 18,
                  
                }}
                activeTabTextStyle={{
                  color: '#ffffff',
                  paddingBottom:6,
                  borderBottomColor: 'white',
                  borderBottomWidth:2,
                  // textDecorationLine: 'underline'
                }}
                // activeTabStyle={{ color: 'white', backgroundColor: 'white' }}
                selectedIndex={selectedIndex}
                onTabPress={handleIndexChange}

              />
            </View>

          </View>
          {selectedIndex == 0 ?
            <ScrollView style={{ flex: 1 }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{ marginLeft: '4%', width: '45%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, marginTop: 60 }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>CONFIRM</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>

              <View style={{ marginLeft: '4%', width: '45%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, marginTop: 60 }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>CONFIRM</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>
              </View>
            </ScrollView>
            : selectedIndex == 1 ?
              <>
                <ScrollView style={{ flex: 1 }}>
                <View style={{flexDirection: 'row'}}>
              <View style={{ marginLeft: '4%', width: '45%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, marginTop: 60 }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>Completed</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>

              <View style={{ marginLeft: '4%', width: '45%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, marginTop: 60 }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>Completed</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>
              </View>
                </ScrollView>
              </>
              :
              <>
                <ScrollView style={{ flex: 1 }}>
                <View style={{flexDirection: 'row'}}>
              <View style={{ marginLeft: '4%', width: '45%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, marginTop: 60 }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>Cancelled</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>

              <View style={{ marginLeft: '4%', width: '45%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, marginTop: 60 }}>
                <View style={{ borderTopLeftRadius: 8,borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>Cancelled</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10,marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6,  color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16,  color: 'grey',width:'95%',}}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row',marginVertical:6}}>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                      <Entypo name="star" color="#FDCC0D" size={18}/>
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems:'center',padding:6,}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View>
              </View>
                </ScrollView>
              </>
          }
        </>
        </ScrollView>
      }
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 5,
    // paddingTop: 15,
    // backgroundColor: 'yellow'
    //paddingTop: 300
  },
  
  header_container: {
    // flex: 0.3,
    // backgroundColor: '#D20909',
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30

    // flex: 0.16,
    height:windowHeight * 0.15,
    backgroundColor: '#D20909',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    position:'relative',
    // backgroundColor:'black'
  },
  header_container_landscape: {
    // flex: 0.3,
    // backgroundColor: '#D20909',
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30

    flex: 0.3,
    backgroundColor: '#D20909',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // backgroundColor:'black'
  },
  header_Text: {
    fontSize: 20,
    // marginLeft: '18%',
    marginTop: '4%',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'

  },
  header_icon: {
    fontSize: 10,
    marginLeft: '5%',
    marginTop: '5%',
    fontWeight: 'bold',
    color: 'white',
    // textAlign: 'center'

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

  submitButton: {
    backgroundColor: '#FF0000',
    width: 380,
    marginLeft: 16,
    marginTop: 10,
    borderRadius: 8,


    padding: 10,
    margin: 5,
    height: 40,
    underline: { textDecorationLine: 'underline' }

  },
  submitButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17
  }
})
