import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Screen
import BottomTabNavigation from './src/BottomTabNavigation/BottomTabNavigation';
import SalonBranchScreen from './src/screens/SalonBranchScreen';
import ServiceScreen from './src/screens/ServiceScreen';
import MapScreen from './src/screens/MapScreen';
import OfferScreen from './src/screens/OfferScreen';
import SalonBranchDetail from './src/screens/SalonBranchDetail';
import SelectService from './src/screens/SelectService';
import SelectDateAndTime from './src/screens/SelectDateAndTime';
import BarbersDetails from './src/screens/BarbersDetails';
import TimeAndDate from './src/screens/TimeAndDate';
import AppointmentsOnlyScreen from './src/screens/AppointmentsOnlyScreen';
import Favourites from './src/screens/Favourites';
import Ratings from './src/screens/Ratings';
import CustomerSupport from './src/screens/CustomerSupport';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
        <Stack.Screen name="SalonBranch" component={SalonBranchScreen} />
        <Stack.Screen name='Service' component={ServiceScreen} />
        <Stack.Screen name='Map' component={MapScreen} />
        <Stack.Screen name='Offer' component={OfferScreen} />
        <Stack.Screen name='SalonBranchDetail' component={SalonBranchDetail} />
        <Stack.Screen name='SelectService' component={SelectService} />
        <Stack.Screen name='SelectDateAndTime' component={SelectDateAndTime} />
        <Stack.Screen name='BarbersDetails' component={BarbersDetails} />
        <Stack.Screen name='TimeAndDate' component={TimeAndDate} />
        <Stack.Screen name='AppointmentsOnlyScreen' component={AppointmentsOnlyScreen} />
        <Stack.Screen name='Favourites' component={Favourites} />
        <Stack.Screen name='Ratings' component={Ratings} />
        <Stack.Screen name='CustomerSupport' component={CustomerSupport} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}