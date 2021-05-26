import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal:10
        
    },
    view:{
        flexDirection:'row',
        width:'100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    subView:{
        marginTop:5,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    qtdAndText:{
        marginTop:0, 
        paddingHorizontal:0, 
        justifyContent:'flex-start',
        width:'80%',
    },
    line:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        marginVertical:10
    },
});

export default styles;
