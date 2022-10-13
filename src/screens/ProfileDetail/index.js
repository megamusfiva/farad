import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { InputField, CustomButton } from '../../components';
import Navigation from '../../helpers/Navigation';

import style from './style';

const ProfileDetail = ({ title, desc, addTodo }) => {

	const topComponent = () => (
		<View style={ style.top }>

			<Text style={ style.title }>{ title }</Text>

			<Text style={ style.titleThin }>{ desc }</Text>

		</View>
	);

	const mainComponent = () => (
		<View >
			<View style={ style.sosmedCard }>

				<CustomButton.SosmedButton image={ 'google' } />

				<CustomButton.SosmedButton image={ 'facebook' } />

				<CustomButton.SosmedButton image={ 'apple' } />

			</View>

			<Text style={ style.textCenter }>or sign up manually</Text>

			<InputField
				title={ 'Name' }
				placeholder={ 'Enter your name' } />

			<InputField
				title={ 'Username' }
				placeholder={ 'Enter your Username' } />

			<InputField
				title={ 'Email' }
				placeholder={ 'Enter your Email' } />

			<InputField
				title={ 'Password' }
				placeholder={ 'Enter your Password' }
				type={ 'password' } />

			<InputField
				title={ 'Confirm Password' }
				placeholder={ 'Enter your Password' }
				type={ 'password' } />

			<InputField
				title={ 'Date of Birth' }
				placeholder={ 'Choose your date of birth' } />

			<InputField
				title={ 'Address' }
				placeholder={ 'Enter your Address' } />

			<CustomButton.DefaultButton title={ 'Sign Up' } onPress={ addTodo } />
		</View>
	);

	return (
		<ScrollView style={ style.container }>

			{ topComponent() }

			{ mainComponent() }

		</ScrollView>
	);
};

export default ProfileDetail;