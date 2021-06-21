import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { useQuestion } from "../../../../data/hooks/useQuestion.page";

const ButtonCancel: React.FC = () => {
  const { loading } = useQuestion();

  return (
    <>
      <Button
        variant={"contained"}
        color={"secondary"}
        sx={{ marginTop: 3 }}
        size={"large"}
        type="submit"
      >
        {loading ? <CircularProgress size={20} /> : "START"}
      </Button>
    </>
  );
};

export default ButtonCancel;
