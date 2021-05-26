import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import {Notifications} from 'expo'
import * as Permissions from 'expo-permissions'
import { TextInput } from 'react-native-gesture-handler'

const PUSH_REGISTRATION_ENDPOINT = 'http://codigo-mongodb-url/token'
const MESSAGE_ENPOINT = 'http://codigo-mongodb-url/message'

export default function index() {

    const [notification, setNotification] = useState(null)
    const [message, setMessage] = useState('')

    useEffect(() => {
        registerForPushNotification()
    }, [])

    function handlernotification({notification}){
        setNotification(notification)
    }

    function handleChangeText({text}){
        setMessage(text)
    }

    async function sendMessage(){
        fetch(MESSAGE_ENPOINT,{
            method: 'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                message: message
            })
        })
        setMessage('')
    }

    //Pedindo permissão para mostrar notificações
    async function registerForPushNotification(){
        const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        if(status !== 'granted'){
            return;
        }
        let token = await Notifications.getExpoPushTokenAsync();
    }

    function renderNotification(){
        return(
            <View>
                <Text>Uma novo pedido foi recebido!</Text>
                <Text>{message}</Text>
            </View>
        )
    }

    //render()

    return (
        <View>
           <TextInput 
            value={message}
            style={{width:300}}
            onChangeText={handleChangeText()}
           />
        </View>
    )
}
