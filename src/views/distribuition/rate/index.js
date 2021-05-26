import React, { Component, useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Modal, Text, TextInput, Switch, Alert, Picker } from 'react-native';

import styles from './styles'
import stylesGlobal from '../../styles'
import Rate from '../../../layouts/rate'
import api from '../../../services/api';

function Main({route, navigation}){

    //Variáveis do sistema
    const {login} = route.params
    const [textRate, setTextRate] = useState()
    const textNewRate = 'Nova Taxa'
    const textEditRate = 'Editar Taxa'

    //BackEnd
    const [rate, setRate] = useState([])
    const [neighborhood, setNeighborhood] = useState()
    const [value, setValue] = useState()
    const [id, setId] = useState()
    const [idEst, setIdEst] = useState()
    const [establishment, setEstablishment] = useState([])
    
    //FRONT END
    const [visible, setVisible] = useState(false)
    const [load, setLoad] = useState(true)
    const [reload, setReload] = useState(1)
    const [contador, setContador] = useState(1)
    const [free, setFree] = useState(true)
    

    useEffect(()=>{
        getRate()
        getEstablishment()
    }, [load])

    function CreateOrUpdate(){
        if(textRate)
            Create()
        else
            Update()
    }

    async function Update(){
        await api.put(`/rate/${id}`,{
            neighborhood: neighborhood.trim(),
	        rate: value
        })
        .then(response=>{
            setLoad(!load)
        })
        .catch(error=>{
            //Alert.alert('Erro ao atualizar', 'Tente novamente mais tarde')
            alert( 'Update '+error)
        })
    }

    async function Create(){
        await api.post(`/rate`,{            
            neighborhood: neighborhood.trim(),
            rate: value,
            login: login
        })
        .then(response=>{
            setLoad(!load)
        })
        .catch(error=>{
            //Alert.alert('Erro ao cadastrar', 'Tente novamente mais tarde')
            alert('Create '+error)
        })
    }

    async function getRate(){
        await api.get(`/rate/read/myRate/${login}`)
        .then(response=>{
            setRate(response.data)
        })
        .catch(error=>{
            alert(error)
        })
    }

    async function deleteAdditional(idAdditional){
        await api.delete(`/rate/${idAdditional}`)
        .then(response=>{
            setLoad(!load)
            alert('deletado!')
        })
        .catch(e=>{
            alert('Erro ao excluir: '+e)
        })
    }

    async function getEstablishment(){
        await api.get(`/establishment/read/establishment/${login}`)
        .then(response=>{
            setEstablishment(response.data)
        })
    }

    async function updateRateFree(){
        await api.put(`/establishment/${idEst}`,{
            rate_free: !free,
        })
        .then(response=>{
            Alert.alert('Atualizado!',`Seu estabelecimento foi atualizado!`)
        })
        .catch(error=>{
            alert(error)
        })
    }

    function OpenAlert(r){
        Alert.alert(`${r.neighborhood}`, `${r.rate.toFixed(2)}`,[
            {
                text: 'excluir',
                onPress:()=>Alert.alert(`${r.neighborhood}`, `Tem certeza disso?`,[
                    {
                        text:'sim',
                        onPress:()=>deleteAdditional(r._id)
                    },
                    {
                        text:'não',
                        
                    }
                ],{cancelable: true})
            },
            {
                text:'Editar',
                onPress:()=> [setVisible(true), setTextRate(false), 
                setNeighborhood(r.neighborhood), setValue(r.rate.toFixed(2)), setId(r._id)]
            }
        ], {cancelable:true})
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container}>
                {establishment.map(e=>(
                    <View style={styles.viewSwitchContainer}>
                        {contador<5 && [setContador(contador+1)] &&
                            [setFree(e.rate_free)]
                            [setIdEst(e._id)]
                        }
                        <View style={styles.viewSwitch}>
                            <Text style={styles.textSwitch}>Frete grátis?</Text>
                            <Switch onValueChange={()=>[setFree(!free), updateRateFree()]} value={free} thumbColor={free==true? '#ff0072':'#ccc' } />
                        </View>
                    </View>
                   
                ))}
                {rate.map(r=>(
                    <TouchableOpacity style={styles.view} 
                    onPress={()=> OpenAlert(r)}>
                        <Rate name={r.neighborhood} rate={r.rate.toFixed(2)}/>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Modal
                animationType={'slide'}
                transparent={false}
                visible={visible}
                onRequestClose={()=>{
                    setVisible(false)
                }}>
                    <View style={styles.modal}>
                        <Text style={styles.title}>{textRate?textNewRate:textEditRate}</Text>
                        <Text style={styles.text}>Bairro</Text>
                        <TextInput placeholder='Bairro' style={styles.input} defaultValue={neighborhood} onChangeText={(text)=>setNeighborhood(text)}/>
                        <Text style={styles.text}>Valor da Taxa</Text>
                        <TextInput placeholder='R$ 3,00' style={styles.input} defaultValue={`${value}`} onChangeText={(text)=>setValue(text)}/>
                        <View style={styles.viewModal}>
                            <TouchableOpacity style={styles.btnConfirm} onPress={()=>[setVisible(false), CreateOrUpdate()]}>
                                <Text style={styles.textBtn}>Confirmar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnCancel} onPress={()=>setVisible(false)}>    
                                <Text style={styles.textBtn}>Cancelar</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity style={[stylesGlobal.btnFlutter, {marginLeft:17}]} onPress={()=>[setVisible(true), setTextRate(true), setNeighborhood(), setValue(0)]}>
                    <Text style={styles.textBtn}>ADICIONAR TAXA DE ENTREGA</Text>
                </TouchableOpacity>
                
        </View>
    );
}

//make this component available to the app
export default Main;
