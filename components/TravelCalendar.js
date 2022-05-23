import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import tw from 'twrnc';

const TravelCalendar = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setCheckOut(date);
    } else {
      setCheckOut(null);
      setCheckIn(date);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>When's your trip?</Text>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(2021, 5, 20)}
          maxDate={new Date(2027, 5, 19)}
          weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
          months={[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle='Previous'
          nextTitle='Next'
          todayBackgroundColor='#e6ffe6'
          selectedDayColor='#66ff33'
          selectedDayTextColor='#000000'
          scaleFactor={375}
          textStyle={{
            // fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={onDateChange}
        />
        <View
          styles={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 20,
          }}
        >
          <TouchableOpacity
            style={[
              tw`bg-black`,
              {
                position: 'absolute',
                left: '5%',
                width: '30%',
                height: 45,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            onPress={() => {}}
          >
            <Text style={tw`text-center text-white text-xl`}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // disabled={!checkOut}
            style={[
              tw`bg-black`,
              {
                position: 'absolute',
                right: '5%',
                width: '30%',
                height: 45,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            onPress={() => {}}
          >
            <View
            // style={tw`${!checkOut && 'bg-gray-300'}`}
            >
              <Text style={tw`text-center text-white text-xl`}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TravelCalendar;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexGrow: 1,
    paddingTop: 10,
    backgroundColor: '#ffffff',
    padding: 16,
    paddingBottom: 60,
  },
  textStyle: {
    marginTop: 10,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
});
