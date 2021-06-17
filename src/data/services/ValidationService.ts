export const ValidationService = {
  numberOfQuestions(numberOfQuestions = ""): boolean {
    if (Number(numberOfQuestions) > 0) {
      return true;
    } else {
      return false;
    }
  },
};
