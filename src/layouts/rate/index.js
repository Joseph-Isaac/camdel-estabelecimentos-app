import React, { useState } from 'react';
import { View, Text, Image, CheckBox} from 'react-native';

import styles from './styles'
import finish from '../../assets/finish.png'
import cancel from '../../assets/cancel.png'
import clock from '../../assets/clock.png'

function Item({name, rate}){

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            {rate=='0.00'?
            <Text style={styles.textFree}>Grátis</Text>
            :<Text style={styles.textPrice}>R$ {rate}</Text>
            }
        </View>
    );
}


//make this component available to the app
export default Item;
