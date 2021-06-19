import react, { useState, useEffect } from "react";
import {
  BoxQuestions,
  Description,
  BoxQuestionContainer,
} from "./QuestionWidget.style";
import { QuestionShortInterface } from "data/@types/QuestInterface";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import PageTitle from "../PageTitle/PageTitle";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useQuestion from "data/hooks/pages/useQuestion.page";

interface PageTitleProps {
  questions: QuestionShortInterface[];
}

const QuestionWidget: React.FC<PageTitleProps> = (props) => {
  const [answers, setAnswers] = useState([]);
  let answerAux = [];

  useEffect(() => {
    props.questions.forEach(function (answers, index) {
      answerAux.push(answers.incorrect_answers);
    });
    props.questions.forEach(function (answers, index) {
      answerAux[index].push(answers.correct_answer);
    });

    answerAux.sort(function (answerAux, b) {
      return Math.floor(Math.random() * 10);
    });

    setAnswers(answerAux);
  }, []);

  const createMarkup = (text) => {
    return { __html: text };
  };

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

                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="answer-select-label">
                        Select answer:
                      </InputLabel>
                      <Select
                        required
                        name="answer"
                        id="answer-select"
                        label="Select answer"
                        labelId="answer-select-label"
                      >
                        {props.questions[index].incorrect_answers.map(
                          (answer, index) => (
                            <MenuItem key={answer} value={answer}>
                              <span
                                dangerouslySetInnerHTML={createMarkup(answer)}
                              ></span>
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </BoxQuestionContainer>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </BoxQuestions>
    </>
  );
};

export default QuestionWidget;
