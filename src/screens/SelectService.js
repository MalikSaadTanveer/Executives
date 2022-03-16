import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView,Dimensions } from 'react-native';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
export default function SelectService({navigation,route}) {
    // const [isSelected, setSelection] = useState(false);
    const {data} = route.params;
    return (
        
        <View style={{flex:1}}>
            <View style={{ width: '100%', backgroundColor: '#D20909', height:60,position:'relative' }}>

            <Ionicons name="arrow-back" size={25} color="#ffffff" style={styles.header_icon} onPress={() => navigation.goBack()}/>

                <View>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', alignSelf: 'center', marginTop: 20, }}>Services
                    </Text>

                </View>
            </View>
            <ScrollView >
            <View>
                <Text style={{ color: '#D20909', fontWeight: 'bold', fontSize: 20, marginTop: 12, marginHorizontal: '5%',marginBottom:4 }}>Select Services</Text>
            </View>
   
                {
                    data.map((item,i)=>(
                        <CheckCard key = {i} header={item.title} price={item.price} duration={item.duration}  
                        text={item.desc ? item.desc : '' } />

                    ))
                }
            </ScrollView>
            {/* <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}> */}
                {/* <Text style={{fontSize:30}}>My fixed footer</Text> */}
            <TouchableOpacity onPress={()=>navigation.navigate('SelectDateAndTime')} style={{ backgroundColor: '#D20909',}}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>Book Now</Text>
            </TouchableOpacity>
            {/* </View> */}
        </View>


    );
}


const CheckCard = (props) => {
    const [isSelected, setSelection] = useState(false);
    const [moreInfo, setMoreInfo] = useState(false)
    const [infoText, setInfoText] = useState('More info')
    return (
        <View style={{ borderRadius: 1, borderWidth: 0.25, marginHorizontal: '5%',width:'90%', marginBottom: 10, borderLeftWidth: 10, borderColor: '#D20909',padding:'4%',borderRadius:10 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', width:'70%' }}>{props.header}</Text>
                <View style={{ flexDirection: 'row',  }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' ,}}>{props.price}</Text>
                    <CheckBox onClick={()=>{setSelection(!isSelected)}} isChecked={isSelected}/>
                </View>
            </View>
            <Text style={{ color: 'grey',fontSize:16 }}>Duration: {props.duration}</Text>
            {
                moreInfo && 
                <Text style={{ color: 'black',textAlign:'justify',marginTop:6 }}>{props.text}</Text>
            }
            {
                props.text ?
                <Text onPress = {()=>{setMoreInfo(!moreInfo); 
                setInfoText(infoText == "More info"?'Less view':'More info');}}
                style={styles.moreInfo}>{infoText}</Text>
                :<></>
            }
                
        </View>
    )
}


const styles = StyleSheet.create({
    header_icon: {
        fontSize: 30,
        // marginLeft: '7%',
        marginTop: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        position:'absolute',
        left:20,  
    },
    moreInfo:{
        color:'black',
        textDecorationLine: 'underline',
        marginTop:4,
    },
})