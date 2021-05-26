import React, { Component, useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import styles from './styles'
import api from '../../../services/api';

function Main(){

    const [login,setLogin] = useState()
    const [reload, setReload] = useState(1)
    const [load, setLoad] = useState(true)

    const [recebidos, setRecebidos] = useState([])
    const [cancelados, setCancelados] = useState([])
    const [balcao, setBalcao] = useState([])
    const [concluidos, setConcluidos] = useState([])
    const [cartao, setCartao] = useState([])
    

    const [datas,setDatas] = useState([])
    const [trolley,setTrolley] = useState([])
    const [receive,setReceive] = useState([])
    

    useEffect(()=>{
        getLogin()
        flow()
        AgregateReceive()
        AgregateCancel()
        AgregateBalcony()
        AgregateFinish()
        AgregateCard()
    }, [load])

    async function getLogin(){
        try{
            setLogin(await AsyncStorage.getItem('@login') )
        }catch(e){
            alert(e)
        }
    }

    async function flow(){
        await api.get(`/purchase/read/all/${login}`)
        .then(response=>{
            setDatas(response.data)
        })
    } 

    async function AgregateReceive(){
        await api.get(`/purchase/read/agregate/receive/`)
        .then(response=>{
            setRecebidos(response.data)
        })
    }

    async function AgregateCancel(){
        await api.get(`/purchase/read/agregate/cancel`)
        .then(response=>{
            setCancelados(response.data)
        })
    }

    async function AgregateBalcony(){
        await api.get(`/purchase/read/agregate/balcony`)
        .then(response=>{
            setBalcao(response.data)
        })
    }

    async function AgregateFinish(){
        await api.get(`/purchase/read/agregate/finish`)
        .then(response=>{
            setConcluidos(response.data)
        })
    }

    async function AgregateCard(){
        await api.get(`/purchase/read/agregate/card`)
        .then(response=>{
            setCartao(response.data)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.line}>
                <View style={styles.view}>
                    <Text style={styles.text}>Recebidos</Text>
                    {recebidos.map(r => r._id.receive == true && r._id.establishment == login &&(
                        <Text style={styles.number}>{r.numItems}</Text>
                    ))}
                    
                </View>
                <View style={styles.cancel}>
                    <Text style={styles.text}>Cancelados</Text>
                    {cancelados.map(c=> c._id.cancel == true && c._id.establishment == login && (
                        <Text style={styles.number}>{c.numItems}</Text>
                    ))}
                    
                </View>
            </View>    
            <View style={styles.line}>
                <View style={styles.view}>
                    <Text style={styles.text}>Delivery</Text>
                    {balcao.map(b => b._id.balcony == false && b._id.establishment == login &&(
                        <Text style={styles.number}>{b.numItems}</Text>    
                    ))}
                    
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>No estabelecimento</Text>
                    {balcao.map(b => b._id.balcony == true && b._id.establishment == login &&(
                        <Text style={styles.number}>{b.numItems}</Text>    
                    ))}
                </View>
            </View>    
            <View style={styles.line}>
                <View style={styles.view}>
                    <Text style={styles.text}>Concluídos</Text>
                    {concluidos.map(c => c._id.finish == true && c._id.establishment == login &&(
                        <Text style={styles.number}>{c.numItems}</Text>    
                    ))}
                </View>
                <View style={styles.get}>
                    <Text style={styles.text}>Dinheiro recebido</Text>
                    {concluidos.map(c => c._id.finish == true && c._id.establishment == login &&(
                        <Text style={styles.number}>R$ {c.price.toFixed(2)}</Text>
                    ))}
                </View>
            </View>    
            <View style={styles.largeView}>
                <Text style={styles.text}>Formas de pagamento</Text>
                <View style={styles.textLine}>
                    <Text style={styles.text}>Dinheiro</Text>
                    {cartao.map(c => c._id.finish == true && c._id.card == false && c._id.establishment == login &&(
                        <Text style={styles.number}>R$ {c.price.toFixed(2)}</Text>
                    ))}
                </View>
                <View style={styles.textLine}>
                    <Text style={styles.text}>Cartão</Text>
                    {cartao.map(c => c._id.finish == true && c._id.card == true && c._id.establishment == login &&(
                        <Text style={styles.number}>R$ {c.price.toFixed(2)}</Text>
                    ))}
                </View>
                <View style={styles.textLine}>
                    <Text style={styles.text}>Total</Text>
                    {concluidos.map(c => c._id.finish == true && c._id.establishment == login &&(
                        <Text style={styles.number}>R$ {c.price.toFixed(2)}</Text>
                    ))}
                </View>
            </View>
            <View style={styles.viewBlue}>
            <Text style={styles.text}>Taxas do aplicativo</Text>
                <View style={styles.textLine2}>
                    <Text style={styles.text}>Concluídos</Text>
                    
                    <View style={styles.conclude}>
                    {concluidos.map(c => c._id.finish == true && c._id.establishment == login &&(
                        <Text style={styles.text}>{c.numItems}</Text>
                    ))}
                    </View>
                    <View style={styles.rate}>
                    {concluidos.map(c => c._id.finish == true && c._id.establishment == login &&(
                        <Text style={styles.number}>R$ {(c.numItems*2).toFixed(2)}</Text>
                    ))}
                    </View>
                </View>
            </View>
        </View>
        
    );
}

//make this component available to the app
export default Main;
