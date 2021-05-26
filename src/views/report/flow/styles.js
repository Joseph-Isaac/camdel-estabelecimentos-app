import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    line:{
        flexDirection: 'row',
        width:'100%',
        marginTop: 10,
        justifyContent: 'space-around'
    },
    textLine:{
        flexDirection: 'row',
        width:'90%',
        justifyContent: 'space-between'
    },
    textLine2:{
        marginTop: 15,
        flexDirection: 'row',
        width:'90%',
        justifyContent: 'space-between'
    },
    view:{
        width: '45%',
        height: 60,
        backgroundColor: '#FF8D00',
        borderRadius: 5
    },
    cancel:{
        width: '45%',
        height: 60,
        backgroundColor: '#D40000',
        borderRadius: 5
    },
    get:{
        width: '45%',
        height: 60,
        backgroundColor: '#2CA02C',
        borderRadius: 5
    },
    text:{
        fontSize: 16,
        color:'#fff',
        marginTop: 5,
        marginLeft: 5,
    },
    number:{
        fontSize: 16,
        color:'#fff',
        position: 'absolute',
        bottom: 5,
        right: 5
    },
    largeView:{
        width:'95%',
        height: 120,
        backgroundColor: '#FF8D00',
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center'
    },
    viewBlue:{
        alignItems: 'center',
        width: '95%',
        height: 80,
        backgroundColor: '#2C5AA0',
        borderRadius: 5,
        marginTop: 10
    },
    rate:{
        position: 'absolute',
        bottom: -6,
        right: -2,
    },
    conclude:{
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});

export default styles;
