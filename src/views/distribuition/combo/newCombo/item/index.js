
import React, { Component, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, Image } from 'react-native';

import styles from './styles'
import api from '../../../../../services/api'

function NewCombo({route, navigation}){

    const {id} = route.params
    const {login} = route.params
    const {second_category} = route.params

    const [contador,setContador] = useState(1)
    const [load,seLoad] = useState(true)
    const [datas, setDatas] = useState([])
    const [additional, setAdditional] = useState([])

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState('todos')

    const [numberOfItems, setNumberOfItems] = useState(0)
    const [newItems, setNewItems] = useState([])

    async function midCreate(){
        if(description == null || description == '' || description == undefined)
            alert('Digite o nome do combo')
        else if(price == null || price == '' || price == undefined)
            alert('Digite o preço')
        else if(id==''){
            setPrice(price.toString().replace(',','.'))
            await api.post('/combos',{
                second_category: second_category,
                title: title,
                text: description,
                price: parseFloat(price),
                login: login,
            })
            .then(response=>{
                navigation.navigate('NewCombo', {login: login, second_category:second_category})
            })
            .catch(error=>{
                alert('midCreate:'+error)
            })
        }
        else{
            setPrice(price.toString().replace(',','.'))
            await api.put(`/combos/${id}`,{
                second_category: second_category,
                title: title,
                text: description,
                price: parseFloat(price),
                login: login,
            })
            .then(response=>{
                navigation.navigate('NewCombo', {login: login, second_category:second_category})
            })
            .catch(error=>{
                alert('midCreate:'+error)
            })
        }

    }

    async function getItem(){
        await api.get(`/combos/read/combosForId/${id}`)
        .then(response=>{
            setAdditional(response.data)
        })
        .catch(error=>{
            alert(error)
        })
    }

    useEffect(()=>{
        if(id!='')
            getItem()
    },[])

    return (
        <View style={{flex:1}}>
            {id==''?
                <View style={styles.container}>
                    <Text style={styles.text}>Título do item</Text>
                    <TextInput style={styles.input} placeholder='Molhos...' onChangeText={(text)=>setTitle(text)}/>
                    <Text style={styles.text}>Nome do item</Text>
                    <TextInput style={styles.input} placeholder='de mostarda...' onChangeText={(text)=>setDescription(text)}/>
                    <Text style={styles.text}>Preço</Text>
                    <TextInput style={styles.input} placeholder='1.99' keyboardType='decimal-pad' onChangeText={(text)=>setPrice(text)}/>
                    
                    <TouchableOpacity style={styles.btn} onPress={()=>midCreate()}>
                        <Text style={styles.textBtn}>Adicionar item</Text>
                    </TouchableOpacity>
                </View>
            :
            additional.map(a=>(
                <View style={styles.container}>
                    <Text style={styles.text}>Título do item</Text>
                    {contador<10 && [setContador(contador+1)] && [setTitle(a.title)]}
                    <TextInput style={styles.input} placeholder='Molhos...' defaultValue={a.title} onChangeText={(text)=>setTitle(text)}/>
                    <Text style={styles.text}>Nome do item</Text>
                    {contador<10 && [setContador(contador+1)] && [setDescription(a.text)]}
                    <TextInput style={styles.input} placeholder='de mostarda...' defaultValue={a.text} onChangeText={(text)=>setDescription(text)}/>
                    <Text style={styles.text}>Preço</Text>
                    {contador<10 && [setContador(contador+1)] && [setPrice(a.price.toFixed(2))]}
                    <TextInput style={styles.input} placeholder='1.99' keyboardType='decimal-pad' defaultValue={a.price.toFixed(2)} onChangeText={(text)=>setPrice(text)}/>
                    
                    <TouchableOpacity style={styles.btn} onPress={()=>[midCreate()]}>
                        <Text style={styles.textBtn}>Adicionar item</Text>
                    </TouchableOpacity>
                </View>
            ))
            }
    </View>
    );

}

export default NewCombo;
