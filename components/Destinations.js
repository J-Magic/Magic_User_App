import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import PlaceRow from '../components/PlaceRow';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import tw from 'twrnc';

const Destinations = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flexGrow: 1,
          },
          textInput: {
            fontSize: 18,
            padding: 10,
            backgroundColor: '#eee',
            marginVertical: 20,
            marginHorizontal: 20,
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 10,
          },
          separator: [
            tw`bg-gray-200`,
            {
              //backgroundColor: '#efefef',
              height: 2,
            },
          ],
        }}
        placeholder='Where to?'
        nearbyPlacesAPI='GooglePlacesSearch'
        onPress={(data, details = null) => {
          dispatch(
            setDestination({
              location: details.geometry.location,
              description: data.description,
            })
          );
        }}
        enablePoweredByContainer={false}
        suppressDefaultStyles
        fetchDetails={true}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        renderRow={(data) => <PlaceRow data={data} />}
        renderDescription={(data) => data.description || data.vicinity}
      />
    </SafeAreaView>
  );
};

export default Destinations;

const styles = StyleSheet.create({});
