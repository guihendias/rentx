import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import {
  Container,
  IconContainer,
  InputText,
  VisibilityButton
} from "./styles";
import { useState } from "react";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

const PasswordInput: React.FC<InputProps> = ({ iconName, ...rest }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const theme = useTheme();

  function handlePasswordVisibility() {
    setPasswordVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText {...rest} secureTextEntry={!passwordVisible} />

      <VisibilityButton onPress={handlePasswordVisibility}>
        <IconContainer>
          <Feather
            name={passwordVisible ? "eye-off" : "eye"}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </VisibilityButton>
    </Container>
  );
};

export default PasswordInput;
