import React, { Component } from 'react';
import { Constants } from 'expo';
import { Text, FlatList, ListView, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ContentModal from './ContentModal';
import SearchInput from './SearchInput';
import CategorieBox from './CategorieBox';
import {Actions} from 'react-native-router-flux';

class CategoriesList extends Component {
	constructor(props){
	  super(props);
	  
      this.state = {
        dataSource: [
		        		{
		        			title: 'Computadoras',
		        			photo: require('../assets/images/pcFixed.jpg')
		        		},
		        		{
		        			title: 'Laptops',
		        			photo: require('../assets/images/pcFixed.jpg')
		        		},
		        		{
		        			title: 'Laptops2',
		        			photo: require('../assets/images/pcFixed.jpg')
		        		},
		        		{
		        			title: 'Laptops3',
		        			photo: require('../assets/images/pcFixed.jpg')
		        		}
		        	],
		anotherState: '',
      };
	}

	handlePress(title){
	  Actions.Products({categorie: title})
	}
	render(){
		return(	
			<FlatList
		        data={this.state.dataSource}
		        renderItem={({ item }) => (
		        	<TouchableOpacity onPress={() => {this.handlePress(item.title), console.log('Le picaste a: ' + item.title)}}>
		          		<CategorieBox photo={item.photo} title={item.title}/>
		          	</TouchableOpacity>
		        )}
		        keyExtractor={item => item.title}
			/>
		);
	}

}

export default CategoriesList;