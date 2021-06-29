import styled from 'styled-components';

export const Container = styled.View`
    
    width: 100%;
    height: 90;
    
    align-items: center;
    justify-content: center;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1;
    border-bottom-color: #D3D3D3; 
    
`;

export const Box = styled.View`
    
    flex-direction: row;
`;

export const BoxTitle = styled.View`
    
    justify-content: center;
    align-items: flex-start;
    margin-left: 10;
`;

export const BoxImage = styled.View`
    width: 60;
    height: 60;
    border-radius: 8;
    align-items: center;
    justify-content: center;
    background-color: green;
    margin-left: 10;
`;
export const Title = styled.Text`
    font-size: 16;
    font-family: Lexend-Medium;
`;

export const Subtitle = styled.Text`
    font-size: 13;
    font-family: Lexend-Regular;
    margin-bottom: 20;
`;

export const Price = styled.Text`
    font-size: 12;
    margin-top: 40;
    right: 10;
    color: green;
`;
//export const Container = styled.View``;
//export const Container = styled.View``;

