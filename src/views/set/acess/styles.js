import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#fff'
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text:{
        width: '90%',
        fontSize: 13,
        fontFamily:'Lexend-Regular',
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        width:330,
        backgroundColor: '#fff',
        fontSize: 13,
        borderRadius: 10,
        height:45,
        
        fontFamily:'Lexend-Regular',
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5  
    },
    btn:{
        width: 330,
        height: 45,
        backgroundColor: '#009eb2',
        position: 'absolute',
        bottom: 10,
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
        elevation: 5  
    },
    textBtn:{
        fontSize: 13,
        color: '#fff',
        fontFamily:'Lexend-Medium'
    },
    //Acesso
    modalSup:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#ff0072',
    },
    modal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    touchModal:{
        width: '90%',
        height: 45,
        position: "relative",
        bottom: 10,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#009eb2',
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5  
    },
    titleLarge:{
        fontSize:16,
        textAlign:'center',
        marginTop:20,
        marginBottom:20,
        fontFamily:'Lexend-Regular',
        color:'#fff'
    },
    txtButton:{
        fontSize:13,
        fontFamily:'Lexend-Regular',
        color:'#fff',
        textAlign:'center'
    },
    textModal:{
        fontSize: 13,
        color: '#fff',
        fontFamily:'Lexend-Regular',
    },
});

export default styles;
