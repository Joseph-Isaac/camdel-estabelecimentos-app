import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 10,
        height:90,
        
    },
    viewRight:{
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width:'50%',
        height:'100%',
        paddingVertical:10,
        paddingRight:20
    },
    viewLeft:{
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'50%',
        height:'100%',
        flexDirection:'row',
        paddingVertical:10
    },
    view:{
        marginLeft:20,
        height:'80%',
        justifyContent:'space-between',
    },
    status:{
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
    image:{
        height: 30,
        width: 30,
        resizeMode: 'contain'
    }
});

export default styles;
