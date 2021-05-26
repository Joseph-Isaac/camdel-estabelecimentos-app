import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewMain:{
        flex: 1,
    },
    container: {
        paddingRight: 20,
        paddingLeft: 20,
        alignItems:'center'
    },
    row:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    center:{
        alignItems:'center',
        justifyContent:'center'
    },
    line:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        marginVertical:10
    },
    btn:{
        width:'100%',
        height:45,
        backgroundColor:'#2BC44E',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5
    },
    status:{
        minWidth:120,
        minHeight:25,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
        marginTop:-5,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    },
    touch:{
        width: '100%',
        height: 45,
        marginVertical:10,
        backgroundColor: '#753FC4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowRadius: 4,
        elevation: 5
    },
    modalSup:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#442178',
    },
    modal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        backgroundColor: '#221a27',
        margin: 10,
        borderRadius: 5,
    },
    modalSelected:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        backgroundColor: '#009eb2',
        margin: 10,
        borderRadius: 5,
    },
    touchModal:{
        width: '90%',
        height: 45,
        position: "relative",
        bottom: 10,
        alignItems: "center",
        justifyContent: 'center',
        
        borderRadius: 5
    },
    finish:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    card:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        paddingTop:5,
        paddingBottom:20,
    },
});

export default styles;
