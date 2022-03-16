//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet,ScrollView,Dimensions,TouchableOpacity,Modal,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BookingComponent from '../components/BookingComponent';
import { ScaledSheet } from 'react-native-size-matters';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
// create a component
const TimeAndDate = ({navigation}) => {
    const [modalActive, setModalActive] = useState(false);
    const handleModalAndConfirm = ()=>{
        setModalActive(true);
  
        setTimeout(()=>{
            setModalActive(false);
            navigation.navigate("Home")
        },3000)
    }


  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
        <View style={{backgroundColor:'white',marginLeft:15, marginRight:15,marginBottom:'3%',alignItems:'center'}}>
            <Ionicons name="arrow-back" size={25} color="#ffffff" style={styles.header_icon} onPress={() => navigation.goBack()}/>

                <Text style={{color:'black', fontWeight:'bold',fontSize:22}}>Date & Time</Text>
            </View>

            <BookingComponent/>

            <TouchableOpacity onPress={()=>handleModalAndConfirm()} style={{ backgroundColor: '#D20909',}}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>Confirm Order</Text>
            </TouchableOpacity>
            
      {/* </ScrollView> */}


      <Modal visible={modalActive} transparent={true} >
        <View style={styles.modalOuter}>
          <View style={styles.modalInner}>
            <Image
              source={require('../images/success.png')}
              style={styles.modalImage}
            />
            <Text style={styles.modalLowerText}>Booking Confirmed</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// define your styles
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  header_icon: {
    fontSize: 30,
    // marginLeft: '7%',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    position:'absolute',
    left:0,
    
},
modalOuter: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInner: {
    backgroundColor: 'white',
    width: WIDTH * 0.8,
    height:WIDTH * 0.8,
    borderRadius: '10@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage: {
    width:WIDTH * 0.6,
    height:WIDTH * 0.6,
  },
 
  modalLowerText: {
    color: '#D20909',
    // fontFamily: fonts.GothamBold,
    fontSize: '18@s',
  },
});

//make this component available to the app
export default TimeAndDate;
