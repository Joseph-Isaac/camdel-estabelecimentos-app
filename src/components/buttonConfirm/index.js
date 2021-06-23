import React from 'react'
import {} from 'react-native';
import {ButtonC, Texto, Container} from './style';

export default function ButtonConfirm(props){
    return(
        <Container>
            <ButtonC>
                <Texto>{props.name}</Texto>
            </ButtonC>
        </Container>
    )
}

