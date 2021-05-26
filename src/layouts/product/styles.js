import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingHorizontal:10,
        margin:0,
        maxHeight:80,
        width:'100%',
    },
    viewLeft:{
        flexDirection:'row',
        width:'70%',
    },
    viewText:{
        marginLeft:10,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    viewRight:{
        justifyContent: 'center',
        alignItems: 'flex-end',
        width:'30%'
    },
    image:{
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    imageTemp:{
        height: 70,
        width: 70,
        resizeMode: 'contain',
    },
});

export default styles;
