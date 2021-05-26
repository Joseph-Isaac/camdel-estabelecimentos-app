import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    text:{
        color:'#000',
        fontSize: 13,
        fontFamily:'Cocogoose-Light'
    },
    textPrice:{
        color:'#aaa',
        fontSize: 13,
        fontFamily:'OpenSans-Bold'
    },
    textFree:{
        color:'#007700',
        fontSize: 13,
        fontFamily:'OpenSans-Bold'
    },
});

export default styles;
