//import liraries
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
// import colors from '../constants/colors';
// import fonts from '../constants/fonts';
// import * as Animatable from 'react-native-animatable';

// create a component
const TimeSlots = () => {
  const [timeSolts, setTimeSolts] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const createTimeSlots = (fromTime, toTime) => {
    let startTime = moment(fromTime, 'hh:mm A');
    let endTime = moment(toTime, 'hh:mm A');

    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }
    let arr = [];
    while (startTime <= endTime) {
      arr.push(new moment(startTime).format('hh:mm A'));
      startTime.add(30, 'minutes');
    }
    return arr;
  };
  useEffect(() => {
    setTimeSolts(createTimeSlots('10:00 AM', '09:30 PM'));
  }, []);
  const handleClick=(i)=>{
    setSelectedSlot(i)
  }
  return (
    <View animation="slideInUp" style={styles.container}>
      <Text style={styles.title}>Choose Time</Text>
      <View style={styles.slotsContainer}>
      {timeSolts.map((item, i) => (
        <Pressable key={i} style={[styles.slots,
        {backgroundColor:selectedSlot == i ? '#D20909' : 'transparent'}]} 
        onPress={()=>handleClick(i)}>
          <Text style={[styles.slotsText,{color:selectedSlot == i ? 'white' : 'black'}]}>{item}</Text>
        </Pressable>
      ))}
      </View>
    </View>
  );
};

// define your styles
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    textTransform: 'uppercase',
    // fontFamily: fonts.GothamBold,
    color: 'black',
    fontSize: '14@s',
    padding: '12@s',
    alignSelf: 'flex-start',
    marginTop: '10@s',
  },
  slotsContainer:{
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent:'space-evenly',
      alignItems: 'center',
      paddingHorizontal:'12@s'
  },
  slots:{
    borderColor:'#D20909',
    borderWidth:1,
    width:'24%',
    alignItems: 'center',
    marginVertical:'2@s',
    paddingVertical:'6@s',
    borderRadius:'10@s'
  },
  activeSlots:{
    backgroundColor:'#D20909',
  },
  slotsText:{
    // fontFamily:fonts.GothamBold,
    color:'black',
    fontSize: '10@s',
    fontWeight: 'bold'
  },

});

//make this component available to the app
export default TimeSlots;
