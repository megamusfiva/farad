import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home';
const Drawer = createDrawerNavigator();

export default function Drawers() {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			screenOptions={ { headerShown: false } }
		>
			<Drawer.Screen name="Home" component={ Home } />
		</Drawer.Navigator>
	);
}