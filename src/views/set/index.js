import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';

import styles from './styles'

import acess from '../../assets/icon_person.png'
import config from '../../assets/icon_configuration.png'
import seta_direita from '../../assets/new_design/seta_direita.png'

function Main({navigation}){

    const [login, setLogin] = useState()

    useEffect(()=>{
        getLogin()
        //alert(login)
    },[login])

    async function getLogin(){
        try{
            setLogin(await AsyncStorage.getItem('@login'))
        }catch(e){
            alert(e)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style ={styles.card} onPress={()=> navigation.navigate('Acess', {login: login})}>
                <Text style={styles.text}>Configurações de acesso</Text>
                <Image source={seta_direita} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.card} onPress={()=> navigation.navigate('General', {login: login})}>
                <Text style={styles.text}>Configurações gerais</Text>
                <Image source={seta_direita} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    );
}

//make this component available to the app
export default Main;


/**
    
 */