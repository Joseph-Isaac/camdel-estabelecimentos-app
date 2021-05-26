import React, { Component, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';
import api from '../../../services/api'

import styles from './styles'
import stylesGlobal from '../../styles'

function Main({route, navigation}){

    const {login} = route.params
    const [datas,setDatas] = useState([])
    const [contador, setContador] = useState(1)
    const [email, setEmail] = useState()
    const [nick, setNick] = useState()
    const [senha, setSenha] = useState()
    const [modal, setModal] = useState(true)
    const [password, setPassword] = useState(true)

    useEffect(() => {
        getMyDatas()
    },[])

    async function getMyDatas(){
        await api.get(`/establishment/read/establishment/${login}`)
        .then(res=>{
            setDatas(res.data)
        })
    }

    async function Salvar(id){
        if(typeof senha == 'undefined')
            alert('Sua senha não pode estar vazia!')
        else if(typeof nick == 'undefined')
            setNick(login)
        await api.put(`/establishment/${id}`, {
            nick: nick.trim(),
            password: senha.trim()
        })
        .then(res=>{
            alert('Dados atualizados!')
            navigation.navigate('Set')
        })
    }

    function AcessConfirmation(pass){
        if(pass == senha)
            setModal(false)
        else
            Alert.alert('Erro','senha incorreta!')
    }

    return (
        <View style={styles.main}>
            {datas.map(d=>(
               <View style={styles.container}>
                   <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={modal}
                    >
                        <View style={styles.modalSup}>
                            <View style={styles.modal}>
                                <Text style={styles.titleLarge}>Para acesso dessa parte, é necessária confirmar a senha para sua segurança de dados.</Text>
                                <TextInput style={styles.input} secureTextEntry={true} placeholder={'senha'} placeholderTextColor="#aaa" onChangeText={(pass)=>setPassword(pass)}/>
                            </View>
                            <TouchableOpacity style={styles.touchModal}  onPress={()=>AcessConfirmation(password)}>
                                <Text style={styles.textModal}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    {contador<5 && [setContador(contador+1)] &&
                    [setEmail(d.login)] &&
                    [setNick(d.nick)] &&
                    [setSenha(d.password)]
                    }
                    <View style={{marginTop:10}}/>
                    <Text style={styles.text}>Login</Text>
                    <TextInput style={styles.input} defaultValue={d.login} placeholder='Login' editable={false} onChangeText={(text)=>setEmail(text)}/>
                    <Text style={styles.text}>Nick</Text>
                    <TextInput style={styles.input} defaultValue={d.nick} placeholder='Nick' editable={false} onChangeText={(text)=>setNick(text)}/>
                    <Text style={styles.text}>Senha</Text>
                    <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} onChangeText={(text)=>setSenha(text)}/>
                    <Text style={styles.text}>Repita sua Senha</Text>
                    <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} onChangeText={(text)=>setSenha(text)}/>
                    <TouchableOpacity style={[stylesGlobal.btnFlutter, {backgroundColor:'#2BC44E'}]} onPress={()=>Salvar(d._id)}>
                            <Text style={styles.textBtn}>SALVAR</Text>
                    </TouchableOpacity>
               </View>
            ))}
        </View>
    );
}

//make this component available to the app
export default Main;

//
