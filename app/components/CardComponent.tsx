import React from "react";
import Image from "next/image";
import styled from "styled-components";

interface CardProps {
  icon: string;
  type: string;
  children: React.ReactNode;
}

function CardComponent({ icon, type, children }: CardProps) {
  return (
    <Card type={type}>
      <Image src={icon} alt={"icon"} /> {children}
      <Button type={type}>Learn More</Button>
    </Card>
  );
}

const Card = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  padding: 48px;
  background-color: ${(props) => `var(--${props.type})`};
`;

const Button = styled.button<
  React.HTMLProps<HTMLButtonElement> & { type: string }
>`
  border-radius: 25px;
  background-color: var(--very-light-gray);
  width: 146px;
  height: 48px;
  outline: unset;
  border: 1px solid var(--very-light-gray);
  cursor: pointer;
  color: ${(props) => `var(--${props.type})`};
  transition: all 0.3s ease;

  &:hover {
    color: var(--very-light-gray);
    background: unset;
  }
`;

export default CardComponent;
