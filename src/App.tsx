/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import React from 'react';
import {useColorScheme} from 'react-native';
import MyTabBar from './app/components/MyTabBar';

import HomeView from './app/pages/home/HomeView';
import ProfileView from './app/pages/profile/ProfileView';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundTheme = isDarkMode ? DarkTheme : DefaultTheme;
  return (
    <NavigationContainer theme={backgroundTheme}>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen
          name="Movie"
          component={HomeView}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileView}
          options={{
            title: 'Profile',
            headerTitleStyle: {
              fontFamily: 'Roboto',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            title: 'Movie',
            headerTitleStyle: {
              fontFamily: 'Roboto'
            },
            headerTitleAlign: "center"
          }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
