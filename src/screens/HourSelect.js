import { StatusBar } from 'react-native'
import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import CustomButton from './src/components/CustomButton'
import SelectButton from './src/components/SelectButton'
import  Icon from 'react-native-vector-icons/Ionicons'
import Morning from 'react-native-vector-icons/MaterialCommunityIcons'
import Afternoon from 'react-native-vector-icons/MaterialCommunityIcons'


const App = () => {
  return (
    <View style={{ flex: 1, margin: 15 }}>
      <View style={{ flex: 0.75 }}>
        <View style={{ backgroundColor: '#FFF', flex: 1, flexDirection:'row', alignItems:'center' }}>
          <Text style={{ marginRight:10}}>
          <Morning name="clock-time-eight-outline" size={30} color="#18167E" />
          </Text>
          <Text style={{ color:'#18167E', fontWeight:'bold'}}>
          Matin: 08h - 13h
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={{ flex: 5, flexDirection: 'column', backgroundColor:'#E1E4FD'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
        </View>
      </View>
      <View style={{ flex: 0.75 }}>
        <View style={{ backgroundColor: '#FFF', flex: 1, flexDirection:'row', alignItems:'center' }}>
          <Text style={{marginRight:10 }}>
            <Afternoon name="clock-time-four-outline" size={30} color="#18167E" />
          </Text>
          <Text style={{ color:'#18167E',fontWeight:'bold' }}>
            Après-midi: 13h - 18h
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={{ flex: 5, flexDirection: 'column', alignItems:'center', justifyContent:'center', backgroundColor:'#E1E4FD' }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
        </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
          <SelectButton style={styles.button} title="Heure" type="region"/>
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <View style={{ backgroundColor: '#FFF', flex: 1, flexDirection:'row' }}>
          <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
            <CustomButton style={{alignItems:'center', justifyContent:'center'}} title="Annuler" type="light" />
          </View>
          <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
            <CustomButton style={{alignItems:'center', justifyContent:'center'}} title="Valider et continuer" type="region" />
          </View>
        </View>
        <View style={{ backgroundColor: '#FFF', flex: 0.4, justifyContent:'center', alignItems:'center' }}>
          <Icon name="md-warning" size={30} color="#DD6D54" /> 
          <Text style={{ fontSize:10, fontWeight:'450', color:'#DD6D54'}}>
            Vous pouvez réserver jusqu'à 3 heures consécutives en fonction des créneaux disponibles
          </Text>
        </View> 
        <StatusBar style="auto" />
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
    fontWeight:'450',    
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    marginLeft:50
  }
  
})

