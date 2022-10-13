import {
	React,
	useState
} from 'react';
import {
	View,
	FlatList,
	useWindowDimensions
} from 'react-native';

import {
	Header,
	PageContainer
} from '../../components';
import {
	Register,
	Verify,
	ProfileDetail
} from '../../screens';

import style from './style';

const SignUp = () => {

	const windowWidth = useWindowDimensions().width;

	const data = [
		{
			'title': 'Enter Your Phone Number',
			'desc': 'Sign up with your phone number'
		},
		{
			'title': 'Verify Your Phone Number',
			'desc': 'We had just sent you 4 digit OTP code to your phone number'
		}, {
			'title': 'Sign Up',
			'desc': 'Sign Up to continue using iScoot.'
		},
	];

	const slideChanged = e => {
		const item = Math.round(e.nativeEvent.contentOffset.x / windowWidth);

		setSliderState({
			item: item,
			offset: item * windowWidth,
		});
	};

	const [sliderState, setSliderState] = useState({
		item: 0,
		offset: 0,
	});

	const [doSlide, setDoSlide] = useState(0);

	const addTodo = () => {
		setDoSlide((c) => c + 1);
		slideChangedBtn(doSlide);
	};

	const slideChangedBtn = (item) => {
		const offset = (item + 1) * windowWidth;
		listViewRef.scrollToOffset({ offset: offset, animated: true });
	};


	const renderer = ({ item, index }) => (
		<View>

			{ index == 0 ?

				<Register
					title={ item.title }
					desc={ item.desc }
					addTodo={ addTodo } /> :

				index == 1 ?
					<Verify
						title={ item.title }
						desc={ item.desc }
						addTodo={ addTodo } /> :

					<ProfileDetail
						title={ item.title }
						desc={ item.desc }
						addTodo={ addTodo } /> }

		</View>
	);

	const dots = () => (
		<View style={ style.dotGroup }>

			{ data.map((_, index) => (

				<View
					key={ index }
					style={ [style.dot, sliderState.item === index ? style.dotActive : null] } />

			)) }

		</View>
	);

	return (
		<PageContainer>

			<View style={ style.controls }>

				{ dots() }

			</View>

			<View style={ { paddingLeft: 30 } }>

				<Header />

			</View>

			<FlatList
				data={ data }
				renderItem={ renderer }
				ref={ (slider) => {
					listViewRef = slider;
				} }
				keyExtractor={ (_, index) => index }
				horizontal={ true }
				pagingEnabled={ true }
				showsHorizontalScrollIndicator={ false }
				onScroll={ slideChanged }
				scrollEnabled={ true }
				getItemLayout={ (_, index) => ({
					length: windowWidth,
					offset: windowWidth * index,
					index,
				}) }
			/>

		</PageContainer>
	);
};

export default SignUp;