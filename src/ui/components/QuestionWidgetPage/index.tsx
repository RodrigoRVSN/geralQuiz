import react, { useEffect } from "react";
import { useQuestion } from "../../../data/hooks/useQuestion.page";
import { BoxQuestions } from "./style";
import { Container, Typography } from "@material-ui/core";
import ButtonSubmit from "../Buttons/ButtonSubmit";
import ResultsWidgetPage from "../ResultsWidgetPage";
import QuestionCardMap from "../QuestionCardMap";

const QuestionWidgetPage = () => {
  const { submitted, setSubmitted, questions, setAllQuestions } = useQuestion();

  /* Cria array com todas as respostas possíveis */

  useEffect(() => {
    let answerAux: any = [];
    questions.forEach(function (answers, index) {
      answerAux[index] = answers.incorrect_answers.concat(
        answers.correct_answer
      );
    });
    /* embaralha a string */
    for (let i = 0; i < questions.length; i++) {
      answerAux[i] = answerAux[i]?.sort(() => Math.random() - 0.5);
    }
    setAllQuestions(answerAux);
  }, [questions]);

  /* Renderização */

  return (
    <>
      {submitted ? (
        <>
          <ResultsWidgetPage />
        </>
      ) : (
        <>
          <BoxQuestions>
            <form
              onSubmit={() => {
                setSubmitted(!submitted);
              }}
            >
              <Container maxWidth="sm">
                <Typography m="2rem" color="black" variant="h5">
                  Answer the following questions! good luck ❤️
                </Typography>
                <QuestionCardMap />
              </Container>
              <ButtonSubmit />
            </form>
          </BoxQuestions>
        </>
      )}
    </>
  );
};

export default QuestionWidgetPage;
