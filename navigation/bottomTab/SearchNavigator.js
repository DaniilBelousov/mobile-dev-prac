import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../../screens/Search/Search'
import Color from '../../style/Color'
import Font from '../../style/Font'
import Header from '../../style/Header'

const Stack = createStackNavigator();

const SearchNavigator = () => {
    return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: Header.header,
            headerTintColor: Color.white,
            headerTitleStyle: Font.font,
        }}
    >
        <Stack.Screen options={{ title: 'Поиск поездки', headerTitleAlign: 'center' }}  name="Search" component={Search}/>
    </Stack.Navigator>  
    );
  
};

export default SearchNavigator;