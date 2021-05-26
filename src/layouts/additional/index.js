import React, { useEffect, useState } from 'react';
import { View, Text, Image, Switch} from 'react-native';

import styles from './styles'
import finish from '../../assets/finish.png'
import cancel from '../../assets/cancel.png'
import clock from '../../assets/clock.png'
import api from '../../services/api';
import CheckBox from '@react-native-community/checkbox';

function Item({datas}){

    const [box, setBox] = useState(datas.check)

    useEffect(()=>{
        updateAvailable()
    },[box])

    async function updateAvailable(){
        await api.put(`/additional/${datas.id}`,{
            available: box
        })
        .then(res=>{
        })
    }

    return (
        <View style={styles.container}>    
            <View style={styles.view}>
                <CheckBox value={box} onValueChange={(newValue)=>setBox(newValue)}/>
                <Text style={box?styles.text:styles.textOff}>{datas.name}</Text>
            </View>
            <Text style={box?styles.price:styles.priceOff}>R$ {datas.price}</Text>
        </View>
    );
}


//make this component available to the app
export default Item;
