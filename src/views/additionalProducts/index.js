import React, { useState } from 'react';
import {Container, BoxProduct, ProductName, DetailsProduct, BoxPrices, Amount, Title, Additional, 
ButtonAdd, ButtonReduce, ImageProduct, Img, BoxComments, Comments, UnitPrice, TotalPrice, Price, 
Elements, TitleAdditional, BoxAdditional, BoxCheck} from './styles';

import CheckBox from '@react-native-community/checkbox';

import { Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import Hamburguer from '../../images/hamburguer.png'


export default function AdditionalProducts(){
    const [count, setCount] = useState(0);
    const [prices, setPrices] = useState(19.99);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return(
        
        <Container>
            <ImageProduct>
                <Image source={Hamburguer} style={{width: '100%', height: '100%'}}/>
            </ImageProduct>
            
            <BoxProduct>
                <ProductName>Nome do produto</ProductName>
                <DetailsProduct>Detalhes do Produto</DetailsProduct>
            </BoxProduct>
            
            <BoxPrices>
                <Amount>
                    <Title>Quantidade</Title>
                    <Additional>
                        <ButtonAdd 
                            onPress={()=>setCount(count + 1)}
                            activeOpacity={0.7}
                        >
                            <AntDesign name="pluscircle" size={24} color="#442178" />
                        </ButtonAdd>
                            <Elements>{count}</Elements>    
                        <ButtonReduce 
                            onPress={()=>setCount(count - 1)}
                            activeOpacity={0.7}
                        >
                            <AntDesign name="minuscircle" size={24} color="#442178" />
                        </ButtonReduce>
                    </Additional>
                    
                </Amount>
                <UnitPrice>
                    <Title>Preço Unitário</Title>
                    <Price>R$ {prices}</Price>
                </UnitPrice>
                <TotalPrice>
                    <Title>Preço Total</Title>
                    <Price>R$ {prices}</Price>
                </TotalPrice>
            </BoxPrices>    
                    
            <BoxComments>
                <Title>Observações</Title>
                <Comments/>
            </BoxComments> 
            
            <BoxAdditional>
                <Title style={{marginLeft: 10, fontSize: 16}}>Adicionais</Title>
                <Title style={{marginLeft: 10, marginTop: 10}}>Título 1</Title>
                <BoxCheck>
                    <CheckBox
                        style={{margin: 2}}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <TitleAdditional>Adicional 1</TitleAdditional>
                    <Price>R$ 19,99</Price>
                </BoxCheck>
                <BoxCheck>
                    <CheckBox
                        style={{margin: 2}}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <TitleAdditional>Adicional 2</TitleAdditional>
                </BoxCheck>
                <BoxCheck>
                    <CheckBox
                        style={{margin: 2,}}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <TitleAdditional>Adicional 3</TitleAdditional>
                    
                </BoxCheck>
                <Title style={{marginLeft: 10}}>Título 2</Title>
                

                
            </BoxAdditional>

                

        </Container>
        
            
        
        
    )
}