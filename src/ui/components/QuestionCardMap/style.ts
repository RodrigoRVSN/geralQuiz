import { experimentalStyled as styled } from "@material-ui/core/styles";

export const Description = styled("div")`
  display: flex;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing(1)} 0;
`;

export const BoxQuestionContainer = styled("div")`
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.7);
  text-align: left;
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
`;
