import { styled } from "styled-components/native";
import theme from "../../theme/theme";

export const SkillBoxContainer = styled.Pressable`
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top: 10px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  width: 95%;
  height: 80px;
  border-radius: 20px;
  background-color: ${theme.secondary};
`;

export const SkillImg = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SkillTopBox = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 70px;
`;

export const SkilBoxTitle = styled.Text`
  font-family: "Orienta_400Regular";
  font-size: 20px;
  width: 65%;
  padding-left: 10px;
  color: ${theme.myWhite};
`;

export const LevelCounterContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  height: 30px;
  width: 100px;
`;

export const SkillBoxDesc = styled.Text`
  font-size: 15px;
  padding-left: 10px;
  margin-top: 0px;
  font-family: "Orienta_400Regular";
  color: ${theme.myWhite};
`;

export const SkillBoxFullDesc = styled.Text`
  font-size: 15px;
  padding-left: 10px;
  margin-top: 5px;
  height: 100px;
  font-family: "Orienta_400Regular";
  color: ${theme.myWhite};
`;

export const Level = styled.Text`
  font-size: 20px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: "Orienta_400Regular";
  color: ${theme.myWhite};
`