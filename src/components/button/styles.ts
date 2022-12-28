import styled from "styled-components/native";
import { TouchableOpacity, Text } from 'react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`

min-height: 56px;
width: 70%;

background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.button_blue};
justify-content: center;
align-items: center;

border-radius:30.5px;

margin:20px;
margin-top: 3px;




`;

export const Title = styled.Text<Props>`
font-size: 16px;
color:  ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.button_blue :  theme.COLORS.WHITE};

font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};



`;