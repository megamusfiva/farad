import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import Style from './style';

const Header = () => {
	return (
		<View style={ Style.header }>
			<TouchableOpacity onPress={ null }>
				<Image source={ require('../../assets/farad_logo.png') } />
			</TouchableOpacity>
		</View>
	);
};

export default Header;