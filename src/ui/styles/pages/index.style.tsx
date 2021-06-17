import { experimentalStyled as styled } from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 40rem;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ButtonsContainer = styled("div")`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;
