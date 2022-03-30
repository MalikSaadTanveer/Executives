import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

//import screens
import HomeScreen from '../screens/HomeScreen';
import MyAppointmentScreen from '../screens/MyAppointmentScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import Offer from '../screens/OfferScreen';
import BarbersDetails from '../screens/BarbersDetails';
const Tab = createBottomTabNavigator();
export default function BottomTabNavigation() {
    return (
        <Tab.Navigator  screenOptions={{
            headerShown: false,
            backgroundColor:'#D20909',
            //width:90,
            tabBarStyle: { height: 60,backgroundColor:'#D20909' },
            tabBarLabelStyle:{
                display:'none'
            },
          }}
        //   tabBarOptions={{
        //     activeTintColor: 'white',
        //     inactiveTintColor: 'grey',
        //     style: {
        //         backgroundColor: 'black',
        //         heigh:90
        //       },
        //       tabStyle: {
        //         backgroundColor: '#D20909',
        //         heigh:90
        //       },
        //   }}
          
          >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                   // tabBarIcon:{name:'home' ,size:25}
                    // () => <ButtonIconContainer name="home" />
                    tabBarIcon: ({focused}) => {           return <AntDesign name="home" size={focused? 34:26} style={{width:34}}
                    color={focused? '#edf2fa':'black'}/>; 
                            }  
                }}
            />

            <Tab.Screen name="Appointment" component={MyAppointmentScreen} 
             options={{
                //tabBarIcon: () => <ButtonIconContainer name="persons" />
                tabBarIcon: ({focused}) => {           return <AntDesign name="calendar" size={focused? 34:26} color={focused? '#edf2fa':'black'} style={{width:34}}/>;          }  
            }}
            />
            <Tab.Screen name="Services" component={BarbersDetails} 
             options={{
                //tabBarIcon: () => <ButtonIconContainer name="persons" />
                tabBarIcon: ({focused}) => {           return <Entypo name="archive" size={focused? 34:26} style={{width:34}}
                color={focused? '#edf2fa':'black'}/>;          }  
            }}
            />
            <Tab.Screen name="Offers" component={Offer} 
             options={{
                //tabBarIcon: () => <ButtonIconContainer name="persons" />
                tabBarIcon: ({focused}) => {           return <Feather name="gift" size={focused? 34:26} color={focused? '#edf2fa':'black'} style={{width:34}}/>;          }  
            }}
            />
            <Tab.Screen name="Settings" component={MyProfileScreen} 
             options={{
                //tabBarIcon: () => <ButtonIconContainer name="persons" />
                tabBarIcon: ({focused}) => {           return <AntDesign name="setting" size={focused? 34:26} style={{width:34}}
                color={focused? '#edf2fa':'black'}/>;         }  
            }}
            />

        </Tab.Navigator>
    )
}
const ButtonIconContainer = (props) => {
    return <Ionicicons name={props.name} size={25} />
}