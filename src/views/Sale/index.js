import React, { useState } from 'react';
import { Picker } from '@react-native-community/picker';
//import {Picker} from '@react-native-picker/picker';

import { Container, Title, TitleValue, Subtitle, BoxInitial, DeliveryType, BoxIntermediate, 
Adress, TitleAdress, Quests, Coupon, BoxValues, Price } from './styles';


import ButtonPurple from '../../components/ButtonPurple';
import ButtonGreen from '../../components/ButtonGreen';
import { ScrollView } from 'react-native-gesture-handler';

export default function Sale(){
    const [options, setOptions] = useState(['Receber em casa','Retirar na loja'])
    const [payment, setPayment] = useState(['Dinheiro', 'Cartão'])
    
    const [optionsSelected, setOptionsSelected] = useState([]);
    const [optionsPayment, setOptionsPayment] = useState([]);
    
    const [adress,setAdress] = useState("Rua Exemplo, Nº999, Bairro")

    const[prices,setPrices] = useState(18,99)

    return(
        <Container>
            <BoxInitial>
                <Title>Nome do estabelecimento</Title>
                <Subtitle>Endereço do estabelecimento</Subtitle>
            </BoxInitial>
                
            
            <BoxIntermediate>
                <Quests>Quer receber em casa ou retirar na loja?</Quests>
                <DeliveryType>
                    <Picker
                        selectedValue={optionsSelected}
                        style={{width: 320, height: 20, backgroundColor:'#D3D3D3'}}
                        onValueChange={(itemValue) => setOptionsSelected(itemValue)
                    }>
                        {
                            options.map(op=>{
                                return(
                                    <Picker.Item label={op} value={op} />
                                )
                            })
                        }

                    </Picker>
                </DeliveryType>
                    <Quests>Qual sua forma de pagamento?</Quests>
                <DeliveryType>
                    <Picker
                        selectedValue={optionsPayment}
                        style={{width: 320, height: 20, backgroundColor:'#D3D3D3'}}
                        onValueChange={(itemValue) => setOptionsPayment(itemValue)
                    }>
                        {
                            payment.map(pay=>{
                                return(
                                    <Picker.Item label={pay} value={pay} />
                                )
                            })
                        }

                    </Picker>
                </DeliveryType>

            </BoxIntermediate>
            
            <TitleAdress>Endereço</TitleAdress>
            <Adress>{adress}</Adress>

            <ButtonPurple name="ALTERAR ENDEREÇO"/>
            
            <Title>Cupom de desconto</Title>
            <Coupon />
            
            <Title>Valores</Title>

            <BoxValues>
                <TitleValue>Compra:</TitleValue>
                <Price>R$ {prices}</Price>
            </BoxValues>

            <BoxValues>
                <TitleValue>Entrega:</TitleValue>
                <Price>R$ {prices}</Price>
            </BoxValues>

            <BoxValues>
                <TitleValue>Total:</TitleValue>
                <Price>R$ {prices}</Price>
            </BoxValues>

            <ButtonGreen name="ENVIAR PEDIDO"/>
        </Container>
    )
}