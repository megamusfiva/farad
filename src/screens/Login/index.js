import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Header, InputField, PageContainer, CustomButton } from '../../components';
import Navigation from '../../helpers/Navigation';

import style from './style';

const Login = () => {

	const topComponent = () => (
		<View style={ style.top }>

			<Text style={ style.title }>Sign In</Text>

			<Text style={ style.titleThin }>Please sign in to continue</Text>

		</View>
	);

	const mainComponent = () => (
		<View style={ style.main }>

			<InputField
				title={ 'Phone Number' }
				placeholder={ 'Enter your phone number' }
				type={ 'numeric' } />

			<InputField
				title={ 'Password' }
				placeholder={ 'Enter your Password' }
				type={ 'password' } />

			<TouchableOpacity style={ style.forgotWrap } onPress={ () => { Navigation.push('ForgotPassword', {}); } }>

				<Text style={ style.forgot }>Forgot Your Password?</Text>

			</TouchableOpacity>

			<CustomButton.DefaultButton title={ 'Sign In' } />

			<Text style={ style.textCenter }>or sign in with</Text>

			<View style={ style.sosmedCard }>

				<CustomButton.SosmedButton image={ 'google' } />

				<CustomButton.SosmedButton image={ 'facebook' } />

				<CustomButton.SosmedButton image={ 'apple' } />

			</View>
		</View>
	);

	const bottomComponent = () => (

		<View style={ style.bottomWrap }>

			<Text style={ style.bottom }>Don’t have an account?</Text>

			<TouchableOpacity onPress={ () => { Navigation.replace('SignUp', {}); } }>

				<Text style={ style.forgot }> Sign Up Here</Text>

			</TouchableOpacity>

		</View >
	);

	return (
		<PageContainer padding={ 30 }>

			<Header />

			{ topComponent() }

			{ mainComponent() }

			{ bottomComponent() }

		</PageContainer>
	);
};

export default Login;