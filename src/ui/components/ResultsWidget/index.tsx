import {
  BoxQuestions,
  Description,
  BoxQuestionContainer,
} from "./style";
import { Container, Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useQuestion } from "data/hooks/pages/useQuestion.page";

const ResultsWidget = () => {
  const {
    loading,
    setLoading,
    score,
    setScore,
    selected,
    setSelected,
    submitted,
    setSubmitted,
    questions,
    correctAnswers,
    setCorrectAnswers,
    searchOk,
    setSearchOk,
  } = useQuestion();

  function reset() {
    setLoading(!loading);
    setSearchOk(!searchOk);
    setSubmitted(!submitted);
    setLoading(false);
  }

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
          <Grid container spacing={3}>
            {questions.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Paper variant="outlined" elevation={3}>
                  <BoxQuestionContainer>
                    <Description>
                      <Typography color="green" variant="h5">
                        {item.category}
                      </Typography>
                      <Typography color="blue" variant="h6">
                        {item.difficulty}
                      </Typography>
                    </Description>
                    <Typography variant="h5">{item.question}</Typography>
                    <hr />
                    <Typography color="blue" variant="h6">
                      Your answer {score[index] === true ? " ✔️" : " ❌"}
                    </Typography>
                    <Typography variant="h6">
                      {selected[index] + " "}
                    </Typography>
                    <hr />
                    <Typography color="blue" variant="h6">
                      Correct answer ✔️
                    </Typography>
                    <Typography variant="h6">
                      {item.correct_answer + " "}
                    </Typography>
                  </BoxQuestionContainer>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Button
          variant={"contained"}
          color={"primary"}
          sx={{ marginTop: 5 }}
          size={"large"}
          onClick={() => reset()}
        >
          RETURN
        </Button>
      </BoxQuestions>
    </>
  );
};

export default ResultsWidget;
