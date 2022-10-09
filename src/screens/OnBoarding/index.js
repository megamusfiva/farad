import { React, useState } from 'react';
import { useWindowDimensions, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Colors from '../../constants/Colors';

import Navigation from '../../helpers/Navigation';
import style from './style';

const OnBoarding = () => {

	const data = [
		{
			'img': require('../../assets/img1.png'),
			'title': 'Safe Ride, Save the World',
			'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, a vivamus sit sit. Vitae ac, viverra semper pellentesque.'
		},
		{
			'img': require('../../assets/img2.png'),
			'title': 'iScoot is Yours to Track!',
			'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, a vivamus sit sit. Vitae ac, viverra semper pellentesque.'
		}, {
			'img': require('../../assets/img3.png'),
			'title': 'Recharge Anywhere!',
			'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, a vivamus sit sit. Vitae ac, viverra semper pellentesque.'
		},
	];

	const windowWidth = useWindowDimensions().width;
	const windowheight = useWindowDimensions().height;

	const [sliderState, setSliderState] = useState({
		item: 0,
		offset: 0,
	});

	const slideChanged = e => {
		const item = Math.round(e.nativeEvent.contentOffset.x / windowWidth);

		setSliderState({
			item: item,
			offset: item * windowWidth,
		});
	};

	const slideChangedBtn = item => {
		const offset = item * windowWidth;
		listViewRef.scrollToOffset({ offset: offset, animated: true });
	};

	const onPressFinish = async () => {
		Navigation.push('Login', {});
	};

	const renderer = ({ item, index }) => (
		< View style={ { height: windowheight, width: windowWidth } }>

			<View>

				<Image style={ { height: windowheight / 1.5, width: windowWidth } } source={ item.img } />

				<View style={ { height: windowheight / 1.5, width: windowWidth, backgroundColor: Colors.black.opacityHalf, position: 'absolute', top: 0, zIndex: 1 } }></View>

			</View>

			<View style={ style.OnBoardingCard }>

				<Image style={ style.imageCard } source={ require('../../assets/farad_logo.png') } />

				<Text style={ style.OnBoardingCardTitle }>{ item.title }</Text>

				<Text style={ style.OnBoardingCardDesc }>{ item.desc }</Text>

				<View style={ style.OnBoardingCardButton }>
					{
						index > 0 ?
							<TouchableOpacity
								style={ style.gSlideButton }
								onPress={ () => {
									slideChangedBtn(index - 1);
								} }>

								<Image source={ require('../../assets/left-arrow.png') } />

							</TouchableOpacity>
							:
							<View
								style={ style.wSlideButton }>
							</View>
					}

					{ index != 2 ?
						<TouchableOpacity
							style={ style.gSlideButton }
							onPress={ () => {
								if (index < data.length) {
									slideChangedBtn(index + 1);
								}
							} }
						>
							<Image source={ require('../../assets/right-arrow.png') } />
						</TouchableOpacity> :
						<TouchableOpacity
							style={ { borderRadius: 10, height: 40, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' } }
							onPress={ () => {
								onPressFinish();
							} }
						>
							<Text style={ { color: '#FFF', fontWeight: '700', paddingHorizontal: 20, fontSize: 15 } }>Let's Get Going</Text>
						</TouchableOpacity>
					}
				</View>
			</View>
		</View >
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

	const SkipBtn = () => (

		<TouchableOpacity style={ style.skipButton }
			onPress={ () => {
				onPressFinish();
			} }>

			{ sliderState.item != 2 ?
				<Text style={ style.white }>Skip for now</Text> :
				null
			}

		</TouchableOpacity>
	);

	return (
		<View>

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
				getItemLayout={ (_, index) => ({
					length: windowWidth,
					offset: windowWidth * index,
					index,
				}) }
			/>

			<View style={ style.controls }>

				{ dots() }

			</View>

			{ SkipBtn() }

		</View>
	);
};

export default OnBoarding;