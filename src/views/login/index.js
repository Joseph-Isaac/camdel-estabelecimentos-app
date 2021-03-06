import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, ImageBackground, TextInput, TouchableOpacity, Alert, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native';
import {AsyncStorageStatic} from '@react-native-community/async-storage'
import {AppLoading} from 'expo'
import {useFonts} from 'expo-font'


import styles from './styles'
import logo from '../../assets/logo.png'
import api from '../../services/api';
import visible from '../../assets/visible.png'
import invisible from '../../assets/invisible.png'

function Login({navigation}){

    //states para o Banco    
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [establishment, setEstablishment] = useState()
    const[isVisible, setVisible] = useState(false)
    
    //states para o front
    const [load, setLoad] = useState(true)

    
    //useEffect
    

    //funções assíncronas que recuperam dados
    async function validateLogin(){
        /*await api.get(`/establishment/acess/${login}/${password}`)
        .then(response=>{
            if(response.data == null){
                getLoginForNick()
            }
            else    {
                putLogin()
                setEstablishment(response.data)*/
                navigation.navigate('List',{
                    screen: 'List',
                    params: {loginEstablishment: "diasthalia10@gmail.com"}
                })
            /*}
        })
        .catch(error=>{
            console.log('validateLogin: '+error)
        })*/
    }
    
    

    function Visivel(){
        if(isVisible)
            setVisible(false)
        else    
        setVisible(true)
    }
    

    let [fontLoad] = useFonts({
        'Lexend-Regular':require('../../assets/fonts/Lexend/Lexend-Regular.ttf'),
        'Lexend-Medium':require('../../assets/fonts/Lexend/Lexend-Medium.ttf'),
          
    });

    if(!fontLoad){
        return <AppLoading />
    }else{

    return (
        <View style={{flex: 1}}>
            <View style={styles.background}>
                <Image source={logo} style={styles.logo}/>
                    <TextInput style={style.input} placeholder='Login' defaultValue={login} onChangeText={(text)=>setLogin(text)} keyboardType='email-address'/>
                    <View style={styles.view}>
                        <TouchableOpacity style={styles.touchImage} onPress={()=>Visivel()} >
                            <Image source={isVisible?invisible:visible } style={styles.image}/>
                        </TouchableOpacity>
                        <TextInput style={style.inputPassword} placeholder='Senha' defaultValue={password} onChangeText={(text)=>setPassword(text)} secureTextEntry={isVisible?false:true}/>
                    </View>
                    <TouchableOpacity style={styles.buttonEntrar}  onPress={()=>navigation.navigate('List')}>
                        <Text style={style.text}>
                            ENTRAR
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCadastrar}>
                        <Text style={styles.text}>
                            CADASTRAR
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonFacebook}>
                        <Text style={styles.text}>
                            LOGIN COM O FACEBOOK
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSenha}>
                        <Text style={styles.text}>
                            ESQUECI MINHA SENHA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTermos}>
                        <Text style={styles.text}>
                            TERMOS E CONDIÇÕES DE USO
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
    }
}
                    
export default Login

const style = StyleSheet.create({
    input: {
        marginTop: 10,
        padding: 10,
        width: '90%',
        backgroundColor: '#fff',
        fontSize: 13,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowRadius: 4,
        elevation: 5,
        fontFamily:'Lexend-Regular'
    },
    inputPassword: {
        padding: 10,
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        fontSize: 13,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius:50,
        fontFamily:'Lexend-Regular'
    },
    text:{
        fontSize: 13,
        color: '#fff',
        fontFamily:'Lexend-Medium'
    },
 })