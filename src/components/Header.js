import React, { Component } from 'react';
import { Constants } from 'expo';
import { Text, View, Image, TouchableOpacity, Modal, StyleSheet, Button, TouchableHighlight } from 'react-native';
import ContentModal from './ContentModal';
import SearchInput from './SearchInput';

class Header extends Component {
	constructor(props){
	  super(props);
	  this.state = {
	    modalVisible: false,
	  }
	}


	render(){
		return(
			<View style={styles.viewStyle}>		
		        <Modal
		        	animationType="fade"
		        	transparent={true}
		        	visible={this.state.modalVisible}
		        	onRequestClose={() => {
		        	  Alert.alert('Modal has been closed.');
		        	}}>
		        	<TouchableHighlight 
		        		onPress={() => {
	        				this.setState({ modalVisible: false })
	        			}}
		        		style={styles.modalBackground}>
		        		<View style={styles.containerModal}>
    		        		<View style={styles.containerCloseModal}>
    			        		<TouchableOpacity
    			        			onPress={() => {
    			        				this.setState({ modalVisible: false })
    			        			}}>
    			        			<Image
    			        				style={[styles.closeModal, ]}
    			        				source={require('../assets/icons/AddDiagnostico.png')}
    			        				resizeMode = 'contain'
    			        			/>
    			        		</TouchableOpacity>
    		        		</View>
			        		<ContentModal titleModal = {'Hola mundo'} textButton={'adios'}/>
		        		</View>
		        	</TouchableHighlight>
		        </Modal>
				<TouchableOpacity
					onPress={() => {this.setState({ modalVisible: true })}}
				>
				  <Image
				    style={styles.button}
				    source={require('../assets/icons/AddDiagnostico.png')}
				  />
				</TouchableOpacity>
				<SearchInput placeHolderText={'Search'}/>
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

const styles = StyleSheet.create({
	viewStyle:{
		backgroundColor: 'rgba(255, 255, 255, 1)',
		height: 47+Constants.statusBarHeight,
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingTop: Constants.statusBarHeight,
		paddingLeft: 40,
		paddingRight: 25,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: colores.gris.color,
		shadowColor: colores.gris.color,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.0, 
		elevation: 3
	},
	button:{
	    width: 45,
	    height: 45,
		//marginLeft: 20,
		//marginRight: 20
	},
	modalBackground: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.3)'
	},
	containerModal: {
		backgroundColor: 'rgba(255, 255, 255, 1)',
		marginRight: 80, 
		paddingTop: Constants.statusBarHeight,
		flex: 1,
		justifyContent: 'flex-start',
		shadowColor:'black',
		shadowOffset: { width: 8, height: 0 },
		shadowOpacity: 0.2,
		elevation: 2,
	},
	containerCloseModal: {
		justifyContent: 'flex-start',
		marginTop: 5,
		marginLeft: 10,
		flexDirection: 'row'
	},
	closeModal: {
		width: 30,
		height: 30,
		marginBottom: 0,
		marginRight: 25

	}
});

export default Header;