import { Description, BoxQuestionContainer } from "./style";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useQuestion } from "data/hooks/useQuestion.page";

const ResultCardMap: React.FC = () => {
  const { score, selected, questions } = useQuestion();

  return (
    <>
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
                <Typography variant="h6">{selected[index] + " "}</Typography>
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
    </>
  );
};

export default ResultCardMap;
