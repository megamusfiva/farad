import Colors from "../../constants/Colors";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default {

	container: {
		paddingHorizontal: 30,
		width: windowWidth
	},

	top: {
		paddingTop: 10
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

	sosmedCard: {
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'center'
	},

	textCenter: {
		color: Colors.text.grey,
		alignSelf: 'center',
		paddingBottom: 20
	},

};