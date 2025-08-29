import TypographyExample from '@components/TypographyExample';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';
import LoginScreen from '@screens/LoginScreen';
import OnboardingScreen from '@screens/OnboardingScreen';

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Login: undefined;
  TypographyExample: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            title: 'Rise Real Estate - Welcome',
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TypographyExample" component={TypographyExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
