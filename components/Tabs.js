import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../components/HomeScreen"
import TransactionScreen from "../components/TransactionScreen"
import CheckoutScreen from "../components/CheckoutScreen"
import ProfileScreen from "../components/ProfileScreen"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)

export default class Tabs extends React.Component {
    render(){
        return (
            <Tab.Navigator initialRouteName="home" tabBarOptions={{ activeTintColor: '#e91e63',}}>
              <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="transaction"
                component={TransactionScreen}
                options={{
                  tabBarLabel: 'Transaction',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
                  ),
                  tabBarBadge: 3,
                }}
              />
             <Tab.Screen
                name="checkout"
                component={CheckoutScreen}
                options={{
                  tabBarLabel: 'Checkout',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="inbox" color={color} size={size} />
                  ),
                }}
              />
             <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                  tabBarLabel: 'Profile',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                  ),
                }}
              />
            </Tab.Navigator>
          );
    }
}

