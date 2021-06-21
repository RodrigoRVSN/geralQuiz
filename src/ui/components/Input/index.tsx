import React from "react";
import { TextField } from "@material-ui/core";
import { useQuestion } from "../../../data/hooks/useQuestion.page";

const InputFieldContainer: React.FC = () => {
  const { setNumberOfQuestions, numberOfQuestions } = useQuestion();

  return (
    <>
      <TextField
        id="standard-number"
        label="Number of questions"
        type="number"
        InputLabelProps={{ shrink: true }}
        value={numberOfQuestions}
        onChange={(ev) => setNumberOfQuestions(parseInt(ev.target.value))}
      />
    </>
  );
};

export default InputFieldContainer;
