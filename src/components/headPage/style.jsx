import { styled } from "styled-components/native";
import theme from "../../theme/theme";


export const Header = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 30%;
    place-items: center;
    background-color: ${theme.primary};
`

export const H1 = styled.Text`
    font-family: 'MetalMania_400Regular';
    font-size: 70px;
    margin: 0;
    margin-bottom: 2%;
    color: ${theme.myWhite};
`