import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Header, InputField, PageContainer, CustomButton } from '../../components';
import Navigation from '../../helpers/Navigation';

import style from './style';

const ForgotPassword = () => {

	const topComponent = () => (
		<View style={ style.top }>

			<Text style={ style.title }>Forgot Password</Text>

			<Text style={ style.titleThin }>We will send you a link to reset your password.</Text>

		</View>
	);

	const mainComponent = () => (
		<View style={ style.main }>

			<InputField
				title={ 'Phone Number' }
				placeholder={ 'Enter your phone number' }
				type={ 'numeric' } />

			<CustomButton.DefaultButton title={ 'Submit' } onPress={ () => { Navigation.push('ResetPassword', {}); } } />
		</View>
	);

	const bottomComponent = () => (

		<View style={ style.bottomWrap }>

			<Text style={ style.bottom }>Already have an account? </Text>

			<TouchableOpacity onPress={ () => { Navigation.push('Login', {}); } }>

				<Text style={ style.signin }>Sign In Here</Text>

			</TouchableOpacity>

		</View >
	);

	return (
		<PageContainer>

			<Header />

			{ topComponent() }

			{ mainComponent() }

			{ bottomComponent() }

		</PageContainer>
	);
};

export default ForgotPassword;