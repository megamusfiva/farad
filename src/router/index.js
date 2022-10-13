import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Navigation } from '../helpers';

import {
	Login,
	OnBoarding,
	Register,
	Verify,
	SignUp,
	ForgotPassword,
	ResetPassword,
	ProfileDetail
} from '../screens';

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

				<Stack.Screen name="Verify" component={ Verify } />

				<Stack.Screen name="SignUp" component={ SignUp } />

				<Stack.Screen name="ForgotPassword" component={ ForgotPassword } />

				<Stack.Screen name="ResetPassword" component={ ResetPassword } />

				<Stack.Screen name="ProfileDetail" component={ ProfileDetail } />

			</Stack.Navigator>

		</NavigationContainer>
	);
};

export default MainRouter;