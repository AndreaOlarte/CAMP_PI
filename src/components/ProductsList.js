import React, { Component } from 'react';
import { Constants } from 'expo';
import { Text, FlatList, ListView, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ContentModal from './ContentModal';
import SearchInput from './SearchInput';
import ProductBox from './ProductBox';
import {Actions} from 'react-native-router-flux';

class ProductsList extends Component {
	constructor(props){
	  super(props);
	  
      this.state = {
        dataSource: [
		        		{
		        			id: 1,
		        			name: 'Laptop1',
		        			price: '$300.00',
		        			photo: require('../assets/images/chest.png')
		        		},
		        		{
		        			id: 2,
		        			name: 'Laptop2',
		        			price: '$400.00',
		        			photo: require('../assets/images/chest.png')
		        		},
		        		{
		        			id: 3,
		        			name: 'Laptop3',
		        			price: '$500.00',
		        			photo: require('../assets/images/chest.png')
		        		},
		        		{
		        			id: 4,
		        			name: 'Laptop4',
		        			price: '$600.00',
		        			photo: require('../assets/images/chest.png')
		        		}
		        	],
		anotherState: '',
      };
	}

	handlePress(title){
	  Actions.DetailProduct({product: title})
	}

	render(){
		return(	
			<FlatList
				columnWrapperStyle
				numColumns = {2}
		        data={this.state.dataSource}
		        renderItem={({ item }) => (
		        	<TouchableOpacity onPress={() => this.handlePress(item.name)} style={{flex: 1}}>
		          		<ProductBox photo={item.photo} price={item.price} name={item.name}/>
		          	</TouchableOpacity>
		        )}
		        keyExtractor={item => item.id}
			/>
		);
	}

}

export default ProductsList;