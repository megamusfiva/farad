import {
	React,
	useState
} from 'react';
import {
	Text,
	View,
	Image,
	FlatList,
	Dimensions
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

import HeaderMenu from '../../components/HeaderMenu';
import PageContainer from '../../components/PageContainer';

import style from './style';

const Home = ({ navigation }) => {

	const data = [
		{
			'img': require('../../assets/img1.png'),
		},
		{
			'img': require('../../assets/img2.png'),
		}, {
			'img': require('../../assets/img3.png'),
		},
	];

	const windowWidth = Dimensions.get('window').width;

	const [sliderState, setSliderState] = useState({
		item: 0,
		offset: 0,
	});

	const slideChanged = e => {
		const item = Math.round(e.nativeEvent.contentOffset.x / windowWidth);
		console.log(item);
		setSliderState({
			item: item,
			offset: item * windowWidth,
		});
	};

	const renderer = ({ item, index }) => (
		< View style={ style.height }>

			<View>

				<Image style={ style.imgPos } source={ item.img } />

				<View style={ style.img }></View>

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

	const TopContent = () => (
		<View>
			<View style={ style.row }>

				<View style={ style.column }>

					<View style={ style.row }>

						<View style={ style.row }>
							<Text>GPS </Text>
							<Image source={ require('../../assets/ic-bell.png') } />
						</View>

						<View style={ style.row }>
							<Text>CELL </Text>
							<Image source={ require('../../assets/ic-bell.png') } />
						</View>

					</View>

					<Text style={ style.text60 }>60 km/hr</Text>

					<View style={ style.row }>
						<Image source={ require('../../assets/btn-power-color.png') } />
						<Text>Power Off</Text>
					</View>

					<View style={ style.row }>
						<Image source={ require('../../assets/btn-alarm.png') } />
						<Text>Enable Alarm</Text>
					</View>

				</View>
				<View style={ style.column }>
					<FlatList
						style={ { width: windowWidth / 2 } }
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
					<View >

						{ dots() }

					</View>
				</View>


			</View>

		</View >
	);

	const bottomsheet = () => (

		<View style={ style.bottomSheet }>
			<Text>Performance</Text>
		</View>

	);

	return (
		<PageContainer>

			<View padding={ 15 }>

				<HeaderMenu navigation={ navigation } />

				<TopContent />

			</View>

			<BottomSheet
				snapPoints={ [500, 500, '82%'] }
				borderRadius={ 20 }
				renderContent={ bottomsheet }
			/>

		</PageContainer >
	);
};

export default Home;