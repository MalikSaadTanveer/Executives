import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//import screens
import HomeScreen from '../screens/HomeScreen';
import MyAppointmentScreen from '../screens/MyAppointmentScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
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
                    tabBarIcon: ({focused}) => {           return <AntDesign name="home" size={26} 
                    color={focused? '#edf2fa':'lightgrey'}/>; 
                            }  
                }}
                // tabBarOptions={{
                //     activeTintColor: '#D20909',
                //     inactiveTintColor: '#d9d9d9',
                //     style: {
                //       borderTopColor: '#66666666',
                //       backgroundColor: '#D20909',
                //       elevation: 0,
                //     },
                //   }}
            />

            <Tab.Screen name="MyProfile" component={MyAppointmentScreen} 
             options={{
                //tabBarIcon: () => <ButtonIconContainer name="persons" />
                tabBarIcon: ({focused}) => {           return <Ionicons name="person-outline" size={26} color={focused? '#edf2fa':'lightgrey'}/>;          }  
            }}
            />
            <Tab.Screen name="Services" component={MyProfileScreen} 
             options={{
                //tabBarIcon: () => <ButtonIconContainer name="persons" />
                tabBarIcon: ({focused}) => {           return <AntDesign name="customerservice" size={26} 
                color={focused? '#edf2fa':'lightgrey'}/>;          }  
            }}
            />
            <Tab.Screen name="Offers" component={MyProfileScreen} 
             options={{
                //tabBarIcon: () => <ButtonIconContainer name="persons" />
                tabBarIcon: ({focused}) => {           return <MaterialCommunityIcons name="offer" size={26}color={focused? '#edf2fa':'lightgrey'}/>;          }  
            }}
            />
            <Tab.Screen name="Settings" component={MyProfileScreen} 
             options={{
                //tabBarIcon: () => <ButtonIconContainer name="persons" />
                tabBarIcon: ({focused}) => {           return <AntDesign name="setting" size={26} 
                color={focused? '#edf2fa':'lightgrey'}/>;         }  
            }}
            />

        </Tab.Navigator>
    )
}
const ButtonIconContainer = (props) => {
    return <Ionicicons name={props.name} size={25} />
}