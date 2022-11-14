import Colors from "../../constants/Colors";
import { Dimensions } from 'react-native';

const windowHeights = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default {

	row: {
		flexDirection: 'row'
	},

	column: {
		flexDirection: 'column'
	},

	height: {
		height: 200,
		width: windowWidth
	},

	imgPos: {
		height: 150,
		width: windowWidth
	},

	img: {
		height: 200 / 1.5,
		width: windowWidth,
		backgroundColor: Colors.black.opacityHalf,
		position: 'absolute',
		top: 0,
		zIndex: 1
	},

	bottomSheet: {
		backgroundColor: Colors.grey.default,
		padding: 16,
		height: windowHeights,
	},

	dotGroup: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},

	dot: {
		width: 4,
		height: 4,
		borderRadius: 10,
		marginHorizontal: 2,
		backgroundColor: '#DDD'
	},

	dotActive: {
		width: 20,
		backgroundColor: Colors.text.green,
	},

	text60: {
		fontSize: 24,
		fontWeight: '700'
	}

};