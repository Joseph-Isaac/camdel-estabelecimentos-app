import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    scroll:{
        marginBottom: 0
    },
    input:{
        marginBottom:10,
        width: '90%',
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        borderRadius: 3,
    },
    view:{
        borderWidth:1,
        borderColor: '#000',
        paddingTop: 10,
        paddingBottom: 10,
    },
    newViewItem:{
        width:'90%',
        flexDirection:'row'
    },
    newViewItemLeft:{
        width:'70%',
    },
    newViewItemRight:{
        width:'30%',
    },
    inputItem:{
        marginBottom:10,
        paddingTop: 7,
        paddingLeft: 7,
        paddingRight: 7,
        width: '97%',
        backgroundColor: '#fff',
        fontSize: 16,
        borderRadius: 5,
    },
    viewBtn:{
        alignItems: "center"
    },
    modal:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
    },
    text:{
        marginLeft:10,
        marginRight:10,
        fontSize: 18,
        width:'90%'
    },
    input:{
        marginBottom:10,
        paddingTop: 7,
        paddingLeft: 7,
        paddingRight: 7,
        width: '90%',
        backgroundColor: '#fff',
        fontSize: 16,
        borderRadius: 5,
    },
    inLine:{
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:40,
        padding:10,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    },
    additional:{
        width:30,
        height: 30,
        resizeMode: "contain"
    },
    additionalItem:{
        marginLeft:5,
        fontSize:16
    },
    picker:{
        height: 50,
        width: '90%'
    },
    viewModal:{
        flexDirection: 'row',
        marginTop: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textConfirm:{
        color: '#2CA02C',
        fontWeight:'bold',
        fontSize:16
    },
    textCancel:{
        color: '#800000',
        fontWeight:'bold',
        fontSize:16
    },
    reload:{
        
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    btn:{
        width: '90%',
        height: 45,
        backgroundColor: '#E54304',
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
        elevation: 5,
        position: 'absolute',
        bottom:10
    },
    textBtn:{
        fontSize: 18,
        color: '#fff'
    },

});

//make this component available to the app
export default styles;
