import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view:{
        flexDirection: 'row',
        alignItems:'center',
        width: '90%',
        height:50,
        marginTop:10,
        backgroundColor:'#fff',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowRadius: 4,
        elevation: 5
    },
    background:{
        width:'100%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor:'#442178',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchImage:{
        position: 'absolute',
        right: 10,
        bottom:10,
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: '90%',
        backgroundColor: '#fff',
        fontSize: 16,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowRadius: 4,
        elevation: 5
    },
    inputPassword: {
        padding: 10,
        width: '80%',
        height: 50,
        backgroundColor: '#fffdf2',
        fontSize: 14,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
    },
    btn:{
        width: '90%',
        height: 45,
        backgroundColor: '#2bc44e',
        marginTop: 10,
        borderRadius: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5  
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    logo:{
        width: 300,
        height: 90,
        marginBottom: 30,
        resizeMode: 'contain',
    },
    image:{
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginTop: 10,
    },
});

export default styles;
