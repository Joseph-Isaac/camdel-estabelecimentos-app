import React, { useState } from 'react';
import {Container, BoxEstablishment, Company, Category, BoxInformation, FoodValue, 
DeliveryTime, DeliveryFee, EstablishmentInformation, ButtonInformation, Box} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonProduct from '../buttonProduct';

export default function Establishment(){
    // Primeira Caixa
    const [nameCompany, setNameCompany] = useState("Nome da Empresa")
    const [category, setCategory] = useState("Categoria")
    // Segunda Caixa
    const [price,setPrice] = useState(10.99)
    const [deliveryTime,setDeliveryTime] = useState("30-45")
    const [serviceCharge, setServiceCharge] = useState(3.99)

    return(
        <ScrollView>
            <Container>
            <BoxEstablishment>
                <FontAwesome5 name="hamburger" size={100} color="#fff" />
                <Company>{nameCompany}</Company>
                <Category>{category}</Category>
            </BoxEstablishment>
            <BoxInformation>
                <Box>
                    <Feather name="clock" size={24} color="#FFF" />
                    <FoodValue>R${price}{"\n"}Preço mínimo</FoodValue>
                </Box>
                <Box>
                    <Feather name="dollar-sign" size={24} color="#FFF" />
                    <DeliveryTime>{deliveryTime} min{"\n"}Tempo de Entrega</DeliveryTime>
                </Box>
                <Box>
                    <FontAwesome name="money" size={24} color="#FFF" /> 
                    <DeliveryFee>{serviceCharge}{"\n"}Para sua casa</DeliveryFee>
                </Box>
                <Box>
                    <ButtonInformation activeOpacity={0.8}>
                        <MaterialCommunityIcons name="information-outline" size={24} color="#FFF" />
                        <EstablishmentInformation>Informações do estabelecimento</EstablishmentInformation>
                    </ButtonInformation>
                </Box>
            </BoxInformation>
        
        </Container>

        <ButtonProduct  title="Produto com adicional"/>
        <ButtonProduct  title="Produto com adicional"/>
        <ButtonProduct  title="Produto com adicional"/>
        <ButtonProduct  title="Produto com adicional"/>
        <ButtonProduct  title="Produto com adicional"/>

        </ScrollView>
        

    )
}
                


