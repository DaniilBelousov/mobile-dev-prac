import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import SearchNavigator from './bottomTab/SearchNavigator';
import ProfileNavigator from './bottomTab/ProfileNavigartor';
import AddNavigator from './bottomTab/AddNavigator';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{ title: 'Search' }} name="SearchNavigation" component={SearchNavigator}/>
        <Tab.Screen options={{ title: 'Add' }} name="AddNavigator" component={AddNavigator}/>
        <Tab.Screen options={{ title: 'Profile' }} name="ProfileNavigator" component={ProfileNavigator}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;