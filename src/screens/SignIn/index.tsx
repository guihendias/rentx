import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import * as Yup from "yup";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um email válido")
          .required("Email obrigatório"),
        password: Yup.string().required("A senha é obrigatória")
      });

      await schema.validate({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      } else {
        Alert.alert("Erro na autenticação", "Verifique as credenciais");
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              onChangeText={setEmail}
              value={email}
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <PasswordInput
              onChangeText={setPassword}
              value={password}
              iconName="lock"
              placeholder="Senha"
            />
          </Form>

          <ButtonContainer>
            <Button
              title="Login"
              onPress={handleSignIn}
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;