import React,{useState} from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity, Image,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SelectDateAndTime({navigation}) {
 
    return (
        <View style={styles.container}>
        <ScrollView>
           <View style={{backgroundColor:'white',marginLeft:15, marginRight:15,marginBottom:'6%',alignItems:'center'}}>
           <Ionicons name="arrow-back" size={25} style={styles.header_icon} onPress={() => navigation.goBack()}/>

               <Text style={{color:'black', fontWeight:'bold',fontSize:22}}>Selected Services</Text>
           </View>


           <CheckCard header="Hair Wash Herbel" price="$30" duration="Duration : 20 Min" gender="Women Only" text="Looking for a quick hair cut? This the on for you."/>
           <CheckCard header="Hair Wash Herbel" price="$30" duration="Duration : 20 Min" gender="Women Only" text="Looking for a quick hair cut? This the on for you."/>
           <CheckCard header="Hair Wash Herbel" price="$30" duration="Duration : 20 Min" gender="Women Only" text="Looking for a quick hair cut? This the on for you."/>
                 {/* {
                    data.map((item,i)=>(
                        <CheckCard key = {i} header={item.title} price={item.price} duration={item.duration}  
                        text={item.desc ? item.desc : '' } />

                    ))
                } */}
       


            <View style={{width:'90%',marginLeft:'5%'}}>
                    <Text style = {{color:'#D20909',fontSize:18,fontWeight:'bold'}}>Bill Details</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style = {{color:'black',fontSize:16}}>Your Bill Details</Text>
                    <Text style = {{color:'black',fontSize:16}}>$255</Text>
                </View>
            </View>
            <View style={{width:'90%',marginLeft:'5%',marginVertical:'4%'}}>
                    <Text style = {{color:'#D20909',fontSize:18,fontWeight:'bold'}}>To Pay</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style = {{color:'black',fontSize:16}}>Your Payment Data</Text>
                    <Text style = {{color:'black',fontSize:16}}>$255</Text>
                </View>
            </View>


                    {/* <Text style={{marginLeft:20,fontWeight:'bold',fontSize:15,color:'black',marginTop:5}}> Bill Details</Text>
                    <Text style={{marginLeft:20 ,fontSize:15,color:'black', borderBottomColor:'black'}}> Your bill details</Text>
                    <Text style={{marginTop:-30,marginLeft:335 ,fontSize:18,color:'black',fontWeight:'bold'}}> $255</Text>
                    <Text style={{marginTop: 10,marginLeft:20 ,fontSize:15,color:'black',fontWeight:'bold'}}> To Pay</Text>
                    <Text style={{marginLeft:20 ,fontSize:15,color:'black'}}> Your payment data</Text>
                    <Text style={{marginTop:-30,marginLeft:335 ,fontSize:18,color:'black',fontWeight:'bold'}}> $255</Text> */}
            
        </ScrollView>
        <TouchableOpacity onPress={()=>navigation.navigate('TimeAndDate')} style={{ backgroundColor: '#D20909',}}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>Continue</Text>
            </TouchableOpacity>
        </View>
    );

}

// const CheckCard = (props) => {

//     return (
//         <View style={{ borderRadius: 1, borderWidth: 0.25, marginHorizontal: 15, marginBottom: 10, borderLeftWidth: 10, borderColor: '#D20909',padding:'4%',borderRadius:10 }}>

//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
//                 <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold',  }}>{props.header}</Text>
//                 <View style={{ flexDirection: 'row', marginRight: 15, }}>
//                     <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' ,}}>{props.price}</Text>
//                     {/* <CheckBox onClick={()=>{setSelection(!isSelected)}} isChecked={isSelected}/> */}
//                 </View>
//             </View>
//             <Text style={{ color: 'black' }}>{props.duration}</Text>
//             <Text style={{ color: 'black' }}>{props.text}</Text>
//         </View>
//     )
// }


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
    container: {
        flex: 1,
        // padding: 5,
        paddingTop: 15,
        backgroundColor: '#fff'
        //paddingTop: 300
    },
    header_icon: {
        fontSize: 30,
        // marginLeft: '7%',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        position:'absolute',
        left:0,
        
    },
    text: {
        margin: 1,
        height: 40,
        marginLeft: 165,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000'
        //borderWidth: 1
    },
    submitButton3: {
        backgroundColor: 'red',
        padding: 10,
        margin: 15,
        height: 35,
        borderRadius:5,
        marginLeft:-70,
        marginTop:-230,
        width:70
     },
     submitButton2: {
        backgroundColor: 'red',
        padding: 10,
        margin: 15,
        height: 35,
        borderRadius:5,
        marginLeft:-70,
        marginTop:100,
        width:70
     },
     submitButton1: {
        backgroundColor: 'red',
        padding: 10,
        margin: 15,
        height: 35,
        borderRadius:5,
        marginLeft:-70,
        marginTop:420,
        width:70
     },
   
    submitButtonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17
    },
    moreInfo:{
        color:'black',
        textDecorationLine: 'underline',
        marginTop:4,
    },
});