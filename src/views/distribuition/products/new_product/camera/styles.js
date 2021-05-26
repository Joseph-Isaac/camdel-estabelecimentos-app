import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    noAcessCamera:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    camera:{ 
        width:'100%', 
        height:'80%' 
    },
    viewBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10
    },
    btn:{
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
        width:50,
        borderRadius: 40,
        borderWidth:1,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 5,  
    },
    btnConfirm:{
        width: 100,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EE6002',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset:{
            width: 5,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5
    },
    viewCamera:{
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    viewCamera:{
        alignSelf: 'auto',
        alignItems: 'center',
    },
    bottom:{
        height: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    flip:{ 
        fontSize: 18, 
        marginBottom: 10, 
        color: 'white' 
    },
    btnExit:{
        alignItems: 'flex-end',
    },
    image:{
        height: '90%',
        width: '90%',
    },
    view:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewCameraSecond:{
        alignItems: 'center'
    }
});

export default styles
