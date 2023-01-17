import { View, StyleSheet, Image, Text, TextInput, StatusBar } from 'react-native'
import React from 'react'
import CustomButton from './src/components/CustomButton'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontWeight:'900'}}> Personnage </Text>
        <Text style={styles.titleText}> Identifiez vous</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
            <Text> Horloge </Text>
            <TextInput value='Réservation du: 13 janvier 2022 de 8h à 10h' style={{justifyContent:'center', width:280, textAlign:'center', backgroundColor:'orange', borderRadius: 15, borderWidth:1, borderColor: 'black'}}/>
        </View>
        <View style={styles.input}>
          <Text> Identité </Text>
          <TextInput placeholder='Sélectionnez votre nom et prénom' style={{justifyContent:'center', width:280, textAlign:'center', borderRadius: 15, borderWidth:1, borderColor: 'black'}}/>
        </View>
        <View style={styles.input}>
          <Text> Cadenas </Text>
          <TextInput placeholder='Saisissez votre identifiant' style={{justifyContent:'center', width:280, textAlign:'center', borderRadius: 15, borderWidth:1, borderColor: 'black'}}/>
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
          <Text> Info </Text>
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
    fontWeight:'500'
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
    color: 'orange',
    fontWeight:'450',
    fontSize: 10    
  }
})

