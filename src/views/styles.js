import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //Containers
    //Maiores
    container: {
        flex: 1,    
        alignItems:'center',
        backgroundColor:'#fff',
    },
    scroll:{
        width:'100%',
        backgroundColor:'#fff',
    },
    view:{
        marginTop: 10,
        alignItems: 'center',
        
        width:'100%',
    },
    line:{
        borderBottomWidth:1,
        borderColor:"#ddd",
        marginVertical:20,
        width:'100%'},
    //Médias
    list:{
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical:10,
    },
    btnConfirm:{
        width:'100%',
        height:45,
        backgroundColor:'#2BC44E',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        shadowColor: '#080014',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5
    },
    btn:{
        width: '100%',
        height: 45,
        marginVertical:10,
        backgroundColor: '#753FC4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: '#080014',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowRadius: 4,
        elevation: 5
    },
    btnFlutter:{
        width: '90%',
        height: 45,
        marginVertical:10,
        backgroundColor: '#753FC4',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: '#080014',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowRadius: 4,
        elevation: 5
    },
    //Menores
    viewSwitch:{
        alignItems: 'center',
        width: '90%',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    miniTouch:{
        alignItems:'center',
        justifyContent:'center',
        minWidth:90,
        height:25,
        paddingHorizontal:10,
        borderRadius:50,
        backgroundColor:'#A73BDB',
        shadowColor: '#080014',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowRadius: 4,
        elevation: 5
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    //Específicas
    row:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    //Inputs 
    input:{
        marginBottom:10,
        width: '90%',
        height:45,
        paddingHorizontal: 10,
        backgroundColor: '#eee',
        fontSize: 13,
        borderRadius: 50,
        fontFamily:'Lexend-Regular',
        shadowColor: '#080014',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowRadius: 4,
        elevation: 5
    },
    //Textos
    text:{
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        width:'90%',
        marginBottom:5,
    },
    textBtn:{
        fontSize: 13,
        fontFamily:'Lexend-Medium',
        color:'#fff'
    },
});

export default styles;
