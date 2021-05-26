import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewSup:{
        flex: 1,
        justifyContent:'center',
        backgroundColor:"#fff"
    },
    container: {
        flex: 1,    
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:"#fff"
    },
    viewImg:{
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        marginTop:10
    },
    viewImage:{
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnImg:{
        width: 100,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5  
    },
    textImg:{
        fontSize: 13,
        color: '#000',
        fontFamily:'Cocogoose-Light'
    },
    title:{
        fontSize: 13,
        fontFamily:'Cocogoose-Light',
        marginBottom:10,
    },
    text:{
        fontSize: 13,
        
        marginBottom:5,
        fontFamily:'Cocogoose-Light',
        textAlign:'center'
    },
    textSmall:{
        fontSize: 13,
        fontFamily:'Cocogoose-Light',
        color:'#fff'
    },
    textAdditional:{
        fontSize: 13,
        fontFamily:'Cocogoose-Light',
        textAlign:'center'
    },
    textImage:{
        fontSize: 13,
        textAlign: 'center',
        fontFamily:'Cocogoose-Light'
    },
    view:{
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        marginBottom:10,
        width: '90%',
        padding: 10,
        backgroundColor: '#eee',
        fontSize: 13,
        borderRadius: 10,
        fontFamily:'OpenSans-Regular'
    },
    picker:{
        width: 300,
    },
    viewBtn:{
        width:'100%',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor:"#fff"
    },
    btn:{
        position: 'absolute',
        bottom: 10,
        width:'90%',
        marginLeft:20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009eb2',
        borderRadius: 5,
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
        fontFamily:'Cocogoose'
    },
    viewSwitch:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom:10,
        paddingLeft: 20,
        paddingRight:30
        
    },
    camera:{
        flex: 1
    },
    viewAdd:{
        width:'100%',
        paddingLeft:20,
        paddingRight:17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10
    },
    add:{
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    viewAddItem:{
        width:'90%',
        height:45,
        paddingLeft:20,
        paddingRight:20,
        margin:2,
        justifyContent: 'center',
        backgroundColor:'#fff'
    },
    btnReload:{
        width:'70%', 
        height:15,
        marginBottom:5, 
        marginTop:-5,
        backgroundColor: '#EE6002',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5  
    }
});

export default styles;
