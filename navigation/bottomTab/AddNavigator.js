import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Add from '../../screens/Add/Add'
import Color from '../../style/Color'
import Font from '../../style/Font'
import Header from '../../style/Header'

const Stack = createStackNavigator();

const AddNavigator = () => {
    return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: Header.header,
            headerTintColor: Color.white,
            headerTitleStyle: Font.font,
        }}
    >
        <Stack.Screen options={{ title: 'Добавить поездку', headerTitleAlign: 'center' }}  name="Add" component={Add}/>
    </Stack.Navigator>  
    );
  
};

export default AddNavigator;