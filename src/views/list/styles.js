import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //Containers
    container: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    viewSwitch:{
        alignItems: 'center',
        width: '100%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    row:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
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
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    //Inputs
    //Texts
    text:{
        fontSize: 16,
        width: '90%'
    },
    textFilter:{
        fontSize: 16,
    },
    filterView:{
        width: '100%',
        height:45,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius: 5,
        
    },
});

export default styles;
