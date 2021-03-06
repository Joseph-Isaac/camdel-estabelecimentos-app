import React from 'react';
import {View} from 'react-native';
import Requests from '../../components/requests';

export default function Main(){
    return(
        <Requests/>
    )
}















/*import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Switch, Alert, Picker, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'

import { FontAwesome } from '@expo/vector-icons';
//import styles from './styles'
import Item from '../../layouts/item_list'
import ReqList from '../../layouts/lists/request'
import Cesta from '../../assets/new_design/cesta.png'

import api from '../../services/api'
<<<<<<< HEAD
import ButtonConfirm from '../../components/buttonConfirm';


export default function Main({navigation,route}) {
    const {loginEstablishment} = route.params
=
    const [available, setAvailable] = useState();
    const [load, setLoad] = useState(true);
    const [price, setPrice] = useState(19.9);

    let [fontLoad] = useFonts({
        'Lexend-Regular':require('../../assets/fonts/Lexend/Lexend-Regular.ttf'),
        'Lexend-Medium':require('../../assets/fonts/Lexend/Lexend-Medium.ttf'),
    });

    if(!fontLoad){
        return <AppLoading />
    }else{
    return (
        <View style={styles.container}>
            <ScrollView>
            
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('AllRequest',{loginEstablishment:loginEstablishment})}>
                    <View>
                        <FontAwesome name="shopping-cart" size={40} color="#442178" style={styles.icon}/>
                        <Text style={styles.text1}>Pedido</Text>
                    </View>

                    <View style={styles.description}>
                        <Text style={styles.text}>Nome do estabelecimento</Text>
                        <Text style={styles.text1}>Seu pedido esta em espera</Text>
                        <Text style={styles.text1}>Clique para ver os detalhes</Text>
                    </View>
                    <View>
                        <Text style={styles.text2}>
                            R$ {price}
                        </Text>
                    
                    </View>
                   
                </TouchableOpacity >
                
            </ScrollView>
            <ButtonConfirm/>
        </View>
    )
    }
}
            
            

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%'
    },
    description: {
        marginLeft: 45
    },
    text: {
        fontSize: 16,
        fontFamily: 'Lexend-Medium'
    },
    text1: {
        fontSize: 13,
        fontFamily: 'Lexend-Regular',

    },    
    text2: {
        fontSize: 13,
        fontFamily: 'Lexend-Regular',
        marginTop: 40,
        marginLeft: 35
    }, 
        
    button: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        height: 90,
        //height: '100%',
        flexDirection: 'row',
        padding: 15
    }
        
    
 
})



/*

function Main({navigation, route}){

    //recebido de outras telas
    const {loginEstablishment} = route.params

    const [load, setLoad] = useState(true)
    const [contador, setContador] = useState(1)

    const [list, setList] = useState([])
    const [establishment, setEstablishment] = useState()
    const [available, setAvailable] = useState()
    const [filter,setFilter] = useState('andamento')
    const [expoPushToken, setExpoPushToken] = useState('')

    useEffect(()=>{
        setInterval(function(){
            getList()
        }, 1000)
        getEstablishment()
        registerForPushNotificationsAsync()
        
    },[filter]);
    
    async function getList(){
        await api.get(`/purchase/open/${loginEstablishment}`)
        .then(response=>{
            setList(response.data)
            console.log('getList: '+response.data)
        })
        .catch(error=>{
            console.log('getList: '+error)
        })
    }

    async function updateAvailable(id){
        await api.put(`/establishment/${id}`,{
            online: !available
        })
        .then(res=>{
            Alert.alert(`${!available?'Aberto':'Fechado'}`,`Seu estabelecimento est?? ${!available?'aberto':'fechado'}`)
        })
        .catch(e=>{
            alert('houve um erro, tente novamente!')
        })
    }

    async function getEstablishment(){
        await api.get(`/establishment/myDatas/${loginEstablishment}`)
        .then(res=>{
            setEstablishment(res.data)
            console.log('getEstablishment: '+res.data)
            setAvailable(res.data.online)
        })
        .catch(err=>{
            console.log('getEstablishment: '+err)
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
            alert('Falha nas notifica????es. Permita o aplicativo a usar notifica????es nas configura????es do seu celular.');
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
            lightColor: '#FF231F',
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
    }

    let [fontLoad] = useFonts({
        'Lexend-Regular':require('../../assets/fonts/Lexend/Lexend-Regular.ttf'),
        'Lexend-Medium':require('../../assets/fonts/Lexend/Lexend-Medium.ttf'),
    });

    if(!fontLoad){
        return <AppLoading />
    }else{
        return (    
            <View>
                <ScrollView>
                    <View style={styles.viewSwitch}>
                        <TouchableOpacity 
                            style={styles.miniTouch} 
                            onPress={()=>navigation.navigate('AllRequest', {loginEstablishment:loginEstablishment})}
                        >
                            <Text style={stylesFont.textBtn}>VER TODOS</Text>
                        </TouchableOpacity>
                        <View style={styles.center}>
                            <Switch 
                                onValueChange={()=>[setAvailable(!available), updateAvailable(establishment._id)]} 
                                value={available} 
                                thumbColor={available? '#442178':'#ccc' } 
                            />
                            <Text style={stylesFont.text}>{available?'online':'offline'}</Text>
                        </View>
                    </View>
                        
                    {list.map(l => (
                        <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Request',{ id:l._id})}>
                            <Item data={l}/>
                        </TouchableOpacity>
                    )).reverse()}
                </ScrollView>
            </View>
        );
    }
}

//make this component available to the app
export default Main;

const stylesFont = StyleSheet.create({
    text: {
        fontSize: 13,
        color: '#000',
        fontFamily: 'Lexend-Regular'
    },
    textFilter: {
        fontSize: 13,
        fontFamily: 'Cocogoose-Light'
    },
    textBtn: {
        fontSize: 13,
        color: '#fff',
        fontFamily: 'Lexend-Medium'
    },
})*/
