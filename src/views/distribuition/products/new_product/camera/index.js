import React, { Component, useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Image, Modal } from 'react-native';
import {Camera} from 'expo-camera'
import * as Permissions from 'expo-permissions'
import { MaterialIcons, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import ImageResizer from 'react-native-image-resizer'
import styles from './styles'
import api from '../../../../../services/api';

function CameraFunction({navigation, route}){

    const id = route.params

    const camRef = useRef()
    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [foto, setFoto] = useState()
    const [datas, setData] = useState([])
    const [visible, setVisible] = useState(false)
    const [imageInbase64, setImageInbase64] = useState()

    useEffect(()=>{
        (async ()=>{
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[])

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return 
        <View style={styles.noAcessCamera}>
            <Text>Sem acesso a Câmera...</Text>;
        </View>
    }

    async function fotografar() {
        if (camRef) {
          let photo = await camRef.current.takePictureAsync({
            base64: true,
            quality: 0,
            exif: true
          });
          //console.log(photo)
          setFoto(photo)
          setVisible(true)
          create()
        }
    }

    async function create(){
        try{
            await AsyncStorage.setItem('@foto', foto)
        }catch(e){
            alert(e)
        }
    }

    async function updateImage(){
        if(id !=='')
        await api.put(`/products/${id}`,{
            image: foto.toString('base64')
        })
        .then(response=>{

        })
        .catch(error=>{
            alert("Erro ao atualizar a imagem: "+error)
        })
    }

    function btnConfimar(){
        //navigation.navigate('NewProducts')
        //updateImage()
        //alert(foto.toString('base64'))

        ImageResizer.createResizedImage(foto.uri, 300, 400, 'JPEG', 1, 0, 1)
        .then(response=>{
            setFoto(response.name)
            console.log(foto.base64)
            alert('sucess')
        })
        .catch(error=>{
            alert(error)
        })
        //alert(foto)
        //console.log(foto)
    }

    return (
        <View style={styles.container}>
            <Modal
            visible={visible}
            >
                <TouchableOpacity onPress={()=>setVisible(false)} style={styles.btnExit}>
                    <MaterialCommunityIcons name="file-excel-box" size={36} color="#EE6002" />
                </TouchableOpacity>
                <View style={styles.view}>
                    <Image source={foto} style={styles.image}/>
                </View>
                <View style={styles.viewBtn}>
                    <TouchableOpacity style={styles.btnConfirm} onPress={()=>[btnConfimar()]}>
                        <Text style={{color: '#fff'}}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
                
            </Modal>
            <Camera 
            type={type}
            ref={camRef}
            style={styles.camera}>
            </Camera>
            <View style={styles.bottom}>
                <View style={styles.viewCameraSecond}>
                    <TouchableOpacity style={styles.btn} onPress={()=>{setType(
                        type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                        );}}>
                        <MaterialIcons name="flip" size={30} color="black" />
                    </TouchableOpacity>
                    <Text>Virar</Text>
                </View>

                <View style={styles.viewCameraSecond}>
                    <TouchableOpacity style={styles.btn} onPress={()=>fotografar()}>
                        <SimpleLineIcons name="camera" size={24} color="black" />
                    </TouchableOpacity>
                    <Text>Foto</Text>
                </View>
            </View>
        </View>
    );   
}

export default CameraFunction;
