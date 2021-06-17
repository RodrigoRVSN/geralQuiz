import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Container, Toolbar } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <>
      <HeaderAppBar position={"sticky"}>
        <Toolbar component={Container}>
          <HeaderLogo>GERAL QUIZ</HeaderLogo>
        </Toolbar>
      </HeaderAppBar>
    </>
  );
};

export default Header;
