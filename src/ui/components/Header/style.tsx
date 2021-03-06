import { experimentalStyled as styled } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  background-color: black;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.5);
  height: 12vh;
  border-radius: 0 0 1rem 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 10vh;
    }
  }
`;

export const HeaderLogo = styled("h2")`
  margin: auto;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.palette.primary.dark};
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 3rem;
  }
`;
