import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
import { API, graphqlOperation } from 'aws-amplify';
import { listCars } from '../src/graphql/queries';

const OrderMap = () => {
  const [cars, setCars] = useState([]);
  const origin = useSelector(selectOrigin);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listCars));
        console.log(response);
        setCars(response.data.listCars.items);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCars();
  }, []);

  const getImage = (type) => {
    if (type === 'MagicQuick') {
      return require('../assets/top-UberX.png');
    }
    if (type === 'MagicTravel') {
      return require('../assets/top-Comfort.png');
    }
    return require('../assets/top-UberXL.png');
  };

  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title='Origin'
          description={origin.description}
          identifier='origin'
        />
      )}

      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{
            latitude: car.latitude,
            longitude: car.longitude,
          }}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default OrderMap;

const styles = StyleSheet.create({});
