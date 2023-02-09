import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import CustomButton from './src/components/CustomButton'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}> January 2022</Text>
      </View>
      <View style={styles.img}>
        <Image source={require('./src/img/calendar.png')}  />
      </View>
      <View style={styles.access}>
        <View style={styles.accessButton}>
          <View>
            <CustomButton style={{width:'60%'}} title="Annuler" type="light" />
          </View>
          <View>
            <CustomButton style={{width:'60%'}} title="Valider et continuer" type="region" />
          </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#18167E',
    fontWeight:'500',
    fontSize: 30,
  },
  img: {
    flex: 2,
    resizeMode:'contain',
    margin: 30
  },
  access: {
    flex: 1,
    justifyContent:'center'
  },
  accessButton: {
    flexDirection:'row',
    justifyContent:'center',
  },
})

