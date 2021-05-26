import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, PanResponder, AsyncStorage, StyleSheet } from 'react-native';
import {DrawerContentScrollView ,DrawerItem} from '@react-navigation/drawer'
import { AntDesign, MaterialCommunityIcons, Ionicons, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import {useFonts} from 'expo-font'
import {AppLoading} from 'expo'

import styles from './styles'
import logo from '../../assets/logo.png'
import list from '../../assets/icon_list.png'
import truck from '../../assets/icon_black_truck.png'
import paper from '../../assets/icon_paper.png'
import config from '../../assets/icon_config.png'
import question from '../../assets/icon_faq.png'
import logout from '../../assets/icon_logout.png'
import api from '../../services/api'

function Personalizado ({navigation}){ 
    
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [establishment, setEstablishment] = useState()
    const [load, setLoad] = useState([])

    useEffect(() => {
        getEstablishment()
    }, [load])

    async function Logout(){
        try{
            setLogin(await AsyncStorage.setItem('@login', ''))
            setPassword(await AsyncStorage.setItem('@password', ''))
            await AsyncStorage.clear()
            if(login == null || login == undefined || login == '')
                navigation.navigate('Logout')
        }catch(e){
            alert('Logout: '+e)
        }
    }

    async function getEstablishment(){
        await api.get(`/establishment/myDatas/${await AsyncStorage.getItem('@login')}`)
        .then(res=>{
            setEstablishment(res.data)
        })
        .catch(e=>{
            console.log('getEstablishment: '+e)
        })
    }

    let [fontLoad] = useFonts({
        'Lexend-Regular':require('../../assets/fonts/Lexend/Lexend-Regular.ttf'),
        'Lexend-Medium':require('../../assets/fonts/Lexend/Lexend-Medium.ttf'),  
    });

    
    if(!fontLoad){
        return <AppLoading />
    }else{

    return (
        <View style={styles.container}>
            
            <View style={styles.boxLogo} >
                <Image source={logo} style={styles.logo} />
                {establishment && 
                    <Text style={style.title}>{establishment.nameEstablishment}</Text>
                }
            </View>

            <DrawerItem style={styles.box}
                icon={()=>(
                    <AntDesign name="shoppingcart" size={20} color="white"/>
                )}
                label={()=>(
                    <Text style={style.text}>Pedidos</Text>
                )}
                onPress={()=> {[navigation.navigate('List'), setLoad(!load)]}}
            />
            <DrawerItem style={styles.box}
                icon={()=>(
                    <MaterialCommunityIcons name="truck-delivery" size={20} color="white"/>
                )}
                label={()=>(
                    <Text style={style.text}>Distribuição</Text>
                )}
                onPress={()=> {navigation.navigate('Distribuition')}}
            />
            <DrawerItem style={styles.box}
                icon={()=>(
                    <FontAwesome5 name="money-bill-alt" size={17} color="white"/>
                )}
                label={()=>(
                    <Text style={style.text}>Caixa</Text>
                )}
                onPress={()=> {navigation.navigate('Report')}}
            />
            <DrawerItem style={styles.box}
                icon={()=>(
                    <AntDesign name="setting" size={20} color="white"/>
                )}
                label={()=>(
                    <Text style={style.text}>Configurações</Text>
                )}
                onPress={()=> {navigation.navigate('Set')}}
            />
            <DrawerItem style={styles.box}
                icon={()=>(
                    <FontAwesome5 name="star-half-alt" size={20} color="white"/>
                )}
                label={()=>(
                    <Text style={style.text}>Avaliações</Text>
                )}
                onPress={()=> {navigation.navigate('Rating')}}
            />
            <DrawerItem style={styles.box}
                icon={()=>(
                    <MaterialCommunityIcons name="logout" size={22} color="white"/>
                )}
                label={()=>(
                    <Text style={style.text}>Sair</Text>
                )}
                onPress={()=> Logout()}
            />
        </View>
    );
    }
}


export default Personalizado;


const style = StyleSheet.create({
    title:{
        fontSize: 16,
        color: '#fff',
        width:'80%',
        marginTop:20,
        marginBottom:20,
        textAlign:'center',
        fontFamily:'Lexend-Medium'
    },
    text:{
        fontSize: 13,
        color: '#fff',
        fontFamily:'Lexend-Regular'
    },
})

//mongorestore -h geonosis.mongodb.umbler.com:43430 -d pediaqui -u pediaqui -p paubrasil20 --drop C:\dump\pediaqui\pediaqui2\pediaqui\establishments.bson