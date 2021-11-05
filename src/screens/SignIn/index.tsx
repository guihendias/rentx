import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTheme } from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  ButtonContainer
} from "./styles";

const SignIn: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Header>
        <Title>Estamos{"\n"}quase lá</Title>
        <SubTitle>
          Faça seu login para começar{"\n"}uma experiência incrível.
        </SubTitle>
      </Header>

      <Form>
        <Input
          iconName="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <PasswordInput iconName="lock" placeholder="Senha" />
      </Form>

      <ButtonContainer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />

        <Button
          title="Criar conta gratuita"
          color={theme.colors.background_secondary}
          onPress={() => {}}
          light
          enabled={false}
          loading={false}
        />
      </ButtonContainer>
    </Container>
  );
};

export default SignIn;
