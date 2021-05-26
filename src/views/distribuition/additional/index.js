import CheckBox from '@react-native-community/checkbox'
import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, SectionList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

import Additional from '../../../layouts/additional'

export default function index() {

    const [category, setCategory] = useState([])
    const [subcategory, setSubcategory] = useState([])
    const [product, setProduct] = useState([])
    const [additionals, setAdditionals] = useState([])

    const [categoria, setCategoria] = useState('todos')
    const [subcategoria, setSubcategoria] = useState('todos')
    const [produto, setProduto] = useState('todos')
    
    useEffect(() => {
        getAllAdditionals()
    }, [])

    async function getAllAdditionals(){

    }

    async function getCategory(){
        
    }

    async function getSubcategory(){
        
    }

    async function getProduct(){
        
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Picker //Categoria
                    selectedValue={categoria}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>[
                        setCategoria(itemValue), getCategory()
                    ]}>
                        <Picker.Item label="todos" value="todos" />
                        {category.map(itens=>
                        <Picker.Item label={itens} value={itens} />
                        )}
                </Picker>
                <Picker //Subcategoria
                    selectedValue={subcategoria}
                    style={styles.item}
                    onValueChange={(itemValue, itemIndex) =>[
                        setSubcategoria(itemValue), getSubcategory()
                    ]}>
                        <Picker.Item label="todos" value="todos" />
                        {subcategory.map(itens=>
                        <Picker.Item label={itens} value={itens} />
                        )}
                </Picker>
                <Picker //Produto
                    selectedValue={produto}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>[
                        setProduto(itemValue), getProduct()
                    ]}>
                        <Picker.Item label="todos" value="todos" />
                        {product.map(itens=>
                        <Picker.Item label={itens.name} value={itens.name} />
                        )}
                </Picker>

                <View>
                <SectionList
                    sections={additionals}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ additional }) => <Additional datas={additional} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.touch}>
                <Text>CADASTRAR NOVO ADICIONAL</Text>
            </TouchableOpacity>
        </View>
    )
}
