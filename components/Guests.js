import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';

const Guests = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  return (
    <View>
      {/* Guest category rows */}
      {/* Adults */}
      <View style={styles.row}>
        <View>
          <Text style={tw`font-bold`}>Adults</Text>
          <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
        </View>
        {/* Buttons to add guests */}
        <View style={[tw`flex-row`, { alignItems: 'center' }]}>
          <TouchableOpacity
            onPress={() => {
              setAdults(Math.max(0, adults - 1));
            }}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
          </TouchableOpacity>

          <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>

          <TouchableOpacity
            onPress={() => {
              setAdults(adults + 1);
            }}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Children */}

      <View style={styles.row}>
        <View>
          <Text style={tw`font-bold`}>Children</Text>
          <Text style={{ color: '#8d8d8d' }}>Ages 2- 12</Text>
        </View>
        {/* Buttons to add guests */}
        <View style={[tw`flex-row`, { alignItems: 'center' }]}>
          <TouchableOpacity
            onPress={() => {
              setChildren(Math.max(0, children - 1));
            }}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
          </TouchableOpacity>

          <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{children}</Text>

          <TouchableOpacity
            onPress={() => {
              setChildren(children + 1);
            }}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Infants */}

      <View style={styles.row}>
        <View>
          <Text style={tw`font-bold`}>Infants</Text>
          <Text style={{ color: '#8d8d8d' }}>Under 2</Text>
        </View>
        {/* Buttons to add guests */}
        <View style={[tw`flex-row`, { alignItems: 'center' }]}>
          <TouchableOpacity
            onPress={() => {
              setInfants(Math.max(0, infants - 1));
            }}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
          </TouchableOpacity>

          <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{infants}</Text>

          <TouchableOpacity
            onPress={() => {
              setInfants(infants + 1);
            }}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pets */}

      <View style={styles.row}>
        <View>
          <Text style={tw`font-bold`}>Pets</Text>
          <Text style={{ color: '#8d8d8d' }}>Dogs or Cats only</Text>
        </View>
        {/* Buttons to add guests */}
        <View style={[tw`flex-row`, { alignItems: 'center' }]}>
          <TouchableOpacity
            onPress={() => {
              setPets(Math.max(0, pets - 1));
            }}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
          </TouchableOpacity>

          <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{pets}</Text>

          <TouchableOpacity
            onPress={() => {
              setPets(pets + 1);
            }}
            style={styles.button}
          >
            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Guests;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  button: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
