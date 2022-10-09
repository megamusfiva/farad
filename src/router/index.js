import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Navigation } from '../helpers';

import { Login, OnBoarding, Register } from '../screens';

const Stack = createNativeStackNavigator();

const MainRouter = ({ onboarded }) => {

	// const isOnboarded = () => {
	// 	if (!onboarded) {
	// 		return (
	// 			<Stack.Screen
	// 				name='OnBoarding'
	// 				component={ OnBoarding }
	// 				options={ {
	// 					headerShown: false,
	// 				} }
	// 			/>
	// 		);
	// 	}
	// };

	return (
		<NavigationContainer ref={ Navigation.navigationRef }>

			<Stack.Navigator
				initialRouteName='OnBoarding' screenOptions={ { headerShown: false } }>

				{/* { isOnboarded() } */ }
				<Stack.Screen name="OnBoarding" component={ OnBoarding } />

				<Stack.Screen name="Login" component={ Login } />
				<Stack.Screen name="Register" component={ Register } />

			</Stack.Navigator>

		</NavigationContainer>
	);
};

export default MainRouter;