import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenMs from './HomeScreenMs';
import TravelDetails from './TravelDetails';
import ViewStay from './ViewStay';

const StaysStack = createNativeStackNavigator();

const StaysNavigator = () => {
  return (
    <StaysStack.Navigator>
      <StaysStack.Screen
        name='Magic Stays'
        component={HomeScreenMs}
        options={{
          headerShown: false,
        }}
      />

      <StaysStack.Screen
        name='TravelDetails'
        component={TravelDetails}
        options={{
          headerShown: false,
        }}
      />

      {/* <StaysStack.Screen
        name='StaySearchResults'
        component={StaySearchResults}
      /> */}

      <StaysStack.Screen
        name='ViewStay'
        component={ViewStay}
        options={{
          headerShown: false,
        }}
      />
    </StaysStack.Navigator>
  );
};

export default StaysNavigator;

const styles = StyleSheet.create({});
