import React, { useState } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { Entypo, MaterialCommunityIcons  } from '@expo/vector-icons';

import styles from './styles'
//import finish from '../../assets/finish.png'
import clock from '../../assets/clock.png'
import {AppLoading} from 'expo'
import {useFonts} from 'expo-font'

import preparing from '../../assets/icon/trolley_new.png'
import delivered from '../../assets/icon/trolley_deliver.png'
import finish from '../../assets/icon/trolley_finish.png'
import received from '../../assets/icon/trolley_cooking.png'
import cancel from '../../assets/icon/trolley_cancel.png'

function Item({data}){

    //console.log(data)
    
    let [fontLoad] = useFonts({
        'Lexend-Regular':require('../../assets/fonts/Lexend/Lexend-Regular.ttf'),
        'Lexend-Medium':require('../../assets/fonts/Lexend/Lexend-Medium.ttf'),
    });

    if(!fontLoad){
        return <AppLoading />
    }else{

    return (
        <View style={styles.container}>
            <View style={styles.viewLeft}>
                <Image 
                    source ={
                        data.status==="Cancelado"?cancel:
                        data.status==="Finalizado"?finish:
                        data.status==="Em preparo"?preparing:
                        data.status==="Saiu para entrega"?delivered:
                        data.status==="Pronto para retirada"?delivered:
                        received
                    }
                    style={styles.image}
                />
                <View style={styles.view}>
                    <Text style={stylesFont.text}>
                        {data.nameUser}
                    </Text>
                    <Text 
                        style={
                            data.status==='Cancelado'?stylesFont.detailsC:
                            data.status==="Finalizado"?stylesFont.detailsF:
                            data.status==='Saiu para entrega'?stylesFont.detailsRosa:
                            data.status==='Na cozinha'?stylesFont.detailsRosa:
                            stylesFont.situation}>
                    </Text>
                    <Text style={stylesFont.textDate}>
                        às {parseInt(data.datePurchase.substring(11,13))-3+':'+data.datePurchase.substring(14,16)} de {data.datePurchase.substring(8,10)+'/'+data.datePurchase.substring(5,7)+'/'+data.datePurchase.substring(0,4)}
                    </Text>
                </View>
                
            </View>
            <View style={styles.viewRight}>
                <View style={[styles.view, {marginTop:6}]}>
                    {data.cupomValue!=undefined && data.balcony &&
                    <Text style={stylesFont.textCash}>R$ {data.cupomValue<1?(data.price-data.price*data.cupomValue).toFixed(2):
                        data.price-data.cupomValue<0?'0.00':(data.price-data.cupomValue).toFixed(2)}</Text>
                    }
                    {data.cupomValue!=undefined && data.balcony==false &&
                    <Text style={stylesFont.textCash}>R$ {data.cupomValue<1?((data.price-data.price*data.cupomValue)+data.rate).toFixed(2):
                        data.price-data.cupomValue<0?data.rate.toFixed(2):(data.price-data.cupomValue+data.rate).toFixed(2)}</Text>
                    }
                    {data.cupomValue==undefined && 
                    <Text style={stylesFont.textCash}>R$ {data.balcony?data.price.toFixed(2):(data.price+data.rate).toFixed(2)}</Text>
                    }
                    <View style={styles.status}>
                        <Text style={stylesFont.txtBtn}>{data.status.toUpperCase()}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    }
}
//make this component available to the app
export default Item;

const stylesFont = StyleSheet.create({
    text:{
        color:'#000',
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        textAlign:'center'
    },
    textDate:{
        color:'#777',
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        textAlign:'center'
    },
    textCash:{
        color:'#2CA02C',
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        textAlign:'center'
    },
    situation:{
        color:'#24D1AE',
        fontSize: 13,
        textAlign:'center',
        fontFamily:'Lexend-Regular'
    },
    detailsC:{
        color:'#ff6600',
        fontSize: 13,
        textAlign:'left',
        fontFamily:'Lexend-Regular'
    },
    detailsF:{
        color:'#009eb2',
        fontSize: 13,
        textAlign:'left',
        fontFamily:'Lexend-Regular'
    },
    detailsRosa:{
        color:'#ff0072',
        fontSize: 13,
        textAlign:'left',
        fontFamily:'Lexend-Regular'
    },
    txtBtn:{
        color:'#fff',
        fontFamily:'Lexend-Medium',
        fontSize:13
    }
})
