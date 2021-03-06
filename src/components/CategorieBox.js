import React, { Component } from 'react';
import { Constants, LinearGradient } from 'expo';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ContentModal from './ContentModal';
import SearchInput from './SearchInput';

class CategorieBox extends Component {
	constructor(props){
	  super(props);
	  this.state = {
	    
	  }
	}


	render(){

		return(	
			<View style={styles.viewStyle}>
				<Image
				  style={styles.image}
				  source={this.props.photo}
				  resizeMode='cover'
				/>
				<View style={styles.textContainer}>
					<Text style={styles.title}>{this.props.title}</Text>
				</View>
				<LinearGradient style={styles.imageContainer} colors={['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.05)']}>
				</LinearGradient>
			</View>
		);
	}

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

const borderRadius = 8;
const divider = 30;

const styles = StyleSheet.create({
	viewStyle:{
		backgroundColor: 'rgba(255, 255, 255, 1)',
		height: 150,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
		flex: 1,
		borderRadius: borderRadius,
		shadowColor: colores.gris.color,
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5, 
		elevation: 3,
		margin: 15,
		marginTop: 0
	},
	image: {
		height: 150,
		flex: 1,
		borderRadius: borderRadius,
	},
	textContainer: {
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		position: 'absolute',
		height: divider,
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		borderTopRightRadius: borderRadius,
		borderTopLeftRadius: borderRadius,
		borderWidth: 1,
		borderColor: colores.azul.color,
		borderBottomWidth: 0,
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft: 10
	},
	title: {
		color: colores.azul.color,
		fontSize: 20,
		fontWeight: 'normal'
	},
	imageContainer: {
		top: divider,
		left: 0,
		right: 0,
		bottom: 0,
		position: 'absolute',
		flex: 1,
		backgroundColor: 'transparent',
		borderBottomRightRadius: borderRadius,
		borderBottomLeftRadius: borderRadius,
		borderWidth: 1,
		borderColor: colores.azul.color,
		borderTopWidth: 0
	}
});

export default CategorieBox;