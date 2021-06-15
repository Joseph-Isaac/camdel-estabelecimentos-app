import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch, Alert, Picker, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Notifications} from 'expo';
import {AppLoading} from 'expo'
import {useFonts} from 'expo-font'
import {FontAwesome} from '@expo/vector-icons';
//import styles from './styles'
import Item from '../../layouts/item_list'

import api from '../../services/api'
import Establishment from '../../components/establishment';


function Main({navigation, route}){
/*
    //recebido de outras telas
    const {loginEstablishment} = route.params

    const [load, setLoad] = useState(true)
    const [contador, setContador] = useState(1)

    const [list, setList] = useState([])
    const [establishment, setEstablishment] = useState([])
    const [available, setAvailable] = useState()
    const [filter,setFilter] = useState('andamento')
    const [expoPushToken, setExpoPushToken] = useState('')

    useEffect(()=>{
        setInterval(function(){
            allRequest()
        }, 2000)
        getEstablishment()
        registerForPushNotificationsAsync()
    },[filter]);

    async function allRequest(){
        await api.get(`/purchase/read/all/${loginEstablishment}`)
        .then(response=>{
            setList(response.data)
            //console.log(response.data)
        })
    }

    async function updateAvailable(id){
        await api.put(`/establishment/${id}`,{
            online: !available
        })
        .then(res=>{
            Alert.alert(`${!available?'Aberto':'Fechado'}`,`Seu estabelecimento está ${!available?'aberto':'fechado'}`)
        })
        .catch(e=>{
            alert('houve um erro, tente novamente!')
        })
    }

    async function getEstablishment(){
        await api.get(`/establishment/read/establishment/${loginEstablishment}`)
        .then(res=>{
            setEstablishment(res.data)
        })
    }

    async function registerForPushNotificationsAsync(){
        if (Constants.isDevice) {
          const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Falha nas notificações. Permita o aplicativo a usar notificações nas configurações do seu celular.');
            return;
          }
          const token = await Notifications.getExpoPushTokenAsync();
          //console.log(token);
          setExpoPushToken(token)
          lerDados(token)
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
    }

    async function lerDados(token){
        await api.get(`/establishment/read/establishment/${loginEstablishment}`)
        .then(res=>{
            gravarToken(res.data.map(a=>a._id), token)
        })
        .catch(e=>{
            
        })
    }

    async function gravarToken(id, token){
        await api.put(`/establishment/${id}`,{
            token: token
        })
        .then(res=>{
            console.log('token gravado com usocesso!\n'+JSON.stringify(res.data))
        })
        .catch(e=>{
            console.log('erro ao gravar token: '+e)
        })
    }*/

    let [fontLoad] = useFonts({
        'Lexend-Regular':require('../../assets/fonts/Lexend/Lexend-Regular.ttf'),
        'Lexend-Medium':require('../../assets/fonts/Lexend/Lexend-Medium.ttf'),
    });

    if(!fontLoad){
        return <AppLoading />
    }else{
        return(    
            <Establishment/>
        )
    }
}

//make this component available to the app
export default Main;



    