import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

export default function App() {
	const fontsLoaded = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

	return (
		<ThemeProvider theme = {theme}>
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar style="auto" />
			</View>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.COLORS.BG_DARK_GRAY,
		alignItems: 'center',
		justifyContent: 'center',
	}
});
