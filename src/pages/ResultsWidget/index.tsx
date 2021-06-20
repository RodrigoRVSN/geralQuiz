import { BoxQuestions } from "./style";
import { Container, Typography } from "@material-ui/core";
import { useQuestion } from "data/hooks/useQuestion.page";
import ButtonReturn from "ui/components/Buttons/ButtonReturn";
import ResultCardMap from "ui/components/ResultCardMap";

const ResultsWidget = () => {
  const { score, correctAnswers, setCorrectAnswers } = useQuestion();

  setCorrectAnswers(score.filter((obj) => obj === true).length);

  return (
    <>
      <BoxQuestions>
        <Container maxWidth="sm">
          <Typography m="2rem" color="black" variant="h4">
            RESULTS
          </Typography>
          <Typography m="2rem" color="black" variant="h4">
            {correctAnswers + " of"}
            {" " + score.length + " ✔️"}
          </Typography>

          <ResultCardMap />
        </Container>
        <ButtonReturn />
      </BoxQuestions>
    </>
  );
};

export default ResultsWidget;
