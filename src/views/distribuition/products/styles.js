import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    touch:{
        borderBottomWidth: 1,
        borderColor: '#aaa',
        paddingTop: 10,
        paddingBottom: 10
    },
    reload:{
        width: '100%',
        position: 'absolute',
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        width: '90%',
        height: 45,
        backgroundColor: '#ff0072',
        position: 'absolute',
        bottom: 10,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textBtn:{
        fontSize: 18,
        color: '#fff'
    },
    scroll:{
        marginBottom: 55,
    }
});

export default styles;
