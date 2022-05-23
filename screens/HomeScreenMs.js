import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stay from '../components/Stay';
import data from '../Airbnb Assets/feed';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import tw from 'twrnc';

const HomeScreenMs = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ViewStay', { stayID: item.id });
            }}
          >
            <View
              style={{
                margin: 20,
              }}
            >
              {/* Image */}
              <Image
                style={{
                  // width: '100%',
                  // aspectRatio: 3 / 2,
                  height: 280,
                  width: null,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
                source={{ uri: item.image }}
              />
              {/* Title (Area & City)*/}
              <Text style={tw`mt-2`}> {item.title}</Text>
              {/* <Text>Stay</Text> */}
              {/* Availability */}
              <Text> {item.availability} </Text>
              {/* Price */}
              <Text> $ {item.newPrice} </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreenMs;

const styles = StyleSheet.create({});
