import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import styles from './styles'
import {useFonts} from 'expo-font'

import trolley_new from '../../assets/icon/trolley_new.png'
import trolley_cooking from '../../assets/icon/trolley_cooking.png'
import trolley_deliver from '../../assets/icon/trolley_deliver.png'
import trolley_cancel from '../../assets/icon/trolley_cancel.png'
import trolley_finish from '../../assets/icon/trolley_finish.png'

export default function request({item}) {

    let [loadFont, errorFont] = useFonts({
        'Lexend-Regular': require('../../assets/fonts/Lexend/Lexend-Regular.ttf'),
        'Lexend-Medium': require('../../assets/fonts/Lexend/Lexend-Medium.ttf')
    });

    const date = item.date.substring(8,10)+'/'+item.date.substring(5,7)+'/'+item.date.substring(0,4)
    const hour = item.date.substring(11,16)

    return (
        <View style={styles.containerRow}>
            <Image source={trolley_cooking} style={styles.iconList}/>
            <View>
                <Text style={[styles.title, font.medium]}>{item.name}</Text>
                <Text style={[styles.text, font.regular]}>{date}</Text>
                <Text style={[styles.text, font.regular]}>às {hour}</Text>
            </View>
            <View style={styles.center}>
                <Text style={[styles.textPrice, font.medium]}>R$ {item.value.toFixed(2)}</Text>
                <View style={[styles.miniTouch, font.regular]}>
                    <Text style={[styles.textBtn, font.regular]}>{item.status.toUpperCase()}</Text>
                </View>
            </View>
        </View>
    )
}

const font = StyleSheet.create({
    regular:{
        fontFamily:'Lexend-Regular'
    },
    medium:{
        fontFamily:'Lexend-Medium'
    }
})