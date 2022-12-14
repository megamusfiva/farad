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
		flex: 0.4,
	},

	main: {
		flex: 2
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

	bottom: {
		color: Colors.text.grey,
		fontWeight: 'bold',
		fontSize: 15
	},

	signin: {
		color: Colors.text.green,
		fontWeight: 'bold',
		fontSize: 15
	},

	bottomWrap: {
		alignSelf: 'center',
		flex: 0.1,
		flexDirection: 'row'
	}

};