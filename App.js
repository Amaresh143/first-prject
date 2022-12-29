import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Blog from "./Src/Componants/Blog";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Blog" component={Blog} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomEndRadius:1,
    justifyContent:"center",
    
  },
});
