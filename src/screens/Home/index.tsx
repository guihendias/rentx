import React, { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "expo-status-bar";

import Logo from "../../assets/logo.svg";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
import Car from "../../components/Car";
import { useNavigation } from "@react-navigation/core";
import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import Loading from "../../components/Loading";

const Home: React.FC = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
