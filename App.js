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

      </Stack.Navigator>
    </NavigationContainer>
  )
}