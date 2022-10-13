import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

import style from './style';

const InputField = (props) => {

	const title = props.title ? props.title : '';
	const placeholder = props.placeholder ? props.placeholder : '';
	const rightIcon = props.rightIcon ? props.rightIcon : '';
	const type = props.type ? props.type : '';

	const [eyeSlash, setEyeSlash] = useState(true);
	const [onFocus, setOnFocus] = useState(false);
	const [valid, setValid] = useState(true);

	const Validation = (text) => {

		if (text.length < 8) {
			return setValid(false);
		} else {
			return setValid(true);
		}

	};

	const PasswordField = () => (
		<View style={ style.container }>

			<TextInput
				style={
					[style.input,
					{
						borderWidth: 1,
						borderColor:
							onFocus ? Colors.text.green :
								!valid ? Colors.red.error : 'transparent'
					}] }
				onChangeText={ (text) => Validation(text) }
				placeholder={ placeholder }
				secureTextEntry={ eyeSlash }
				onFocus={ () =>
					valid ? setOnFocus(true) : null
				}
				onBlur={ () => setOnFocus(false) } />

			{ eyeSlash ?

				<TouchableOpacity
					style={ style.icon }
					onPress={ () => { setEyeSlash(false); } } >

					<FontAwesome name="eye" size={ 15 } color={ Colors.grey.default } />

				</TouchableOpacity>
				:
				<TouchableOpacity
					style={ style.icon }
					onPress={ () => { setEyeSlash(true); } } >

					<FontAwesome name="eye-slash" size={ 15 } color={ Colors.grey.default } />

				</TouchableOpacity>

			}
		</View>
	);

	const RegularField = () => (

		<View style={ style.container }>

			<TextInput
				style={ [style.input, { borderWidth: 1, borderColor: onFocus ? Colors.text.green : 'transparent' }] }
				placeholder={ placeholder }
				keyboardType={ type }
				onFocus={ () => setOnFocus(true) }
				onBlur={ () => setOnFocus(false) }
			/>

			{ rightIcon ?

				<View style={ style.iconWrap }>

					<FontAwesome name={ rightIcon } size={ 15 } />

				</View>
				:
				null

			}
		</View>
	);

	return (
		<View>

			{ title ? <Text style={ style.text }>{ title }</Text> : null }

			{ type == 'password' ? PasswordField() : RegularField() }

		</View>
	);

};

export default InputField;