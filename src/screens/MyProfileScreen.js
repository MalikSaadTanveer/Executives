import { StyleSheet, View, Button, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
// import { useEffect } from 'react';
export default function MyProfileScreen() {
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
          <View style={{ position: 'relative' }} >
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

              <View style={styles.imageShadow}>
                <Image
                  style={{ borderRadius: 70, height: 140, width: 140,  }}
                  source={require('../images/complete.jpg')}
                />
              </View>
              <View style={{ marginTop: '4%', position: 'absolute', top: 0, right: 10 }}>
                <Feather name="edit" size={25} color={'grey'} />
              </View>
            </View>
            <Text style={{ fontSize: 20, color: 'grey', textAlign: 'center', fontWeight: 'bold', marginTop: 6 }}> Imran Sahb</Text>

          </View>



          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 20, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <Icon name="calendar" size={25} color={'grey'}></Icon>
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>My Appointment</Text>

            </View>

          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <Icon name="heart" size={25} color={'grey'}></Icon>
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>My Favourites</Text>

            </View>

          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <FontAwesome5 name="grin-stars" size={25} color={'grey'} />
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>Rattings</Text>

            </View>

          </TouchableOpacity>


          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <FontAwesome5 name="headphones" size={25} color={'grey'} />
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>Customer & Support</Text>

            </View>

          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <Icon name="gears" size={25} color={'grey'} />
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>English</Text>

            </View>

          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <MaterialCommunityIcons name="logout" size={25} color={'grey'} />
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>Logout</Text>

            </View>

          </TouchableOpacity>



          {/* <View style={{ marginRight: 15, marginLeft: 15,padding:6,paddingLeft:16, backgroundColor: '#D20909', marginTop: 4,flexDirection:'row',alignItems:'center',borderRadius:6 }}>
        <Icon name="heart" size={25}  color={'white'}></Icon>
        <TouchableOpacity style={{  height: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>My Favourites</Text>
        </TouchableOpacity>
      </View> */}




          {/* <View style={{ marginRight: 15, marginLeft: 15,padding:6,paddingLeft:16, backgroundColor: '#D20909', marginTop: 4,flexDirection:'row',alignItems:'center',borderRadius:6 }}>
        <FontAwesome5 name="grin-stars" size={25}  color={'white'}/>
        <TouchableOpacity style={{  height: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Rattings</Text>
        </TouchableOpacity>
      </View> */}





          {/* <View style={{ marginRight: 15, marginLeft: 15,padding:6,paddingLeft:16, backgroundColor: '#D20909', marginTop: 4,flexDirection:'row',alignItems:'center',borderRadius:6 }}>
        <Icon name="headphones" size={25}  color={'white'}></Icon>
        <TouchableOpacity style={{  height: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Customer & Support</Text>
        </TouchableOpacity>
      </View> */}


          {/* <View style={{ marginRight: 15, marginLeft: 15,padding:6,paddingLeft:16, backgroundColor: '#D20909', marginTop: 4,flexDirection:'row',alignItems:'center',borderRadius:6 }}>
        <Icon name="gears" size={25}  color={'white'}></Icon>
        <TouchableOpacity style={{  height: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>English</Text>
        </TouchableOpacity>
      </View> */}



          {/* <View style={{ marginRight: 15, marginLeft: 15,padding:6,paddingLeft:16, backgroundColor: '#D20909', marginTop: 4,flexDirection:'row',alignItems:'center',borderRadius:6 }}>
        <MaterialCommunityIcons name="logout" size={25} color={'white'}></MaterialCommunityIcons>
        <TouchableOpacity style={{ height: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Logout</Text>
        </TouchableOpacity>
      </View> */}


        </>


        :
        <ScrollView>
          <View style={{ position: 'relative' }} >
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

            <View style={[styles.imageShadow,{marginTop:'5%'}]}>
              <Image
                style={{ borderRadius: 70, height: 140, width: 140,  }}
                source={require('../images/complete.jpg')}
              />
              </View>
              <View style={{ marginTop: '4%', position: 'absolute', top: 0, right: 10 }}>
                <Feather name="edit" size={25} color={'grey'} />
              </View>
            </View>
            <Text style={{ fontSize: 20, color: 'grey', textAlign: 'center', fontWeight: 'bold', marginTop: 6 }}> User Name</Text>

          </View>



          {/* <View style={{ marginRight: 15, marginLeft: 15,padding:6,paddingLeft:16, backgroundColor: '#D20909', marginTop: 20,flexDirection:'row',alignItems:'center',borderRadius:6 }}>
        <Icon name="calendar" size={25}  color={'white'}></Icon>
        <TouchableOpacity style={{ height: 35 }}>

          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>My Appointment</Text>

        </TouchableOpacity>

      </View>



      <View style={{ marginRight: 15, marginLeft: 15,padding:6,paddingLeft:16, backgroundColor: '#D20909', marginTop: 4,flexDirection:'row',alignItems:'center',borderRadius:6 }}>
        <Icon name="heart" size={25}  color={'white'}></Icon>
        <TouchableOpacity style={{  height: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>My Favourites</Text>
        </TouchableOpacity>
      </View>




      <View style={{ marginRight: 15, marginLeft: 15,padding:6,paddingLeft:16, backgroundColor: '#D20909', marginTop: 4,flexDirection:'row',alignItems:'center',borderRadius:6 }}>
      <FontAwesome5 name="grin-stars" size={25}  color={'white'}/>
        <TouchableOpacity style={{  height: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Rattings</Text>
        </TouchableOpacity>
      </View>





      <View style={{ marginRight: 15, marginLeft: 15,padding:6,paddingLeft:16, backgroundColor: '#D20909', marginTop: 4,flexDirection:'row',alignItems:'center',borderRadius:6 }}>
        <Icon name="headphones" size={25}  color={'white'}></Icon>
        <TouchableOpacity style={{  height: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Customer & Support</Text>
        </TouchableOpacity>
      </View>


      <View style={{ marginRight: 15, marginLeft: 15,padding:6,paddingLeft:16, backgroundColor: '#D20909', marginTop: 4,flexDirection:'row',alignItems:'center',borderRadius:6 }}>
        <Icon name="gears" size={25}  color={'white'}></Icon>
        <TouchableOpacity style={{  height: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>English</Text>
        </TouchableOpacity>
      </View>



      <View style={{ marginRight: 15, marginLeft: 15,padding:6,paddingLeft:16, backgroundColor: '#D20909', marginTop: 4,flexDirection:'row',alignItems:'center',borderRadius:6 }}>
        <MaterialCommunityIcons name="logout" size={25} color={'white'}></MaterialCommunityIcons>
        <TouchableOpacity style={{ height: 35 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Logout</Text>
        </TouchableOpacity>
      </View> */}



          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 20, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <Icon name="calendar" size={25} color={'grey'}></Icon>
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>My Appointment</Text>

            </View>

          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <Icon name="heart" size={25} color={'grey'}></Icon>
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>My Favourites</Text>

            </View>

          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <FontAwesome5 name="grin-stars" size={25} color={'grey'} />
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>Rattings</Text>

            </View>

          </TouchableOpacity>


          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <FontAwesome5 name="headphones" size={25} color={'grey'} />
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>Customer & Support</Text>

            </View>

          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <Icon name="gears" size={25} color={'grey'} />
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>English</Text>

            </View>

          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 15, marginLeft: 15, padding: 6, paddingLeft: 16, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 6, borderBottomWidth: 1, borderBottomColor: 'rgb(244,244,244)' }}>
            <MaterialCommunityIcons name="logout" size={25} color={'grey'} />
            <View style={{ height: 35 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', paddingLeft: 20 }}>Logout</Text>

            </View>

          </TouchableOpacity>

        </ScrollView>
      }


    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 15,
    backgroundColor: '#fff'
    //paddingTop: 300
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

  // submitButton: {
  //     backgroundColor: '#FF0000',
  //     width: 380,
  //     marginLeft: 16,
  //     marginTop: 10,
  //     borderRadius: 8,


  //     padding: 10,
  //     margin: 5,
  //     height: 40,
  //     underline: { textDecorationLine: 'underline' }

  // },
  submitButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17
  },
  imageShadow:{
    borderRadius: 70, height: 140, width: 140,
      marginTop: '10%',
      shadowColor: '#D20909',
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 2,
      shadowRadius: 2,
      elevation: 11,
      backgroundColor: '#fff',
  }
});