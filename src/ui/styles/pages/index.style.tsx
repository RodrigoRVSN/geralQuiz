import { experimentalStyled as styled } from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(5)};
  max-width: 40rem;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ButtonsContainer = styled("div")`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 20vw;
    gap: ${({ theme }) => theme.spacing(0)};
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 40vw;
  }
`;
