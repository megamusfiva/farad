import React, { useState, useRef } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
} from 'react-native';

import { CustomButton } from '../../components';

import style from './style';

const Verify = ({ title, desc, addTodo }) => {

	const [isPinReady, setIsPinReady] = useState(false);
	const otp1 = useRef();
	const otp2 = useRef();
	const otp3 = useRef();
	const otp4 = useRef();

	const onChange = (event, tags) => {
		const text = event.nativeEvent.text;

		if (text != '') {
			switch (tags) {
				case 'otp1':
					otp2.current.focus();
					break;

				case 'otp2':
					otp3.current.focus();
					break;

				case 'otp3':
					otp4.current.focus();
					break;
			}
		}

		else if (text == '') {
			switch (tags) {
				case 'otp4':
					otp3.current.focus();
					break;

				case 'otp3':
					otp2.current.focus();
					break;

				case 'otp2':
					otp1.current.focus();
					break;
			}
		}

	};
	const renderMapTextInput = () => {
		const data = [
			{
				ref: otp1,
				onChange: 'otp1'
			},
			{
				ref: otp2,
				onChange: 'otp2'
			},
			{
				ref: otp3,
				onChange: 'otp3'
			},
			{
				ref: otp4,
				onChange: 'otp4'
			}
		];
		return data.map((data, index) => {
			return (
				<View key={ index }>
					<TextInput
						keyboardType="numeric"
						ref={ data.ref }
						style={ style.textInput }
						maxLength={ 1 }
						textAlign='center'
						onChange={ (e) => onChange(e, data.onChange) } />

				</View >
			);
		});
	};

	const topComponent = () => (
		<View style={ style.top }>

			<Text style={ style.title }>{ title }</Text>

			<Text style={ style.titleThin }>{ desc }</Text>

		</View>
	);

	const mainComponent = () => (

		<View style={ style.main }>

			<View style={ style.otpInputContainer }>
				{ renderMapTextInput() }
			</View>

			<View style={ style.bottomWrap }>

				<Text style={ style.bottom }>Didn’t receive code? </Text>

				<TouchableOpacity onPress={ () => { } }>

					<Text style={ style.resent }>Resend Code</Text>

				</TouchableOpacity>

			</View >

			<CustomButton.DefaultButton
				disabled={ !isPinReady }
				title={ 'Verify Phone Number' }
				onPress={ addTodo } />

			<TouchableOpacity>
				<Text style={ style.button }>Change Phone Number</Text>
			</TouchableOpacity>

		</View>
	);

	return (
		<View style={ style.container }>

			{ topComponent() }

			{ mainComponent() }

		</View>
	);
};

export default Verify;