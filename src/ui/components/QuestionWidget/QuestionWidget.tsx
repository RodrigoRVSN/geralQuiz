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
  Button,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useQuestion from "data/hooks/pages/useQuestion.page";
import ResultsWidget from "../ResultsWidget/ResultsWidget";

interface PageTitleProps {
  questions: QuestionShortInterface[];
}

const QuestionWidget: React.FC<PageTitleProps> = (props) => {
  const [answers, setAnswers] = useState([]);
  const { score, setScore, selected, setSelected, submitted, setSubmitted } =
    useQuestion();

  let answerAux = [];

  /* Cria array com todas as respostas possíveis */

  useEffect(() => {
    props.questions.forEach(function (answers, index) {
      answerAux.push(answers.incorrect_answers);
    });
    props.questions.forEach(function (answers, index) {
      answerAux[index].push(answers.correct_answer);
    });
    setAnswers(answerAux);
  }, []);

  /* Permite adicionar opções com o uso de select */

  const createMarkup = (text) => {
    return { __html: text };
  };

  /* Guarda questão selecionada e verifica se é a certa, sendo uma string para as verificações de verdadeiro e false e uma string para guardar as respostas selecionadas */

  const handleAnswerChange = (e, selectedQuestion, index) => {
    selected[index] = e.target.value;
    if (selectedQuestion.correct_answer == e.target.value) {
      score[index] = "true";
    } else {
      score[index] = "false";
    }
  };

  /* Renderização */

  return (
    <>
      {submitted ? (
        <>
          <ResultsWidget questions={props.questions} />
        </>
      ) : (
        <>
          <BoxQuestions>
            <form
              onSubmit={() => {
                setSubmitted(true);
              }}
            >
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
                              onChange={(e) =>
                                handleAnswerChange(e, item, index)
                              }
                            >
                              {props.questions[index].incorrect_answers.map(
                                (answer) => (
                                  <MenuItem key={answer} value={answer}>
                                    <span
                                      dangerouslySetInnerHTML={createMarkup(
                                        answer
                                      )}
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
              <Button
                variant={"contained"}
                color={"primary"}
                sx={{ marginTop: 5 }}
                size={"large"}
                type="submit"
              >
                SUBMIT
              </Button>
            </form>
          </BoxQuestions>
        </>
      )}
    </>
  );
};

export default QuestionWidget;
