import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    scroll:{
        marginBottom: 0
    },
    input:{
        marginBottom:10,
        width: '90%',
        padding: 10,
        backgroundColor: '#ddd',
        fontSize: 16,
        borderRadius: 10,
    },
    view:{
        borderWidth:1,
        borderColor: '#000',
        paddingTop: 10,
        paddingBottom: 10,
    },
    viewBtn:{
        alignItems: "center"
    },
    modal:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 13,
        fontFamily:'Lexend-Regular',
        textAlign:'center',
    },
    text:{
        fontSize:13,
        fontFamily:'Lexend-Regular',
        textAlign:'center',
        marginVertical:10
    },
    input:{
        paddingHorizontal:5,
        width: '90%',
        height:45,
        backgroundColor: '#eee',
        fontSize: 13,
        borderRadius: 10,
        fontFamily:'Lexend-Regular',
    },
    picker:{
        height: 50,
        width: '90%'
    },
    viewModal:{
        flexDirection: 'row',
        marginTop: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-end',
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
        marginLeft:20,
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
        fontSize: 13,
        color: '#fff',
        fontFamily:'Lexend-Medium'
    },
    viewSwitch:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '90%',
        marginBottom:10,
        marginRight:10    
    },

});

export default styles;
