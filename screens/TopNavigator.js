import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StaysNavigator from './StaysNavigator';
import HotelsNavigator from './HotelsNavigator';
import DealsNavigator from './DealsNavigator';

const TopTab = createMaterialTopTabNavigator();

const TopNavigator = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'black',
        tabBarIndicatorStyle: {
          backgroundColor: '#f87171',
          height: 2,
        },

        tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontSize: 10 },
        tabBarItemStyle: { width: 135, height: 50 },
        tabBarStyle: {
          height: 60,
          backgroundColor: 'white',
        },
        tabBarIconStyle: {
          width: 35,
          height: 23,
        },
      }}
    >
      <TopTab.Screen
        // name='Magic Stays'
        name='StaysNavigator'
        component={StaysNavigator}
        // options={{
        //   tabBarIcon: ({ focused, color }) => (
        //     <Icon
        //       type='Ionicon'
        //       // name={focused ? 'home' : 'ios-home-sharp'}
        //       name='home'
        //       // size={26}
        //       color={focused ? '#f87171' : 'black'}
        //     />
        //   ),
        // }}
      />

      <TopTab.Screen
        // name='Magic Hotels'
        name='HotelsNavigator'
        component={HotelsNavigator}
        // options={{
        //   tabBarIcon: ({ focused, color }) => (
        //     <Icon
        //       type='font-awesome'
        //       name='hotel'
        //       // size={26}
        //       color={focused ? '#f87171' : 'black'}
        //     />
        //   ),
        // }}
      />

      <TopTab.Screen
        // name='Magic Deals'
        name='DealsNavigator'
        component={DealsNavigator}
        // options={{
        //   tabBarIcon: ({ focused, color }) => (
        //     // tabBarLabel: ({ focused, color }) => (
        //     <Icon
        //       // type='font-awesome'
        //       // name='heart-o'
        //       type='antdesign'
        //       name='heart'
        //       // size={26}
        //       color={focused ? '#f87171' : 'black'}
        //     />
        //   ),
        // }}
      />
    </TopTab.Navigator>
  );
};

export default TopNavigator;

const styles = StyleSheet.create({});
