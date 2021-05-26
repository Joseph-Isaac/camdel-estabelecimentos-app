import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#442178',
        
    },
    logo:{
        width: 200,
        height: 70,
        resizeMode: 'contain',
        marginTop:30
    },
    title:{
        fontSize: 22,
        color: '#fff',
        fontWeight:'bold',
        width:'80%',
        marginLeft:5,
        textAlign:'center'
    },
    name:{
        fontSize: 16,
        color: '#fff',
        width:285,
        marginLeft:5,
        textAlign:'center',

    },
    text:{
        fontSize: 13,
        color: '#fff',
        width:200,
        height: 50,
        textAlign:'center',
        textAlignVertical:'center',
    },
    boxLogo:{
        alignItems: 'center',
        justifyContent:'center',
    },
    email:{

    },
    box:{
        width:'100%',
        height: 50,
        paddingLeft:20,
        alignItems:'flex-start',
    },
    icon:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginLeft: 10,
        
    }

});

export default styles;
