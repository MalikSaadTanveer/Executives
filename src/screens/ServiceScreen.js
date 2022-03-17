import { StyleSheet, View, Button, Text, TouchableOpacity, Image } from 'react-native';
import React , { useState } from 'react'
import SegmentedControlTab from "react-native-segmented-control-tab";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function ServiceScreen({navigation}) {
  const [selectedIndex, setSelectedIndex] = useState('');
  const handleIndexChange = index => {
    setSelectedIndex(index);
    console.log(index)
    //     this.setState({
    //       ...this.state,
    //       selectedIndex: index
    //     });
}
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.header_icon} onPress={() => goBack()}>
            <Text  >
              <Icon name="arrow-left" size={25} color="#ffffff" />
            </Text>
          </TouchableOpacity>
          <Text style={styles.header_Text}>Beauty Salon</Text>
        </View>
        <View >
        <SegmentedControlTab
                values={["Upcoming", "Past", "Cancel"]}
                // selectedIndex={customStyleIndex}
                //onTabPress={this.handleCustomIndexSelect}
                borderRadius={30}

                tabsContainerStyle={{ 
                //  backgroundColor: 'gray', 
                  borderWidth: 0,
                   borderColor: 'transparent' }}
                tabStyle={{
                    backgroundColor: 'red',
                    // color:'white',
                    borderWidth: 0,
                    borderColor: 'transparent',
                   // borderRadius:50,
                    marginTop: 22, 
                }}
                activeTabStyle={{ 
                  backgroundColor: 'red',
                 marginTop: 22, 
                 textDecorationLine: 'underline' }}
                tabTextStyle={{ color: '#ffffff',
                 fontWeight: 'bold', 
                 fontFamily: 'Handel Gothic', 
                 fontSize: 22 }}
                activeTabTextStyle={{ color: '#ffffff',
                 textDecorationLine: 'underline' }}
                // activeTabStyle={{ color: 'white', backgroundColor: 'white' }}
                selectedIndex={selectedIndex}
                onTabPress={handleIndexChange}

            />
        </View>

      </View>
    </View>
  )
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
    flex: 0.3,
    backgroundColor: '#FF0000',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30

  },
  header_Text: {
    fontSize: 30,
    marginLeft: '18%',
    marginTop: '7%',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'

  },
  header_icon: {
    fontSize: 30,
    marginLeft: '5%',
    marginTop: '10%',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'

  },
 
});