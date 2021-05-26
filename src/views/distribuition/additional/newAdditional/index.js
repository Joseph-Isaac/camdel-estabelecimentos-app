import React, { Component, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert, Switch, Picker } from 'react-native';

import styles from './styles'
import api from '../../../../services/api'

function Additional({route, navigation}){

    
    const {login} = route.params
    const {id} = route.params
    const {categoryParams} = route.params
    const {subcategoryParams} = route.params
    const {type} = route.params

    const [contador, setContador] = useState(1)

    const [load,seLoad] = useState(true)
    const [datas, setDatas] = useState([])
    const [additional, setAdditional] = useState([])
    const [subcategory, setSubcategory] = useState([])
    const [title, setTitle] = useState('Adicionais')
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState(categoryParams)
    const [secondcategory, setSecondCategory] = useState(subcategoryParams)
    const [product, setProduct] = useState([])
    const [productPicker, setProductPicker] = useState('')
    const [chosen, setChosen] = useState(1)
    const [available, setAvailable] = useState()

    useEffect(()=>{
        loadCategory()
        if(id!='')
            loadAdditional()
        if(subcategoryParams!='')
            loadProduct()
        else if(categoryParams!='')
            loadSubcategory()
        
    },[load])


    function midCreate(){
        if(title == '' || title == null || title == undefined )
            Alert.alert('Dados incompletos', 'Digite um título para o seu adicional')
        else if(description == '' || description == null || description == undefined )
            Alert.alert('Dados incompletos', 'Digite uma descrição para o seu adicional')
        else if(price == '' || price == null || price == undefined )
            Alert.alert('Dados incompletos', 'Digite um preço para o seu adicional \n (caso esteja preenchido, apague e digite novamente)')
        else if(id==='')
            createAdditional()
        else 
            updateAdditional()
    }

    async function loadSubcategory(){
        await api.get(`/products/read/products/distinct/${login}/${categoryParams}`)
        .then(response=>{
            setSubcategory(response.data)
        })
        .catch(error=>{
            alert(error)
        })
    }
    
    async function loadProduct(){
        await api.get(`/products/read/second_category/${login}/${categoryParams}/${subcategoryParams}`)
        .then(response=>{
            setProduct(response.data)
        })
        .catch(error=>{
            alert(error)
        })
    }
    

    async function loadCategory(){
        await api.get(`/user/read/category/${login}`)
        .then(response=>{
            setDatas(response.data)
        })
        .catch(error=>{
            alert(error)
        })
    }

    async function loadAdditional(){
        await api.get(`/additional/read/additionalForId/${id}`)
        .then(response=>{
            setAdditional(response.data)
        })
        .catch(error=>{
            alert(error)
        })
    }

    async function createAdditional(){
        setPrice(price.toString().replace(',','.'))
        //alert('category: '+category+'\nsecond_category: '+secondcategory+'\nproduct: '+productPicker)
        await api.post('/additional',{
            title: title.trim(),
            text: description.trim(),
            price: parseFloat(price),
            login: login,
            category: category,
            second_category: secondcategory,
            idProduct: productPicker,
            chosen: chosen,
            available: available
        })
        .then(response=>{
            navigation.navigate('Additional')
        })
        .catch(error=>{
            alert(error)
            navigation.navigate('Additional')
        })
    }

    async function updateAdditional(){
        setPrice(price.toString().replace(',','.'))
        await api.put(`/additional/${id}`,{
            title: title.trim(),
            text: description,
            price: parseFloat(price),
            chosen: chosen,
            available: available,
            category: category,
            second_category: secondcategory,
            idProduct: productPicker,
        })
        .then(response=>{
            console.log(response.data)
            navigation.navigate('Additional')
        })
        .catch(error=>{
            alert(error)
            navigation.navigate('Additional')
        })
        
    }

    return (
        <View style={{flex:1, backgroundColor:"#fff", }}>
        <ScrollView style={{marginBottom:65}} showsVerticalScrollIndicator={false}>
        {id=='' && type=='category'?
            <View style={styles.container}>
                <Text style={styles.text}>Título</Text>
                <TextInput style={styles.input} placeholder='Molhos...' defaultValue={'Adicionais'} onChangeText={(text)=>setTitle(text)}/>
                <Text style={styles.text}>Descrição</Text>
                <TextInput style={styles.input} placeholder='de Mostarda...' onChangeText={(text)=>setDescription(text)}/>
                <Text style={styles.text}>Preço</Text>
                <TextInput style={styles.input} placeholder='1.99' keyboardType='decimal-pad' onChangeText={(text)=>setPrice(text)}/>
                <Text style={styles.text}>Quantidade máxima de escolha para o cliente</Text>
                <TextInput style={styles.input} placeholder='5' keyboardType='number-pad' onChangeText={(text)=>setChosen(text)}/>
                <Text style={styles.text}>Categoria</Text>
                <Picker
                    selectedValue={category}
                    style={styles.picker}
                    onValueChange={(itemValue,itemIndex)=>setCategory(itemValue)}
                >
                    {datas.map(p=>(
                        <Picker.Item label={`${p}`} value={`${p}`}/>
                    ))}
                </Picker>
                <View style={styles.viewSwitch}>
                    <Text style={styles.text}>Disponível: {available?'Sim': 'Não'}</Text>
                    <Switch onValueChange={()=>setAvailable(!available)} value={available} thumbColor={available? '#ff0072':'#ccc' } />
                </View>

                <Text style={styles.title}>Caso algum campo abaixo esteja em branco, signfica que é aplicado a todos.</Text>
                <Text style={styles.text}>Categoria</Text>
                <TextInput style={styles.input} onChangeText={(text)=>setCategory(text)}/>
                <Text style={styles.text}>Subcategoria</Text>
                <TextInput style={styles.input} onChangeText={(text)=>setSecondCategory(text)}/>
                <Text style={styles.text}>Produto</Text>
                <TextInput style={styles.input} onChangeText={(text)=>setProduct(text)}/>
            </View>
        :id=='' && type=='second_category'?
        <View style={styles.container}>
            <Text style={styles.text}>Título</Text>
            <TextInput style={styles.input} placeholder='Molhos...' defaultValue={'Adicionais'} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.text}>Descrição</Text>
            <TextInput style={styles.input} placeholder='de Mostarda...' onChangeText={(text)=>setDescription(text)}/>
            <Text style={styles.text}>Preço</Text>
            <TextInput style={styles.input} placeholder='1.99' keyboardType='decimal-pad' onChangeText={(text)=>setPrice(text)}/>
            <Text style={styles.text}>Quantidade máxima de escolha para o cliente</Text>
            <TextInput style={styles.input} placeholder='5' keyboardType='number-pad' onChangeText={(text)=>setChosen(text)}/>
            <Text style={styles.text}>Categoria</Text>
            <TextInput style={styles.input} defaultValue={categoryParams} editable={false}/>
            <Text style={styles.text}>Subcategoria</Text>
            <Picker
                selectedValue={secondcategory}
                style={styles.picker}
                onValueChange={(itemValue,itemIndex)=>setSecondCategory(itemValue)}
            >
                {subcategory.map(p=>(
                    <Picker.Item label={`${p}`} value={`${p}`}/>
                ))}
                
            </Picker>
            <View style={styles.viewSwitch}>
                <Text style={styles.text}>Disponível: {available?'Sim': 'Não'}</Text>
                <Switch onValueChange={()=>setAvailable(!available)} value={available} thumbColor={available? '#ff0072':'#ccc' } />
            </View>

            <Text style={styles.title}>Caso algum campo abaixo esteja em branco, signfica que é aplicado a todos.</Text>
            <Text style={styles.text}>Categoria</Text>
            <TextInput style={styles.input} onChangeText={(text)=>setCategory(text)}/>
            <Text style={styles.text}>Subcategoria</Text>
            <TextInput style={styles.input} onChangeText={(text)=>setSecondCategory(text)}/>
            <Text style={styles.text}>Produto</Text>
            <TextInput style={styles.input} onChangeText={(text)=>setProduct(text)}/>
        </View>
        :id=='' && type=='product'?
        <View style={styles.container}>
            <Text style={styles.text}>Título</Text>
            <TextInput style={styles.input} placeholder='Molhos...' defaultValue={'Adicionais'} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.text}>Descrição</Text>
            <TextInput style={styles.input} placeholder='de Mostarda...' onChangeText={(text)=>setDescription(text)}/>
            <Text style={styles.text}>Preço</Text>
            <TextInput style={styles.input} placeholder='1.99' keyboardType='decimal-pad' onChangeText={(text)=>setPrice(text)}/>
            <Text style={styles.text}>Categoria</Text>
            <Text style={styles.text}>Quantidade máxima de escolha para o cliente</Text>
            <TextInput style={styles.input} placeholder='5' keyboardType='number-pad' onChangeText={(text)=>setChosen(text)}/>
            <TextInput style={styles.input} defaultValue={categoryParams} editable={false}/>
            <Text style={styles.text}>Subcategoria</Text>
            <TextInput style={styles.input} defaultValue={subcategoryParams} editable={false}/>
            <Text style={styles.text}>Produto</Text>
            <Picker
                selectedValue={productPicker}
                style={styles.picker}
                onValueChange={(itemValue,itemIndex)=>setProductPicker(itemValue)}
            >
                {product.map(p=>(
                    <Picker.Item label={`${p.name}`} value={`${p.name}`}/>
                ))}
            </Picker>

            <View style={styles.viewSwitch}>
                <Text style={styles.text}>Disponível: {available?'Sim': 'Não'}</Text>
                <Switch onValueChange={()=>setAvailable(!available)} value={available} thumbColor={available? '#ff0072':'#ccc' } />
            </View>

            <Text style={styles.title}>Caso algum campo abaixo esteja em branco, signfica que é aplicado a todos.</Text>
                <Text style={styles.text}>Categoria</Text>
                <TextInput style={styles.input} onChangeText={(text)=>setCategory(text)}/>
                <Text style={styles.text}>Subcategoria</Text>
                <TextInput style={styles.input} onChangeText={(text)=>setSecondCategory(text)}/>
                <Text style={styles.text}>Produto</Text>
                <TextInput style={styles.input} onChangeText={(text)=>setProduct(text)}/>

        </View>
        :
        additional.map(a=>(
            <View style={styles.container}>
                <Text style={styles.text}>Título</Text>
                {contador<10 && [setContador(contador+1)] && [setTitle(a.title)]}
                <TextInput style={styles.input} placeholder='Molhos...' defaultValue={a.title} onChangeText={(text)=>setTitle(text)}/>
                <Text style={styles.text}>Descrição</Text>
                {contador<10 && [setContador(contador+1)] && [setDescription(a.text)]}
                <TextInput style={styles.input} placeholder='de Mostarda...' defaultValue={a.text} onChangeText={(text)=>setDescription(text)}/>
                <Text style={styles.text}>Preço</Text>
                {contador<10 && [setContador(contador+1)] && [setPrice(a.price)]}
                <TextInput style={styles.input} placeholder='1.99' keyboardType='decimal-pad' defaultValue={a.price.toFixed(2)} onChangeText={(text)=>setPrice(text)}/>
                <Text style={styles.text}>Quantidade máxima de escolha para o cliente</Text>
                {contador<10 && [setContador(contador+1)] && [setChosen(a.chosen)]}
                <TextInput style={styles.input} placeholder='5' defaultValue={`${a.chosen}`} keyboardType='number-pad' onChangeText={(text)=>setChosen(text)}/>
                {contador<10 && [setContador(contador+1)] && [setAvailable(a.available)]}
                <View style={styles.viewSwitch}>
                    <Text style={styles.text}>Disponível: {available?'Sim': 'Não'}</Text>
                    <Switch onValueChange={()=>setAvailable(!available)} value={available} thumbColor={available? '#ff0072':'#ccc' } />
                </View>

                <Text style={styles.title}>Caso algum campo abaixo esteja em branco, signfica que é aplicado a todos.</Text>
                <Text style={styles.text}>Categoria</Text>
                {contador<10 && [setContador(contador+1)] && [setCategory(a.category)]}
                <TextInput style={styles.input} defaultValue={a.category} onChangeText={(text)=>setCategory(text)}/>
                <Text style={styles.text}>Subcategoria</Text>
                {contador<10 && [setContador(contador+1)] && [setSecondCategory(a.second_category)]}
                <TextInput style={styles.input} defaultValue={a.second_category} onChangeText={(text)=>setSecondCategory(text)}/>
                <Text style={styles.text}>Produto</Text>
                {contador<10 && [setContador(contador+1)] && [setProduct(a.product)]}
                <TextInput style={styles.input} defaultValue={a.product} onChangeText={(text)=>setProduct(text)}/>
            </View>
        ))
        }
        </ScrollView>
        <TouchableOpacity style={styles.btn} onPress={()=>midCreate()}>
            <Text style={styles.textBtn}>Confirmar</Text>
        </TouchableOpacity>
    </View>
    );
}

export default Additional