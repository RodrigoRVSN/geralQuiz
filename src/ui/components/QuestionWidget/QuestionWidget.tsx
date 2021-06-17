import react from "react";
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

interface PageTitleProps {
  questions: QuestionShortInterface[];
}

const QuestionWidget: React.FC<PageTitleProps> = (props) => {
  return (
    <>
      <BoxQuestions>
        <Container maxWidth="sm">
          <Typography m="2rem" color="white" variant="h5">
            Answer the following questions! Good luck :D
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

                    {/* <FormControl fullWidth variant="outlined">
                      <InputLabel id="answer-select-label">
                        Select answer:
                      </InputLabel>
                      <Select
                        required
                        name="answer"
                        id="answer-select"
                        label="Select answer"
                        value={
                          relatedAnswer(quiz.question, selectedAnswers) || ""
                        }
                        labelId="answer-select-label"
                        onChange={(e) => handleAnswerChange(e, quiz.question)}
                      >
                        {props.questions.map((answer) => (
                          <MenuItem key={answer} value={answer}>
                            <span
                              dangerouslySetInnerHTML={createMarkup(answer)}
                            />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl> */}
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
