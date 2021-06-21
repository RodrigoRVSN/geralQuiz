import { Container, Typography } from "@material-ui/core";
import PageTitle from "../ui/components/PageTitle/PageTitle";
import ButtonCancel from "../ui/components/Buttons/ButtonCancel";
import ButtonSearch from "../ui/components/Buttons/ButtonSearch";
import InputFieldContainer from "../ui/components/Input";
import QuestionWidgetPage from "../ui/components/QuestionWidgetPage";
import {
  FormElementsContainer,
  ButtonsContainer,
} from "../ui/styles/pages/index.style";
import { useQuestion } from "../data/hooks/useQuestion.page";
import { useEffect } from "react";
import ButtonResume from "../ui/components/Buttons/ButtonResume";

export default function Home() {
  const { error, searchOk, setHasLocalStorage } = useQuestion();

  useEffect(() => {
    localStorage.getItem("correctAnswers") === "-1"
      ? setHasLocalStorage(false)
      : setHasLocalStorage(true);
  });

  return (
    <>
      {searchOk ? (
        <>
          <QuestionWidgetPage />
        </>
      ) : (
        <>
          <PageTitle
            title={"Welcome to the geral quiz!"}
            subtitle={"Select how much questions you want!"}
          />

          <Container>
            <FormElementsContainer>
              <InputFieldContainer />
              {error && <Typography color={"error"}>{error}</Typography>}
              <ButtonsContainer>
                <ButtonCancel />
                <ButtonSearch />
                <ButtonResume />
              </ButtonsContainer>
            </FormElementsContainer>
          </Container>
        </>
      )}
    </>
  );
}
