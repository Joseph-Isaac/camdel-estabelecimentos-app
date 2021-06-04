import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

export default function Input(props) {
    return(
        <TextInput
        placeholder={props.title}
        style={styles.name}
        />
    )
}

const styles = StyleSheet.create({
    name: {
        marginTop: 10,
        padding: 10,
        width: '90%',
        backgroundColor: '#fff',
        fontSize: 16,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 5
        },
        shadowRadius: 4,
        elevation: 5,
        fontFamily: 'Lexend-Regular'
      },
})