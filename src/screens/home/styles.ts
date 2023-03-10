import styled from "styled-components/native";


export const Container = styled.View`
flex: 1;

justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.COLORS.background};


`;

export const Title = styled.Text`
font-weight: bold;
font-size: 32px;

`;

export const Paragraph = styled.Text`
font-weight: normal;
font-size: 8px;

`;