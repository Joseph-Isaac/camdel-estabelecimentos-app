import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import styles from './styles'
import api from '../../../../services/api'

export default function index({navigation, route}) {

    const {login} = route.params
    const {type} = route.params

    const [load, setLoad] = useState()
    const [category, setCategory] = useState([])

    useEffect(() => {
        loadCategory()
    }, [load])

    async function loadCategory(){
        await api.get(`/user/read/category/${login}`)
        .then(response=>{
            setCategory(response.data)
        })
        .catch(error=>{
            alert(error)
        })
    }
    
    function Continue(category){
        if(type=='product')
            navigation.navigate('IntermediateSubCategory', {category: category, id: '', login: login, type: type})
        else
            navigation.navigate('NewAdditional', {categoryParams: category, subcategoryParams: '', id: '', login: login, type:type})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha a categoria</Text>
            <ScrollView>
                <View style={styles.scrollView}>
                    {category.map(c=>(
                        <TouchableOpacity style={styles.itemContainer} onPress={()=>Continue(c)}>
                            <Text style={styles.text}>{c}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
