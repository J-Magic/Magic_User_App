import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Ride from '../assets/Get_ride.jpg';
import Parcel from '../assets/PhoneParcel.jpg';
import Accomodation from '../assets/Accomodation.jpg';
import CarHire from '../assets/CarHire.jpg';
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
//import { TouchableOpacity } from 'react-native-web';
//import { FlatList } from 'react-native-web';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: Ride,
    screen: 'MapScreen',
  },
  {
    id: '234',
    title: 'Book stay',
    image: Accomodation,
    screen: 'HomeBookingScreen',
  },
];
const data2 = [
  {
    id: '345',
    title: 'Car Hire',
    image: CarHire,
    screen: 'CarHireScreen',
  },
  {
    id: '456',
    title: 'Parcel',
    image: Parcel,
    screen: 'ParcelScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <View style={tw`pl-8`}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-5 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin}
          >
            {/* style={tw`${!origin && 'opacity-20'}`} */}
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: 'contain' }}
                source={item.image}
              />
              <Text style={tw`mt-1 text-lg font-semibold`}>{item.title}</Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-2`}
                name='arrowright'
                color='white'
                type='antdesign'
              />
            </View>
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={data2}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-5 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin}
          >
            {/* style={tw`${!origin && 'opacity-20'}`} */}
            <View>
              <Image
                style={{ width: 120, height: 120, resizeMode: 'contain' }}
                source={item.image}
              />
              <Text style={tw`mt-1 text-lg font-semibold`}>{item.title}</Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-2`}
                name='arrowright'
                color='white'
                type='antdesign'
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;
