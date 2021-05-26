import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#fffdf2'
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title:{
        width: '90%',
        fontSize: 16,
        marginTop:10,
        marginBottom:10,
        textAlign:'center',
        fontFamily:'Cocogoose-Light'
    },
    text:{
        width: '90%',
        fontSize: 13,
        fontFamily:'Cocogoose-Light',
        textAlign:'center'
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        width:330,
        backgroundColor: '#ddd',
        fontSize: 13,
        borderRadius: 10,
        height:45,
        fontFamily:'OpenSans-Regular',
        textAlign:'center',
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5  
    },
    box:{
        marginTop: 10,
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBos:{
        fontSize: 18,
    },
    viewLine:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '90%'
    },
    btn:{
        width: 330,
        height: 45,
        backgroundColor: '#E54304',
        marginTop: 10,
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
        elevation: 5  
    },
    textBtn:{
        fontSize: 18,
        color: '#fff'
    },
    reload:{
        width: '100%',
        alignItems: 'center'
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
    viewPicker:{
        height:45,
        width:330,
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    },
    picker:{
        height:45,
        width:330,
        color:'#fff'
    },
    textPicker:{
        color:'#fff',
        fontFamily:'Cocogoose-Light',
        fontSize:13,
        textAlign:'center'
    }
});

export default styles;
