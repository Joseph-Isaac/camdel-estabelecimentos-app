import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import styles from './styles'
import api from '../../../../services/api'

export default function index({navigation, route}) {

    const {login} = route.params
    const {category} = route.params
    const {type} = route.params

    const [load, setLoad] = useState()
    const [subcategory, setSubcategory] = useState([])

    useEffect(() => {
        loadSubcategory()
    }, [load])

    async function loadSubcategory(){
        await api.get(`/products/read/products/distinct/${login}/${category}`)
        .then(response=>{
            setSubcategory(response.data)
        })
        .catch(error=>{
            alert(error)
        })
    }
    
    function Continue(secondcategory){
        navigation.navigate('NewAdditional', {categoryParams: category, id: '', subcategoryParams: secondcategory, type: type,  login: login})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha a subcategoria</Text>
            <ScrollView>
                <View style={styles.scrollView}>
                    {subcategory.map(c=>(
                        <TouchableOpacity style={styles.itemContainer} onPress={()=>Continue(c)}>
                            <Text style={styles.text}>{c}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
