import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import MagicQuick from '../assets/MagicQuick.jpg';
import MagicTravel from '../assets/MagicTravel.jpg';
import MagicLux from '../assets/MagicLux.jpg';
import { useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTravelTimeInformation,
  selectOrigin,
  selectDestination,
} from '../slices/navSlice';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createOrder } from '../src/graphql/mutations';

const data = [
  {
    id: '7',
    // Magic-Quick-7
    title: 'Magic-Quick',
    multiplier: 25,
    image: MagicQuick,
  },
  {
    id: '8',
    // Magic-Travel-7
    title: 'Magic-Travel',
    multiplier: 4,
    image: MagicTravel,
  },
  {
    id: '9',
    // Magic-Lux
    title: 'Magic-Lux',
    multiplier: 40,
    image: MagicLux,
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  console.log('ORIGIN: ', origin);

  const confirmRequest = async () => {
    const type = selected?.title;
    if (!type) {
      return;
    }

    // Submit to Redis

    // Submit to dynamoDB Orders Table
    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const date = new Date();
      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: origin.location.lat,
        originLongitude: origin.location.lng,
        destLatitude: destination.location.lat,
        destLongitude: destination.location.lng,
        userId: userInfo.attributes.sub,
        carId: '1',
      };

      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input: input,
        })
      );

      console.log('DynamoDB: ', response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={tw`bg-white flex-grow `}>
      {/* <BottomSheet ref={bottomSheetRef} index={1} snapPoints={['12%', '95%']}>
        <View style={{ flex: 1 }}>
          <Text> Am HERE!</Text>
        </View> */}

      <View>
        <TouchableOpacity
          onPress={() => {
            dispatch(setOrdering(false));
            navigation.navigate('NavigateCard');
          }}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-4 text-xl`}>
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center ${
              id === selected?.id && 'bg-gray-200'
            }`}
          >
            <Image
              style={{ width: 80, height: 80, resizeMode: 'contain' }}
              source={item.image}
            />
            <View style={tw`-ml-8`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} </Text>
            </View>
            <Text style={tw`text-xl mr-4`}>
              {' '}
              KES{' '}
              {Math.round(
                (travelTimeInformation?.distance?.value / 1000) * multiplier +
                  (travelTimeInformation?.duration?.value / 60) * 3 +
                  200
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-300`}>
        <TouchableOpacity
          onPress={() => {
            confirmRequest();
          }}
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
      {/* </BottomSheet> */}
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
