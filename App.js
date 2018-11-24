// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import Header from './src/components/Header';

import CategoriesScreen from './src/screens/HomeScreen/CategoriesScreen';
import ProductsScreen from './src/screens/HomeScreen/ProductsScreen';
import DetailProductScreen from './src/screens/HomeScreen/DetailProductScreen';
import ChartScreen from './src/screens/HomeScreen/ChartScreen';

import EditProfileScreen from './src/screens/EditProfileScreen';

import AddClientScreen from './src/screens/AddClientScreen';

import AddProductScreen from './src/screens/AddProductScreen';

import AddBrandScreen from './src/screens/AddBrandScreen';

import ListClientsScreen from './src/screens/ClientsScreen/ListClientsScreen';
import DetailClientScreen from './src/screens/ClientsScreen/DetailClientScreen';

import ListBillsScreen from './src/screens/ReportsScreen/ListBillsScreen';
//import DetailBillScreen from './src/screens/ReportsScreen/DetailBillScreen';
//OR
//import DetailClientScreen from './src/screens/ReportsScreen/Screen';

import TodayBillsScreen from './src/screens/TodayBillsScreen/TodayBillsScreen';
//import DetailBillScreen from './src/screens/TodayBillsScreen/DetailBillScreen';
//OR
//import DetailClientScreen from './src/screens/TodayBillsScreen/Screen';

const focusedIcons = {
  home: require('./src/assets/icons/AddDiagnostico.png'),
  clients: require('./src/assets/icons/AddExpediente.png'),
  reports: require('./src/assets/icons/AddGrupo.png'),
  bills: require('./src/assets/icons/AddOpcion.png'),
}
const unfocusedIcons = {
  home: require('./src/assets/icons/DeleteDiagnostico.png'),
  clients: require('./src/assets/icons/DeleteExpediente.png'),
  reports: require('./src/assets/icons/DeleteGrupo.png'),
  bills: require('./src/assets/icons/DeleteOpcion.png'),
}

const TabIcon= ({ title, focused }) => {
    let image;

    switch (title) {
        case 'Home':
            image = focused ? focusedIcons.home : unfocusedIcons.home;
            break;
        case 'Clientes':
            image = focused ? focusedIcons.clients : unfocusedIcons.clients;
            break;
        case 'Reportes':
            image = focused ? focusedIcons.reports : unfocusedIcons.reports;
            break;
        case 'Pagos':
            image = focused ? focusedIcons.bills : unfocusedIcons.bills;
            break;
    }

    return ( <Image style={styles.closeModal} resizeMode = 'contain' source={image} /> );
}

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

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="tabbar" tabs labelStyle={{fontSize: 17}} inactiveTintColor={'#C0C0C0'} activeTintColor={colores.gris.color}
      tabBarStyle={
        {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: colores.gris.color,
          height: 60,
          shadowColor: colores.gris.color,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.0, 
          elevation: 3
        }
      } 
      hideNavBar>
      <Scene key="Home" title="Home" icon={TabIcon}>
        <Scene key="Categories" navBar={Header}title="" component={CategoriesScreen} initial hideNavBar/>
        <Scene key="Products"  title="" component={ProductsScreen}/>
        <Scene key="DetailProduct" title="" component={DetailProductScreen}/>
        <Scene key="Chart" title="" component={ChartScreen}/>
      </Scene>
      <Scene key="Clientes" title="Clientes" icon={TabIcon}>
        <Scene key="ListClients" component={ListClientsScreen} hideNavBar/>
        <Scene key="DetailClient" title="DetailClient" component={DetailClientScreen}/>
      </Scene>
      <Scene key="Reportes" title="Reportes" icon={TabIcon}>
        <Scene key="ListBills" component={ListBillsScreen} hideNavBar/>
      </Scene>
      <Scene key="Pagos" title="Pagos" icon={TabIcon}>
        <Scene key="TodayBills" component={TodayBillsScreen} hideNavBar/>
      </Scene>
    </Scene>

    <Scene key="Welcome" component={WelcomeScreen} hideNavBar />
    <Scene key="SignIn" component={SignInScreen}/>
    <Scene key="SignUp" component={SignUpScreen}/>

    <Scene key="EditProfile" component={EditProfileScreen}/>

    <Scene key="AddClient" component={AddClientScreen}/>

    <Scene key="AddProduct" component={AddProductScreen}/>

    <Scene key="AddBrand" component={AddBrandScreen}/>

  </Scene>
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router scenes={scenes}/>
    );
  }
}

const styles = StyleSheet.create({
  closeModal: {
    width: 30,
    height: 30,
  },
  navBar: {
    backgroundColor: 'transparent',
  },
});