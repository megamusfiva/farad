import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Style from './style';

const HeaderMenu = ({ navigation }) => {

	return (
		<View style={ Style.header }>

			<TouchableOpacity style={ { paddingTop: 10, flex: 0.3 } }
				onPress={ () => {
					navigation.toggleDrawer();
					console.log("navigation :", navigation);
				} }
			>

				<Image source={ require('../../assets/ic-menu.png') } />

			</TouchableOpacity>

			<View style={ { flex: 2, flexDirection: 'row', alignSelf: 'center' } }>

				<View>
					<Text style={ { fontWeight: '700' } }>Nunes’ Silver iScoot</Text>
					<Text>B 1234 ABC</Text>
				</View>

				<TouchableOpacity style={ { padding: 10 } } onPress={ null }>
					<Image source={ require('../../assets/bottom-arrow-color.png') } />
				</TouchableOpacity>

			</View>

			<TouchableOpacity style={ { paddingTop: 10, flex: 0.3 } } onPress={ null }>
				<Image source={ require('../../assets/ic-bell.png') } />
			</TouchableOpacity>

			<TouchableOpacity style={ { paddingTop: 10, flex: 0 } } onPress={ null }>
				<Image source={ require('../../assets/ic-warning.png') } />
			</TouchableOpacity>

		</View >
	);
};

export default HeaderMenu;