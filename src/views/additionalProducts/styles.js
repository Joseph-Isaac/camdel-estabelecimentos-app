import styled from 'styled-components';

export const Container = styled.View`
    height: 100%;
    width: 100%;
    background-color: #FFF;
`;

export const ImageProduct = styled.View`
    height:18%;
    border-bottom-width: 1;
    border-bottom-color: #D3D3D3;
    background-color: #442178;
    align-items: center;
    justify-content: center;
`;


 
export const BoxProduct = styled.View`
    height: 12%;
    
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1;
    border-bottom-color: #D3D3D3;
    
`;

export const BoxAdditional = styled.View`
    height: 50%;
    
    background-color: #FFF;
    align-items: flex-start;
    
`;

export const BoxCheck = styled.View`
    
    flex-direction: row;
    justify-content: space-between;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    
    
`;

export const ProductName = styled.Text`
    font-size: 16;
    font-family: Lexend-Medium;
`;   

export const DetailsProduct = styled.Text`
    font-size: 13;
    font-family: Lexend-Regular;
    margin-top: 16;
    right: 130;
`;

export const BoxPrices = styled.View`
    height: 25%;
    
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1;
    border-bottom-color: #D3D3D3;
`;

export const Amount = styled.View`
    flex: 1;
    align-items: center;
`;

export const Additional = styled.View`
    flex-direction: row;
    margin-top: 10;
    
`;
export const ButtonReduce = styled.TouchableOpacity`
    left: 20;
`;

export const Title = styled.Text`
    font-size: 13;
    font-family: Lexend-Regular;
    
    
    
`;

export const Price = styled.Text`
    font-size: 13;
    font-family: Lexend-Regular;
    margin-top: 5;
    margin-bottom: 5;
    
    color: green;
`;

export const TotalPrice = styled.View`
    flex-direction: row;
    margin-bottom: 10;
    justify-content: space-between;
    width: 95%;
`;

export const UnitPrice = styled.View`
    flex-direction: row;
    margin-bottom: 10;
    justify-content: space-between;
    width: 95%;
`;

export const BoxComments = styled.View`
    height: 15%;
    
    background-color: #FFF;
    align-items: center;
    
    border-bottom-width: 1;
    border-bottom-color: #D3D3D3;
`;

export const Comments = styled.TextInput`
    font-size: 12;
    background-color: #D3D3D3;
    width: 400;
    height: 50;
    border-radius: 8;
`;

export const Elements = styled.Text`
    font-size: 13;
    font-family: Lexend-Regular;
`;

export const TitleAdditional = styled(Title)`
    margin-left: 2;
`;
export const ButtonAdd = styled.TouchableOpacity`
    right: 20
`;



