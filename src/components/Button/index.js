import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from './style';

const DefaultButton = (props) => {

	return (
		<TouchableOpacity
			style={
				[
					style.buttonWrap,
					{
						width: props.width,
						alignSelf: props.position
					}
				]
			}
			onPress={ props.onPress}>

			<Text style={ style.button }>{ props.title }</Text>

		</TouchableOpacity>
	);
};

const SosmedButton = (props) => {
	return (
		<TouchableOpacity style={ style.sosmedWrap } onPress={ () => { } }>

			<FontAwesome name={ props.image } size={ 25 } />

		</TouchableOpacity>
	);
};

const CustomButton = {
	DefaultButton,
	SosmedButton
};

export default CustomButton;