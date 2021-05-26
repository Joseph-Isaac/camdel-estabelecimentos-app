import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import styles from './styles'
import api from '../../services/api'


export default function index({idEstablishment, id, login, loginUser, rating, user, coment, answer, send}) {

    const [input, setInput] = useState(false)
    const [text, setText] = useState()
    const [datas, setDatas] = useState([])
    const [recuperar, setRecuperar] = useState([])
    const [ndatas, setnDatas] = useState([])
    const[load, setLoad] = useState(true)

    useEffect(() => {
        getRating()
        //console.log(id)
    }, [load])

    async function getRating(){
        await api.get(`/establishment/read/establishment/${login}`)
        .then(r=>{
            setDatas(...r.data.map(d=>d.rating))
        })
    }

    function Responder(dados, idRating){
        //console.log(datas)
        //console.log(datas.map(r=>r._id===idRating && r))

        
        //var ObjectComent = datas.map(r=>r._id===idRating && r).splice(r.indexOf(false), r.indexOf(false).length)
        var dadosFiltrados = []
        var objeto = new Object()

        objeto.loginUser = loginUser
        objeto.userName = user
        objeto.rating = rating
        objeto.coment = coment
        objeto.answer = text

        dadosFiltrados = dados.map(rating=>rating._id!==idRating && rating)
        dadosFiltrados.splice(dadosFiltrados.indexOf(false), 1, objeto)
        //setDatas(dadosFiltrados)
        alert(JSON.stringify(dadosFiltrados))
        Atualizar(dadosFiltrados)
        
    }

    async function Atualizar(dadosFiltrados){
        //alert(JSON.stringify(dadosFiltrados))
        await api.put(`/establishment/${idEstablishment}`,{
            rating: dadosFiltrados
        })
        .then(res=>{
            setLoad(!load)
            setInput(false)
            console.log(res.data)
        })
        .catch(e=>{
            alert(e)
        })
    }

    return (
        <View style={styles.view}>
            <View style={styles.userAndRating}>
                <View style={styles.row}>
                    <FontAwesome5 name="user-alt" size={18} color="#FFAD36" />
                    <Text style={styles.user}>{user}</Text>
                </View>
                <View style={styles.userAndRating}>
                    <Text style={styles.rating}>{rating}</Text>
                    <FontAwesome name="star" size={18} color="#FFAD36" />
                </View>
                
            </View>
            
            {coment !== undefined &&
            <View style={styles.coment}>
                <Text style={styles.text}>Comentário</Text>
                <Text style={styles.textComent}>{coment}</Text>
            </View>
            }
            {coment !== undefined && answer === undefined && input===false &&
            <TouchableOpacity style={styles.touch} onPress={()=>setInput(true)}>
                <Text style={styles.textTouch}>Responder</Text>
            </TouchableOpacity>
            }
            {coment !== undefined && answer === undefined && input===true &&
            <View>
                <TextInput style={styles.input} onChangeText={(t)=>setText(t)}/>
                <TouchableOpacity style={styles.touch} onPress={()=>Responder(datas, id)}>
                    <Text style={styles.textTouch}>ENVIAR</Text>
                </TouchableOpacity>
            </View>
            }
            {answer !== undefined &&
            <View style={styles.coment}>
                <Text style={styles.text}>Resposta</Text>
                <Text style={styles.textComent}>{answer}</Text>
            </View>
            }   
        </View>
    )
}