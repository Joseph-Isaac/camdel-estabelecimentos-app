import React, { useState, useEffect } from 'react';
import { View, Text, Image, CheckBox, StyleSheet, Switch} from 'react-native';

import styles from './styles'
import finish from '../../assets/finish.png'
import cancel from '../../assets/cancel.png'
import clock from '../../assets/clock.png'
import api from '../../services/api';

function Item({id, image, name, details, price, available}){

    const [chosen, setchosen] = useState(available)

    useEffect(() => {
        UpdateAvailable()
        console.log('imagem: '+image)
    }, [chosen])

    async function UpdateAvailable(){
        await api.put(`/products/${id}`,{
            available: chosen
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewLeft}>
                {!image[0]?
                <View></View>
                :
                <Image source={image} style={styles.imageTemp}/>
                }
                <View style={styles.viewText}>
                    <Text style={chosen?stylesFont.text:stylesFont.ntext}>{name}</Text>
                    <Text style={chosen?stylesFont.price:stylesFont.nPrice}>R$ {price}</Text>
                </View>
            </View>
            <View style={styles.viewRight}>
                <Switch onValueChange={()=>setchosen(!chosen)} value={chosen} thumbColor={chosen? '#753FC4':'#ccc' } />
            </View>
        </View>
    );
}

export default Item;

const stylesFont = StyleSheet.create({
    text:{
        fontSize: 13,
        fontFamily:'Lexend-Medium'
    },
    price:{
        fontSize: 13,
        fontFamily:'Lexend-Medium',
        color:'#2BC44E'
    },
    details:{
        fontFamily:'Lexend-Regular',
        fontSize: 13,
    },
    textBtn:{
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        color:'#fff',
    },
    nPrice:{
        fontSize: 13,
        fontFamily:'Lexend-Medium',
        color:'#777'
    },
    ntext:{
        fontSize: 13,
        fontFamily:'Lexend-Medium',
        color:'#777'
    },
    ndetails:{
        fontFamily:'Lexend-Regular',
        fontSize: 13,
        color:'#777'
    },
    ntextBtn:{
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        color:'#777'
    },
})
