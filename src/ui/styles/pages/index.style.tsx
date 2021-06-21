import { experimentalStyled as styled } from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 40rem;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(0)};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: 10vh;
  }
`;

export const ButtonsContainer = styled("div")`
  margin: auto;
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    width: 20vw;
    gap: ${({ theme }) => theme.spacing(0)};
    margin-top: 5vh;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: 10vh;
    width: 40vw;
  }
`;
