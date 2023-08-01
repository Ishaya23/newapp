import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './Screens/SearchScreen';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'red'
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon:()=> <AntDesign name="home" size={24} color="black" />
        }}/>
        <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon:()=><FontAwesome name="search" size={24} color="black" />
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


