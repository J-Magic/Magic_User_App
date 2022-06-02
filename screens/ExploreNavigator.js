import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopNavigator from './TopNavigator';

const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='TopNavigator'
        component={TopNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;

const styles = StyleSheet.create({});
