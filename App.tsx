import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_800ExtraBold, useFonts } from '@expo-google-fonts/nunito-sans';
import theme from './src/theme';

import Home from '@screens/Home';
import Statistics from '@screens/Statistics';

export default function App() {
	const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_800ExtraBold })

	return (
		<ThemeProvider theme = {theme}>
			<StatusBar />
			{ fontsLoaded ?
				<Statistics />
			:
				<ActivityIndicator />
			}

		</ThemeProvider>
	);
}