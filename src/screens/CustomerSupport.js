//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard, TextInput,TouchableOpacity, ScrollView,SafeAreaView} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons'


// create a component
const CustomerSupport = ({ navigation }) => {

    useEffect(() => {
        const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
            Keyboard.dismiss();
        });
        return () => {
            keyboardHide.remove();
        };
    }, []);



    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={{ backgroundColor: '#D20909', padding: 12, alignItems: 'center' }}>
                <Ionicons name="arrow-back" size={25} style={[styles.header_icon,]}
                    onPress={() => navigation.goBack()} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Customer & Support</Text>
            </View>

            <View style={styles.inner}>
            <View style={styles.topTextContainer}>
                <Text style={styles.topText}>You can send us your support requests here, or email us directly at <Text style={styles.companyEmail}>sample@maniwebify.com.</Text></Text>
            </View>
                <View>
                    <Text style={styles.labels}>Email</Text>
                    <TextInput style={styles.emailBox}
                        placeholder='Email' placeholderTextColor={'grey'}
                        value="client@maniwebify.com"

                    />
                </View>
                <View>
                    {/* <Text style={styles.labels}>Description</Text> */}
                    <TextInput style={styles.descBox}
                        placeholder='Description' placeholderTextColor={'grey'}
                        
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical='top'
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style = {styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>

</ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header_icon: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        top: 14,
        left: 20,
    },
    inner: {
        width: '90%',
        marginLeft: '5%',
    },
    topTextContainer:{
        shadowColor: '#D20909',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 2,
        elevation: 11,
        backgroundColor: '#fff',

        paddingHorizontal:12,
        marginVertical:12,
        borderRadius:8
    },
    topText: {
        color: 'black',
        marginVertical: 12
    },
    companyEmail: {
        color: '#D20909',
    },
    labels: {
        color: '#D20909',
        fontSize: 16,
        marginTop: 6,
    },
    emailBox: {
        borderBottomColor: '#D20909',
        borderBottomWidth: 1,
        color: 'black',
        fontSize: 18,
        padding: 2,
    },
    descBox:{
        backgroundColor:"rgb(250,250,250)",
        marginTop:10,
        borderRadius:8,
        paddingHorizontal:10,
        fontSize:16,
        height:120,
        color:'black',
    },
    button:{
        backgroundColor:'#D20909',
        alignSelf:'flex-end',
        marginVertical:10,
        paddingVertical: 6,
        paddingHorizontal:12,
        borderRadius:6,


    },
    buttonText:{
        color:'white',
        fontSize:16
    }

});

//make this component available to the app
export default CustomerSupport;
