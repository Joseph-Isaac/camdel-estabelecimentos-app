import React, { useState } from 'react';
import {Container, BoxProduct, ProductName, DetailsProduct, BoxPrices, Amount, Title, Additional, 
    ButtonAdd, ButtonReduce, ImageProduct, Img, BoxComments, Comments, UnitPrice, TotalPrice, Price, Elements} from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import Hamburguer from '../../images/hamburguer.png'

import { AntDesign } from '@expo/vector-icons';

export default function AdditionalProducts(){
    const [count, setCount] = useState(0);
    
    return(
        <Container>
            <ImageProduct>
                <Img source={Hamburguer}/>
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
                    <Price>R$ 19,99</Price>
                </UnitPrice>
                <TotalPrice>
                    <Title>Preço Total</Title>
                    <Price>R$ 19,99</Price>
                </TotalPrice>
            </BoxPrices>    
                    
            <BoxComments>
                <Title>Observações</Title>
                <Comments/>
            </BoxComments> 
                
        </Container>
    )
}