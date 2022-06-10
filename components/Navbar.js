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
    </Navbar>
  );
};

const Navbar = styled.div`
  margin-top: 8px;
`;
