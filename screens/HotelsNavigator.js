import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MagicHotels from './MagicHotels';

const HotelsStack = createNativeStackNavigator();

const HotelsNavigator = () => {
  return (
    <HotelsStack.Navigator>
      <HotelsStack.Screen
        name='Magic Hotels'
        component={MagicHotels}
        options={{
          headerShown: false,
        }}
      />
    </HotelsStack.Navigator>
  );
};

export default HotelsNavigator;

const styles = StyleSheet.create({});
