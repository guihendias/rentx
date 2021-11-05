import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Container, IconContainer, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

const Input: React.FC<InputProps> = ({ iconName, ...rest }) => {
  const theme = useTheme();

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText {...rest} />
    </Container>
  );
};

export default Input;
