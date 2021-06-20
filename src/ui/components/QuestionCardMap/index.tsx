import { useQuestion } from "../../../data/hooks/useQuestion.page";
import { Description, BoxQuestionContainer } from "./style";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const QuestionCardMap: React.FC = () => {
  const { score, selected, questions, allQuestions } = useQuestion();

  /* Permite adicionar opções com o uso de select */

  const createMarkup = (text) => {
    return { __html: text };
  };

  /* Guarda questão selecionada e verifica se é a certa, sendo uma string para as verificações de verdadeiro e false e uma string para guardar as respostas selecionadas */

  const handleAnswerChange = (e, selectedQuestion, index) => {
    selected[index] = e.target.value;
    if (selectedQuestion.correct_answer == e.target.value) {
      score[index] = true;
    } else {
      score[index] = false;
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        {questions.map((item, index) => {
          return (
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
                      onChange={(e) => handleAnswerChange(e, item, index)}
                    >
                      {allQuestions[index]?.map((answer) => (
                        <MenuItem key={answer} value={answer}>
                          <span
                            dangerouslySetInnerHTML={createMarkup(answer)}
                          ></span>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </BoxQuestionContainer>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default QuestionCardMap;
