import {
  Button,
  Container,
  TextField,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import PageTitle from "ui/components/PageTitle/PageTitle";
import QuestionWidget from "ui/components/QuestionWidget";
import {
  FormElementsContainer,
  ButtonsContainer,
} from "@styles/pages/index.style";
import { useQuestion } from "data/hooks/pages/useQuestion.page";

export default function Home() {
  const {
    numberOfQuestions,
    setNumberOfQuestions,
    numberValid,
    searchQuestions,
    searchResume,
    error,
    loading,
    questions,
    setQuestions,
    searchOk,
    hasLocalStorage,
  } = useQuestion();

  return (
    <>
      {searchOk ? (
        <>
          <QuestionWidget />
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
                onChange={(ev) => setNumberOfQuestions(Number(ev.target.value))}
              />

              {error && <Typography color={"error"}>{error}</Typography>}

              <ButtonsContainer>
                <Button
                  variant={"contained"}
                  color={"primary"}
                  sx={{ marginTop: 5 }}
                  size={"medium"}
                  onClick={() => setNumberOfQuestions(0)}
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
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ marginTop: 5 }}
                  size={"large"}
                  onClick={() => searchResume()}
                  disabled={!hasLocalStorage}
                >
                  RESUME
                </Button>
              </ButtonsContainer>
            </FormElementsContainer>
          </Container>
        </>
      )}
    </>
  );
}
