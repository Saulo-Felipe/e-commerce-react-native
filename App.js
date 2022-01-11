import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons' 

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color}/>,
            tabBarStyle: styles.tabBottom,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBottom: {
    borderWidth: 1,
    borderColor: "red"
  }
});
