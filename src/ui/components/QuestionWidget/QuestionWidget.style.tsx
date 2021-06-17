import { experimentalStyled as styled } from "@material-ui/core/styles";

export const BoxQuestions = styled("div")`
  padding: ${({ theme }) => theme.spacing(2)};
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.palette.secondary.light},
    ${({ theme }) => theme.palette.secondary.dark}
  );
  overflow-y: scroll;
  height: 78vh;
`;

export const Description = styled("div")`
  display: flex;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing(1)} 0;
`;

export const BoxQuestionContainer = styled("div")`
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;
