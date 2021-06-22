import React from "react";
import { Button } from "@material-ui/core";
import { useQuestion } from "../../../../data/hooks/useQuestion.page";

const ButtonReturn: React.FC = () => {
  const { setLoading, submitted, setSubmitted, searchOk, setSearchOk } =
    useQuestion();

  function reset() {
    setSearchOk(!searchOk);
    setSubmitted(!submitted);
    setLoading(false);
  }

  return (
    <>
      <Button
        variant={"contained"}
        color={"primary"}
        sx={{ marginBottom: 5 }}
        size={"large"}
        onClick={() => reset()}
      >
        RETURN
      </Button>
    </>
  );
};

export default ButtonReturn;
