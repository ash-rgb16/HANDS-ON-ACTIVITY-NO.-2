import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "",
          headerTintColor: "#ff4665",
          headerStyle: {
            height: 100,
          },
          headerBackImage: () => (
            <Image
              source={require('./assets/back-icon-vector.png')}
              style={{
                width: 50,
                height: 50,
                tintColor: "#ff4665",
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerTitle: "",
          headerTintColor: "#ff4665",
          headerStyle: {
            height: 100,
          },
          headerBackImage: () => (
            <Image
              source={require('./assets/back-icon-vector.png')}
              style={{
                width: 50,
                height: 50,
                tintColor: "#ff4665",
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupPage}
        options={{
          headerTitle: "",
          headerTintColor: "#ff4665",
          headerStyle: {
            height: 100,
          },
          headerBackImage: () => (
            <Image
              source={require('./assets/back-icon-vector.png')}
              style={{
                width: 50,
                height: 50,
                tintColor: "#ff4665",
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;