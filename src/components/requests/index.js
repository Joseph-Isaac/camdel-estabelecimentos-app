import React, { useState } from 'react';
import { View, TouchableOpacity, Text , StyleSheet} from 'react-native';

// import { Container } from './styles';

export default function Requests({navigation}){
    const [price, setPrice] = useState(19);
    
    return(
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('AllRequest')}>
                    <View>
                        
                        <Text style={styles.text1}>Pedido</Text>
                    </View>

                    <View style={styles.description}>
                        <Text style={styles.text}>Nome do estabelecimento</Text>
                        <Text style={styles.text1}>Seu pedido esta em espera</Text>
                        <Text style={styles.text1}>Clique para ver os detalhes</Text>
                    </View>
                    <View>
                        <Text style={styles.text2}>
                            R$ {price}
                        </Text>
                    
                    </View>
                   
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //alignItems: 'center',
        height: '100%'
    },
    description: {
        marginLeft: 45
    },
    text: {
        fontSize: 16,
        fontFamily: 'Lexend-Medium'
    },
    text1: {
        fontSize: 13,
        fontFamily: 'Lexend-Regular',

    },    
    text2: {
        fontSize: 13,
        fontFamily: 'Lexend-Regular',
        marginTop: 40,
        marginLeft: 35
    }, 
        
    button: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        height: 90,
        //height: '100%',
        flexDirection: 'row',
        padding: 15
    }
        
    
 
})