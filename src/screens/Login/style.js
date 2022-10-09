import Colors from "../../constants/Colors";

export default {

	container: {
		backgroundColor: Colors.white.default,
	},

	top:{
		flex: 0.4,
		paddingTop: 20
	},

	main:{
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

	forgotWrap: {
		alignItems: 'flex-end'
	},

	textCenter: {
		color: Colors.text.grey,
		alignSelf: 'center',
		paddingTop: 20
	},

	sosmedCard: {
		paddingTop: 20,
		flexDirection: 'row',
		justifyContent: 'center'
	},

	bottom: {
		color: Colors.text.grey,
		fontWeight: 'bold',
		fontSize: 15
	},
	
	forgot: {
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