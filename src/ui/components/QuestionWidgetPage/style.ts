import { experimentalStyled as styled } from "@material-ui/core/styles";

export const BoxQuestions = styled("div")`
  padding: ${({ theme }) => theme.spacing(2)};
  overflow-y: scroll;
  height: 75vh;
  text-align: center;
`;