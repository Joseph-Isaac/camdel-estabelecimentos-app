import { StyleSheet} from 'react-native'
import {useFonts} from 'expo-font'
import { useEffect } from 'react';

export const styles = StyleSheet.create({
    //Views e containers
    containerRow:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:'#ccc',
        borderBottomColor:'#ccc',
        paddingVertical:10
    },
    row:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    center:{
        justifyContent:'space-between',
        alignItems:'center'
    },
    iconList:{
        width:60,
        height:60,
    },
    //Inputs e buttons
    miniTouch:{
        alignItems:'center',
        justifyContent:'center',
        minWidth:90,
        height:25,
        paddingHorizontal:10,
        borderRadius:50,
        backgroundColor:'#A73BDB',
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowRadius: 4,
        elevation: 5
    },
    
    //Tipografias
    text:{
        fontSize:13,
        color:'#000',
        fontFamily:'Lexend-Regular'
    },
    title:{
        fontSize:16,
        color:'#000',
        fontFamily:'Lexend-Medium'
    },
    textBtn:{
        fontSize:13,
        color:'#fff',
        fontFamily:'Lexend-Regular'
    },
    textPrice:{
        fontSize:13,
        color:'#2BC44E',
        fontFamily:'Lexend-Medium'
    }
})

export default styles;