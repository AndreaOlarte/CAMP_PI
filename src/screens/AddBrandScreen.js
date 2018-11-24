import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const colores = {
  azul: {
    name: 'azul',
    color: '#0D508D'
  },
  gris: {
    name: 'gris',
    color: '#5E5E5E'
  },
  rosa: {
    name: 'rosa',
    color: '#C64A95'
  },
  naranja: {
    name: 'naranja',
    color: '#F18537'
  },
}

type Props = {};
export default class AddBrandScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>AddBrandScreen | Welcome to {colores.rosa.name} page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colores.rosa.color,
  },
  welcome: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
});
