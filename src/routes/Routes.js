import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons' 
import Home from '../pages/home/Home'

const Tab = createBottomTabNavigator()

export default function Routes() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: false}}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color}/>,
            tabBarStyle: styles.tabBottom,
          }}
        />
        
        <Tab.Screen 
          name="cartShop" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => <FontAwesome5 name="shopping-cart" size={size} color={color}/>,
            tabBarStyle: styles.tabBottom,
          }}
        />

        <Tab.Screen 
          name="Favorite" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => <FontAwesome5 name="heart" size={size} color={color}/>,
            tabBarStyle: styles.tabBottom,
          }}
        />

        <Tab.Screen 
          name="Profile" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => <FontAwesome5 name="user-circle" size={size} color={color}/>,
            tabBarStyle: styles.tabBottom,
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBottom: {

  }
});