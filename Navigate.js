import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TaskDetailsScreen from './screens/TaskDetailsScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Home',
      },
    },
    Details: {
      screen: TaskDetailsScreen,
      options: ({ route }) => ({
        title: route?.params?.task?.title || 'Task Details',
      }),
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function Navigate() {
  return <Navigation />;
}
