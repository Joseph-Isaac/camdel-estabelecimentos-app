
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

function MyClass({clock}){

    const [value, setValue] = useState()

    return (
            <Picker style={styles.picker}
            selectedValue={value}
            onValueChange={(itemValue, itemIndex)=> setValue(itemValue)}>
                <Picker.Item label={clock} value={clock}/>
                <Picker.Item label='00:00' value='00:00'/>
                <Picker.Item label='01:00' value='01:00'/>
                <Picker.Item label='02:00' value='02:00'/>
                <Picker.Item label='03:00' value='03:00'/>
                <Picker.Item label='04:00' value='04:00'/>
                <Picker.Item label='05:00' value='05:00'/>
                <Picker.Item label='06:00' value='06:00'/>
                <Picker.Item label='07:00' value='07:00'/>
                <Picker.Item label='08:00' value='08:00'/>
                <Picker.Item label='09:00' value='09:00'/>
                <Picker.Item label='10:00' value='10:00'/>
                <Picker.Item label='11:00' value='11:00'/>
                <Picker.Item label='12:00' value='12:00'/>
                <Picker.Item label='13:00' value='13:00'/>
                <Picker.Item label='14:00' value='14:00'/>
                <Picker.Item label='15:00' value='15:00'/>
                <Picker.Item label='16:00' value='16:00'/>
                <Picker.Item label='17:00' value='17:00'/>
                <Picker.Item label='18:00' value='18:00'/>
                <Picker.Item label='19:00' value='19:00'/>
                <Picker.Item label='20:00' value='20:00'/>
                <Picker.Item label='21:00' value='21:00'/>
                <Picker.Item label='22:00' value='22:00'/>
                <Picker.Item label='23:00' value='23:00'/>
            </Picker>
    );
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker:{
        width: 105
    }
});

//make this component available to the app
export default MyClass;
