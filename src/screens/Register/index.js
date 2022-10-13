import { React } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { InputField, CustomButton } from '../../components';
import Navigation from '../../helpers/Navigation';

import style from './style';

const Register = ({ title, desc, addTodo }) => {

	const topComponent = () => (
		<View style={ style.top }>

			<Text style={ style.title }>{ title }</Text>

			<Text style={ style.titleThin }>{ desc }</Text>

		</View>
	);

	const mainComponent = () => (
		<View style={ style.main }>

			<InputField
				title={ 'Phone Number' }
				placeholder={ 'Enter your phone number' }
				type={ 'numeric' } />

			<CustomButton.DefaultButton
				title={ 'Continue' }
				onPress={ addTodo }
			/>

		</View>
	);

	const bottomComponent = () => (

		<View style={ style.bottomWrap }>

			<Text style={ style.bottom }>Already have an account? </Text>

			<TouchableOpacity onPress={ () => { Navigation.replace('Login', {}); } }>

				<Text style={ style.signin }>Sign In Here</Text>

			</TouchableOpacity>

		</View >
	);

	return (
		<View style={ style.container }>

			{ topComponent() }

			{ mainComponent() }

			{ bottomComponent() }

		</View>
	);
};

export default Register;