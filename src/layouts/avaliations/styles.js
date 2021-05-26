import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    view:{
        borderBottomWidth:1,
        borderColor:'#000',
        width:'100%',
        padding:10,
        marginTop:10,
    },
    coment:{
        marginTop:5,
        borderColor:'#ccc',
        width:'100%',
    },
    touch:{
        width:100,
        height:25,
        backgroundColor:'#FFAD36',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        marginTop:3,
    },
    textTouch:{
        color:'#fff'
    },
    rating:{
        fontSize:16,
        color:'#FFAD36',
        marginRight:5,
    },
    user:{
        fontSize:16,
        fontWeight:'bold',
        marginLeft:5
    },
    userAndRating:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    row:{
        flexDirection:'row'
    },
    text:{
        fontSize:13,
    },
    textComent:{
        fontSize:13
    },
    input:{
        width:'100%',
        height:35,
        backgroundColor:'#fff',
        paddingHorizontal:5,
        marginVertical:5,
        borderRadius:5
    }
})

export default styles