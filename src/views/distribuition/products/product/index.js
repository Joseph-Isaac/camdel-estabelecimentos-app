import React, { Component, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';

import styles from '../../../styles'
import Item from '../../../../layouts/product'
import api from '../../../../services/api'

function Main({navigation,route}){

    const {login} = route.params
    const {category} = route.params
    const {subcategory} = route.params

    const [load, setLoad] = useState(true)

    const [product, setProduct] = useState([])
    
   

    useEffect(()=>{
        getProducts()
        navigation.addListener('focus', ()=>setLoad(!load));
    },[load, navigation])

   

    async function getProducts(){
        await api.get(`/products/read/second_category/${login}/${category}/${subcategory}`)
        .then(response=>{
            setProduct(response.data)
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
                onPress: ()=> navigation.navigate('NewProducts', {id:idProduct, categoryParams:category})
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
            <ScrollView style={styles.scroll}>
                {product.map(p=>(
                    <TouchableOpacity style={styles.list} onPress={()=> updateOrDelete(p._id, p.name, p.price)}>
                        <Item id={p._id} image={p.img} name={p.name} details={p.description} price={p.price.toFixed(2)} available={p.available}/>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.btnFlutter} onPress={()=> navigation.navigate('NewProducts', {id:''})}>
                <Text style={stylesFont.textFilter}>CADASTRAR NOVO</Text>
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
        fontFamily:'Lexend-Regular'
    },
    textFilter:{
        fontSize: 13,
        fontFamily:'Lexend-Medium',
        color:'#fff'
    },
})