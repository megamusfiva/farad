import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { InputField, PageContainer, CustomButton } from '../../components';
import Navigation from '../../helpers/Navigation';

import style from './style';

const Register = () => {

	const topComponent = () => (
		<View style={ style.top }>

			<Text style={ style.title }>Enter Your Phone Number</Text>

			<Text style={ style.titleThin }>Sign up with your phone number</Text>

		</View>
	);

	const mainComponent = () => (
		<View style={ style.main }>

			<InputField
				title={ 'Phone Number' }
				placeholder={ 'Enter your phone number' }
				type={ 'numeric' } />

			<CustomButton.DefaultButton title={ 'Continue' } />
		</View>
	);

	const bottomComponent = () => (

		<View style={  style.bottomWrap }>

			<Text style={ style.bottom }>Already have an account? </Text>

			<TouchableOpacity onPress={ () => {	Navigation.replace('Login', {}); } }>

				<Text style={ style.signin }>Sign In Here</Text>

			</TouchableOpacity>

		</View >
	);

	return (
		<PageContainer padding style={ style.container } >

			{ topComponent() }

			{ mainComponent() }

			{ bottomComponent() }

		</PageContainer>
	);
};

export default Register;