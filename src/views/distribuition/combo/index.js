import React, { Component, useState, useEffect } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity, Alert } from 'react-native';


import styles from './styles'
import api from '../../../services/api'


function Combos({navigation, route}){

    useEffect(()=>{
        getComboName()
        getLogin()
        navigation.addListener('focus', ()=>setLoad(!load))
    },[load, navigation])

    const [login,setLogin] = useState()
    const [load,setLoad] = useState()
    const [comboName, setComboName] = useState([])

    //Funções que recuperam o backend
    //Lendo second_category 
    async function getComboName(){
        await api.get(`/products/read/products/distinct/${login}/Combos`)
        .then(response=>{
            setComboName(response.data)
            
        })
        .catch(error=>{
            alert(error)
        })
    }

    async function getLogin(){
        try{
            setLogin(await AsyncStorage.getItem('@login'))
            getComboName()
        }catch(e){
            alert(e)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.reload} onPress={()=>getComboName()}>
                <Text>Se os dados não tiverem carregado, clique aqui!</Text>
            </TouchableOpacity>
           
           {comboName.map(dt=>(
                <TouchableOpacity style={styles.containerItem} onPress={()=>Alert.alert('Combos',`${dt}`,[
                    {
                        text: "Editar",
                        onPress: () => navigation.navigate('NewCombo', {second_category:dt, login:login}),
                    },
                    {
                        text: "Excluir",
                        onPress: () => Alert.alert('Excluir', 'Tem certeza disso?',[
                            {
                                text: "Sim",
                                onPress: () => console.log("Sim"),
                            },
                            {
                                text: "Não",
                                onPress: () => console.log("Não"),
                            }
                        ], {cancelable: true})
                    }
                ], {cancelable: true}
                )}>
                    <Text style={styles.title}>{dt}</Text>
                    
                </TouchableOpacity>
                ))
            }
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('NewCombo', {login: login, second_category:''})}>
                <Text style={styles.textBtn}>Novo Combo</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Combos;


/*
{comboItem.length>0?
comboItem[comboName.indexOf(dt)].map(sd=>(
    <TouchableOpacity style={styles.itemTitle} onPress={()=>alert(JSON.stringify(sd.text))}>
        <Text style={styles.item}>{sd.text}</Text>
        <Text style={styles.item}>R$ {sd.price.toFixed(2)}</Text>
    </TouchableOpacity>
))
:    
    Alert.alert('Espere!','os dados não foram totalmente carregados',[
        {
            text: "recarregar",
            onPress: ()=>getComboItem()
        }
    ], {cancelable: false})
    
}

*/