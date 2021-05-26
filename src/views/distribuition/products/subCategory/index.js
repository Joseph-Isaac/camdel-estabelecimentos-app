import React, { Component, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';

import styles from '../../../styles'
import Item from '../../../../layouts/product'
import Category from '../../../../layouts/category'
import api from '../../../../services/api'

function Main({navigation,route}){

    const {login} = route.params
    const {category} = route.params

    const [load, setLoad] = useState(true)
    
    const [datas,setDatas] = useState([])
    const [product, setProduct] = useState([])

    useEffect(()=>{
        getProducts()
        getSubCategory()
        navigation.addListener('focus', ()=>setLoad(!load));
    },[load, navigation])

    //Funções do Backend
    async function getProducts(){
        await api.get(`/products/products/${login}/${category}/${category}`)
        .then(response=>{
            setProduct(response.data)
            
        })
    }

    async function getSubCategory(){
        await api.get(`/products/subcategory/${login}/${category}`)
        .then(response=>{
            setDatas(response.data)
        })
        .catch(e=>{
            alert(e)
        })
    }

    async function exclude(idProduct){
        await api.delete(`/products/${idProduct}`)
        .then(response=>{
            setLoad(!load)
        })
    }

    function updateOrDelete(idProduct, nameProduct, priceProduct){
        Alert.alert(`Produto`,`${nameProduct}\n R$ ${priceProduct.toFixed(2)}`,[
            {
                text: "editar",
                onPress: ()=> navigation.navigate('NewProducts', {id:idProduct})
            },
            {
                text: "excluir",
                onPress:()=> Alert.alert('Excluir', 'Tem certeza disso?', [
                    {
                        text: "sim",
                        onPress: ()=> exclude(idProduct)
                    },
                    {
                        text: "não",
                    },
                ], {cancelable: true})
            }
        ], {cancelable: true})
    }

    

    return (
        <View style={styles.container}>
            <ScrollView>
                {datas.length>1?
                    datas.map(m=>(
                        <TouchableOpacity style={styles.list} onPress={()=> navigation.navigate('Product', {login: login, category:category, subcategory: m})}>
                            <Category name={m}/>
                        </TouchableOpacity>
                    )):
                    product.map(p=>(
                        <TouchableOpacity style={styles.list} onPress={()=>updateOrDelete(p._id, p.name, p.price)}>
                            <Item id={p._id} image={p.img} name={p.name} details={p.description} price={p.price.toFixed(2)} available={p.available}/>
                        </TouchableOpacity>
                    ))
                }
                <View style={{height:55}}/>
            </ScrollView>
            <TouchableOpacity style={styles.btnFlutter} onPress={()=> navigation.navigate('NewProducts', {id:''})}>
                <Text style={stylesFont.textBtn}>CADASTRAR NOVO</Text>
            </TouchableOpacity>
        </View>
    );
}

//make this component available to the app
export default Main;

const stylesFont = StyleSheet.create({
    text:{
        fontSize: 13,
        width: '90%',
        fontFamily:'Lexend-Reguar'
    },
    textBtn:{
        fontSize: 13,
        fontFamily:'Lexend-Medium',
        color:'#fff'
    },
})