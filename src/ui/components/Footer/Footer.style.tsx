import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

export const FooterStyled = styled("footer")`
  background-color: black;
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(2)} 0;
  margin-top: auto;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
