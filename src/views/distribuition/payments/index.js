import React, { Component, useState, useEffect } from 'react';
import { View, Text, CheckBox, ScrollView, TouchableOpacity, RecyclerViewBackedScrollView, StyleSheet } from 'react-native';
import {AppLoading} from 'expo'
import {useFonts} from 'expo-font'
import styles from './styles'
import api from '../../../services/api';
import styleGlobal from '../../styles'

function Main({navigation, route}){

    const {login} = route.params

    const [data,setData] = useState([])
    const [id,setId] = useState([])

    const [cash, setCash] = useState(false)
    
    const [dvisa, setDvisa] = useState()
    const [dmaster, setDmaster] = useState()
    const [delo, setDelo] = useState()
    const [dsicredi, setDsicredi] = useState()
    const [dbanri, setDbanri] = useState()

    const [cvisa, setCvisa] = useState()
    const [cmaster, setCmaster] = useState()
    const [celo, setCelo] = useState()
    const [chipercard, setChipercard] = useState()
    const [cdiners, setCdiners] = useState()
    const [chiper, setChiper] = useState()
    const [camerican, setCamerican] = useState()
    const [csicredi, setCsicredi] = useState()
    const [ccabal, setCcabal] = useState()

    const [load,setLoad] = useState(true)
    const [reload, setReload] = useState(1)
    const [contador, setContador] = useState(1)

    useEffect(()=>{
        getDatas()
    },[load])

    async function getDatas(){
        await api.get(`/establishment/read/establishment/${login}`)
        .then(response=>{
            setData(response.data)
        })
    }

    let [fontLoad] = useFonts({
        'Abadi-Regular':require('../../../assets/fonts/abadi/abadi-condensed.ttf'),
        'Abadi-Extra-Bold':require('../../../assets/fonts/abadi/abadi-extra-bold.otf'),
        'Cocogoose-Light':require('../../../assets/fonts/Cocogoose/Cocogoose-Light.ttf'),
        'Lexend-Regular':require('../../../assets/fonts/Lexend/Lexend-Regular.ttf'),
        'Lexend-Medium':require('../../../assets/fonts/Lexend/Lexend-Medium.ttf'),
    });
    
    if(!fontLoad){
        return <AppLoading />
    }else{

    async function Update(){
        await api.put(`/establishment/${id}`,{
            cash:cash, 
            
            dvisa:dvisa ,
            delo:delo ,
            dsicredi:dsicredi ,
            dbanri:dbanri ,
            dmaster:dmaster ,
            
            cvisa:cvisa ,
            chipercard:chipercard ,
            camerican:camerican ,
            cmaster:cmaster ,
            cdiners:cdiners ,
            csicredi:csicredi ,
            celo:celo ,
            chiper:chiper ,
            ccabal:ccabal 

        })
        .then(response=>{
            alert('Dados atualizados!')
            navigation.navigate('Distribuition')
        })
        .catch(error=>{
            alert(error)
        })
    }

    return (
        <View style={{flex:1, alignItems:'center'}}>
            <ScrollView  showsVerticalScrollIndicator={false}>
                {data.map(d=>(
                    <View>
                        {contador<5 && [setContador(contador+1)] &&
                        [setCash(d.cash)] &&
                        
                        [setDvisa(d.dvisa)] &&
                        [setDsicredi(d.dsicredi)] &&
                        [setDelo(d.delo)] &&
                        [setDmaster(d.dmaster)] &&
                        [setDbanri(d.dbanri)] &&
                        
                        [setCvisa(d.cvisa)] &&
                        [setChipercard(d.chipercard)] &&
                        [setCamerican(d.camerican)] &&
                        [setCmaster(d.cmaster)] &&
                        [setCdiners(d.cdiners)] &&
                        [setCsicredi(d.csicredi)] &&
                        [setCelo(d.celo)] &&
                        [setChiper(d.chiper)] &&
                        [setCcabal(d.ccabal)] &&

                        [setId(d._id)]
                        }
                        <Text style={style.title}>Cores</Text>
                        <View style={[{justifyContent:'space-around', flexDirection:'row'}]}>
                            <View style={styles.line}>
                                <View style={[styles.box, {backgroundColor:'#753FC4'}]}/>
                                <Text style={style.title}>Ativado</Text>
                            </View>
                            <View style={styles.line}>
                                <View style={[styles.box, {backgroundColor:'#221a27'}]}/>
                                <Text style={style.title}>Desativado</Text>
                            </View>
                        </View>
                        <Text style={style.title}>Débito</Text>
                        <View style={styles.line}>
                            <View style={styles.vertical}>
                                <TouchableOpacity style={dvisa?styles.container:styles.unselected} onPress={()=>setDvisa(!dvisa)}>
                                    <Text style={style.text}>Visa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={dmaster?styles.container:styles.unselected} onPress={()=>setDmaster(!dmaster)}>
                                    <Text style={style.text}>MasterCard</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.vertical}>
                                <TouchableOpacity style={dsicredi?styles.container:styles.unselected} onPress={()=>setDsicredi(!dsicredi)}>
                                    <Text style={style.text}>Sicredi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={dbanri?styles.container:styles.unselected} onPress={()=>setDbanri(!dbanri)}>
                                    <Text style={style.text}>Banri Compras</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.vertical}>
                                <TouchableOpacity style={delo?styles.container:styles.unselected} onPress={()=>setDelo(!delo)}>
                                    <Text style={style.text}>Elo</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginVertical:15, borderBottomColor:'#aaa',borderBottomWidth:1}}/>
                        <Text style={style.title}>Crédito</Text>
                        <View style={styles.line}>
                            <View style={styles.vertical}>
                                <TouchableOpacity style={cvisa?styles.container:styles.unselected} onPress={()=>setCvisa(!cvisa)}>
                                    <Text style={style.text}>Visa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={cmaster?styles.container:styles.unselected} onPress={()=>setCmaster(!cmaster)}>
                                    <Text style={style.text}>MasterCard</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={celo?styles.container:styles.unselected} onPress={()=>setCelo(!celo)}>
                                    <Text style={style.text}>Elo</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.vertical}>
                                <TouchableOpacity style={chipercard?styles.container:styles.unselected} onPress={()=>setChipercard(!chipercard)}>
                                    <Text style={style.text}>HiperCard</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={cdiners?styles.container:styles.unselected} onPress={()=>setCdiners(!cdiners)}>
                                    <Text style={style.text}>Diners{'\n'}Club</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={chiper?styles.container:styles.unselected} onPress={()=>setChiper(!chiper)}>
                                    <Text style={style.text}>Hiper</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.vertical}>
                                <TouchableOpacity style={camerican?styles.container:styles.unselected} onPress={()=>setCamerican(!camerican)}>
                                    <Text style={style.text}>American{'\n'}Express</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={csicredi?styles.container:styles.unselected} onPress={()=>setCsicredi(!csicredi)}>
                                    <Text style={style.text}>Sicredi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={ccabal?styles.container:styles.unselected} onPress={()=>setCcabal(!ccabal)}>
                                    <Text style={style.text}>Cabal</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginVertical:15, borderBottomColor:'#aaa',borderBottomWidth:1}}/>
                        <Text style={style.title}>Outras formas de pagamento</Text>
                        <TouchableOpacity style={cash?styles.container:styles.unselected} onPress={()=>setCash(!cash)}>
                            <Text style={style.text}>Dinheiro</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styleGlobal.btn, {width:'90%', marginLeft:17}]} onPress={()=>Update()}>
                            <Text style={style.textBtn}>ATUALIZAR</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );}
}

//make this component available to the app
export default Main;

const style = StyleSheet.create({
    title:{
        fontSize: 13,
        margin: 10,
        fontFamily:'Lexend-Regular',
        textAlign:'center'
    },
    text:{
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        textAlign:'center',
        color: '#fff',
    },
    textBtn:{
        fontSize: 13,
        color: '#fff',
        fontFamily:'Lexend-Medium'
    },
})