import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Press')

  const handleButtonPress = () => Alert.alert("MyApp", "Main message", [
    {text: "Yes", onPress: () => console.log('Yes')},
    {text: "No", onPress: () => console.log('No')}
  ])

  const handleButtonPress2 = () => Alert.prompt("MyApp", "Main message", text => console.log(text))

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={handleTextPress}>Hello!</Text>
      <Button title={'Press on me'} onPress={handleButtonPress} />
      <Button title={'New button'} onPress={handleButtonPress2} />
      <Image source={require('./assets/icon.png')} style={styles.image} />
      <TouchableWithoutFeedback onPress={handleButtonPress2}>
           <Image blurRadius={5} source={{uri: "https://cdn.britannica.com/46/154246-050-7C72E12F/view-Rome.jpg"}} style={styles.image} />
      </TouchableWithoutFeedback>
   
      

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    color: 'red',
  },
  image: {
    width: 200,
    height: 200
  }
});
