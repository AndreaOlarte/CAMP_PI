import React, {Component} from 'react';
import { Constants } from 'expo';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Header from '../../components/Header';
import CategoriesList from '../../components/CategoriesList';
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
export default class CategoriesScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        <Header />
        <ScrollView>
          <View style={styles.containerContent}> 
            <Text style={styles.welcome}>Categorías</Text> 
          </View>
            <CategoriesList />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
  },
  containerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  welcome: {
    fontSize: 30,
    color: colores.azul.color,
    textAlign: 'center',
  },
});
