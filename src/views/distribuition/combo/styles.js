import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },
    containerItem:{
        width:'95%',
        marginTop:10,
        padding:5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#fff',
        borderRadius:10
    },
    containerTitle:{
        marginBottom:10,
        padding:5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#fff',
        borderRadius:10
    },
    itemTitle:{
        width: '97%',
        borderWidth:0.5,
        borderColor:'#ccc',
        paddingLeft:10,
        margin: 2,
        borderRadius:5
    },
    title:{
        fontSize: 18,
    },
    item:{
        fontSize: 16,
    },
    btn:{
        width: '90%',
        height: 45,
        backgroundColor: '#E54304',
        marginBottom: 10,
        borderRadius: 7, 
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
        position: 'absolute',
        bottom:10
    },
    textBtn:{
        fontSize: 18,
        color: '#fff'
    },
});

export default styles;
