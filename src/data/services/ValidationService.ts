export const ValidationService = {
  numberOfQuestions(numberOfQuestions: Number): boolean {
    return numberOfQuestions > 0 ? true : false;
  },
};
