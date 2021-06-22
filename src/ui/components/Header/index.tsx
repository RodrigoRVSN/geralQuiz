import React from "react";
import { HeaderAppBar, HeaderLogo } from "./style";
import { Container, Toolbar } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <>
      <HeaderAppBar position={"sticky"}>
        <Toolbar component={Container}>
          <HeaderLogo><a data-testid="homePage" href="/">GERAL QUIZ</a></HeaderLogo>
        </Toolbar>
      </HeaderAppBar>
    </>
  );
};

export default Header;
