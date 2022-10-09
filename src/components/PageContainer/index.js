import React from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";

import { Header } from "../../components";

import style from "./style";

const PageContainer = ({ scrollView, ...props }) => {

	const isView = () => (

		<View style={ style.viewContainer }>

			{ props.children }

		</View>
	);

	return (

		<SafeAreaView style={ style.color } >

			<StatusBar
				animated
				translucent
				backgroundColor={ 'transparent' }
				barStyle={ props.statusBarstyle ?? "dark-content" } />

			<Header />

			{ scrollView ?

				<ScrollView>

					{ isView() }

				</ScrollView>
				:
				isView()
			}

		</SafeAreaView >
	);
};

export default PageContainer;