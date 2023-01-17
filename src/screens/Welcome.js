import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import CustomButton from './src/components/CustomButton'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}> BIENVENUE DANS L'ESPACE RESERVATION</Text>
      </View>
      <View style={styles.img}>
        <Image source={require('./src/img/welcome.png')} />
      </View>
      <View style={styles.access}>
        <CustomButton style={styles.accessButton} title="-> Commencer" type="region" />
      </View>
      <View style={styles.warn}>
        <View style={{flex:1}}>
        </View>
        <Text> Warning</Text>
        <Text style={styles.warnText}> Votre identifiant résident vous sera demandé lors de la validation </Text>
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

