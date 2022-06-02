import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import tw from 'twrnc';
import stays from '../Airbnb Assets/feed';
import { useNavigation, useRoute } from '@react-navigation/native';

const ViewStay = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const stay = stays.find((house) => house.id === route.params.stayID);
  return (
    <SafeAreaView>
      <ScrollView style={tw`mb-10`}>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={{
                // width: '100%',
                // aspectRatio: 3 / 2,
                height: 280,
                width: null,
                resizeMode: 'cover',
              }}
              source={{ uri: stay.image }}
            />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              textTransform: 'capitalize',
            }}
          >
            {stay.title}
          </Text>
          {/* Ratings, Reviews and City */}
          <View style={tw`mb-4`}>
            <View style={tw`flex-row mt-2`}>
              <Text
                style={{
                  fontSize: 16,
                  textTransform: 'none',
                  marginRight: 16,
                }}
              >
                Rating
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  textTransform: 'none',
                  marginRight: 5,
                }}
              >
                Reviews
              </Text>
            </View>

            <Text
              style={{
                fontSize: 16,
                textTransform: 'none',
                marginRight: 5,
              }}
            >
              City
            </Text>
          </View>

          {/* Stay Specifics */}
          <View style={tw`border-t border-gray-300 mb-4`}>
            <View style={tw`flex-row mt-2`}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '900',
                }}
              >
                {stay.title} hosted by {stay.host}
              </Text>
            </View>
            <View style={tw`flex-row`}>
              <Text style={[tw`mt-3 mr-5`, { fontSize: 16 }]}>
                {stay.guests} guests
              </Text>
              <Text style={[tw`mt-3 mr-5`, { fontSize: 16 }]}>
                {stay.bedroom} bedrooms
              </Text>
              <Text style={[tw`mt-3 mr-5`, { fontSize: 16 }]}>
                {stay.bed} beds
              </Text>
            </View>
            <Text style={{ fontSize: 16 }}>{stay.bathrooms} bathroom</Text>
          </View>

          {/* Description */}
          <View style={tw`border-t border-gray-300 mb-4`}>
            <Text
              style={[
                tw`mt-3`,
                {
                  lineHeight: 24,
                  fontSize: 16,
                },
              ]}
            >
              {stay.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          //marginHorizontal: 20,
        }}
      >
        <TouchableOpacity style={[tw`bg-white`, { borderRadius: 10 }]}>
          <Text
            style={[
              tw` text-center 
          `,
              { fontSize: 14 },
            ]}
          >
            $ {stay.newPrice} night
          </Text>
          <Text style={{ fontSize: 12 }}>Choose Dates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tw`bg-lime-300 p-2`, { borderRadius: 10 }]}>
          <Text
            style={[
              tw` text-center 
          `,
              { fontSize: 24 },
            ]}
          >
            Reserve
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ViewStay;

const styles = StyleSheet.create({});
