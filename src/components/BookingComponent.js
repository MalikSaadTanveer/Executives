//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, ScrollView,Dimensions,SafeAreaView} from 'react-native';
// import colors from '../constants/colors';
// import Dimensions from '../constants/Dimensions';
// import * as Animatable from 'react-native-animatable';
// import CustomIcons from './CustomIcons';
import {ScaledSheet} from 'react-native-size-matters';
// import fonts from '../constants/fonts';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign'
// import ServicesComponent from './ServicesComponent';
import TimeSlots from './TimeSlots';
// import BookNowButton from './BookNowButton';
// import LinearGradient from 'react-native-linear-gradient';
// import navigationStrings from '../constants/navigationStrings';
// import LinearGradient from 'react-native-linear-gradient';
// create a component

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const BookingComponent = ({navigation}) => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [monthYear, setMonthYear] = useState({
    month: month[new Date().getMonth()],
    year: new Date().getFullYear(),
    date: new Date().getDate(),
    day: dayName[new Date().getDay()],
  });
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
    console.log(isDatePickerVisible);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = value => {
    setMonthYear({
      month: month[value.getMonth()],
      year: value.getFullYear(),
      date: value.getDate(),
      day: dayName[value.getDay()],
    });
    hideDatePicker();
  };

  return (
    <SafeAreaView  style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Pressable onPress={showDatePicker}>
        <View style={styles.inner} >
          <View style={styles.date}>
            <Text style={styles.dateText}>{monthYear.date}</Text>
            <Text style={styles.day}>{monthYear.day}</Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>{monthYear.month}</Text>
            <AntDesign
              // tag="AntDesign"
              name="caretdown"
              style={styles.caretDownIcon}
            />
          </View>
          <View style={styles.year}>
            <Text style={styles.yearText}>{monthYear.year}</Text>
            <AntDesign
              // tag="AntDesign"
              name="caretdown"
              style={styles.caretDownIcon}
            />
          </View>
        </View>
        </Pressable>
        <TimeSlots/>

        <Pressable
            style={styles.payAtSalonContainer}
            // onPress={() => handleDesign('salon')}
            >
            <View style={styles.salonOverlay}></View>
            <Text style={styles.salonText}>Pay at salon</Text>
            <View
              style={[
                styles.circle,
                // design.salon && styles.activeCircle,
              ]}></View>
          </Pressable>
       </ScrollView>
       
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={date => {
          handleConfirm(date);
        }}
        onCancel={hideDatePicker}
        style={styles.datePicker}
      />
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: "100%",
    position: 'relative',
  },
  inner: {
    paddingHorizontal: '12@s',
    backgroundColor: '#D20909',
    width: "100%",
    // marginTop: '10@s',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '8@s',
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    // paddingVertical: '8@s',
    // borderRightColor: colors.lightGrey,
    // borderRightWidth: 1,
    // backgroundColor:'blue'
  },
  dateText: {
    fontSize: '30@s',
    color: 'white',
    // fontFamily: fonts.GothamBold,
  },
  day: {
    fontSize: '16@s',
    color: 'white',
    // fontFamily: fonts.GothamBook,
    textTransform: 'uppercase',
  },
  caretDownIcon: {
    color: 'white',
  },
  month: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: '8@s',
    // borderRightColor: colors.lightGrey,
    // borderRightWidth: 1,
    // backgroundColor:'red'


  },
  monthText: {
    fontSize: '18@s',
    color: 'white',
    // fontFamily: fonts.GothamBook,
    marginRight: '10@s',
  },
  year: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: '8@s',

  },
  yearText: {
    fontSize: '18@s',
    color: 'white',
    // fontFamily: fonts.GothamBook,
    marginRight: '10@s',
  },
  payAtSalonContainer: {
    // backgroundColor: 'blue',
    // backgroundColor: 'red',
    borderColor:'#D20909',
    borderWidth:1,
    margin:'12@s',
    height: '50@s',
    alignItems: 'center',
    paddingLeft: '30@s',
    paddingRight: '10@s',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    // borderTopRightRadius: '6@s',
    // borderBottomRightRadius: '6@s',
    borderRadius:'6@s',
  },
  
  salonOverlay: {
    height: '49@s',
    width: '20@s',
    position: 'absolute',
    left: -1,
    bottom:0,
    backgroundColor: '#D20909',
    borderTopLeftRadius: '6@s',
    borderBottomLeftRadius: '6@s',
  },
  salonText: {
    // fontFamily: fonts.GothamBold,
    fontSize: '20@s',
    color: 'black',
  },
  circle: {
    width: '30@s',
    height: '30@s',
    borderRadius: '15@s',
    borderColor: 'rgb(244,244,244)',
    backgroundColor: '#D20909',
    borderWidth: 10,
  },
  
});

//make this component available to the app
export default BookingComponent;
