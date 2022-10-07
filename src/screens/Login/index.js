import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Navigation from '../../helpers/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';

import style from './style';

const Login = () => {
	const onPressFinish = async () => {
		await AsyncStorage.setItem('ONBOARDED', 'false');
		Navigation.replace('OnBoarding', {});
	};

	const renderer = () => (
		<View style={ style.item }>
			<Text style={ style.title }>Sign in</Text>
			<Text style={ style.titleThin }>Please Sign in to Continue</Text>
			<TouchableOpacity onPress={ () => { onPressFinish(); } }>
				<Text style={ style.title }>Touch me</Text>
			</TouchableOpacity>
		</View>
	);

	return (
		<ScrollView style={ style.container }>
			<Header />

			{ renderer() }

		</ScrollView >
	);
};

export default Login;