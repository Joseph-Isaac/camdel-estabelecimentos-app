import React from 'react';
import {Container, PurpleButton, Texto} from './styles'

export default function ButtonGreen(props){
    return(
        <Container>
            <PurpleButton>
                <Texto>{props.name}</Texto>
            </PurpleButton>
        </Container>
    )
}

