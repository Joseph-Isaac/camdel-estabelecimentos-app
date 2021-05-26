import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, AsyncStorage } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Avaliations from '../../layouts/avaliations'
import api from '../../services/api'
import styles from './styles'

export default function index() {

    const [datas, setDatas] = useState([])
    const [login, setLogin] = useState(AsyncStorage.getItem('@login'))

    useEffect(()=>{
        getRating()
        getLogin()
    },[login])

    async function getLogin(){
        try{
            setLogin(await AsyncStorage.getItem('@login'))
        }catch(e){
            alert(e)
        }
    }

    async function getRating(){
        await api.get(`/establishment/read/establishment/${login}`)
        .then(r=>{
            setDatas(r.data)
        })
    }

    function Media(valores, tamanho){
        var a = 0
        valores.map(v=>{
            
            for(var n=0; n<tamanho; n++){
                a = v.rating+a
               // console.log('rat: '+v.rating+'\na: '+a+'\nta: '+tamanho)
            }
        })
        
        return a/(tamanho*tamanho)
    }

    return (
        <ScrollView>
            <View style={styles.main}>
                    {datas.map(d=>(
                        <View  style={styles.box}>
                            <Text style={styles.title}>{d.nameEstablishment}</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={[styles.avaliation,{marginRight:5}]}>
                                    {Media(d.rating, d.rating.length)>0 || Media(d.rating, d.rating.length)<5?Media(d.rating, d.rating.length):'Sem nota'}
                                    </Text>
                                <FontAwesome name="star" size={18} color="#FFAD36" />
                            </View>
                            <View style={styles.line}/>
                            {d.rating.map(a=>(
                                <Avaliations idEstablishment={d._id} id={a._id} login={d.login} loginUser={a.loginUser} rating={a.rating} user={a.userName} coment={a.coment} answer={a.answer}/>
                            )).reverse()}
                        </View>
                    ))}        
            </View>
            
        </ScrollView>
    )
}

