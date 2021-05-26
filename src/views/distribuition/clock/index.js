import React, { Component, PureComponent, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, AsyncStorage, ScrollView } from 'react-native';
import {TextInputMask} from 'react-native-masked-text'

import styles from './styles'
import Pick from '../../../layouts/picker'
import api from '../../../services/api'

function Main({navigation, route}){

    //Dados do sistema
    const {login} = route.params
    //BD
    const [datas, setDatas] = useState([])
    
    const [open, setOpen] = useState()
    const [close, setClose] = useState()
    const [id, setId] = useState()
    
    const [domingo, setDomingo] = useState()
    const [segunda, setSegunda] = useState()
    const [terca, setTerca] = useState()
    const [quarta, setQuarta] = useState()
    const [quinta, setQuinta] = useState()
    const [sexta, setSexta] = useState()
    const [sabado, setSabado] = useState()

    const [domOpen1, setDomOpen1] = useState('')
    const [domOpen2, setDomOpen2] = useState('')
    const [segOpen1, setSegOpen1] = useState('')
    const [segOpen2, setSegOpen2] = useState('')
    const [terOpen1, setTerOpen1] = useState('')
    const [terOpen2, setTerOpen2] = useState('')
    const [quaOpen1, setQuaOpen1] = useState('')
    const [quaOpen2, setQuaOpen2] = useState('')
    const [quiOpen1, setQuiOpen1] = useState('')
    const [quiOpen2, setQuiOpen2] = useState('')
    const [sexOpen1, setSexOpen1] = useState('')
    const [sexOpen2, setSexOpen2] = useState('')
    const [sabOpen1, setSabOpen1] = useState('')
    const [sabOpen2, setSabOpen2] = useState('')
    

    const [domClose1, setDomClose1] = useState('')
    const [domClose2, setDomClose2] = useState('')
    const [segClose1, setSegClose1] = useState('')
    const [segClose2, setSegClose2] = useState('')
    const [terClose1, setTerClose1] = useState('')
    const [terClose2, setTerClose2] = useState('')
    const [quaClose1, setQuaClose1] = useState('')
    const [quaClose2, setQuaClose2] = useState('')
    const [quiClose1, setQuiClose1] = useState('')
    const [quiClose2, setQuiClose2] = useState('')
    const [sexClose1, setSexClose1] = useState('')
    const [sexClose2, setSexClose2] = useState('')
    const [sabClose1, setSabClose1] = useState('')
    const [sabClose2, setSabClose2] = useState('')

    //Front
    const [value, setValue] = useState()
    const [load, setLoad] = useState()
    const [contador, setContador] = useState(1)
    const [reload, setReload] = useState(1)
    const [hour, setHour] = useState(['00:00','00:30','01:00','01:30', '02:00', '02:30', '03:00','03:30', '04:00','04:30','05:00','05:30',
    '06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00',
    '13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30',
    '21:00','21:30','22:00','22:30','23:00','23:30'])

    //texts

    useEffect(()=>{
        myDatas()
    }, [load])

    async function myDatas(){
        await api.get(`/establishment/read/establishment/${login}`)
        .then(response=>{
            setDatas(response.data)
        })
    }

    async function Update(){
        if(domOpen1.split(':')[0]>23 || domOpen1.split(':')[1]>59 || domOpen1.length!=5 && domingo==true)
            alert('Valor inválido para o Domingo!\n'+domOpen)
        else if(domClose1.split(':')[0]>23 || domClose1.split(':')[1]>59 || domClose1.length!=5 && domingo==true)
            alert('Valor inválido para o Domgino!\n'+domClose)
        else if(segOpen1.split(':')[0]>23 || segOpen1.split(':')[1]>59 || segOpen1.length!=5 && segunda==true)
            alert('Valor inválido para a Segunda-Feira!\n'+segOpen)
        else if(segClose1.split(':')[0]>23 || segClose1.split(':')[1]>59 || segClose1.length!=5 && segunda==true)
            alert('Valor inválido para a Segunda-Feira!\n'+segClose)
        else if(terOpen1.split(':')[0]>23 || terOpen1.split(':')[1]>59 || terOpen1.length!=5 && terca==true)
            alert('Valor inválido para a Terça-Feira!\n'+terOpen)
        else if(terClose1.split(':')[0]>23 || terClose1.split(':')[1]>59 || terClose1.length!=5 && terca==true)
            alert('Valor inválido para a Terça-Feira!\n'+terClose)
        else if(quaOpen1.split(':')[0]>23 || quaOpen1.split(':')[1]>59 || quaOpen1.length!=5 && quarta==true)
            alert('Valor inválido para a Quarta-Feira!\n'+quaOpen)
        else if(quaClose1.split(':')[0]>23 || quaClose1.split(':')[1]>59 || quaClose1.length!=5 && quarta==true)
            alert('Valor inválido para a Quarta-Feira!\n'+quaClose)
        else if(quiOpen1.split(':')[0]>23 || quiOpen1.split(':')[1]>59 || quiOpen1.length!=5 && quinta==true)
            alert('Valor inválido para a Quinta-Feira!\n'+quiOpen)
        else if(quiClose1.split(':')[0]>23 || quiClose1.split(':')[1]>59 || quiClose1.length!=5 && quinta==true)
            alert('Valor inválido para a Quinta-Feira!\n'+quiClose)
        else if(sexOpen1.split(':')[0]>23 || sexOpen1.split(':')[1]>59 || sexOpen1.length!=5 && sexta==true)
            alert('Valor inválido para a Sexta-Feira!\n'+sexOpen)
        else if(sexClose1.split(':')[0]>23 || sexClose1.split(':')[1]>59 || sexClose1.length!=5 && sexta==true)
            alert('Valor inválido para a Sexta-Feira!\n'+sexClose)
        else if(sabOpen1.split(':')[0]>23 || sabOpen1.split(':')[1]>59 || sabOpen1.length!=5 && sabado==true)
            alert('Valor inválido para a Sábado!\n'+sabOpen)
        else if(sabClose1.split(':')[0]>23 || sabClose1.split(':')[1]>59 || sabClose1.length!=5 && sabado==true)
            alert('Valor inválido para a Sábado!\n'+sabClose)
        else
        await api.put(`/establishment/${id}`,{
            
            domopen: domOpen1,
            domclose: domClose1,
            segopen: segOpen1,
            segclose: segClose1,
            teropen: terOpen1,
            terclose: terClose1,
            quaopen: quaOpen1,
            quaclose: quaClose1,
            quiopen: quiOpen1,
            quiclose: quiClose1,
            sexopen: sexOpen1,
            sexclose: sexClose1,
            sabopen: sabOpen1,
            sabclose: sabClose1,
            
            domopen2: domOpen2,
            domclose2: domClose2,
            segopen2: segOpen2,
            segclose2: segClose2,
            teropen2: terOpen2,
            terclose2: terClose2,
            quaopen2: quaOpen2,
            quaclose2: quaClose2,
            quiopen2: quiOpen2,
            quiclose2: quiClose2,
            sexopen2: sexOpen2,
            sexclose2: sexClose2,
            sabopen2: sabOpen2,
            sabclose2: sabClose2,
            
            sunday: domingo,
            monday: segunda,
            tuesday: terca,
            wednesday:quarta,
            thursday: quinta,
            friday:sexta,
            saturday: sabado
        })
        .then(response=>{
            alert('Dados Atualizados!')
            navigation.navigate('Distribuition')
        })
        .catch(error=>{
            alert(error)
        })
    }

    return (
        <View style={styles.container}>
            {datas.map(d=>(
                <ScrollView key={d._id} style={styles.container2} showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Cores</Text>
                    <View style={[{justifyContent:'space-around', flexDirection:'row', marginBottom:10, paddingTop:10}]}>
                        <View style={styles.line}>
                            <View style={[styles.box, {backgroundColor:'#ff0072'}]}/>
                            <Text style={[styles.txt, {marginLeft:5}]}>Ativado</Text>
                        </View>
                        <View style={styles.line}>
                            <View style={[styles.box, {backgroundColor:'#221a27'}]}/>
                            <Text style={[styles.txt, {marginLeft:5}]}>Desativado</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Dias de Funcionamento</Text>
                    <View style={styles.week}>
                        {contador<10 && [setContador(contador+1)] &&
                            [setDomingo(d.sunday)] &&
                            [setSegunda(d.monday)] &&
                            [setTerca(d.tuesday)] &&
                            [setQuarta(d.wednesday)] &&
                            [setQuinta(d.thursday)] &&
                            [setSexta(d.friday)] &&
                            [setSabado(d.saturday)] &&
                            [setId(d._id)] &&
                            [setDomOpen1(d.domopen)] &&
                            [setDomOpen2(d.domopen2)] &&
                            [setDomClose1(d.domclose)] &&
                            [setDomClose2(d.domclose2)] &&
                            [setSegOpen1(d.segopen)] &&
                            [setSegOpen2(d.segopen2)] &&
                            [setSegClose1(d.segclose)] &&
                            [setSegClose2(d.segclose2)] &&
                            [setTerOpen1(d.teropen)] &&
                            [setTerOpen2(d.teropen2)] &&
                            [setTerClose1(d.terclose)] &&
                            [setTerClose2(d.terclose2)] &&
                            [setQuaOpen1(d.quaopen)] &&
                            [setQuaOpen2(d.quaopen2)] &&
                            [setQuaClose1(d.quaclose)] &&
                            [setQuaClose2(d.quaclose2)] &&
                            [setQuiOpen1(d.quiopen)] &&
                            [setQuiOpen2(d.quiopen2)] &&
                            [setQuiClose1(d.quiclose)] &&
                            [setQuiClose2(d.quiclose2)] &&
                            [setSexOpen1(d.sexopen)] &&
                            [setSexOpen2(d.sexopen2)] &&
                            [setSexClose1(d.sexclose)] &&
                            [setSexClose2(d.sexclose2)] &&
                            [setSabOpen1(d.sabopen)] &&
                            [setSabOpen2(d.sabopen2)] &&
                            [setSabClose1(d.sabclose)]
                            [setSabClose2(d.sabclose2)]
                            
                        }
                        <View style={styles.days}>
                            <TouchableOpacity style={domingo?styles.btnSelected:styles.btnUnselected} onPress={()=>setDomingo(!domingo)}>
                                <Text style={styles.textDay}>Dom</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={segunda?styles.btnSelected:styles.btnUnselected} onPress={()=>setSegunda(!segunda)}>
                                <Text style={styles.textDay}>Seg</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={terca?styles.btnSelected:styles.btnUnselected} onPress={()=>setTerca(!terca)}>
                                <Text style={styles.textDay}>Ter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={quarta?styles.btnSelected:styles.btnUnselected} onPress={()=>setQuarta(!quarta)}>
                                <Text style={styles.textDay}>Qua</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.days}>
                            <TouchableOpacity style={quinta?styles.btnSelected:styles.btnUnselected} onPress={()=>setQuinta(!quinta)}>
                                <Text style={styles.textDay}>Qui</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={sexta?styles.btnSelected:styles.btnUnselected} onPress={()=>setSexta(!sexta)}>
                                <Text style={styles.textDay}>Sex</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={sabado?styles.btnSelected:styles.btnUnselected} onPress={()=>setSabado(!sabado)}>
                                <Text style={styles.textDay}>Sab</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.viewHours}>
                        <Text style={styles.title}>Horários</Text>
                        <View style={styles.dayWeek}>
                            <Text style={styles.text}>Domingo</Text>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={domOpen1} options={{format: 'HH:mm'}} placeholder='18:00' value={domOpen1} onChangeText={(text)=>setDomOpen1(text)} />
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={domClose1} options={{format: 'HH:mm'}} placeholder='18:00' value={domClose1} onChangeText={(text)=>setDomClose1(text)}/>
                            </View>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={domOpen2} options={{format: 'HH:mm'}} placeholder='18:00' value={domOpen2} onChangeText={(text)=>setDomOpen2(text)} />
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={domClose2} options={{format: 'HH:mm'}} placeholder='18:00' value={domClose2} onChangeText={(text)=>setDomClose2(text)}/>
                            </View>
                        </View>
                        <View style={styles.dayWeek}>
                            <Text style={styles.text}>Segunda</Text>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={segOpen1} options={{format: 'HH:mm'}} placeholder='18:00' value={segOpen1} onChangeText={(text)=>setSegOpen1(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={segClose1} options={{format: 'HH:mm'}} placeholder='18:00' value={segClose1} onChangeText={(text)=>setSegClose1(text)}/>
                            </View>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={segOpen2} options={{format: 'HH:mm'}} placeholder='18:00' value={segOpen2} onChangeText={(text)=>setSegOpen2(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={segClose2} options={{format: 'HH:mm'}} placeholder='18:00' value={segClose2} onChangeText={(text)=>setSegClose2(text)}/>
                            </View>
                        </View>
                        <View style={styles.dayWeek}>
                            <Text style={styles.text}>Terça</Text>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={terOpen1} options={{format: 'HH:mm'}} placeholder='18:00' value={terOpen1} onChangeText={(text)=>setTerOpen1(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={terClose1} options={{format: 'HH:mm'}} placeholder='18:00' value={terClose1} onChangeText={(text)=>setTerClose1(text)}/>
                            </View>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={terOpen2} options={{format: 'HH:mm'}} placeholder='18:00' value={terOpen2} onChangeText={(text)=>setTerOpen2(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={terClose2} options={{format: 'HH:mm'}} placeholder='18:00' value={terClose2} onChangeText={(text)=>setTerClose2(text)}/>
                            </View>
                        </View>
                        <View style={styles.dayWeek}>
                            <Text style={styles.text}>Quarta</Text>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={quaOpen1} options={{format: 'HH:mm'}} placeholder='18:00' value={quaOpen1} onChangeText={(text)=>setQuaOpen1(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={quaClose1} options={{format: 'HH:mm'}} placeholder='18:00' value={quaClose1} onChangeText={(text)=>setQuaClose1(text)}/>
                            </View>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={quaOpen2} options={{format: 'HH:mm'}} placeholder='18:00' value={quaOpen2} onChangeText={(text)=>setQuaOpen2(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={quaClose2} options={{format: 'HH:mm'}} placeholder='18:00' value={quaClose2} onChangeText={(text)=>setQuaClose2(text)}/>
                            </View>
                        </View>
                        <View style={styles.dayWeek}>
                            <Text style={styles.text}>Quinta</Text>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={quiOpen1} options={{format: 'HH:mm'}} placeholder='18:00' value={quiOpen1} onChangeText={(text)=>setQuiOpen1(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={quiClose1} options={{format: 'HH:mm'}} placeholder='18:00' value={quiClose1} onChangeText={(text)=>setQuiClose1(text)}/>
                            </View>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={quiOpen2} options={{format: 'HH:mm'}} placeholder='18:00' value={quiOpen2} onChangeText={(text)=>setQuiOpen2(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={quiClose2} options={{format: 'HH:mm'}} placeholder='18:00' value={quiClose2} onChangeText={(text)=>setQuiClose2(text)}/>
                            </View>
                        </View>
                        <View style={styles.dayWeek}>
                            <Text style={styles.text}>Sexta</Text>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={sexOpen1} options={{format: 'HH:mm'}} placeholder='18:00' value={sexOpen1} onChangeText={(text)=>setSexOpen1(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={sexClose1} options={{format: 'HH:mm'}} placeholder='18:00' value={sexClose1} onChangeText={(text)=>setSexClose1(text)}/>
                            </View>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={sexOpen2} options={{format: 'HH:mm'}} placeholder='18:00' value={sexOpen2} onChangeText={(text)=>setSexOpen2(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={sexClose2} options={{format: 'HH:mm'}} placeholder='18:00' value={sexClose2} onChangeText={(text)=>setSexClose2(text)}/>
                            </View>
                        </View>
                        <View style={styles.dayWeek}>
                            <Text style={styles.text}>Sábado</Text>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={sabOpen1} options={{format: 'HH:mm'}} placeholder='18:00' value={sabOpen1} onChangeText={(text)=>setSabOpen1(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={sabClose1} options={{format: 'HH:mm'}} placeholder='18:00' value={sabClose1} onChangeText={(text)=>setSabClose1(text)}/>
                            </View>
                            <View style={styles.containerInput}>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={sabOpen2} options={{format: 'HH:mm'}} placeholder='18:00' value={sabOpen2} onChangeText={(text)=>setSabOpen2(text)}/>
                                <TextInputMask style={styles.input} type={'datetime'} defaultValue={sabClose2} options={{format: 'HH:mm'}} placeholder='18:00' value={sabClose2} onChangeText={(text)=>setSabClose2(text)}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            ))}
            <View style={styles.container3}>
                <TouchableOpacity style={styles.touch} onPress={()=> Update()}>
                    <Text style={styles.textTouch}>atualizar funcionamento</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    );
}

//make this component available to the app
export default Main;
