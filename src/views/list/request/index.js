import React, { Component, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Linking, Alert, ScrollView, StyleSheet } from 'react-native';
import {AppLoading} from 'expo'
import {useFonts} from 'expo-font'

import styles from './styles'
import Item from '../../../layouts/item_detail'
import api from '../../../services/api';

function Main({route}){

    //Recebido de outras rotas
    

    //variáveis de uso do banco
    
    
    //variáveis de front
    const [load, setLoad] = useState(true)
    const [visible, setVisible] = useState(false)
    const [modal2, setModal2] = useState(false)
    const [aceito, setAceito] = useState()
    const [entrega, setEntrega] = useState()
    const [cancelado, setCancelado] = useState()
    const [finalizado, setFinalizado] = useState()

    const [textCancel, setTextCancel] = useState('nenhum')

    const textCancel1 = 'Já encerramos o expediente'
    const textCancel2 = 'Item indisponível'
    const textCancel3 = 'Cliente desistiu do seu pedido'
    const textCancel4 = 'Não fazemos entrega nessa rota'
    const textCancel5 = 'Pedido suspeito de trote'
    const textCancel6 = 'Cardápio desatualizado'
    const textCancel7 = 'Problemas internos na empresa'
    const textCancel8 = 'Demanda grande de pedidos'
    
    const n = "Novo pedido"
    const a = "Pedido Aceito"
    const e = "Saiu para entrega"
    const c = "Cancelado"
    const f = "Finalizado"

    const pb = 'Retirar no balcão'
    const pe = 'Para entrega'

    useEffect(()=>{
        getPurchase()
        //console.log('estab: '+loginEstablishment+'\nuser: '+loginUser+'\ndate: '+date)
    }, [load])

    async function getPurchase(){
        await api.get(`/purchase/specific/${id}`)
        .then(response=>{
            setPurchase(response.data)
            console.log('getPurchase: '+response.data)
            setLoad(!load)
        })
    }

    async function putStatePurchase(){
        await api.put(`/purchase/${id}`,{
            prepare: aceito,
            deliver: entrega,
            cancel: cancelado,
            finish: finalizado,
            reaseonCancelEstablishment: textCancel
        }).
        then(response=>{
            /*Alert.alert('Alterado','O pedido foi alterado!')
            console.log(response.data)*/
            console.log('putStatePurchase: '+JSON.stringify(response.data))
            setLoad(!load)
        })
        .catch(e=>{
            console.log('erro ao alterar pedido: '+e)
        })
    }

    function midVivisble(){
        if(finalizado || cancelado)
            Alert.alert(`Esse pedido já foi ${finalizado?'finalizado':'cancelado'}`,'Você não pode alterar pedidos que já foram finalizados ou cancelados.')
        else
            setVisible(true)
    }

    function midCancel(){

        if(textCancel==='nenhum')
            Alert.alert('Cancelamento', 'Escolha um motivo para o cancelamento do pedido.')
        else{
            setModal2(false)
            setVisible(false)
            putStatePurchase()
        }
    }

    let [fontLoad] = useFonts({
        'Lexend-Regular':require('../../../assets/fonts/Lexend/Lexend-Regular.ttf'),   
        'Lexend-Medium':require('../../../assets/fonts/Lexend/Lexend-Medium.ttf'),   
        
    });

    if(!fontLoad){
        return <AppLoading />
    }else{

    return (
        <View style={styles.viewMain}>
            <Modal
            animationType={'slide'}
            transparent={false}
            visible={visible}
            onRequestClose={()=>{
                setVisible(false)
            }}
            >
                <View style={styles.modalSup}>
                    <View style={styles.modal}>
                        <Text style={fontStyle.titleLarge}>Atualize o status do pedido e o cliente será notificado</Text>
                        <TouchableOpacity style={aceito?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>[setAceito(true), setCancelado(false), setEntrega(false), setFinalizado(false)]}>
                            <Text style={fontStyle.txtButton}>Aceitar Pedido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={cancelado?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>[setAceito(false), setCancelado(true), setEntrega(false), setFinalizado(false), setModal2(visible)]}>
                            <Text style={fontStyle.txtButton}>Cancelar Pedido</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={entrega?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>[setAceito(false), setCancelado(false), setEntrega(true), setFinalizado(false)]}>
                            <Text style={fontStyle.txtButton}>Saiu para entrega</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={finalizado?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>[setAceito(false), setCancelado(false), setEntrega(false), setFinalizado(true)]}>
                            <Text style={fontStyle.txtButton}>Finalizar pedido</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.touchModal} onPress={()=>[setVisible(false), putStatePurchase()]} >
                        <Text style={fontStyle.textModal}>Voltar ao pedido</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal
            animationType={'slide'}
            transparent={false}
            visible={modal2}
            onRequestClose={()=>{
                setModal2(false)
            }}
            >
                <View style={styles.modalSup}>
                    <View style={styles.modal}>
                        <Text style={fontStyle.titleLarge}>Fale o motivo do seu cancelamento</Text>
                        <TouchableOpacity style={textCancel==textCancel1?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>setTextCancel(textCancel1)}>
                            <Text style={fontStyle.txtButton}>{textCancel1}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={textCancel==textCancel2?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>setTextCancel(textCancel2)}>
                            <Text style={fontStyle.txtButton}>{textCancel2}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={textCancel==textCancel3?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>setTextCancel(textCancel3)}>
                            <Text style={fontStyle.txtButton}>{textCancel3}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={textCancel==textCancel4?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>setTextCancel(textCancel4)}>
                            <Text style={fontStyle.txtButton}>{textCancel4}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={textCancel==textCancel5?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>setTextCancel(textCancel5)}>
                            <Text style={fontStyle.txtButton}>{textCancel5}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={textCancel==textCancel6?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>setTextCancel(textCancel6)}>
                            <Text style={fontStyle.txtButton}>{textCancel6}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={textCancel==textCancel7?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>setTextCancel(textCancel7)}>
                            <Text style={fontStyle.txtButton}>{textCancel7}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={textCancel==textCancel8?styles.modalSelected:styles.modalContainer} 
                        onPress={()=>setTextCancel(textCancel8)}>
                            <Text style={fontStyle.txtButton}>{textCancel8}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.touchModal} onPress={()=>[midCancel()]} >
                        <Text style={fontStyle.textModal}>Confirmar e voltar ao pedido</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            {purchase &&
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={fontStyle.title}>Situação</Text>
                <View style={{width:'100%', alignItems:'center',}}>
                    <View style={[
                        styles.status, {
                            backgroundColor:
                                purchase.status==="Finalizado"?'#2bc44e':
                                purchase.status==="Cancelado"?'#ED4141':
                                purchase.status==="Saiu para entrega"?'#ffad36':
                                purchase.status==="Pronto para busca"?'#ffad36':
                                purchase.status==="Cozinhando"?'#24D1AE':
                                '#A73BDB'}]}>
                        <Text style={fontStyle.txtButton}>{purchase.status.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={styles.line}/>
                <Text style={fontStyle.title}>Produtos</Text>
                <View style={styles.card}>
                    {purchase.products.map(t => (
                        <View key={t._id}>
                            <Item data={t}/>
                        </View>
                    ))}
                    <View style={styles.row}>
                        <Text style={fontStyle.text}>Compra:</Text>
                        {purchase.cupomValue>0 ? 
                        <Text style={fontStyle.text}>
                            R$ {purchase.cupomValue<1?
                            (purchase.price-purchase.price*purchase.cupomValue).toFixed(2):
                            purchase.price-purchase.cupomValue<0?'0.00':
                            (purchase.price-purchase.cupomValue).toFixed(2)}
                        </Text>:
                        <Text style={fontStyle.text}>R$ {purchase.price.toFixed(2)}</Text>}
                    </View>
                    <View style={styles.row}>
                        <Text style={fontStyle.text}>Taxa:</Text>
                        <Text style={fontStyle.text}>
                            R$ {purchase.typeOfService==='Delivery'?purchase.rate.toFixed(2):0}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={fontStyle.priceTotal}>Total:</Text>
                        {purchase.cupomValue!=undefined && purchase.balcony &&
                        <Text style={fontStyle.priceTotal}>R$ {purchase.cupomValue<1?(purchase.price-purchase.price*purchase.cupomValue).toFixed(2):
                            purchase.price-purchase.cupomValue<0?'0.00':(purchase.price-purchase.cupomValue).toFixed(2)}</Text>
                        }
                        {purchase.cupomValue!=undefined && purchase.balcony==false &&
                        <Text style={fontStyle.priceTotal}>R$ {purchase.cupomValue<1?((purchase.price-purchase.price*purchase.cupomValue)+purchase.rate).toFixed(2):
                            purchase.price-purchase.cupomValue<0?purchase.rate.toFixed(2):(purchase.price-purchase.cupomValue+purchase.rate).toFixed(2)}</Text>
                        }
                        {purchase.cupomValue==undefined && 
                        <Text style={fontStyle.priceTotal}>R$ {purchase.balcony?purchase.price.toFixed(2):(purchase.price+purchase.rate).toFixed(2)}</Text>
                        }
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={fontStyle.title}>Venda e entrega</Text>
                    <View style={[styles.row]} key={purchase._id}>
                        <Text style={fontStyle.text}>Nome</Text>
                        <Text style={fontStyle.text}>{purchase.nameUser}</Text>
                    </View>
                    <View style={[styles.row, {marginTop:5}]}>
                        <Text style={fontStyle.text}>Endereço</Text>
                        <Text style={fontStyle.textAdress}>
                            {purchase.adressClient.street}, nº {purchase.adressClient.number}, {purchase.adressClient.neighborhood}, {purchase.adressClient.complement}
                        </Text>
                    </View>
                    <View style={[styles.row, {marginTop:5}]}>
                        <Text style={fontStyle.text}>Pagamento:</Text>
                        <Text style={fontStyle.text}>{purchase.card?'Cartão':'Dinheiro'}</Text>
                        {purchase.card==true &&
                        <Text style={fontStyle.text}>{purchase.cardChosen}</Text>
                        }
                    </View>
                    {purchase.change >0?
                    <View style={[styles.row, {marginTop:5}]}>
                        <Text style={fontStyle.text}>Troco:</Text>
                        <Text style={[fontStyle.text,{color:'#ED4141'}]}>
                            R$ {(purchase.change-(purchase.price+purchase.rate)).toFixed(2)}
                        </Text>
                    </View>
                    :
                    <View style={[styles.row, {marginTop:5}]}>
                        <Text style={fontStyle.text}>Troco:</Text>
                        <Text style={fontStyle.text}>Sem troco</Text>
                    </View>
                    }
                    <View style={styles.center}>
                        <Text style={[fontStyle.text, {marginTop:5, marginBottom:15}]}>Tipo de serviço</Text>
                        <View style={[styles.status, {backgroundColor:'#A73BDB'}]}>
                            <Text style={fontStyle.txtButton}>{purchase.typeOfService.toUpperCase()}</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.card, {paddingHorizontal:10}]}>
                    <TouchableOpacity style={styles.touch} onPress={()=>midVivisble()}>
                        <Text style={fontStyle.txtButton}>ATUALIZAR STATUS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={()=>Linking.openURL(`https://api.whatsapp.com/send?phone=55${purchase.phoneClient}`)}>
                        <Text style={fontStyle.txtButton}>CHAT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            }
        </View>
    );

    }
}

//make this component available to the app
export default Main;

const fontStyle = StyleSheet.create({
    title:{
        width:'100%',
        fontSize:16,
        textAlign:'center',
        fontFamily:'Lexend-Medium',
        marginVertical:10,
    },
    text:{
        color:'#000',
        fontSize: 13,
        fontFamily:'Lexend-Regular'
    },
    textAdress:{
        fontSize:13,
        color:'#000',
        textAlign:'right',
        width:'70%',
        fontFamily:'Lexend-Regular'
    },
    txtButton:{
        fontSize: 13,
        color: '#fff',
        fontFamily:'Lexend-Medium',
        textAlign:'center'
    },
    titleLarge:{
        fontSize:24,
        textAlign:'center',
        marginTop:20,
        marginBottom:20,
        fontFamily:'Lexend-Regular',
        color:'#fff'
    },
    textModal:{
        fontSize: 13,
        color: '#fff',
        fontFamily:'Lexend-Regular',
        textDecorationLine:'underline'
    },
    priceTotal:{
        color:'#2bc44e',
        fontSize: 13,
        fontFamily:'Lexend-Medium',
    },
})