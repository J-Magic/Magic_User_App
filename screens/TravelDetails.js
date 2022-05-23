import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Destinations from '../components/Destinations';
import Guests from '../components/Guests';
import TravelCalendar from '../components/TravelCalendar';
import tw from 'twrnc';

const TravelDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const headerStyle = {
    borderBottomLeftRadius: !currentIndex ? 8 : 0,
    borderBottomRightRadius: !currentIndex ? 8 : 0,
  };

  const data = [
    {
      category: 'Where to?',
      bg: '#ffffff',
      SubCategory: [Destinations],
    },
    {
      category: `Who's coming?`,
      bg: '#ffffff',
      SubCategory: [Guests],
    },
    {
      category: 'Dates',
      bg: '#ffffff',
      SubCategory: [TravelCalendar],
    },
  ];

  return (
    <SafeAreaView
      style={[
        tw`mt-5`,
        {
          flex: 1,
          backgroundColor: '#f4f4f6',
        },
      ]}
    >
      <View>
        {data.map(({ bg, category, SubCategory }, index) => {
          return (
            <TouchableOpacity
              key={category}
              onPress={() => {
                setCurrentIndex(index === currentIndex ? null : index);
              }}
              style={{
                flexGrow: 1,
              }}
              activeOpacity={0.9}
            >
              <View
                style={[
                  headerStyle,
                  {
                    flexGrow: 1,
                    marginTop: 16,
                    backgroundColor: '#ffffff',
                    padding: 16,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  },
                ]}
              >
                <Text
                  style={[
                    tw`font-bold`,
                    {
                      fontSize: 20,
                    },
                  ]}
                >
                  {category}
                </Text>
                {index === currentIndex && (
                  <View>
                    {SubCategory.map((SubCategory) => (
                      <SubCategory key={SubCategory} />
                    ))}
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TravelDetails;

const styles = StyleSheet.create({});
