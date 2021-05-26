import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';
import {AppLoading} from 'expo'
import {useFonts} from 'expo-font'

import styles from './styles'
import seta_direita from '../../assets/new_design/seta_direita.png'


function Main({navigation}){

    const [login,setLogin]=useState()
    const [load,setLoad]=useState()

    useEffect(()=>{
        getLogin()
        navigation.addListener('focus', ()=>setLoad(!load))
    },[load, navigation])

    async function getLogin(){
        try{
            setLogin(await AsyncStorage.getItem('@login'))
            //alert(await AsyncStorage.getItem('@login'))
        }catch(e){
            alert(e)
        }
    }

    let [fontLoad] = useFonts({
        'Lexend-Regular':require('../../assets/fonts/Lexend/Lexend-Regular.ttf'),
        'Lexend-Medium':require('../../assets/fonts/Lexend/Lexend-Medium.ttf'),
    });
    
    if(!fontLoad){
        return <AppLoading />
    }else{

    return (
        <View style={styles.container}>
            <TouchableOpacity style ={styles.card} onPress={()=> navigation.navigate('Products',  {login:login})}>
                <Text style={stylesFont.text}>Produtos ofertados</Text>
                <Image source={seta_direita} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.card} onPress={()=> navigation.navigate('Additional', {id:'', login:login})}>
                <Text style={stylesFont.text}>Cadastrar adicionais</Text>
                <Image source={seta_direita} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.card} onPress={()=> navigation.navigate('Rate', {login: login})}>
                <Text style={stylesFont.text}>Taxas de entrega</Text>
                <Image source={seta_direita} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.card} onPress={()=> navigation.navigate('Clock', {login: login})}>
                <Text style={stylesFont.text}>Horário de funcionamento</Text>
                <Image source={seta_direita} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.card} onPress={()=> navigation.navigate('Payments', {login:login})}>
                <Text style={stylesFont.text}>Formas de pagamento</Text>
                <Image source={seta_direita} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    );

    }
}

//make this component available to the app
export default Main;


const stylesFont = StyleSheet.create({
    text:{
        marginLeft:10,
        fontSize: 13,
        fontFamily:'Lexend-Regular'
    },
    textFilter:{
        fontSize: 13,
        fontFamily:'Lexend-Regular'
    },
})