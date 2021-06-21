import * as Yup from "yup";

export default Yup.object().shape({
  numberOfQuestions: Yup.number()
    .min(1, "Should be >= 1")
    .required("This field is required")
    .integer("The number should be integer")
    .positive("The number should be positive"),
});
