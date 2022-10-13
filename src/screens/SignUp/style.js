import Colors from "../../constants/Colors";

export default {

	controls: {
		position: 'absolute',
		width: '10%',
		top: 25,
		right: 30,
		flexDirection: 'row',
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

};