import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MagicDeals from './MagicDeals';

const DealsStack = createNativeStackNavigator();

const DealsNavigator = () => {
  return (
    <DealsStack.Navigator>
      <DealsStack.Screen
        name='Magic Deals'
        component={MagicDeals}
        options={{
          headerShown: false,
        }}
      />
    </DealsStack.Navigator>
  );
};

export default DealsNavigator;

const styles = StyleSheet.create({});
