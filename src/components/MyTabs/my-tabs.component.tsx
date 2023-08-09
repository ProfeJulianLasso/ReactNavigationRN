import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

const Tab = createBottomTabNavigator();

function Tab1Component() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Tab2Component() {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Settings! - {count}</Text>
    </View>
  );
}

function MyTabsComponent() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1Component} options={{
        tabBarLabel: 'Home',
        tabBarBadge: 3,
        tabBarIcon(props) {
          return <IconEvil name="lock" size={props.size} color={props.color} />
        },
      }} />
      <Tab.Screen name="Tab2" component={Tab2Component} options={{
        tabBarLabel: 'Settings',
        tabBarBadge: 3,
        tabBarIcon(props) {
          return <Icon name="admin-panel-settings" size={props.size} color={props.color} />
        }
      }} />
    </Tab.Navigator>
  );
}

export default MyTabsComponent;