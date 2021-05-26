import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        minHeight:30,
        paddingLeft: 10,
        paddingRight: 10,
        
    },
    viewLeft:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    icon:{
        width:25,
        height:25,
        resizeMode: 'contain',
    },
    text:{
        color:'#000',
        fontSize: 20
    },
    details:{
        color:'#EE6002',
        fontSize: 14,
        textAlign: 'justify'
    },
    image:{
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    imageTemp:{
        height: 90,
        width: 90,
        resizeMode: 'contain',
        backgroundColor:'#FFAF49'
    },
});

export default styles;
