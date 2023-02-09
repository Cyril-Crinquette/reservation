import { StatusBar } from 'react-native'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButton from './src/components/CustomButton'
import SelectButton from './src/components/SelectButton'
import  Icon from 'react-native-vector-icons/Ionicons'
import Morning from 'react-native-vector-icons/MaterialCommunityIcons'
import Afternoon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlatList } from 'react-native-gesture-handler'
// import { FlatList } from 'react-native'


const data = [
  { key: '08h00-08h30' },
  { key: '08h30-09h00' },
  { key: '09h00-09h30' },
  { key: '09h30-10h00' },
  { key: '10h00-10h30' },
  { key: '10h30-11h00' },
  { key: '11h00-11h30' },
  { key: '11h30-12h00' },
  { key: '12h00-12h30' },
  { key: '12h30-13h00'}
];

const data2 = [
  { key: '13h00-13h30' },
  { key: '13h30-14h00' },
  { key: '14h00-14h30' },
  { key: '14h30-15h00' },
  { key: '15h00-15h30' },
  { key: '15h30-16h00' },
  { key: '16h00-16h30' },
  { key: '16h30-17h00' },
  { key: '17h00-17h30' },
  { key: '17h30-18h00' }
];

const App = () => {
  return (
    <View style={{ flex: 1, margin: 15 }}>
      <View style={{ flex: 0.75 }}>
        <View style={{ backgroundColor: '#FFF', flex: 1, flexDirection:'row', alignItems:'center' }}>
          <Text style={{ marginRight:10}}>
          <Morning name="clock-time-eight-outline" size={35} color="#18167E" />
          </Text>
          <Text style={{ color:'#18167E', fontSize:25, fontWeight:'bold'}}>
          Matin: 08h - 13h
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={{ flex: 5, flexWrap:'wrap', backgroundColor:'#E1E4FD'}}>
        <View style={{flex: 1, flexDirection:'row'}}> 
          <FlatList 
            data= {data}
            // renderItem={({ selectButton }) => <SelectButton type='primary' title={selectButton.key} />}
            // keyExtractor={selectButton => selectButton.key}
            keyExtractor={( item, index) => index} 
            renderItem={({ item }) => (<SelectButton type='region' title={item.key} item={item} onPress={() => handlePress(item)} />)}
          />
        </View> 
      </View>
      <View style={{ flex: 0.75 }}>
        <View style={{ backgroundColor: '#FFF', flex: 1, flexDirection:'row', alignItems:'center' }}>
          <Text style={{marginRight:10 }}>
            <Afternoon name="clock-time-four-outline" size={35} color="#18167E" />
          </Text>
          <Text style={{ color:'#18167E',fontSize:25, fontWeight:'bold' }}>
            Après-midi: 13h - 18h
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={{ flex: 5, flexDirection: 'column', alignItems:'center', justifyContent:'center', backgroundColor:'#E1E4FD' }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
        <FlatList 
            data= {data2}
            // renderItem={({ selectButton }) => <SelectButton type='primary' title={selectButton.key} />}
            // keyExtractor={selectButton => selectButton.key}
            keyExtractor={( item, index) => index} 
            renderItem={({ item }) => (<SelectButton type='region' title={item.key} item={item} onPress={() => handlePress(item)} />)}
          />
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
          <Text style={{ fontSize:20, fontWeight:'450', color:'#DD6D54'}}>
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

