import styled from "styled-components";
import { default as Pattern } from "./Pattern";

const Container = styled.div`
  margin-top: 96px;
  display: flex;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const PatternContainer = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
`;

const Text1 = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 120.5%;
  letter-spacing: -0.03em;

  background: linear-gradient(90deg, #7443ff 0%, rgba(255, 135, 243, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Text2 = styled.div`
  margin-top: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120.5%;
  letter-spacing: -0.03em;
  background: linear-gradient(
    90deg,
    #7443ff 0%,
    rgba(255, 135, 243, 0.842298) 67.97%,
    rgba(255, 255, 255, 0.7) 100%
  );
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

const Text3 = styled.div`
  margin-top: 16px;
  max-width: 70%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 120.5%;
  letter-spacing: -0.03em;
  color: #cacaca;
`;

export default () => {
  return (
    <Container>
      <TextContainer>
        <Text1>Hi, I am Prakhar</Text1>
        <Text2>
          Web developer with Specialization in Machine and Deep Learning.
        </Text2>
        <Text3>
          I build applications using React JS and Node JS. I specialize in
          working with Machine Learning and Deep Learning to solve business
          problems.
        </Text3>
      </TextContainer>
      <PatternContainer>
        <Pattern />
      </PatternContainer>
    </Container>
  );
};
