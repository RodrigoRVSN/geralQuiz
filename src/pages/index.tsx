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


  return (
    <>
      {searchOk ? (
        <>
          <QuestionWidget questions={questions}/>
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
