import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{
            height:5,
            width:5
        },
        shadowOpacity:10,
        shadowRadius:10,
        width:90,
        height:40,
        backgroundColor:'#753FC4'
    },
    unselected: {
        margin:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:10,
        shadowColor:'#000',
        shadowOffset:{
            height:5,
            width:5
        },
        shadowOpacity:10,
        shadowRadius:10,
        width:90,
        height:40,
        backgroundColor:'#221a27'
    },
    line:{
        flexDirection: 'row',
        alignItems:'center',
    },
    box:{
        borderRadius:2,
        width:20,
        height:20,
    },
    vertical:{
        width: '33%',
    },
    btn:{
        width: '95%',
        height: 45,
        backgroundColor: '#ff0072',
        marginTop: 10,
        marginBottom: 10,
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
        elevation: 5  
    },
    styleBtn:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        bottom: 0
    },
    reload:{
        width: '100%',
        alignItems: 'center'
    }
});

export default styles;
