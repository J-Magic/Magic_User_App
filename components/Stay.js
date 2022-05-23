import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Accomodation from '../assets/Accomodation.jpg';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const Stay = () => {
  // const navigation = useNavigation();
  return (
    <View
      style={{
        margin: 20,
      }}
    >
      {/* Image */}
      <Image
        style={{
          // width: '100%',
          // aspectRatio: 3 / 2,
          height: 280,
          width: null,
          resizeMode: 'cover',
          borderRadius: 10,
        }}
        source={Accomodation}
      />
      {/* Title (Area & City)*/}
      <Text> Kilimani, Nairobi</Text>
      {/* <Text>Stay</Text> */}
      {/* Availability */}
      <Text> 17 May - 25 May</Text>
      {/* Price */}
      <Text> $65 per night</Text>
    </View>
  );
};

export default Stay;

const styles = StyleSheet.create({});
