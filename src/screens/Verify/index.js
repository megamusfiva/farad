import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Header, PageContainer, CustomButton } from '../../components';
import Navigation from '../../helpers/Navigation';

import style from './style';

const Verify = () => {

	const topComponent = () => (
		<View style={ style.top }>

			<Text style={ style.title }>Verify Your Phone Number</Text>

			<Text style={ style.titleThin }>We had just sent you 4 digit OTP code to your phone number</Text>

		</View>
	);

	const mainComponent = () => (

		<View style={ style.main }>

			<View style={ style.bottomWrap }>

				<Text style={ style.bottom }>Didn’t receive code? </Text>

				<TouchableOpacity onPress={ () => { } }>

					<Text style={ style.resent }>Resend Code</Text>

				</TouchableOpacity>

			</View >

			<CustomButton.DefaultButton title={ 'Verify Phone Number' } onPress={ () => { Navigation.push('SignUp', {}); } } />

			<Text style={ style.button }>Change Phone Number</Text>
		</View>
	);

	return (
		<PageContainer>

			<Header />

			{ topComponent() }

			{ mainComponent() }

		</PageContainer>
	);
};

export default Verify;