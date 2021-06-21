import React, { useEffect } from "react";
import { useQuestion } from "../../../data/hooks/useQuestion.page";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import ButtonSearch from "../Buttons/ButtonSearch";
import ButtonCancel from "../Buttons/ButtonCancel";
import ButtonResume from "../Buttons/ButtonResume";
import { ButtonsContainer } from "../../styles/pages/index.style";
import validationSchema from "../../../data/services/validationSchema";

const InputFieldContainer: React.FC = () => {
  const { searchQuestions, numberOfQuestions } = useQuestion();
  const { setNumberOfQuestions } = useQuestion();

  const formik = useFormik({
    initialValues: {
      numberOfQuestions: 0,
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      if (numberOfQuestions != 0) {
        searchQuestions(numberOfQuestions!);
      } else {
        formik.values.numberOfQuestions = 0;
      }
    },
  });

  useEffect(() => {
    setNumberOfQuestions(formik.values.numberOfQuestions);
  }, [formik.values.numberOfQuestions]);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
        type="number"
          fullWidth
          id="numberOfQuestions"
          name="numberOfQuestions"
          label="Number of questions"
          value={numberOfQuestions}
          onChange={formik.handleChange}
          error={
            formik.touched.numberOfQuestions &&
            Boolean(formik.errors.numberOfQuestions)
          }
          helperText={
            formik.touched.numberOfQuestions && formik.errors.numberOfQuestions
          }
        />
        <ButtonsContainer>
          <ButtonCancel />
          <ButtonSearch />
          <ButtonResume />
        </ButtonsContainer>
      </form>
    </>
  );
};

export default InputFieldContainer;
