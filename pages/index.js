import styled from "styled-components";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Title = styled.h1`
  font-size: 50px;
`;

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Title>My page</Title>
    </MaxWidthWrapper>
  );
}
