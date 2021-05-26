import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, Image, ActivityIndicator, ScrollView, Alert } from 'react-native';

import styles from './styles'
import Additional from '../../../../assets/additional.png'

import api from '../../../../services/api'
import { ceil } from 'react-native-reanimated';

function NewCombo({route, navigation}){

    useEffect(()=>{
        if(second_category!=''){
            getItem()
            getCombos()
        }
        navigation.addListener('focus', ()=>getCombos())
    },[load, navigation])

    const {login} = route.params
    const {second_category} = route.params

    const [contador, setContador] = useState(0)
    const [load,setLoad] = useState(false)
    const [datas, setDatas] = useState([])
    const [additional, setAdditional] = useState([])
    const [item,setItem] = useState([])
    

    const [title, setTitle] = useState(second_category)
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState('Combos')

    const [numberOfItems, setNumberOfItems] = useState(0)
    const [newItems, setNewItems] = useState([])
    const [idProduct, setIdProduct] = useState()

    async function getCombos(){
        if(second_category!='')
        await api.get(`/combos/read/forSecondCategory/${login}/${second_category}`)
        .then(response=>{
            setNewItems(response.data)
        })
        .catch(error=>{
            alert('getCombos: '+error)
        })
    }

    async function getItem(){
        await api(`/products/read/second_category/${login}/Combos/${second_category}`)
        .then(response=>{
            setItem(response.data)
            console.log(item.map(i=>i.price))
            item.map(i=>i.price)
        })
        .catch(error=>{
            alert('getItem: '+error)
        })
        
    }

    function midCreate(){
        navigation.navigate('Combo', {login:login})
    }

    async function excluirItem(idItem){
        await api.delete(`/combos/${idItem}`)
        .then(response=>{
            getCombos()
        })
        .catch(error=>{
            alert(error)
        })
    }
    
    async function midCreateItem(){
        if(second_category=='')
            if(title == null || title == '' || title == undefined)
                alert('Digite o nome do combo')
            else if(price == null || price == '' || price == undefined)
                alert('Digite o preço')
            else{
                setPrice(price.toString().replace(',','.'))
                await api.post('/products',{
                    image: null,
                    name: title,
                    details: ' ',
                    category: 'Combos',
                    second_category: title,
                    price: parseFloat(price),
                    login: login,
                })
                .then(response=>{
                    navigation.navigate('NewItemCombo', {second_category: title, login: login, id:''})
                })
                .catch(error=>{
                    alert('midCreateItem: '+error)
                })   
            }
        else{
            item.map(i=>{
                setPrice(i.price)
                navigation.navigate('NewItemCombo', {second_category: title, login: login, id:''})
            })
        }
    }

    return (
        <View style={{flex:1}}>
        {load?
            (<ActivityIndicator size={20}/>)
            :
            (
            <View style={styles.container}>
                <Text style={styles.text}>Nome do combo</Text>
                <TextInput style={styles.input} placeholder='Hamburguer+Refri+Batata...' defaultValue={second_category} onChangeText={(text)=>setTitle(text)}/>
                {item.length==1?
                item.map((it,i)=>(
                    <View style={{width:'100%', alignItems:'center'}}>
                        <Text style={styles.text}>Preço</Text>
                        <TextInput style={styles.input} placeholder='9.99' defaultValue={it.price.toFixed(2)} keyboardType='decimal-pad' onChangeText={(text)=>setPrice(text)}/>
                    </View>
                )):
                <View style={{width:'100%', alignItems:'center'}}>
                    <Text style={styles.text}>Preço</Text>
                    <TextInput style={styles.input} placeholder='9.99' keyboardType='decimal-pad' onChangeText={(text)=>setPrice(text)}/>
                </View>
                }
                
                <Text style={styles.text}>Categoria</Text>
                <TextInput style={styles.input} defaultValue={'Combos'} editable={false} />
                
                <TouchableOpacity style={styles.inLine} onPress={()=>midCreateItem()}>
                    <Image source={Additional} style={styles.additional}/>
                    <Text style={styles.additionalItem}>Adicionar item</Text>
                </TouchableOpacity>
                <ScrollView style={{marginBottom:66, width: '100%'}}>
                    <View style={{alignItems:'center'}}>
                    {newItems.map((ni)=>(
                        <TouchableOpacity style={styles.newViewItem} key={ni._id} onPress={()=>{Alert.alert(`${ni.title}`,`${ni.text}\nR$ ${ni.price.toFixed(2)}`,[
                            {
                                text: "Editar",
                                onPress: ()=> navigation.navigate('NewItemCombo', {second_category: title, login: login, id:ni._id})
                            },
                            {
                                text: "Excluir",
                                onPress:()=> Alert.alert('Excluir', 'Tem certeza disso?',[
                                    {
                                        text:'sim',
                                        onPress: ()=> excluirItem(ni._id)
                                    },
                                    {
                                        text:'não'
                                    }    
                                ], {cancelable: true})
                            },
                        ],{cancelable: true})}}>
                            <Text style={styles.newViewItemLeft}>{ni.text}</Text>
                            <Text style={styles.newViewItemRight}>R$ {ni.price.toFixed(2)}</Text>
                        </TouchableOpacity>    
                    ))}
                    </View>
                </ScrollView>
                {second_category!=''?
                <TouchableOpacity style={styles.btn} onPress={()=>midCreate()}>
                    <Text style={styles.textBtn}>Atualizar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.btn} onPress={()=>midCreate()}>
                    <Text style={styles.textBtn}>Adicionar</Text>
                </TouchableOpacity>
                }
                
            </View>
            )
        }
        </View>
    );

}

export default NewCombo;
