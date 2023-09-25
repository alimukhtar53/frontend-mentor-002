import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Badge() {
  const myLinkedInProfileURI =
    "https://www.linkedin.com/in/ali-mukhtar-3082518b/";
  return (
    <Pill>
      <Link href={myLinkedInProfileURI} target="_blank">
        <p>Made by Ali Mukhtar</p>
      </Link>
    </Pill>
  );
}

const Pill = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 6px;
  margin: 10px -10px 0 0;
  transition: all 0.3s ease;
  mix-blend-mode: overlay;
  backdrop-filter: blur(33px);
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    transform: scale(1.1);
  }

  p {
    padding: 0.25rem 0.5rem;
  }
`;

export default Badge;
