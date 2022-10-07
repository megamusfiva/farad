import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Navigation } from '../helpers';

import { Login, OnBoarding } from '../screens';

const Stack = createNativeStackNavigator();

const MainRouter = ({ onboarded }) => {
	console.log("onboarded", onboarded);

	const isOnboarded = () => {
		if (!onboarded) {
			return (
				<Stack.Screen
					name='OnBoarding'
					component={ OnBoarding }
					options={ {
						headerShown: false,
					} }
				/>
			);
		}
	};

	return (
		<NavigationContainer ref={ Navigation.navigationRef }>
			<Stack.Navigator
				initialRouteName={ onboarded ? 'login' : 'onboarding-one' } screenOptions={ { headerShown: false } }>


				{ isOnboarded() }

				<Stack.Screen name="Login" component={ Login } />

			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainRouter;