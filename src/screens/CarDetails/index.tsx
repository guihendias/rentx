import React from "react";
import Accessory from "../../components/Accessory";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer
} from "./styles";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import { CarDTO } from "../../dtos/CarDTO";

interface Params {
  car: CarDTO;
}

const CarDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleConfirm() {
    navigation.navigate("Scheduling");
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <ImageSlider imagesUrl={car.photos} />

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Acessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={SpeedSvg}
            />
          ))}
        </Acessories>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
};

export default CarDetails;
