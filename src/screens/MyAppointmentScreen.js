import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity, Image, ScrollView, Dimensions,SafeAreaView } from 'react-native';
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
      image: require('../images/complete.jpg'),
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
  ]
  const past = [
    {
      image: require('../images/complete.jpg'),
      status: 'Completed',
      title: 'Addictive Beauty',
      desc: "West minister Business Road, UK",
      time: '16,April 2020-05:00 pm',
    },
    {
      image: require('../images/complete.jpg'),
      status: 'Completed',
      title: 'Addictive Beauty',
      desc: "West minister Business Road, UK",
      time: '16,April 2020-05:00 pm',
    },
  ]
  const cancel = [
    {
      image: require('../images/executive.jpg'),
      status: 'Cancelled',
      title: 'Addictive Beauty',
      desc: "West minister Business Road, UK",
      time: '16,April 2020-05:00 pm',
    },
    {
      image: require('../images/complete.jpg'),
      status: 'Cancelled',
      title: 'Addictive Beauty',
      desc: "West minister Business Road, UK",
      time: '16,April 2020-05:00 pm',
    },
    {
      image: require('../images/complete.jpg'),
      status: 'Cancelled',
      title: 'Addictive Beauty',
      desc: "West minister Business Road, UK",
      time: '16,April 2020-05:00 pm',
    },
  ]


  return (




    <SafeAreaView style={styles.container}>
      {OrientationStatus == 'PortraitMode' ?
        <>
          <View style={styles.header_container}>
            <View style={{ backgroundColor: '#D20909', padding: 12, alignItems: 'center' }}>
              {/* <Ionicons name="arrow-back" size={25} style={styles.header_icon} onPress={() => navigation.goBack()} /> */}
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Appointments</Text>
            </View>


          </View>

          <View style={{ width: '90%', marginLeft: '5%', }}>
            <SegmentedControlTab
              values={["Upcoming", "Past", "Cancel"]}
              // selectedIndex={customStyleIndex}
              //onTabPress={this.handleCustomIndexSelect}
              borderRadius={2}
              // selectedIndex={0}
              //width={150}
              tabsContainerStyle={{
                //  backgroundColor: 'gray', 
                borderWidth: 0,
                borderColor: 'transparent',
                // marginTop:'5%'
              }}
              tabStyle={{
                opacity: 0.8,
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 2,
                shadowRadius: 2,
                elevation: 4,
                backgroundColor: '#fff',
                // color:'white',
                borderWidth: 0,
                borderColor: 'transparent',
                // borderRadius:50,
                marginVertical: 12,
              }}
              activeTabStyle={{
                backgroundColor: '#D20909',
                
                //marginTop: 22, 
                // textDecorationLine: 'underline'
              }}
              tabTextStyle={{
                color: 'grey',
                fontWeight: 'bold',
                fontFamily: 'Handel Gothic',
                fontSize: 18,

              }}
              activeTabTextStyle={{
                color: 'white',
              }}
              selectedIndex={selectedIndex}
              onTabPress={handleIndexChange}

            />
          </View>





          {selectedIndex == 0 ?
            <ScrollView style={{ flex: 1 }}>


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






              {/* <View style={{ marginLeft: '5%', width: '90%', borderWidth: 1, borderRadius: 8, flexDirection: 'column', marginBottom: 30, }}>
                <View style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, flex: 1, backgroundColor: '#D20909' }}>
                  <TouchableOpacity onPress={() => { }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingTop: 12, color: 'white' }}>CONFIRM</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 2.6, flexDirection: 'row' }}>
                  <View>
                    <Image
                      style={{ width: 80, height: 80, marginTop: 10, borderRadius: 10, marginLeft: 10, marginRight: 10 }}
                      source={require('../images/hair1.jpg')}
                    />
                  </View>

                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 6, color: 'black' }}>Addictive Beauty</Text>
                    <Text style={{ fontSize: 16, color: 'grey', width: '95%', }}>West minister Business Road ,UK</Text>
                    <Text style={{ fontSize: 16, color: 'grey' }}>16,April 2020-05:00 pm</Text>

                    <View style={{ flexDirection: 'row', marginVertical: 6 }}>
                      <Entypo name="star" color="#FDCC0D" size={18} />
                      <Entypo name="star" color="#FDCC0D" size={18} />
                      <Entypo name="star" color="#FDCC0D" size={18} />
                      <Entypo name="star" color="#FDCC0D" size={18} />
                      <Entypo name="star" color="#FDCC0D" size={18} />
                    </View>
                  </View>



                </View>

                <View style={{ flex: 1, borderTopWidth: 1, alignItems: 'center', padding: 6, }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 'auto', paddingLeft: 30, color: '#D20909' }}> Total Price : $85</Text>

                </View>

              </View> */}
            </ScrollView>
            : selectedIndex == 1 ?
              <>
                <ScrollView style={{ flex: 1 }}>

                  {
                    past.map((item, index) => (
                      <View style={styles.card} key={index}>
                        <View style={styles.topContainer}>
                          <View style={styles.imageContainer}>
                            <Image source={item.image} style={styles.topImage} />
                          </View>
                          <Text style={[styles.topText, { color: 'green' }]}>{item.status}</Text>
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

                </ScrollView>
              </>
              :
              <>
                <ScrollView style={{ flex: 1 }}>
                  {
                    cancel.map((item, index) => (
                      <View style={styles.card} key={index}>
                        <View style={styles.topContainer}>
                          <View style={styles.imageContainer}>
                            <Image source={item.image} style={styles.topImage} />
                          </View>
                          <Text style={styles.topText}>{item.status}</Text>
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
                </ScrollView>
              </>
          }
        </>
        :
        <ScrollView>
          <>
            <View style={styles.header_container}>
            <View style={{ backgroundColor: '#D20909', padding: 12, alignItems: 'center' }}>
              {/* <Ionicons name="arrow-back" size={25} style={styles.header_icon} onPress={() => navigation.goBack()} /> */}
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Appointments</Text>
            </View>

            </View>

            <View style={{ width: '90%', marginLeft: '5%', }}>
            <SegmentedControlTab
              values={["Upcoming", "Past", "Cancel"]}
              // selectedIndex={customStyleIndex}
              //onTabPress={this.handleCustomIndexSelect}
              borderRadius={2}
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
                opacity: 0.8,
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 2,
                shadowRadius: 2,
                elevation: 4,
                backgroundColor: '#fff',
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
                color: 'grey',
                fontWeight: 'bold',
                fontFamily: 'Handel Gothic',
                fontSize: 18,

              }}
              activeTabTextStyle={{
                color: 'white',
              }}
              selectedIndex={selectedIndex}
              onTabPress={handleIndexChange}

            />
          </View>



            {selectedIndex == 0 ?
              <ScrollView style={{ flex: 1 }}>
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
              : selectedIndex == 1 ?
                <>
                  <ScrollView style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '90%', marginLeft: '5%' }}>

                      {
                        past.map((item, index) => (
                          <View style={[styles.card, { width: '48%', marginLeft: 0, }]} key={index}>
                            <View style={styles.topContainer}>
                              <View style={styles.imageContainer}>
                                <Image source={item.image} style={styles.topImage} />
                              </View>
                              <Text style={[styles.topText, { color: 'green' }]}>{item.status}</Text>
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
                </>
                :
                <>
                  <ScrollView style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '90%', marginLeft: '5%' }}>

                      {
                        cancel.map((item, index) => (
                          <View style={[styles.card, { width: '48%', marginLeft: 0, }]} key={index}>
                            <View style={styles.topContainer}>
                              <View style={styles.imageContainer}>
                                <Image source={item.image} style={styles.topImage} />
                              </View>
                              <Text style={styles.topText}>{item.status}</Text>
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
                </>
            }
          </>
        </ScrollView>
      }
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header_container: {

    // height: windowHeight * 0.15,
    backgroundColor: '#D20909',
    position: 'relative',
  },
  header_container_landscape: {
    flex: 0.3,
    backgroundColor: '#D20909',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header_Text: {
    fontSize: 20,
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
    position: 'absolute',
    left: 20,

  },
  text: {
    margin: 1,
    height: 40,
    marginLeft: 165,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000'

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
    marginTop:-20,
  }

})
