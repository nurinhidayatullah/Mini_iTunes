import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MovieListView from './MovieList';
import MovieDetailsPage from './details/index';

const HomeView: React.FC<{}> = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="list" component={MovieListView} options={{
        title: 'Movie',
        headerTitleStyle: {
          fontFamily: 'Roboto'
        },
        headerTitleAlign: 'center'
      }} />
      <Stack.Screen name="details" component={MovieDetailsPage} options={{
        title: 'Movie Detail',
        headerTitleStyle: {
          fontFamily: 'Roboto'
        },
        headerTitleAlign: 'center'
      }} />
    </Stack.Navigator>
  );
};

export default HomeView;
