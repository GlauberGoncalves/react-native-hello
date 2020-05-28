import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,    
  Text,
  StatusBar,
  Alert,
  Share,
  Button,
  Linking,
  Vibration
} from 'react-native';


const createTwoButtonAlert = () =>
Alert.alert(
    "Fala galeraaa",
    "React-native é sinistroooo",
    [
        {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
    },
    {text: "ola", onPress: ()=> console.log("olaaaaa"), style: "cancel"},
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ],
  { cancelable: false }
);


class Home extends Component{

    WhatsApp = () => {
     Linking.openURL(`whatsapp://send?text=${"fala aeeeeeee"}`);
    }

    Picpay = () => {
        Linking.openURL(`https://picpay.me/jessica.cristin/1.0`);
    }
    
    componentDidMount(){
        createTwoButtonAlert()
    }

    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
              console.log("foi compartilhado")
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
            console.log("não sei")
          }
        } catch (error) {
          alert(error.message);
        }
      };

    render(){
        return (
            <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text>Sobre</Text>
                <Button onPress={this.onShare} title="Share" />
                <Button onPress={this.WhatsApp} title="whatsapp" />
                <Button onPress={this.Picpay} title="Faça uma doação :)" />                
            </SafeAreaView>
            </Fragment>
        );
    }
};

export default Home;
