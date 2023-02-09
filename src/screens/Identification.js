import { View, StyleSheet, Image, Text, TextInput, StatusBar } from 'react-native'
import React from 'react'
import CustomButton from './src/components/CustomButton'
import  User from 'react-native-vector-icons/FontAwesome5'
import  ClockCircle from 'react-native-vector-icons/AntDesign'
import  IdCard from 'react-native-vector-icons/MaterialCommunityIcons'
import  Lock from 'react-native-vector-icons/MaterialCommunityIcons'
import  Info from 'react-native-vector-icons/Feather'
import  Back from 'react-native-vector-icons/AntDesign'


const App = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignSelf:'flex-start'}}>
        <Back name="back" size={30} color="#18167E" style={{alignSelf:'flex-start', marginLeft:10, marginTop:10}} />
        <Text style={{alignSelf:'flex-start', marginLeft:10, marginTop:10, color:"#18167E"}}> Recommencer </Text>
      </View>
      <View style={styles.title}>
      <User name="user-alt" size={20} color="#18167E" />
        <Text style={styles.titleText}> Identifiez vous</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
          <ClockCircle name="clockcircle" size={30} color="#18167E" />
          <TextInput value='Réservation du: 13 janvier 2022 de 8h à 10h' style={{marginLeft:10, justifyContent:'center', width:280, textAlign:'center', backgroundColor:'#F3CBC2', borderRadius: 15, borderWidth:1, borderColor: 'black'}}/>
        </View>
        <View style={styles.input}>
          <IdCard name="card-account-details" size={30} color="#18167E" />
          <TextInput placeholder='Sélectionnez votre nom et prénom' style={{marginLeft:10, justifyContent:'center', width:280, textAlign:'center', borderRadius: 15, borderWidth:1, borderColor: 'black'}}/>
        </View>
        <View style={styles.input}>
          <Lock name="lock-check" size={30} color="#18167E" />
          <TextInput placeholder='Saisissez votre identifiant' style={{marginLeft:10, justifyContent:'center', width:280, textAlign:'center', borderRadius: 15, borderWidth:1, borderColor: 'black'}}/>
        </View>
      </View>
      <View style={styles.access}>
        <View style={{ backgroundColor: '#FFF', flex: 1, flexDirection:'row' }}>
          <View style={{ alignItems:'center', justifyContent:'center' }}>
            <CustomButton style={{alignItems:'center', justifyContent:'center', borderWidth:1, borderColor: 'black'}} title="Annuler" type="light" />
          </View>
          <View style={{ alignItems:'center', justifyContent:'center' }}>
            <CustomButton style={{alignItems:'center', justifyContent:'center'}} title="Valider et continuer" type="region" />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.warn}>
        <View style={{flex:1, flexDirection:'row'}}>
        </View>
        <View style={{flex:1, flexDirection:'column'}}>
          <Info name="info" size={30} color="#DD6D54" style={{alignSelf:'center'}} />
          <Text style={styles.warnText}> Un problème? Cliquez ici </Text>
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#18167E',
    fontWeight:'500',
    marginLeft: 5
  },
  form: {
    flex: 3.5,
  },
  input: {
    flex: 2,
    flexDirection: 'row',
    alignItems:'center',
    padding: 5
  },
  access: {
    flex: 1,
  },
  accessButton: {
    padding: 15,
    width: 15,
    backgroundColor: 'red'
  },
  warn: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  warnText: {
    flex: 1,
    textAlign: 'center',
    color: '#DD6D54',
    fontWeight:'450',
    fontSize: 10    
  }
})

