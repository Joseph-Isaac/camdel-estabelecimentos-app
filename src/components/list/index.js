import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// import { Container } from './styles';

export default function List(){
    return(
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('AllRequest',{loginEstablishment:loginEstablishment})}>
                    <View>
                        <FontAwesome name="shopping-cart" size={40} color="#442178" style={styles.icon}/>
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