import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView,Dimensions } from 'react-native';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
export default function SelectService({navigation}) {
    const [isSelected, setSelection] = useState(false);

    return (
        
        <View style={{flex:1}}>
            <View style={{ width: '100%', backgroundColor: '#D20909', height:windowHeight * 0.12,position:'relative' }}>

            <Ionicons name="arrow-back" size={25} color="#ffffff" style={styles.header_icon} onPress={() => navigation.goBack()}/>

                <View>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', alignSelf: 'center', marginVertical: 20 }}>Additive Beauty
                    </Text>

                </View>

                <ScrollView horizontal={true} 
                style={{ padding: 0,  marginHorizontal: 10, alignSelf: 'center',position:'absolute',bottom: 0,}} showsHorizontalScrollIndicator={false}>

                    <Text style={{ color: 'white', padding: 4,paddingHorizontal:16,fontSize:16, fontWeight:'bold',  marginRight:10,borderBottomWidth:1,borderColor:'white',  }}>Hair Wash</Text>
                    <Text style={{ color: 'rgba(255, 255, 255,0.8)', padding: 4, paddingHorizontal:16, fontSize:16, fontWeight:'bold',  marginRight:10  }}>Hair Cut</Text>
                    <Text style={{ color: 'rgba(255, 255, 255,0.8)', padding: 4, paddingHorizontal:16, fontSize:16, fontWeight:'bold',  marginRight:10  }}>Hair Color</Text>
                    <Text style={{ color: 'rgba(255, 255, 255,0.8)', padding: 4, paddingHorizontal:16, fontSize:16, fontWeight:'bold',  marginRight:10  }}>Face Scrub</Text>
                </ScrollView>



            </View>
            <ScrollView >
            <View>
                <Text style={{ color: '#D20909', fontWeight: 'bold', fontSize: 18, marginTop: 12, marginHorizontal: 16,marginBottom:4 }}>Women Hair Wash</Text>
            </View>


            <CheckCard header="Hair Wash Herbel" price="$30" duration="Duration : 20 Min" gender="Women Only" text="Looking for a quick hair cut? This the on for you."/>

            <CheckCard header="Professional Hair Wash" price="$25" duration="Duration : 30 Min" gender="Women Only" text="Looking for a quick hair cut? This the on for you."/>

            <CheckCard header="Hair Spa Wash" price="$35" duration="Duration : 45 Min" gender="Women Only" text="Looking for a quick hair cut? This the on for you."/>

            {/* <View style={{ borderRadius: 10, borderWidth: 0.25, marginLeft: 15, marginRight: 15, borderLeftWidth: 10, borderColor: '#D20909', marginTop: 15 }}>


                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginLeft: 17 }}> Professional Hair Wash           $25</Text>
                <Text style={{ color: 'black' }}>     Duration : 30 min    <Icon name="star" size={10} color="red" />  Women only</Text>
                <Text style={{ color: 'black' }}>     Looking for a quick haircut? This is the one</Text>
                <Text style={{ color: 'black' }}>     for you.</Text>
            </View>

            <View style={{ borderRadius: 10, borderWidth: 0.25, marginLeft: 15, marginRight: 15, borderLeftWidth: 10, borderColor: '#D20909', marginTop: 15 }}>


                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginLeft: 17 }}>Hair Spa Wash                            $35</Text>
                <Text style={{ color: 'black' }}>     Duration : 30 min    <Icon name="star" size={10} color="red" />  Women only</Text>
                <Text style={{ color: 'black' }}>     Looking for a quick haircut? This is the one</Text>
                <Text style={{ color: 'black' }}>     for you.</Text>
            </View> */}

            <View>
                <Text style={{ color: '#D20909', fontWeight: 'bold', fontSize: 18, marginTop: 12, marginHorizontal: 16,marginBottom:4 }}>Women's Hairs Cut</Text>

            </View>
            <CheckCard header="Hair Wash Herbel" price="$30" duration="Duration : 20 Min" gender="Women Only" text="Looking for a quick hair cut? This the on for you."/>

            <CheckCard header="Professional Hair Wash" price="$25" duration="Duration : 30 Min" gender="Women Only" text="Looking for a quick hair cut? This the on for you."/>


           
            </ScrollView>
            {/* <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}> */}
                {/* <Text style={{fontSize:30}}>My fixed footer</Text> */}
            <TouchableOpacity onPress={()=>navigation.navigate('SelectDateAndTime')} style={{ backgroundColor: '#D20909', height: 45,}}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>Book Now</Text>
            </TouchableOpacity>
            {/* </View> */}
        </View>


    );
}


const CheckCard = (props) => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={{ borderRadius: 1, borderWidth: 0.25, marginHorizontal: 15, marginBottom: 10, borderLeftWidth: 10, borderColor: '#D20909',padding:'4%',borderRadius:10 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold',  }}>{props.header}</Text>
                <View style={{ flexDirection: 'row', marginRight: 15, }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' ,}}>{props.price}</Text>
                    <CheckBox onClick={()=>{setSelection(!isSelected)}} isChecked={isSelected}/>
                </View>
            </View>
            <Text style={{ color: 'black' }}>{props.duration}    <Icon name="star" size={10} color="red" />  {props.gender}</Text>
            <Text style={{ color: 'black' }}>{props.text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header_icon: {
        fontSize: 30,
        // marginLeft: '7%',
        marginTop: '4%',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position:'absolute',
        left:20,
        
    },
})