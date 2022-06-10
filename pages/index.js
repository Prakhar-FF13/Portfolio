import styled from "styled-components";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/Navbar";

const Title = styled.h1`
  font-size: 50px;
`;

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Navbar />
      <Title>My page</Title>
    </MaxWidthWrapper>
  );
}
