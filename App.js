import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import CustomButton from './src/components/CustomButton'
import  Home from 'react-native-vector-icons/Entypo'
import  Info from 'react-native-vector-icons/Feather'


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}> Merci! L'opération a été effectuée avec succès</Text>
      </View>
      <View style={styles.img}>
        <Image source={require('./src/img/valid.png')} />
      </View>
      <View style={styles.access}>
        <Text style={{color:'#DD6D54', textAlign:'center', marginTop:10, fontSize:25, fontWeight:'bold'}}> Réservation du: 13 Janvier 2022 de 08h00 à 10h00</Text>
        <Text style={{color:'#DD6D54', textAlign:'center', fontSize:20}}>Un mail/sms de confirmation vous sera envoyé dans les prochaines minutes</Text> 
      </View>
      <View style={styles.warn}>
        <View style={{flex:1}}>
        <Home name="home" size={50} color="#18167E" style={{ alignSelf:'center'}} />
          <Text style={styles.homeText}> Retourner à l'accueil </Text>
        </View>
        <Info name="info" size={30} color="#DD6D54" style={{alignSelf:'center', marginTop:50}} />
        <Text style={styles.warnText}> Un problème? Cliquez ici</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#18167E',
    fontWeight:'500',
    fontSize: 35,
  },
  homeText: {
    color: '#18167E',
    fontWeight:'500',
    fontSize: 25,
  },
  img: {
    flex: 2,
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
    fontSize: 20    
  }
})

