import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './Tabs';
import { Profile, ArticleDetail, MatchDetail } from 'Screens';

const Stack = createStackNavigator();

const TabStacks = ({ params }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ArticleDetail"
      component={ArticleDetail}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="MatchDetail"
      component={MatchDetail}
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: '#fff',
        headerTitle: '', 
      }}
    />
  </Stack.Navigator>
);

export default TabStacks;
