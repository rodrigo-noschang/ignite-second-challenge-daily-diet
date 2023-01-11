import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_800ExtraBold, useFonts } from '@expo-google-fonts/nunito-sans';
import theme from './src/theme';

import Routes from '@routes/index';

export default function App() {
	const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_800ExtraBold })

	return (
		<ThemeProvider theme = {theme}>
			<StatusBar backgroundColor = 'transparent'/>
			{ fontsLoaded ?
				<Routes />
			:
				<ActivityIndicator />
			}

		</ThemeProvider>
	);
}