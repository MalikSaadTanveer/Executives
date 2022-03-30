//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

// create a component
const Notifications = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: '#D20909', padding: 12, alignItems: 'center' }}>
                <Ionicons name="arrow-back" size={25} style={[styles.header_icon,]}
                    onPress={() => navigation.goBack()} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Notifications</Text>
            </View>        

            <View style={styles.inner}>
                <Text style={styles.headText}>You have no upcoming notifications</Text>
                <Text style={styles.bottomText}>Your upcoming notifications will show up here.</Text>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: 'white',
    },
    header_icon: {
        fontSize: 30,
        // marginLeft: '7%',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        top: 14,
        left: 20,

    },
    inner:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginLeft: '5%',
    },
    headText:{
        color:'black',
        fontSize: 18,
        color:'#D20909', 
        marginBottom:6,
        fontWeight:'bold'
    },
    bottomText:{
        color:'black',
        fontSize: 16,
        textAlign: 'center',
    }
});

//make this component available to the app
export default Notifications;
