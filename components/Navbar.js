import styled from "styled-components";
import Logo from "./Logo";
import Link from "next/link";

export default () => {
  return (
    <Navbar>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <FillContainer />
      <LinkContainer>
        <Link href="/blogs">
          <A>Blogs</A>
        </Link>
        <Link href="/resume">
          <A>Resume</A>
        </Link>
      </LinkContainer>
    </Navbar>
  );
};

const Navbar = styled.div`
  margin-top: 8px;
  display: flex;
`;

const FillContainer = styled.div`
  flex: 1;
`;

const A = styled.a`
  margin-right: 32px;
  color: rgba(255, 135, 243, 0.842298);
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  font-family: "Montserrat";
  border-radius: 3px;
  padding: 4px;

  &:hover {
    background: rgba(255, 135, 243, 1);
    color: white;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;
