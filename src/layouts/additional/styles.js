import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        width:'100%'
    },
    view:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    text:{
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        marginLeft:5, 
    },
    textOff:{
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        marginLeft:5, 
        color:'#ccc',
    },
    price:{
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        color:"#2bc44e"
    },
    priceOff:{
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        color:"#ccc"
    },
});

export default styles;
