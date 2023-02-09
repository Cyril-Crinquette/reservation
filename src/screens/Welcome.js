import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'
import React from 'react'
import CustomButton from './src/components/CustomButton'
import  Icon from 'react-native-vector-icons/Ionicons'
import  Acon from 'react-native-vector-icons/FontAwesome'
import  Back from 'react-native-vector-icons/AntDesign'


const App = () => {
  return (
    <View style={styles.container}>
      <Back name="back" size={30} color="#18167E" style={{alignSelf:'flex-start', marginLeft:10, marginTop:10}} />
      <View style={styles.title}>
        <Text style={styles.titleText}> BIENVENUE DANS L'ESPACE RESERVATION</Text>
        <Acon name="calendar-check-o" size={30} color="#18167E" />
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
        <View style={{alignItems:'center'}}>
          <Icon name="md-warning" size={30} color="#DD6D54" />
        </View> 
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
    fontWeight:'500',
    marginBottom: 10
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
    flexDirection: 'row',
    textAlign: 'center',
    color: '#DD6D54',
    fontWeight:'450',
    fontSize: 10
  }
})

