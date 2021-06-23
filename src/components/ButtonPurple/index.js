import React from 'react';
import {Container, PurpleButton, Texto} from './styles'

export default function ButtonPurple(props){
    return(
        <Container>
            <PurpleButton>
                <Texto>{props.name}</Texto>
            </PurpleButton>
        </Container>
    )
}

