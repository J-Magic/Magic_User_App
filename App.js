import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import Amplify, { Auth } from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
import HomeScreenMs from './screens/HomeScreenMs';
import MagicHotels from './screens/MagicHotels';
import MagicDeals from './screens/MagicDeals';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TravelDetails from './screens/TravelDetails';
import ViewStay from './screens/ViewStay';

//Amplify.configure(config);
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function HomeSearchButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(TravelDetails)}
      style={[
        tw`bg-gray-100 mt-3 mb-2`,
        {
          // backgroundColor: '#fff',
          height: 60,
          width: Dimensions.get('window').width - 40,
          borderRadius: 30,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.75,
          elevation: 9,
          //zIndex: 100,
        },
      ]}
    >
      <View style={tw`flex-row`}>
        <Icon name='search' color='black' type='Fontisto' size={25} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          Where to?
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function HomeTabs() {
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
        name='Magic Stays'
        component={HomeScreenMs}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              type='Ionicon'
              // name={focused ? 'home' : 'ios-home-sharp'}
              name='home'
              // size={26}
              color={focused ? '#f87171' : 'black'}
            />
          ),
        }}
      />

      <TopTab.Screen
        name='Magic Hotels'
        component={MagicHotels}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              type='font-awesome'
              name='hotel'
              // size={26}
              color={focused ? '#f87171' : 'black'}
            />
          ),
        }}
      />

      <TopTab.Screen
        name='Magic Deals'
        component={MagicDeals}
        options={{
          tabBarIcon: ({ focused, color }) => (
            // tabBarLabel: ({ focused, color }) => (
            <Icon
              // type='font-awesome'
              // name='heart-o'
              type='antdesign'
              name='heart'
              // size={26}
              color={focused ? '#f87171' : 'black'}
            />
          ),
        }}
      />
    </TopTab.Navigator>
  );
}
export default withAuthenticator(function App() {
  // Auth.signOut();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={tw`flex-1`}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
            enabled
          >
            <Stack.Navigator>
              {/* <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              /> */}
              {/* <Stack.Screen
                  name='MapScreen'
                  component={MapScreen}
                  options={{
                    headerShown: false,
                  }}
                /> */}
              <Stack.Screen
                name='HomeTabs'
                component={HomeTabs}
                options={{
                  headerTitle: (props) => <HomeSearchButton {...props} />,
                  headerStyle: {
                    backgroundColor: 'white',
                  },
                  headerShadowVisible: false,
                }}
              />
              <Stack.Screen
                name='TravelDetails'
                component={TravelDetails}
                options={{
                  headerShown: false,
                  // headerTitle: (props) => <HomeSearchButton {...props} />,
                }}
              />

              {/* <Stack.Screen
                name='StaySearchResults'
                component={StaySearchResults}
                options={{
                  headerShown: false,
                }}
              /> */}

              <Stack.Screen
                name='ViewStay'
                component={ViewStay}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
});
