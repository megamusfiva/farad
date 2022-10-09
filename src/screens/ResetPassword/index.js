import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Header, InputField, PageContainer, CustomButton } from '../../components';
import Navigation from '../../helpers/Navigation';

import style from './style';

const ResetPassword = () => {

	const topComponent = () => (
		<View style={ style.top }>

			<Text style={ style.title }>Reset Password</Text>

			<Text style={ style.titleThin }>Please create new password</Text>

		</View>
	);

	const mainComponent = () => (
		<View style={ style.main }>

			<InputField
				title={ 'Create New Password' }
				placeholder={ 'Enter new Password' }
				type={ 'password' } />

			<InputField
				title={ 'Confirm New Password' }
				placeholder={ 'Confirm your new password' }
				type={ 'password' } />

			<CustomButton.DefaultButton title={ 'Continue' } onPress={ () => { Navigation.replace('Login', {}); } } />
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

export default ResetPassword;