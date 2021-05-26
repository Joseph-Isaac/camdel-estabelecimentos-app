import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        
        
    },
    card:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor: '#ccc',
        padding: 10,
        paddingRight: 20
    },
    icon:{
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginLeft: 10
    },
    text:{
        marginLeft:10,
        fontSize: 13,
        fontFamily:'Cocogoose-Light'
    },
});

export default styles;
