import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles'
import register from '../../assets/icon_register.png'
import chart from '../../assets/icon_chart.png'
import cash from '../../assets/icon_cash.png'
import seta_direita from '../../assets/new_design/seta_direita.png'



function Main({navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity style ={styles.card} onPress={()=> navigation.navigate('Flow')}>
                <Text style={styles.text}>Vendas e Finanças</Text>
                <Image source={seta_direita} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.card} onPress={()=> navigation.navigate('Fees')}>
                <Text style={styles.text}>Faturamento</Text>
                <Image source={seta_direita} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    );
}

//make this component available to the app
export default Main;


/*
    <TouchableOpacity style ={styles.card} onPress={()=> navigation.navigate('Chart')}>
        <Image source={chart} style={styles.icon}/>
        <Text style={styles.text}>Gráficos</Text>
    </TouchableOpacity>
*/