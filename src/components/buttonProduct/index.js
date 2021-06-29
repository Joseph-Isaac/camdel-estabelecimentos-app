import React from 'react';
import {Image} from 'react-native';
import { Container, ImageProduct, Title, Subtitle, Box, Price, BoxImage, BoxTitle } from './styles';
import Hamburguer from '../../images/hamburguer.png';

export default function ButtonProduct(props) {
    return (
        <Container>
                
            <Box>
                
                <BoxImage>
                    <Image source={Hamburguer} style={{width: 60, height: 60, borderRadius:8}}/>
                </BoxImage>

                <BoxTitle>
                    <Title>
                        {props.title}
                    </Title>
                    
                    <Subtitle>
                        Detalhes e Descrição
                    </Subtitle>
                </BoxTitle>


            </Box>
            <Price>
                R$ 19,99
            </Price>
        </Container>
    )
}
