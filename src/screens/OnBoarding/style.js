import Colors from "../../constants/Colors";

export default {

	row: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	white: {
		color: Colors.white.default
	},

	imageCard: {
		marginTop: 20,
		marginBottom: 10
	},

	slideLeft: {
		borderRadius: 20,
		height: 40,
		width: 40,
		backgroundColor: Colors.text.green,
		justifyContent: 'center',
		alignItems: 'center'
	},

	slideEmpty: {
		borderRadius: 20,
		height: 40,
		width: 40,
		backgroundColor: Colors.white.default,
		justifyContent: 'center',
		alignItems: 'center'
	},

	OnBoardingCard: {
		backgroundColor: Colors.white.default,
		borderTopLeftRadius: 20,
		top: -30
	},

	OnBoardingCardTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		paddingLeft: 19,
		color: '#231F20'
	},

	OnBoardingCardDesc: {
		fontSize: 14,
		paddingLeft: 19,
		lineHeight: 20,
		paddingTop: 20,
		color: '#828D8A'
	},

	OnBoardingCardButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
		paddingVertical: 30
	},

	controls: {
		position: 'absolute',
		width: '100%',
		top: 545,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
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

	gSlideButton: {
		borderRadius: 20,
		height: 40,
		width: 40,
		backgroundColor: Colors.text.green,
		justifyContent: 'center',
		alignItems: 'center'
	},

	wSlideButton: {
		borderRadius: 20,
		height: 40,
		width: 40,
		backgroundColor: Colors.white.default,
		justifyContent: 'center',
		alignItems: 'center'
	},

	skipButton: {
		position: 'absolute',
		color: '#FFF',
		top: 80,
		right: 20,
		zIndex: 2
	}
};