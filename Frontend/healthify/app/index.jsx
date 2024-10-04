import { Link } from 'expo-router';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const App = () =>{
    return (
        <View className="w-full items-center justify-center h-full px-4">
            <Text>Healthify</Text>
            <Text>AI-Integrated Early Disease Diagnosis Application</Text>
            <Link href="/chat" style={{color: "blue"}} >Go to chat</Link>
            <StatusBar style="auto" />
        </View>
    );
}

export default App