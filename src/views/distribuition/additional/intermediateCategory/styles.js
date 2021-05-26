import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,        
    },
    title:{
        fontSize: 18,
        fontWeight:'bold',
        width: '100%',
        textAlign: 'center'
    },
    scrollView:{
        width: '100%',
        justifyContent: 'center',
    },
    itemContainer:{
        width: '97%',
        borderWidth:0.5,
        borderColor:'#ccc',
        paddingLeft:10,
        margin: 2,
        borderRadius:5,
        minHeight: 40,
        justifyContent:'center'
    },
    text:{
        fontSize: 16
    }
})

export default styles