import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
//import LineModal from '../components/LineModal';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const ContentModal = (props) => {
	return (
		//Dentro de este View van cositas para el contenido en lo blanco
		<View style={styles.container}>
			<Text style={styles.textStyle}>{props.titleModal}</Text>
	      	<View style={styles.buttonContainer}>
		      	<TouchableOpacity style={styles.button} onLongPress = {() => {
		      			console.log('Hola mundo');
		      			//this.refs[1].toggle();
		      			console.log('ya jaló');
		      		}}>
		      		<Text style={styles.textButton}>{props.textButton}</Text>
		      	</TouchableOpacity>
	      	</View>
		</View>
	);
};

const styles = {
	container: {
		justifyContent: 'space-between',
		flex: 1
	},
	buttonContainer: {
		justifyContent: 'flex-end',
		flexDirection: 'row'
	},
	button:{
	    backgroundColor: '#3EC58A',
	    padding: 5,
	    borderRadius: 8,
	    borderColor: '#3DE69C',
	    borderBottomColor: '#3DE69C',
	    borderBottomWidth: 1,
	    borderWidth: 1,
	    width: 100,
	    height: 35,
	    marginTop: 20,
	    marginRight: 20
	    
	},
	textButton: {
		color: 'white',
		fontSize: 18,
		textAlign: 'center'
	},
	textStyle: {
		marginTop: 0,
		color: '#3DB07E',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	inputContainerStyle: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		shadowColor:'black',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		elevation: 2,
		paddingLeft: 5,
		borderRadius: 8,

		borderColor: '#3DE69C',
		borderBottomColor: '#3DE69C',
		borderBottomWidth: 1,
		borderWidth: 1
	},
	inputTextStyle: {
		color: '#5D5D5D',
	},
	inputLabelStyle: {
		color: '#7E9C94',
		fontSize: 17,
		fontWeight: 'normal',	
		paddingLeft: 1,
		marginBottom: 5,
		marginTop: 0
	}
}

export default ContentModal;
