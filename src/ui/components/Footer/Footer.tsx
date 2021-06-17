import React from "react";
import { FooterStyled } from "./Footer.style";
import { Typography } from "@material-ui/core";

const Footer: React.FC = () => {
  return (
    <>
      <FooterStyled>
        <Typography variant={"body2"} sx={{ marginTop: 2 }}>
          <a href="https://github.com/RodrigoRVSN" target="_blank">Desenvolvido por Rodrigo</a>
        </Typography>
      </FooterStyled>
    </>
  );
};

export default Footer;
