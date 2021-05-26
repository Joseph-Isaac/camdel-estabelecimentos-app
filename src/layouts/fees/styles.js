import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center'
    },
    pago:{
        width:'90%',
        height: 150,
        backgroundColor: '#2CA02C',
        borderRadius: 5,
        marginTop:10,
    },
    aPagar:{
        width:'90%',
        height: 150,
        backgroundColor: '#D40000',
        borderRadius: 5,
        marginTop:10,
    },
    text:{
        marginLeft: 10,
        marginTop: 10,
        fontSize: 18,
        color: '#fff'
    },
    money:{
        marginLeft: 10,
        fontSize: 18,
        color: '#fff'
    },
    status:{
        fontSize: 18,
        color: '#fff',
        position: 'absolute',
        bottom: 10,
        right: 10
    }

});

export default styles;
