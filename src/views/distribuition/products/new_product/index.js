import React, { Component, useEffect, useState, } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Switch, Alert, AsyncStorage, Image, Back } from 'react-native';

import styles from '../../../styles'
import Item from '../../../../layouts/product'
import api from '../../../../services/api'

import add from '../../../../assets/additional.png'

function Main({navigation,route}){

    //dados de rotas anteriores
    const {id} = route.params
    const {categoryParams} = route.params
    const [login, setLogin] = useState()

    //dados FRONT
    const [load, setLoad] = useState(true)
    const [contador, setContador] = useState(1)
    const [cont, setCont] = useState(1)
    const [reload, setReload] = useState(1)

    //dados BACK
    const [product, setProduct] = useState()
    const [additional, setAdditional] = useState([])
    const [establishment, setEstablishment] = useState([])

    //Dados BACK PUT
    const [available,setAvailable] = useState()
    const {photo} = 'data:image/png;base64,'
    const [image, setImage] = useState()
    const [name,setName] = useState()
    const [details,setDetails] = useState()
    const [price,setPrice] = useState()
    const [promotionPrice,setPromotionPrice] = useState()
    const [category,setCategory] = useState()
    const [subcategory,setSubcategory] = useState()
    const [pizzaria, setPizzaria] = useState(false)
    const [half, setHalf] = useState()
    const [typeOfPrice, setTypeOfPrice] = useState()
    const [promotion, setPromotion] = useState(false)
    
    const [titleAdd,setTitleAdd] = useState()
    const [textAdd,setTextAdd] = useState()
    const [priceAdd,setPriceAdd] = useState()

    //Texts
    const dis = 'Ofertado'
    const ind = 'Não ofertado'

    useEffect(()=>{
        if(id != '')
            getProducts()
        /*setFunctions()
        getLogin()
        getAdditionals()
        getImage()
        getDatasEstablishment()
        console.log(typeof promotionPrice)*/
    },[load, navigation])

    async function getProducts(){
        await api.get(`/products/specific/${id}`)
        .then(response=>{
            console.log('getProduct res: '+JSON.stringify(response.data))
            setProduct(response.data)
        })
        .catch(error=>{
            alert('getProducts '+error)
        })
    }


    
    async function getDatasEstablishment(){
        api.get(`/establishment/myDatas/${login}`)
        .then(response=>{
            setEstablishment(response.data)
        })
        .catch(error=>{
            alert('getDatasEstablishment: a'+error)
        })
    }

    

    async function CreateOrUpdate(){
        if(name=='' || name==undefined || name==null)
            alert('O nome do produto não pode estar em branco!')
        else if(details=='' || details==undefined || details==null)
            alert('Coloque os detalhes ou uma descrição para o produto!')
        else if(price=='' || price==undefined || price==null)
            alert('Insira o valor do produto!')
        else if(category=='' || category==undefined || category==null)
            alert('Insira a categoria do produto!')
        else if(promotion==true && (promotionPrice=='' || promotionPrice==undefined || promotionPrice==null))
            alert('Coloque o preço da promoção do produto!')
        else if(login=='' || login==undefined || login==null)
            setLoad(!load)
        else if(id!=''){
            setPrice(price.toString().replace(',','.'))
            await api.put(`/products/${id}`,{
                //img: image,
                name: name,
                description: details,
                price: parseFloat(price),
                category: category.trim(),
                subcategory: subcategory.trim(),
                available: available,
            })
            .then(response=>{
                navigation.goBack()
            })
            .catch(error =>{
                Alert.alert('Erro ao atualizar os dados!', 'Tente novamente mais tarde',[
                    {
                        text: 'Detalhes',
                        onPress: () => alert(error)
                    },
                    {
                        text: 'ok',
                    }
                ])
            })
        }else if(id==''){
            setPrice(price.toString().replace(',','.'))
            await api.post('/products',{
                //image: image,
                login: login,
                name: name,
                description: details,
                price: parseFloat(price),
                category: category.trim(),
                subcategory: subcategory.trim(),
                available: available,
            })
            .then(response =>{
                Alert.alert('Cadastro concluído!', 'Atualiza seus dados')
                navigation.goBack()
            })
            .catch(error=>{
                Alert.alert('Erro ao cadastrar', error)
            })
        }
    }

    async function setFunctions(){
        product.map(p=>{
            setAvailable(product.available)
        })
        if((available==null || available==undefined || available=='') && id!='' && contador<5){
            setLoad(!load)
            setContador(contador+1)
        }
    }

    async function getLogin(){
        try{
            setLogin(await AsyncStorage.getItem('@login') )
        }catch(e){
            alert(e)
        }
    }

    async function getAdditionals(){
        if(id!=''){
            await api.get(`/additional/read/category/${login}/${categoryParams}`)
            .then(response=>{
                setAdditional(response.data)
            })
            .catch(error=>{
                alert('getAdditionals '+error)
            })
        }else{
            await api.get(`/additional/read/category/${login}/default`)
            .then(response=>{
                setAdditional(response.data)
            })
            .catch(error=>{
                alert('getAdditionals '+error)
            })
        }   
    }

    //Funções para o Frontend
    function OpenCameraOrGallery(){
        Alert.alert('Adicionar imagem','',[
            {
                text:'Galeria',
                onPress: ()=> navigation.navigate('Gallery', {id: id})
            },
            {
                text:'Câmera',
                onPress: ()=> navigation.navigate('Camera', {id: id})
            },
        ],
        { cancelable: true }
        )
    }

    async function getImage(){
        if(image===null || image===undefined || image==='')
        try{
            setImage(await AsyncStorage.getItem('@image'))
        }catch(e){
            alert('getImage: '+e)
        }
        
    }

    
return (
    <View style={styles.container}>
        {product?
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={styles.view}>
                    <Text style={styles.text}>Nome</Text>
                    <TextInput style={styles.input} placeholder='x-burguer' defaultValue={product.name} onChangeText={(text)=>setName(text)}/>
                    <Text style={styles.text}>Detalhes e descrição</Text>
                    <TextInput style={styles.input} placeholder='Pão bola, queijo, presunto, carne ...' defaultValue={product.description} onChangeText={(text)=>setDetails(text)}/>
                    <Text style={styles.text}>Valor</Text>
                    <TextInput style={styles.input} placeholder='9.99' keyboardType='decimal-pad' defaultValue={`${product.price.toFixed(2)}`} onChangeText={(text)=>setPrice(text)}/>
                    <Text style={styles.text}>Categoria</Text>
                    <TextInput style={styles.input} placeholder='Sanduíches' defaultValue={product.category} onChangeText={(text)=>setCategory(text)}/>
                    <Text style={styles.text}>Subcategoria</Text>
                    <TextInput style={styles.input} placeholder='Comuns' defaultValue={product.subcategory} onChangeText={(text)=>setSubcategory(text)}/>
                    <View  style={styles.viewSwitch}>
                        <Text style={styles.text}>Status: {available?dis:ind}</Text>
                        {contador<10 && [setContador(contador+1)] && [setAvailable(product.available)]}
                        <Switch onValueChange={()=>setAvailable(!available)} value={available} thumbColor={available? '#753FC4':'#ccc' } />
                    </View>
                    <View style={{height:55}}/>
                </View>
            </ScrollView>
        :
            <ScrollView style={styles.scroll}> 
                <View style={styles.view}>
                    <Text style={styles.text}>Nome</Text>
                    <TextInput style={styles.input} placeholder='x-burguer' onChangeText={(text)=>setName(text)}/>
                    <Text style={styles.text}>Detalhes e descrição</Text>
                    <TextInput style={styles.input} placeholder='Pão bola, queijo, presunto, carne ...' onChangeText={(text)=>setDetails(text)}/>
                    <Text style={styles.text}>Valor</Text>
                    <TextInput style={styles.input} placeholder='9.99' keyboardType='decimal-pad' onChangeText={(text)=>setPrice(text)}/>
                    <Text style={styles.text}>Categoria</Text>
                    <TextInput style={styles.input} placeholder='Sanduíches' onChangeText={(text)=>setCategory(text)}/>
                    <Text style={styles.text}>Subcategoria</Text>
                    <TextInput style={styles.input} placeholder='Comuns' onChangeText={(text)=>setSubcategory(text)}/>
                    <View style={styles.viewSwitch}>
                        <Text style={styles.text}>Status: {available?dis:ind}</Text>
                        <Switch onValueChange={()=>setAvailable(!available)} value={available} thumbColor={available? '#753FC4':'#ccc' } />
                    </View>    
                    <View style={{height:55}}/>
                </View>
            </ScrollView>
        }
        <TouchableOpacity style={[styles.btnFlutter, {marginLeft:17}]} onPress={()=> CreateOrUpdate()}>
            <Text style={styles.textBtn}>{id?'CONFIRMAR':'CADASTRAR'}</Text>
        </TouchableOpacity>
    </View>
);
}

//make this component available to the app
export default Main;

/*{image==null || image==undefined || image==''?
                    (
                    <TouchableOpacity style={styles.viewImage} onPress={()=>{OpenCameraOrGallery()}}>
                    {contador<10 && [setContador(contador+1)] && [setImage(new Buffer(product.image, 'binary').toString())] && [console.log('imagem: '+'data:image/jpg;base64,'+new Buffer(product.image, 'binary').toString('base64'))]}
                        <Text style={styles.textImage}>Clique para escolher{'\n'}a imagem principal</Text>
                    </TouchableOpacity>
                    )
                :
                    (  
                    <View style={{alignItems:'center'}}>
                        <Image source={{uri: 'data:image/jpg;base64,' + new Buffer(product.image, 'binary').toString('base64')}} style={styles.viewImage}/>
                        <Text>Imagem Principal</Text>
                        {<View style={styles.viewImg}>
                            <TouchableOpacity style={styles.btnImg} onPress={()=>OpenCameraOrGallery()}>
                                <Text style={styles.textImg}>Alterar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnImg}>
                                <Text style={styles.textImg}>+ Imagens</Text>
                            </TouchableOpacity>
                        </View>}
                    </View>
                    )
                }    */

/*{image==null || image==undefined || image==''?
                    (
                    <TouchableOpacity style={styles.viewImage} onPress={()=>{OpenCameraOrGallery()}}>
                        <Text style={styles.textImage}>Clique para escolher{'\n'}a imagem principal</Text>
                    </TouchableOpacity>)                
                :
                    (  
                    <View style={{alignItems:'center'}}>
                        <Image source={image} style={styles.viewImage}/>
                        <Text>Imagem Principal</Text>
                        <View style={styles.viewImg}>
                            <TouchableOpacity style={styles.btnImg} onPress={()=>OpenCameraOrGallery()}>
                                <Text style={styles.textImg}>+ Imagens</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnImg}>
                                <Text style={styles.textImg}>Listar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    )
                } */