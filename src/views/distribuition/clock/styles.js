import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        backgroundColor:'#fff'
    }, 
    container2: {
        flex: 1, 
        marginTop:10,
        marginBottom: 55,
        backgroundColor:'#fff'
    }, 
    container3: {
        alignItems:'center'
    },
    containerInput:{
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    view:{
        width: '100%',
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
    },
    viewHours:{
        marginTop:10,
        width:'95%',
    },
    txt:{
        fontSize:13,
        fontFamily:'Lexend-Regular',
    },
    text:{
        fontSize:13,
        marginLeft:10,
        fontFamily:'Lexend-Regular',
        width:'25%'
    },
    box:{
        borderRadius:2,
        width:20,
        height:20,
    },
    line:{
        flexDirection: 'row',
        alignItems:'center',
    },
    title:{
        fontSize:16,
        fontFamily:'Lexend-Regular',
        textAlign:'center'
    },
    pickerView:{
        flexDirection: 'row'
    },
    picker:{
        width: 105,
        height: 50
    },
    touch:{
        position: 'absolute',
        bottom: 10,
        backgroundColor: '#009eb2',
        width: '90%',
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5  
    },
    btnSelected:{
        flex:1,
        marginHorizontal:8,
        backgroundColor: '#ff0072',
        padding:20,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5  
    },
    btnUnselected:{
        backgroundColor: '#221a27',
        padding:20,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5  
    },
    textTouch:{
        color:'#fff',
        fontSize: 13,
        fontFamily:'Lexend-Medium'
    },
    textDay:{
        color:'#fff',
        fontSize: 13,
        fontFamily:'Lexend-Regular'
    },
    reload:{
        width: '100%',
        alignItems:'center',
        justifyContent:'center'
    },
    week:{
        justifyContent: 'space-around',
        marginTop:10
    },
    days:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop:10
    },
    day:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    dayWeek:{
        flexDirection: 'row',
        marginTop:10,
        marginLeft:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    dayUnselected:{
        fontSize: 16,
        opacity: 0.5
    },
    input:{
        marginHorizontal:5,
        padding:5,
        backgroundColor: '#eee',
        fontSize: 13,
        borderRadius: 5,
        fontFamily:'Lexend-Regular',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5  
    },
});

export default styles;
