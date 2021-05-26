import React, { useState } from 'react';
import { View, Text, Image, CheckBox, StyleSheet} from 'react-native';
import {AppLoading} from 'expo'
import {useFonts} from 'expo-font'

import styles from './styles'
import finish from '../../assets/finish.png'
import cancel from '../../assets/cancel.png'
import clock from '../../assets/clock.png'
import seta_direita from '../../assets/new_design/seta_direita.png'

function Item({name}){

    const [check, setCheck] = useState(false)
    const o = 'ofertado'
    const n = 'não ofertado'

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
                <Text style={stylesFont.text}>{name}</Text>
                <Image source={seta_direita} style={styles.icon}/>
            </View>
        </View>
    );
    }
}

export default Item;

const stylesFont = StyleSheet.create({
    text:{
        fontSize: 13,
        width: '90%',
        fontFamily:'Lexend-Regular'
    },
    textFilter:{
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        color:'#fff'
    },
})