
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import visible from '../../assets/visible.png'
import invisible from '../../assets/invisible.png'
import Input from '../../components/Input/Input'
import styles from './styles'; 

export default function Register() {
  const [isVisible, setVisible] = useState(false)

  function Visivel() {
    if (isVisible)
      setVisible(false)
    else
      setVisible(true)
  }


  return (
    <View style={styles.container} >
      <Text style={styles.text}>
        Cadastre seus dados pessoais
        </Text>
      
      <Input title="Nome"/>
      <Input title="Contato"/>
      <Input title="E-mail"/>
      

      <View style={styles.view}>
        <TouchableOpacity 
          style={styles.touchImage} 
          onPress={() => Visivel()} 
        >
          <Image source={isVisible ? invisible : visible} style={styles.image} />
        </TouchableOpacity>
        <TextInput 
          style={styles.inputPassword} 
          placeholder='Senha' 
          //onChangeText={(text) => setPassword(text)} 
          secureTextEntry={isVisible ? false : true} 
        />
      </View>
         
      <TextInput
        placeholder='Repetir senha'
        style={styles.name}
        onPress={() => Visivel()}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>
          CADASTRAR ENDEREÇO
          </Text>
      </TouchableOpacity>
    </View>
  )
}









