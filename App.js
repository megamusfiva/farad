import React, { useState, useEffect } from 'react';

import MainRouter from './src/router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
	// const [onboarded, setOnboarded] = useState();

	// useEffect(() => {
	// 	getStorage();
	// }, []);

	// const getStorage = async () => {
	// 	const onboarded = await AsyncStorage.getItem('ONBOARDED');
	// 	setOnboarded(JSON.parse(onboarded));
	// };

	return (
		<MainRouter />
	);
};


export default App;