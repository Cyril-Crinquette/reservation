import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import CustomButton from './src/components/CustomButton'

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
        <Text style={{color:'orange', textAlign:'center'}}> Réservation du: 13 Janvier 2022 de 8h à 10h</Text>
        <Text style={{color:'orange', textAlign:'center', fontSize:10}}>Un mail/sms de confirmation vous sera envoyé dans les prochaines minutes</Text> 
      </View>
      <View style={styles.warn}>
        <View style={{flex:1}}>
          <Text style={{textAlign:'center'}}> Maison </Text>
          <Text style={styles.titleText}> Retourner à l'accueil </Text>
        </View>
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
    fontWeight:'500'
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
    color: 'orange',
    fontWeight:'450', 
    fontSize: 10    
  }
})

