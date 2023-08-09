import styled from "styled-components/native";
import theme from "../../theme/theme";
import { Entypo } from "@expo/vector-icons";

export const LoginMain = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${theme.primary};
`;

export const WellComeMsg = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: "Orienta_400Regular";
  color: ${theme.myWhite};
`;

export const InputLogin = styled.TextInput`
  width: 70%;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 15px;
  padding-left: 10px;
  border: 0;
  font-family: "Orienta_400Regular";
  color: ${theme.primary};
  background-color: ${theme.myWhite};
`;

export const PasswordContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
  border: 0;
  color: ${theme.primary};
  background-color: ${theme.myWhite};
`;

export const PasswordInput = styled.TextInput`
  width: 80%;
  height: 80%;
  border: 0;
  margin-bottom: 0px;
  border-radius: 0px;
  padding-left: 00px;
  font-family: "Orienta_400Regular";
  color: ${theme.primary};
`;
export const LoginDirect = styled.Text`
  width: 30%;
  align-self: flex-start;
  font-family: "Orienta_400Regular";
  margin-left: 20%;
  color: ${theme.highLight};
  margin-bottom: 20px;
`;
export const ButtonLogin = styled.TouchableOpacity`
  width: 40%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${theme.highLight};
`;
export const TextLoginButton = styled.Text`
  font-size: 18px;
  font-family: "Orienta_400Regular";
  color: ${theme.myWhite};
`;

