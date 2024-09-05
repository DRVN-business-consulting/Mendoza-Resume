import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button, Switch, ScrollView, FlatList, SectionList, ActivityIndicator, Alert } from 'react-native';

export default function App() {
	const [value, setValue] = React.useState('');
	const pName = "Patrick Adreanne V. Mendoza"
	const pPos = "Information Systems Analyst I"
	const bDay = "May 14,1992"
	const mySex = "Male"
	const telNo = "09212346725"
	const myAdd = "QC"
	const myStat = "Married"
	const edCollege = "Graduate - BSIT - STI"
	const edHigh = "Graduate - SVRHS"
	const skillList = [
		{id: 0, name: 'Code Igniter'},
		{id: 1, name: 'PHP'},
		{id: 2, name: 'JS'},
		{id: 3, name: 'Vue JS'},
		{id: 4, name: 'CSS'},
		{id: 5, name: 'React'},
		{id: 6, name: 'Wordpress'},
		{id: 7, name: 'Drupal'},
		{id: 8, name: 'Magento'}
	]
	const worklList = [
		{id: 0, name: 'INFORMATION SYSTEMS ANALYST II'},
		{id: 1, name: 'INFORMATION SYSTEMS ANALYST I'},
		{id: 2, name: 'DEVELOPMENT ASSOCIATE / WEB DEVELOPER'},
		{id: 3, name: 'WEB CONTENT STAFF'}
	]
	const traininglList = [
		{id: 0, name: 'MILE2 C)SWAE TRAINING'},
		{id: 1, name: 'MOBILE AND API SECURITY TESTING'},
		{id: 2, name: 'CYBERSECURITY AWARENESS SEMINAR'},
		{id: 3, name: 'DIGITAL FORENSICS AND INCIDENT RESPONSE'}
	]
	return (
		<SafeAreaView style={[
			styles.container,
			{
				width: '100%',
				height: '100%'
			}
		]}>
			<ScrollView style = {{
				width: '100%',
				height: '100%'
			}}>
				<View style={{
					backgroundColor: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Image source={{ uri: 'https://placedog.net/720/520' }}
						style={{ width:200, height: 200, marginBottom: 20, marginTop:30, borderRadius: 100 }}></Image>
					<Text
						style={{
							fontStyle: 'italic',
							fontSize: 30,
							fontWeight: 'bold',
							textAlign: 'center',
							textTransform: 'uppercase'
						}}>{pName}</Text>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							textAlign: 'center',
							textTransform: 'uppercase',
							color: 'gray'
						}}>{pPos}</Text>

					<Text style={styles.myTitle}>Details</Text>
					<Text style={styles.myText}>Birthday: {bDay}</Text>
					<Text style={styles.myText}>Sex: {mySex}</Text>
					<Text style={styles.myText}>Telephone Number: {telNo}</Text>
					<Text style={styles.myText}>Address: {myAdd}</Text>
					<Text style={styles.myText}>Status: {myStat}</Text>

					<Text style={styles.myTitle}>Educational Background</Text>
					<Text style={styles.myText}>College: {edCollege}</Text>
					<Text style={styles.myText}>High School: {edHigh}</Text>
					<Text style={styles.myText}>Elementary: {edHigh}</Text>

					<Text style={styles.myTitle}>Skills</Text>
					<FlatList
						style = {{
							width: "100%"
						}}
						data = {skillList}
						renderItem={ ({item}) => (
							<Text style = {styles.myFlatList}>{item.name}</Text>
						)}></FlatList>

					<Text style={styles.myTitle}>Work Experience</Text>
					<FlatList
						style = {{
							width: "100%"
						}}
						data = {worklList}
						renderItem={ ({item}) => (
							<Text style = {styles.myFlatList}>{item.name}</Text>
							
						)}></FlatList>

					<Text style={styles.myTitle}>Training</Text>
					<FlatList
						style = {{
							width: "100%"
						}}
						data = {traininglList}
						renderItem={ ({item}) => (
							<Text style = {styles.myFlatList}>{item.name}</Text>
						)}></FlatList>

					<Text style={styles.myTitle}>For Inquiries</Text>
					<TextInput
						value={value}
						placeholder="Email"
						onChangeText={newValue => setValue(newValue)}
						style = {{
							paddingHorizontal: 24,
							paddingVertical: 12,
							borderColor: 'black',
							borderWidth: 1,
							borderRadius: 16,
							width: '80%',
							marginTop: 20 
						}}></TextInput>
					<TextInput
						value={value}
						placeholder="Message"
						onChangeText={newValue => setValue(newValue)}
						style = {{
							paddingHorizontal: 24,
							paddingVertical: 12,
							borderColor: 'black',
							borderWidth: 1,
							borderRadius: 16,
							width: '80%',
							marginTop: 20 
						}}></TextInput>
						
					<TouchableOpacity
						onPress={() => Alert.alert('Success!',"Inquiry is successfully sent!")}
						style = {{
								paddingHorizontal: 24,
								paddingVertical: 12,
								borderRadius: 16,
								backgroundColor: 'green',
								width: '80%',
								marginTop: 20
						}}>
							<Text style={{
								color: 'white',
								fontWeight: 'bold',
								textTransform: 'uppercase',
								textAlign: 'center'
							}}>Submit Inquiry</Text>
						</TouchableOpacity>
					</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 20
	},
	myButton: {
		backgroundColor: 'blue'
	},
	myText: {
		marginTop: 20,
		paddingLeft: 10,
		paddingRight: 10,
		width: '100%'
	},
	myTitle: {
		marginTop: 30,
		fontSize: 25,
		fontWeight: 'bold',
		fontStyle: 'italic',
		textAlign: 'left',
		textTransform: 'uppercase',
		color: 'white',
		backgroundColor: 'green',
		width: '100%',
		padding: 10
	},
	myFlatList: {
		fontWeight: 'bold',
		padding: 12,
		borderBottomWidth: 1,
		borderBottomColor: 'green'
	}
});
