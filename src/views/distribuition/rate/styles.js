import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginBottom: 55,
    },
    viewSwitch:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '100%',
        paddingLeft:10,
        borderBottomWidth:1,
        borderBottomColor:'#aaa',
        paddingVertical:10,
        
    },
    textSwitch:{
        fontSize: 13,
        fontFamily:'Lexend-Regular'
    },
    viewSwitchContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },  
    view:{
        borderBottomWidth:1,
        borderColor: '#aaa',
        paddingTop: 10,
        paddingBottom: 10,
    },
    modal:{
        flex:1,
        marginTop:10,
        alignItems: 'center',
        backgroundColor:'#fffdf2'
    },
    title:{
        fontSize: 16,
        marginVertical:10,
        fontFamily:'Lexend-Regular'
    },
    text:{
        fontFamily:'Lexend-Regular',
        fontSize: 13,

    },
    input:{
        marginVertical:10,
        padding:10,
        width: '90%',
        backgroundColor: '#eee',
        fontSize: 13,
        fontFamily:'Lexend-Regular',
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
    viewModal:{
        position:'absolute',
        bottom:10,
        width: '100%',
    },
    textConfirm:{
        color: '#2CA02C',
        fontWeight:'bold',
        fontSize:16
    },
    textCancel:{
        color: '#800000',
        fontWeight:'bold',
        fontSize:16
    },
    reload:{
        
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    btn:{
        width: '90%',
        height: 45,
        backgroundColor: '#ff0072',
        position: 'absolute',
        bottom: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnConfirm:{
        width: '90%',
        height: 45,
        backgroundColor: '#009eb2',
        position: 'absolute',
        bottom: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnCancel:{
        width: '90%',
        height: 45,
        backgroundColor: '#221a27',
        position: 'absolute',
        bottom: 65,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textBtn:{
        fontSize: 13,
        color: '#fff',
        fontFamily:'Lexend-Medium'
    },

});

export default styles;
