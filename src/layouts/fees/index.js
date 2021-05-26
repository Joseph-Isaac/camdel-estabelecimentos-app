import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

function MyFunction(){

    const [pago, setPago] = useState(true)
    const p = 'Pago'
    const a = 'A pagar'

    return (
        <View style={styles.container}>
            <View style={pago?styles.pago:styles.aPagar}>
                <Text style={styles.text}>Vencimento dia 20/06/2020</Text>
                <Text style={styles.money}>R$ 400,00</Text>
                <Text style={styles.status}>{pago?p:a}</Text>
            </View>
        </View>
    );

}

export default MyFunction;
