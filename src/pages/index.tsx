import Image from "next/image";
import {
  Button,
  Container,
  TextField,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import PageTitle from "ui/components/PageTitle/PageTitle";
import QuestionWidget from "ui/components/QuestionWidget/QuestionWidget";
import {
  FormElementsContainer,
  ButtonsContainer,
} from "@styles/pages/index.style";
import useQuestion from "data/hooks/pages/useQuestion.page";
import { useEffect, useState } from "react";
import { ApiService } from "data/services/ApiService";

export default function Home() {
  const {
    numberOfQuestions,
    setNumberOfQuestions,
    numberValid,
    searchQuestions,
    error,
    loading,
    questions,
    setQuestions,
    searchOk,
  } = useQuestion();

  const [answers, setAnswers] = useState([]);
  let answerAux = [];

  useEffect(() => {
    questions.forEach(function (answers, index) {
      answerAux.push(answers.incorrect_answers);
    });
    questions.forEach(function (answers, index) {
      answerAux[index].push(answers.correct_answer);
    });

    answerAux.sort(function (answerAux, b) {
      return Math.floor(Math.random() * 10);
    });

    setAnswers(answerAux);
    setQuestions(answerAux);
  }, []);

  return (
    <>
      <h2>{answers}</h2>
      {searchOk ? (
        <>
          <QuestionWidget questions={questions} answers={answers} />
        </>
      ) : (
        <>
          <PageTitle
            title={"Welcome to the geral quiz!"}
            subtitle={"Select how much questions you want!"}
          />
          <Container>
            <FormElementsContainer>
              <TextField
                id="standard-number"
                label="Number of questions"
                type="number"
                InputLabelProps={{ shrink: true }}
                value={numberOfQuestions}
                onChange={(ev) => setNumberOfQuestions(ev.target.value)}
              />

              {error && <Typography color={"error"}>{error}</Typography>}

              <ButtonsContainer>
                <Button
                  variant={"contained"}
                  color={"primary"}
                  sx={{ marginTop: 5 }}
                  size={"medium"}
                  onClick={() => setNumberOfQuestions("0")}
                  disabled={loading}
                >
                  CANCEL
                </Button>

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ marginTop: 5 }}
                  size={"large"}
                  onClick={() => searchQuestions(numberOfQuestions)}
                  disabled={!numberValid || loading}
                >
                  {loading ? <CircularProgress size={20} /> : "START"}
                </Button>
              </ButtonsContainer>
            </FormElementsContainer>
          </Container>
        </>
      )}
    </>
  );
}
