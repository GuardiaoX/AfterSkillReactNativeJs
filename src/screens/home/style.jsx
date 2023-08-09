import { styled } from "styled-components/native";
import theme from "../../theme/theme";

export const HomeMain = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${theme.primary};
`;

export const SkillList = styled.ScrollView`
  height: fit-content;
  width: 100%;
`;

export const SKillModal = styled.Modal`
  height: 100%;
  width: 100%;
`;

export const ModalCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SkillModalList = styled.View`
  height: 90%;
  width: 90%;
  border-radius: 20px;
  background-color: ${theme.secondary};
`;

export const ModalScroll = styled.ScrollView`
  height: fit-content;
  width: 100%;
`;
