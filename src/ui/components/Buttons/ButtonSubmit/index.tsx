import React from "react";
import { Button } from "@material-ui/core";

const ButtonSubmit: React.FC = () => {
  return (
    <>
      <Button
        variant={"contained"}
        color={"primary"}
        sx={{ marginTop: 5 }}
        size={"large"}
        type="submit"
        onClick={() => {
          console.log("a");
        }}
      >
        SUBMIT
      </Button>
    </>
  );
};

export default ButtonSubmit;
