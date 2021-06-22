import React from "react";
import { render } from "@testing-library/react";
import ButtonSubmit from "../../ui/components/Buttons/ButtonSubmit";

describe("<ButtonSubmit />", () => {

  it("should render the button submit", () => {
    render(<ButtonSubmit />);
  });
});
