import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useQuestion } from "../../../../data/hooks/useQuestion.page";

const ButtonResume: React.FC = () => {
  const { searchResume, hasLocalStorage, setHasLocalStorage } = useQuestion();

  useEffect(() => {
    localStorage.getItem("questionApi") === "[]"
      ? setHasLocalStorage(false)
      : setHasLocalStorage(true);
  });

  return (
    <>
      <Button
        variant={"contained"}
        color={"secondary"}
        sx={{ marginTop: 3 }}
        size={"large"}
        onClick={() => searchResume()}
        disabled={!hasLocalStorage}
      >
        RESUME
      </Button>
    </>
  );
};

export default ButtonResume;
