import Colors from "../../constants/Colors";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default {

	container: {
		flex: 1,
		paddingHorizontal: 30,
		width: windowWidth
	},

	top: {
		// flex: 1,
		paddingTop: 20
	},
	title: {
		fontSize: 25,
		fontWeight: '700',
		color: Colors.text.black,
	},

	titleThin: {
		color: Colors.text.grey,
		paddingTop: 10
	},

	button: {
		padding: 20,
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: 15
	},

	bottom: {
		color: Colors.text.grey,
		fontSize: 15
	},

	resent: {
		color: Colors.text.green,
		fontWeight: 'bold',
		fontSize: 15
	},

	bottomWrap: {
		alignSelf: 'center',
		flexDirection: 'row'
	},

	textInput: {

		padding: 10,
		margin: 8,
		width: 55,
		height: 55,
		backgroundColor: Colors.grey.light,
		borderRadius: 5,
	},

	otpInputContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 30
	}

};