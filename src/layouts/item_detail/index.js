import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import {AppLoading} from 'expo'
import {useFonts} from 'expo-font'

import styles from './styles'
import finish from '../../assets/finish.png'
import cancel from '../../assets/cancel.png'
import clock from '../../assets/clock.png'

function Item({data}){

    let [fontLoad] = useFonts({
        'Lexend-Regular':require('../../assets/fonts/Lexend/Lexend-Regular.ttf'),   
        'Lexend-Medium':require('../../assets/fonts/Lexend/Lexend-Medium.ttf'),   
    });

    if(!fontLoad){
        return <AppLoading />
    }else{

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styleFont.title}>{data.name}</Text>
                <Text style={styleFont.price}>R$ {data.price.toFixed(2)}</Text>
            </View>
            <Text style={styleFont.text}>x{data.number} {data.number>1?'itens':'item'}</Text>
            <View>
                {data.observation !=null ?
                    <View style={[styles.subView, {paddingHorizontal:0}]}>
                        <Text style={styleFont.text}>Observação:</Text>
                        <Text style={styleFont.text}>{data.observation}</Text>
                    </View>
                :<View style={styles.subView}/>}
                {data.additional.length>0?<Text style={styleFont.title}>Adicionais/Combos</Text>:<View style={styles.subView}/>}
                {data.additional.map(a=>(
                    <View style={styles.subView}>
                        <View style={[styles.subView, styles.qtdAndText]}>
                            <Text style={styleFont.text}>{a.qtd}</Text>
                            <Text style={[styleFont.text, {marginLeft:5}]}>{a.name}</Text>
                        </View>
                        <Text style={styleFont.price}>R$ {a.price.toFixed(2)}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.line}/>
        </View>
    );
    }
}


//make this component available to the app
export default Item;

const styleFont = StyleSheet.create({
    text:{
        color:'#000',
        fontSize: 13,
        fontFamily:'Lexend-Regular'
    },
    title:{
        color:'#000',
        fontSize: 13,
        fontFamily:'Lexend-Medium'
    },
    price:{
        color:'#2bc44e',
        fontSize: 13,
        fontFamily:'Lexend-Medium'
    },
})
