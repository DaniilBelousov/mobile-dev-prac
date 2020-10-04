import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../screens/Profile/Profile'
import Color from '../../style/Color'
import Font from '../../style/Font'
import Header from '../../style/Header'

const Stack = createStackNavigator();

const ProfileNavigation = () => {
    return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: Header.header,
            headerTintColor: Color.white,
            headerTitleStyle: Font.font,
        }}
    >
        <Stack.Screen options={{ title: 'Личный кабинет', headerTitleAlign: 'center' }}  name="Profile" component={Profile}/>
    </Stack.Navigator>  
    );
  
};

export default ProfileNavigation;