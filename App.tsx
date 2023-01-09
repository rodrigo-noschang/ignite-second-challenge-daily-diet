import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import theme from './src/theme';

import Home from '@screens/Home';

export default function App() {
	const fontsLoaded = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

	return (
		<ThemeProvider theme = {theme}>
			<StatusBar />
			<Home />
		</ThemeProvider>
	);
}