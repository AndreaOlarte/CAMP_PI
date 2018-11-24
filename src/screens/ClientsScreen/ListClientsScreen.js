import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import Header from '../../components/Header';
import {Actions} from 'react-native-router-flux';

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
export default class ListClientsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        
          <Header />
        <ScrollView>
          <View style={styles.containerContent}>
            <TouchableOpacity onPress={() => Actions.DetailClient()}> 
             <Text style={styles.welcome}>DetailClientScreen</Text> 
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colores.rosa.color,
    flex: 1
  },
  containerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
});
