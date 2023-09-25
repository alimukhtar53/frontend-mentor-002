"use client";
import styled from "styled-components";
import sedans from "@/app/assets/images/icon-sedans.svg";
import suvs from "@/app/assets/images/icon-suvs.svg";
import luxury from "@/app/assets/images/icon-luxury.svg";
import CardComponent from "@/app/components/CardComponent";
import Badge from "./components/Badge";

const Home = () => {
  return (
    <Div>
      <Container>
        <Badge />
        <CardWrapper className="bg-bright-orange">
          <CardComponent type={"bright-orange"} icon={sedans}>
            <H1>Sedans</H1>
            <Paragraph>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </Paragraph>
          </CardComponent>
          <CardComponent type={"dark-cyan"} icon={suvs}>
            <H1>SUVs</H1>
            <Paragraph>
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </Paragraph>
          </CardComponent>
          <CardComponent type={"very-dark-cyan"} icon={luxury}>
            <H1>Luxury</H1>
            <Paragraph>
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </Paragraph>
          </CardComponent>
        </CardWrapper>
        <Badge />
      </Container>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 787px) {
    padding: 2rem;
  }
`;

const Container = styled.div`
  max-width: 920px;
  height: max-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex: 1 1 33%;
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: 787px) {
    flex-direction: column;
    overflow: auto;
  }
`;

const H1 = styled.h1`
  margin-top: 2.34rem;
  margin-bottom: 1.67rem;
  text-transform: uppercase;
  font-size: 40px;
`;

const Paragraph = styled.p`
  margin-bottom: 83px;
`;

export default Home;
