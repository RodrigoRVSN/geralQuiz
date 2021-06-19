import react, { useState, useEffect } from "react";
import {
  BoxQuestions,
  Description,
  BoxQuestionContainer,
} from "./ResultsWidget.style";
import { QuestionShortInterface } from "data/@types/QuestInterface";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import PageTitle from "../PageTitle/PageTitle";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useQuestion from "data/hooks/pages/useQuestion.page";

interface PageTitleProps {
  questions: QuestionShortInterface[];
}

const ResultsWidget: React.FC<PageTitleProps> = (props) => {
  const { score, setScore, selected, setSelected, submitted, setSubmitted } =
    useQuestion();
  console.log(selected);
  return (
    <>
      <BoxQuestions>
        <Container maxWidth="sm">
          <Typography m="2rem" color="black" variant="h5">
            Answer the following questions! good luck ❤️
          </Typography>
          <Grid container spacing={3}>
            {props.questions.map((item, index) => (
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
                    {selected.map((item, index) => {
                      console.log(item);
                    })}
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
          type="submit"
        >
          RETURN
        </Button>
      </BoxQuestions>
    </>
  );
};

export default ResultsWidget;
