export const ValidationService = {
  numberOfQuestions(numberOfQuestions: Number): boolean {
    if (numberOfQuestions > 0) {
      return true;
    } else {
      return false;
    }
  },
};
