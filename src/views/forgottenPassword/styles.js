import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
  
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#442178'
    },
    name: {
      marginTop: 10,
      padding: 10,
      width: '90%',
      backgroundColor: '#fff',
      fontSize: 16,
      borderRadius: 50,
      shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 5
      },
      shadowRadius: 4,
      elevation: 5,
      fontFamily: 'Lexend-Regular'
    },
    text: {
      fontSize: 25,
      marginBottom: 100,
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'Lexend-Regular'
    },
    textButton: {
      fontSize: 13,
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'Lexend-Regular'
    },
    button: {
      width: '90%',
      height: 45,
      backgroundColor: '#753FC4',
      marginTop: 10,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 5
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 5,
  
    },
    image:{
      height: 30,
      width: 30,
      resizeMode: 'contain',
      marginTop: 10,
    },
    password: {
      height: '100%'
    },
    inputPassword: {
      padding: 10,
      width: '80%',
      height: 50,
      backgroundColor: '#fff',
      fontSize: 13,
      borderTopLeftRadius: 50,
      borderBottomLeftRadius:50,
      fontFamily:'Lexend-Regular'
    },
    view:{
      flexDirection: 'row',
      alignItems:'center',
      width: '90%',
      height:50,
      marginTop:10,
      backgroundColor:'#fff',
      borderRadius: 50,
      shadowColor: '#000',
      shadowOffset:{
          width: 5,
          height: 5
      },
      shadowRadius: 4,
      elevation: 5
    },
    touchImage:{
      position: 'absolute',
      right: 10,
      bottom:10,
    },
  })

export default styles