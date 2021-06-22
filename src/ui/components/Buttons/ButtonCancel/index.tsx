import React from "react";
import { Button } from "@material-ui/core";
import { useQuestion } from "../../../../data/hooks/useQuestion.page";

const ButtonCancel: React.FC = () => {

  const { setNumberOfQuestions, loading } = useQuestion();

  return (
    <>
      <Button
      data-testid="Button"
        variant={"contained"}
        color={"primary"}
        sx={{ marginTop: 3 }}
        size={"medium"}
        onClick={() => setNumberOfQuestions(0)}
        disabled={loading}
      >
        CANCEL
      </Button>
    </>
  );
};

export default ButtonCancel;
