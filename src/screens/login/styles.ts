import styled from "styled-components/native";


export const Container = styled.View`
flex: 1;

justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.COLORS.background};


`;

export const Header = styled.View`
margin-top: 60px;

align-items: center;

`;

export const Content = styled.View`

flex: 1;
width: 100%;
justify-content: center;
align-items: center;
margin-bottom: 160px;


`;