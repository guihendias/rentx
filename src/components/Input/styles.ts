import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  height: 56px;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 2px;
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  font-size: ${RFValue(15)}px;

  padding: 0 23px;
`;
