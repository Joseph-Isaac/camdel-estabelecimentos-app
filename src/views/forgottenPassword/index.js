import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

import Input from '../../components/Input';
import styles from './styles'; 

export default function ForgottenPassword() {
    return (
        <View style={styles.container} >
            <Text style={styles.text} >
                RECUPERE SUA CONTA!
            </Text>
            <Input title="Digite seu email de recuperaçao"/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                    ENVIAR
                </Text>
            </TouchableOpacity>
        </View>
  )
}
      
      
      






