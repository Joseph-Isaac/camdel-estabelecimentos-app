import React, { Component, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, ScrollView, StyleSheet } from 'react-native';
import {AppLoading} from 'expo'
import {useFonts} from 'expo-font'

//import styles from './styles'
import styles from '../../styles'
import Item from '../../../layouts/category'
import api from '../../../services/api'


function Main({navigation, route}){


    //recebe Login
    const {login} = route.params

    //carrega front
    const [load,setLoad] = useState(true)

    //Carrega BD
    const [products,setProducts] = useState([])

    useEffect(()=>{
        getCategory()
        navigation.addListener('focus', ()=>setLoad(!load))
    },[load, navigation, login])

    async function getCategory(){
        await api.get(`/products/categorys/${login}`)
        .then(response=>{
            setProducts(response.data)
            console.log(response.data)
        })
        .catch(error=>{
            alert('getCategory: '+error)
        })
    }

    let [fontLoad] = useFonts({
        'Lexend-Regular':require('../../../assets/fonts/Lexend/Lexend-Regular.ttf'),
        'Lexend-Medium':require('../../../assets/fonts/Lexend/Lexend-Medium.ttf'),
    });

    if(!fontLoad){
        return <AppLoading />
    }else{
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    {products.map(p=>(
                        <TouchableOpacity style={styles.list} onPress={()=> navigation.navigate('SubCategory', {login:login, category: p})}>
                            <Item name={p}/>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.btnFlutter} onPress={()=> navigation.navigate('NewProducts', {id:''})}>
                    <Text style={stylesFont.textBtn}>CADASTRAR NOVO</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

//make this component available to the app
export default Main;

const stylesFont = StyleSheet.create({
    text:{
        fontSize: 13,
        width: '90%',
        fontFamily:'Lexend-Regular'
    },
    textBtn:{
        fontSize: 13,
        fontFamily:'Lexend-Medium',
        color:'#fff'
    },
})