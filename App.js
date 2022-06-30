import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
   
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#2DB3F3'}
          centerComponent={{
            text: 'Hydration App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

    
       
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }, 
});
