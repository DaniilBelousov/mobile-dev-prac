import React, { useState } from 'react';
import { View,  SafeAreaView, TextInput} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Input from './components/InputText/InputText';
import Button from './components/Button/Button';

const HomeScreen = () => {
  const [item, setItem] = React.useState('');

  return(
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginTop: 40 }}>
      <View>
        <Input
        placeholder="Куда?"
        onChange={item => setItem(item)}
      />
      </View>
      <View>
        <Input
        placeholder="Куда?"
        onChange={item => setItem(item)}
      />
      </View>
      <View>
        <Button 
        title='Next' 
      />
      </View>
    </View>
  );
};

const SettingsScreen = () => {
  const [item, setItem] = React.useState('');

  return(
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginTop: 40 }}>
      <View>
        <Input
        placeholder="Откуда?"
        onChange={item => setItem(item)}
      />
      </View>
      <View>
        <Input
        placeholder="Куда?"
        onChange={item => setItem(item)}
      />
      </View>
      <View>
        <Button 
        title='Next' 
      />
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
      >
        <Tab.Screen  name="Home" component={HomeScreen} />
        <Tab.Screen  name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
};