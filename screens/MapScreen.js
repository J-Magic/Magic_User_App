import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { selectOrdering } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import OrderMap from '../components/OrderMap';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const ordering = useSelector(selectOrdering);
  return (
    <View>
      <View style={tw`h-1/2`}>{ordering ? <Map /> : <OrderMap />}</View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
