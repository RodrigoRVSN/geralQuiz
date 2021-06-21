export const ValidationService = {
  numberOfQuestions(numberOfQuestions: Number | undefined): boolean {
    return (numberOfQuestions!) > 0 ? true : false;
  },
};
