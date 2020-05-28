import React from 'react';
import {
  SafeAreaView,  
  ScrollView,  
  Text,
  StatusBar,
  Button
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>Hello World - react-native app</Text>
          <Button title="Listar" onPress={() => navigation.navigate("List")} />            
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
