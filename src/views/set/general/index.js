import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, Switch, TouchableOpacity, Picker } from 'react-native';
import {TextInputMask} from 'react-native-masked-text'

import styles from './styles'
import stylesGlobal from '../../styles'
import api from '../../../services/api'

function Main({navigation, route}){

    const {login} = route.params

    const [load,setLoad] = useState(true)
    const [reload, setReload] = useState(1)
    const [contador, setContador] = useState(1)

    const [search,setSearch] = useState()
    const [data,setData] = useState([])
    const [id,setId] = useState()
    const [owner, setOwner] = useState()
    const [establishment, setEstablishment] = useState()
    const [slogan, setSlogan] = useState()
    const [street, setStreet] = useState()
    const [number, setNumber] = useState()
    const [neighborhood, setNeighborhood] = useState()
    const [complement, setComplement] = useState()
    const [reference, setReference] = useState()
    const [phone, setPhone] = useState()
    const [minimum, setMinimum] = useState()
    const [time,setTime] = useState()
    const [secondCategory,setSecondCategory] = useState()

    useEffect(()=>{
        getDatas()
    }, [load])

    async function getDatas(){
        await api.get(`/establishment/read/establishment/${login}`)
        .then(response=>{
            setData(response.data)
        })
    }


    async function Update(){
        await api.put(`/establishment/${id}`,{
            owner: owner,
            nameEstablishment: establishment,
            slogan: slogan,
            street: street,
            number: number,
            neighborhood: neighborhood,
            complement: complement,
            reference: reference,
            phone:typeof phone=='number'? phone: phone.replace('(','').replace(')','').replace('-','').replace(' ',''),
            price_minimum: minimum,
            time_delivery: time,
            search: search,
            second_category: secondCategory
        })
        .then(response=>{
            alert('Dados atualizados!')
            navigation.navigate('Set')
        })
    }

    return (
        <View style={styles.main}>
            {login===undefined? 
                <TouchableOpacity style={styles.reload} onPress={()=>[setLoad(!load),setReload(-1)]}>
                    <Text style={styles.title}>Recarregar</Text>
                </TouchableOpacity>
            :
            <ScrollView>
                {data.map(d=>(
                    <View style={styles.container} key={d._id}>

                        {contador<5 && [setContador(contador+1)] &&
                        [setId(d._id)] &&
                        [setOwner(d.owner)] &&
                        [setEstablishment(d.nameEstablishment)] &&
                        [setSlogan(d.slogan)] &&
                        [setStreet(d.street)] &&
                        [setNumber(d.number)] &&
                        [setNeighborhood(d.neighborhood)] &&
                        [setComplement(d.complement)] &&
                        [setReference(d.reference)] &&
                        [setPhone(d.phone)] &&
                        [setMinimum(d.price_minimum)] &&
                        [setTime(d.time_delivery)] &&
                        [setSearch(d.search)]
                        }

                        <Text style={styles.title}>Proprietário</Text>
                        <Text style={styles.text}>Nome</Text>
                        <TextInput style={styles.input} placeholder='Nome' defaultValue={owner}  onChangeText={(text)=>setOwner(text)}/>
    
                        <Text style={styles.title}>Estabelecimento</Text>
                        <Text style={styles.text}>Categoria Secundária</Text>
                        <View style={[styles.viewPicker, secondCategory==='Nenhum'?{backgroundColor:'#009eb2'}:{backgroundColor:'#221a27'}]}>
                            <Picker
                                selectedValue={secondCategory}
                                style={styles.picker}
                                itemStyle={styles.textPicker}
                                onValueChange={(item,index)=>setSecondCategory(item)}>
                                <Picker.item  color='#fff' fontFamily='Cocogoose-Light' fontSize={13} textAlign='center' label="Nenhum" value="nenhum"/>
                                <Picker.item label="Pizzaria" value="pizzaria"/>
                                <Picker.item label="Oriental" value="oriental"/>
                                <Picker.item label="Gelados" value="gelados"/>
                                <Picker.item label="Lanches" value="lanches"/>
                                <Picker.item label="Bebidas" value="bebidas"/>
                                <Picker.item label="Doces" value="doces"/>
                                <Picker.item label="Esfihas" value="esfihas"/>
                                <Picker.item label="Petiscos" value="petiscos"/>
                            </Picker>
                        </View>
                        <Text style={styles.text}>Nome</Text>
                        <TextInput style={styles.input} placeholder='Nome' defaultValue={establishment}  onChangeText={(text)=>setEstablishment(text)}/>
                        <Text style={styles.text}>Slogan</Text>
                        <TextInput style={styles.input} placeholder='Slogan' defaultValue={slogan}  onChangeText={(text)=>setSlogan(text)}/>
                        <Text style={styles.text}>Tempo de entrega</Text>
                        <TextInputMask type={'custom'} options={{mask: '99 - 99 min'}} style={styles.input} placeholder='40:00 - 60:00' value={time} keyboardType='number-pad'  onChangeText={(text)=>setTime(text)}/>
                        <Text style={styles.text}>Preço mínimo</Text>
                        <TextInputMask type={"money"} options={{precision: 2, separator: ',', delimiter: '.', unit: 'R$ ', suffixUnit: ''}} 
                        style={styles.input} placeholder='R$ 10,00' value={minimum}  onChangeText={(text)=>setMinimum(text)}/>

                        <Text style={styles.title}>Endereço</Text>
                        <Text style={styles.text}>Rua</Text>
                        <TextInput style={styles.input} placeholder='Rua 15 de Julho' defaultValue={street}  onChangeText={(text)=>setStreet(text)}/>
                        <Text style={styles.text}>Número</Text>
                        <TextInput style={styles.input} placeholder='123' keyboardType='number-pad' defaultValue={`${number}`}  onChangeText={(text)=>setNumber(text)}/>
                        <Text style={styles.text}>Bairro</Text>
                        <TextInput style={styles.input} placeholder='Centro' defaultValue={neighborhood}  onChangeText={(text)=>setNeighborhood(text)}/>
                        <Text style={styles.text}>Complemento</Text>
                        <TextInput style={styles.input} placeholder='Apartamento 2' defaultValue={complement}  onChangeText={(text)=>setComplement(text)}/>
                        <Text style={styles.text}>Referência</Text>
                        <TextInput style={styles.input} placeholder='Próximo à igreja matriz' defaultValue={reference}  onChangeText={(text)=>setReference(text)}/>
                        
                        <Text style={styles.title}>Contato</Text>
                        <Text style={styles.text}>Telefone</Text>
                        <TextInputMask type={'cel-phone'} options={{maskType: 'BRL', withDDD: true, dddMask:'(99) '}} style={styles.input} placeholder='Telefone' keyboardType='number-pad' value={`${phone}`}  onChangeText={(text)=>setPhone(text)}/>
                        <View style={styles.viewSwitch}>
                            <Text style={styles.text}>Permitir barra de pesquisa</Text>
                            <Switch onValueChange={()=>setSearch(!search)} value={search} thumbColor={search? '#EE6B26':'#ccc' } />
                        </View>
    
                        <View style={ styles.viewLine}>
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.textBox}>Logo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.textBox}>Fundo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
            }
            <TouchableOpacity style={[stylesGlobal.btnFlutter, {backgroundColor:'#2BC44E', marginLeft:17}]} onPress={()=>Update()}>
                <Text style={styles.textBtn}>Alterar</Text>
            </TouchableOpacity>
        </View>
    );
}

//make this component available to the app
export default Main;

//pizzaria, oriental, gelados, lanches, bebidas