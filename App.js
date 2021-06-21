import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import MapView from 'react-native-maps';
import Style from './Style.js';
import * as Location from 'expo-location';

export default function App() {

  const [location,setLocation] = useState(null);
  const [errorMessage,setErrorMessage] = useState(null);

  useEffect(()=>{
    
    (async ()=> {
      
      let {status} = await Location.requestForegroundPermissionsAsync();
      
      if(status !== 'granted'){
        setErrorMessage('Permissão não concedida para acesso!');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    let text = 'Waiting..';

    if (errorMessage) {
      text = errorMessage;
    } 
    else if (location) {
      text = JSON.stringify(location);
    }

  },[])

  const geolocationD = () =>{
    alert('DESATIVADO');
  }

  return (
    <View style={Style.view}>
      {
        /*
        <TouchableOpacity style={Style.button} >
          <Text style={Style.text}>Ativar Localização</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Style.button} onPress={()=> geolocationD()}>
          <Text style={Style.text}>Desativar Localização</Text>
        </TouchableOpacity>
        */
      }

      <MapView style={Style.map}
        followsUserLocation={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
      
      ></MapView>
    </View>
  );
}
