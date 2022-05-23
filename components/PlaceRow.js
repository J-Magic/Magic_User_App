import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';
import tw from 'twrnc';

const PlaceRow = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      }}
    >
      <View
        style={[
          tw`bg-gray-300`,
          {
            padding: 7,
            borderRadius: 10,
            marginRight: 15,
            marginLeft: 15,
          },
        ]}
      >
        {data.description === 'Home' ? (
          <Icon type='entypo' name='home' size={25} color={'black'} />
        ) : (
          <Icon type='entypo' name='location-pin' size={25} color={'black'} />
        )}
      </View>
      <Text>{data.description || data.vicinity}</Text>
    </View>
  );
};

export default PlaceRow;

const styles = StyleSheet.create({});
