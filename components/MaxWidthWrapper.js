import styled from "styled-components";

export default (props, children) => {
  return <MaxWidthWrapper>{children}</MaxWidthWrapper>;
};

const MaxWidthWrapper = styled.div`
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;
