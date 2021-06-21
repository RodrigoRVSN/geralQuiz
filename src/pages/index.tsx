import { Container, Typography } from "@material-ui/core";
import PageTitle from "../ui/components/PageTitle/PageTitle";
import InputFieldContainer from "../ui/components/Input";
import QuestionWidgetPage from "../ui/components/QuestionWidgetPage";
import { FormElementsContainer } from "../ui/styles/pages/index.style";
import { useQuestion } from "../data/hooks/useQuestion.page";

export default function Home() {
  const { error, searchOk } = useQuestion();

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
            </FormElementsContainer>
          </Container>
        </>
      )}
    </>
  );
}
