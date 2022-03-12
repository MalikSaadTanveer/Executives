import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating';
export default function SalonBranchDetail({navigation}) {
    return (
        <ScrollView>
            <View style={{position: 'absolute', top: 0, zIndex: 2, flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10, backgroundColor: 'rgba(52, 52, 52, 0.3)' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Icon name='chevron-back-outline' size={30} color='#fff' /></TouchableOpacity>
                <TouchableOpacity><Icon name='heart-outline' size={30} color='#fff' /></TouchableOpacity>
            </View>

            <Image source={require('../assets/images/img.jpeg')} style={styles.image} />
            <View style={{ padding: 10 }}>
                <Text style={{ color: '#0a059e', fontSize: 20, fontWeight: 'bold' }}>Addictive Beauty</Text>
                <Text>West Minister Business Road, UK</Text>

                <View style={{ flexDirection: 'row', borderBottomColor: '#acbbe6', borderBottomWidth: 1, paddingBottom: 10 }}>
                    <StarRating
                        disabled={true}
                        maxStars={1}
                        rating={1}
                        fullStarColor={'gold'}
                        starSize={20}
                    />
                    <Text style={{ color: '#0a059e', fontWeight: 'bold', marginLeft: 10 }}>5.0 Great (38)</Text>
                </View>

            </View>

            <View style={{ marginHorizontal: 10, borderBottomColor: '#acbbe6', borderBottomWidth: 1, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <FIcon name='clock' size={20} color="#acbbe6" />
                    <Text style={{ fontSize: 15, paddingLeft: 10, color: '#acbbe6' }}>09:00 am - 11:00 pm</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <MCIcon name='lightning-bolt-outline' size={20} color="#acbbe6" />
                    <Text style={{ fontSize: 15, paddingLeft: 10, color: '#acbbe6' }}>Instant Confirmation</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <Icon name='ios-male-female' size={20} color="#acbbe6" />
                    <Text style={{ fontSize: 15, paddingLeft: 10, color: '#acbbe6' }}>Unisex</Text>
                </View>
            </View>

            <View style={{ marginHorizontal: 10, borderBottomColor: '#acbbe6', borderBottomWidth: 1, paddingVertical: 10 }}>
                <Text style={{ fontSize: 15, color: '#acbbe6' }}>At Addictive beauty Salon we never compromise on quality to ensure all clients are receiving the heighest standards of higene and products, to achieve maximum results.</Text>
            </View>

            <View style={{ marginHorizontal: 10, borderBottomColor: '#acbbe6', borderBottomWidth: 1, paddingVertical: 10 }}>
                <Text style={{ color: '#0a059e', fontSize: 20, fontWeight: 'bold' }}>Review</Text>

                <View style={{ flexDirection: 'row', borderBottomColor: '#acbbe6' }}>
                    <StarRating
                        disabled={true}
                        maxStars={1}
                        rating={1}
                        fullStarColor={'gold'}
                        starSize={20}
                    />
                    <Text style={{ color: '#0a059e', fontWeight: 'bold', marginLeft: 10 }}>5.0 Great (38)</Text>

                </View>

                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                    <Image source={require('../assets/images/img.jpeg')} style={styles.reviewImage} />

                    <View style={{paddingHorizontal: 10, justifyContent: 'space-between'}}>
                        <Text style={{ color: '#0a059e', fontSize: 20 }}>Martha Valdez</Text>
                        <Text style={{ fontSize: 15, color: '#acbbe6' }}>28 Jan 2020</Text>
                        <Text style={{ fontSize: 15, color: '#acbbe6' }}>At Addictive beauty Salon we never compromise on quality to ensure all clients are receiving the heighest.</Text>

                        <View style={{width: 110}}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={5}
                                fullStarColor={'gold'}
                                starSize={20}
                                starStyle={30}
                            />
                        </View>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                    <Image source={require('../assets/images/img.jpeg')} style={styles.reviewImage} />

                    <View style={{paddingHorizontal: 10, justifyContent: 'space-between'}}>
                        <Text style={{ color: '#0a059e', fontSize: 20 }}>Martha Valdez</Text>
                        <Text style={{ fontSize: 15, color: '#acbbe6' }}>28 Jan 2020</Text>
                        <Text style={{ fontSize: 15, color: '#acbbe6' }}>At Addictive beauty Salon we never compromise on quality to ensure all clients are receiving the heighest.</Text>

                        <View style={{width: 110}}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={5}
                                fullStarColor={'gold'}
                                starSize={20}
                                starStyle={30}
                            />
                        </View>
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    reviewImage: {
        width: 70,
        height: 70,
        borderRadius: 5
    }
});
